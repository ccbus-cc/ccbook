#!/usr/bin/env bash
#
# release.sh - Merge dev into main, tag with incremental version, push, and switch back.
#
# Usage:
#   bin/release                        # Auto-increment patch version, commit any staged/unstaged changes with a default message
#   bin/release -m "Add new feature"   # Commit any uncommitted changes with this message, then release
#   bin/release -t v2.0.0              # Use a specific tag
#   bin/release -m "msg" -t v1.2.3     # Commit with msg and use specific tag
#   bin/release -n                      # Dry run - show what would happen
#   bin/release -h                      # Show help
#
# Workflow:
#   1. Auto-commit any uncommitted tracked changes (if -m given) using provided/default message
#   2. Push dev branch to remote
#   3. Merge dev into main
#   4. Create an incremental tag on main (or use the one supplied via -t)
#   5. Push main branch and tag to remote
#   6. Switch back to dev, merge main into dev to keep in sync, push dev
#
# After this script finishes, the GitHub Actions workflow .github/workflows/deploy.yml
# picks up the push to main and deploys to GitHub Pages automatically.

set -euo pipefail

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
CYAN='\033[0;36m'
NC='\033[0;32m' # No Color (using green to match existing palette)

info()  { echo -e "${GREEN}[INFO]${NC} $*"; }
warn()  { echo -e "${YELLOW}[WARN]${NC} $*"; }
error() { echo -e "${RED}[ERROR]${NC} $*" >&2; exit 1; }

# --- Default values ---
COMMIT_MSG=""
NEW_TAG=""
DRY_RUN=false
INCLUDE_UNTRACKED=false

# --- Usage ---
usage() {
  cat <<EOF
Usage: bin/release [options]

Commit any pending changes (if -m given), merge dev into main, tag, and push to trigger PROD deploy.

Options:
  -m "msg"       Commit message for any uncommitted changes (also accepts --message)
  -t v1.2.3      Use this specific tag instead of auto-incrementing (also accepts --tag)
  -u             Also include untracked files (e.g. docs/.vitepress/dist/, .claude/) in the auto-commit
                 (also accepts --include-untracked)
  -n             Dry run - show what would happen without making any changes
  -h             Show this help

Examples:
  bin/release -m "Add vanity address tutorial"
  bin/release -m "Fix typo" -t v1.0.4
  bin/release -n -m "Preview release"

After release, GitHub Actions automatically deploys the new main to production.
EOF
}

# --- Parse arguments ---
while [[ $# -gt 0 ]]; do
  case "$1" in
    -m|--message)        COMMIT_MSG="$2"; shift 2 ;;
    -t|--tag)            NEW_TAG="$2"; shift 2 ;;
    -u|--include-untracked) INCLUDE_UNTRACKED=true; shift ;;
    -n|--dry-run)        DRY_RUN=true; shift ;;
    -h|--help)           usage; exit 0 ;;
    -*)                  error "Unknown option: $1 (use -h for help)" ;;
    *)
      # Backwards compatibility: a bare positional arg is treated as a tag
      if [[ -z "$NEW_TAG" ]]; then
        NEW_TAG="$1"
        shift
      else
        error "Unexpected extra argument: $1 (use -h for help)"
      fi
      ;;
  esac
done

# --- Pre-flight checks ---

git rev-parse --is-inside-work-tree > /dev/null 2>&1 || error "Not a git repository"

CURRENT_BRANCH=$(git symbolic-ref --short HEAD 2>/dev/null) || error "Cannot determine current branch (detached HEAD?)"
[[ "$CURRENT_BRANCH" == "dev" ]] || error "Must be on the 'dev' branch (currently on '$CURRENT_BRANCH'). Run: git checkout dev"

REMOTE=$(git remote | head -1)
[[ -n "$REMOTE" ]] || error "No git remote configured"

# Derive a nice GitHub URL for the actions page (e.g. ccbus-cc/tutorial)
REMOTE_URL_PATH=$(git config "remote.$REMOTE.url" | sed -E 's#^(git@|https://)([^:/]+)[:/](.+)\.git$#\3#')

info "Branch: $CURRENT_BRANCH | Remote: $REMOTE"

# --- Detect changes ---

HAS_TRACKED_CHANGES=false
if ! git diff --quiet || ! git diff --cached --quiet; then
  HAS_TRACKED_CHANGES=true
fi

HAS_UNTRACKED=false
UNTRACKED_COUNT=$(git ls-files --others --exclude-standard | wc -l)
if [[ "$UNTRACKED_COUNT" -gt 0 ]]; then
  HAS_UNTRACKED=true
fi

# --- Auto-commit if requested and needed ---

if [[ "$HAS_TRACKED_CHANGES" == "true" || ( "$HAS_UNTRACKED" == "true" && "$INCLUDE_UNTRACKED" == "true" ) ]]; then
  if [[ -z "$COMMIT_MSG" ]]; then
    error "Working tree has uncommitted changes. Re-run with -m \"Your commit message\" to commit them, or stash/commit them manually first."
  fi

  info "Committing uncommitted changes..."

  if [[ "$INCLUDE_UNTRACKED" == "true" ]]; then
    info "  (including $UNTRACKED_COUNT untracked file(s))"
  fi

  if [[ "$DRY_RUN" == "true" ]]; then
    echo -e "${CYAN}  [dry-run] Would run: git add -A && git commit -m \"$COMMIT_MSG\"${NC}"
  else
    if [[ "$INCLUDE_UNTRACKED" == "true" ]]; then
      git add -A
    else
      git add -u
    fi
    git commit -m "$COMMIT_MSG" || error "git commit failed"
    info "  committed as $(git rev-parse --short HEAD)"
  fi
elif [[ "$HAS_UNTRACKED" == "true" ]]; then
  warn "$UNTRACKED_COUNT untracked file(s) present (not committed). Use -u to include them."
fi

# --- Determine the new tag ---

get_latest_tag() {
  git tag -l 'v[0-9]*.[0-9]*.[0-9]*' --sort=-v:refname | head -1
}

increment_patch() {
  local tag=$1
  local version=${tag#v}
  local major minor patch
  IFS='.' read -r major minor patch <<< "$version"
  patch=$((patch + 1))
  echo "v${major}.${minor}.${patch}"
}

if [[ -z "$NEW_TAG" ]]; then
  LATEST_TAG=$(get_latest_tag)
  if [[ -z "$LATEST_TAG" ]]; then
    NEW_TAG="v1.0.0"
    info "No existing tags found. Starting with $NEW_TAG"
  else
    NEW_TAG=$(increment_patch "$LATEST_TAG")
    info "Latest tag: $LATEST_TAG -> New tag: $NEW_TAG"
  fi
else
  info "Using specified tag: $NEW_TAG"
fi

# Check if tag already exists
if git rev-parse "$NEW_TAG" > /dev/null 2>&1; then
  error "Tag $NEW_TAG already exists. Pick a different one with -t vX.Y.Z"
fi

# --- Sanity check: remote main isn't ahead ---

LOCAL_HEAD=$(git rev-parse "$CURRENT_BRANCH")
info "Local $CURRENT_BRANCH HEAD: ${LOCAL_HEAD:0:9}"

# --- Dry run summary ---

if [[ "$DRY_RUN" == "true" ]]; then
  echo ""
  echo -e "${CYAN}=== Dry run complete. No changes were made. ===${NC}"
  echo -e "${CYAN}Plan:${NC}"
  echo -e "${CYAN}  1. Push $CURRENT_BRANCH to $REMOTE${NC}"
  echo -e "${CYAN}  2. Merge $CURRENT_BRANCH into main${NC}"
  echo -e "${CYAN}  3. Tag main as $NEW_TAG${NC}"
  echo -e "${CYAN}  4. Push main and $NEW_TAG to $REMOTE${NC}"
  echo -e "${CYAN}  5. Switch back to $CURRENT_BRANCH and merge main into it${NC}"
  echo -e "${CYAN}After this, GitHub Actions will deploy main to production.${NC}"
  exit 0
fi

# --- Push dev to remote ---

info "Pushing $CURRENT_BRANCH to $REMOTE..."
git push "$REMOTE" "$CURRENT_BRANCH"

# --- Merge into main ---

info "Fetching latest from $REMOTE..."
git fetch "$REMOTE" --quiet

info "Switching to main branch..."
git checkout main --quiet

info "Pulling latest main from $REMOTE (fast-forward only)..."
git pull "$REMOTE" main --ff-only --quiet 2>/dev/null || warn "Could not fast-forward main (probably no upstream changes)"

info "Merging $CURRENT_BRANCH into main..."
if ! git merge "$CURRENT_BRANCH" --no-edit; then
  error "Merge conflict detected. Resolve conflicts, then re-run this script."
fi

# --- Tag and push ---

info "Creating tag $NEW_TAG..."
git tag -a "$NEW_TAG" -m "Release $NEW_TAG"

info "Pushing main branch to $REMOTE..."
git push "$REMOTE" main

info "Pushing tag $NEW_TAG to $REMOTE..."
git push "$REMOTE" "$NEW_TAG"

# --- Sync dev with main and switch back ---

info "Switching back to $CURRENT_BRANCH..."
git checkout "$CURRENT_BRANCH" --quiet

info "Merging main back into $CURRENT_BRANCH to keep branches in sync..."
git merge main --no-edit

info "Pushing $CURRENT_BRANCH to $REMOTE..."
git push "$REMOTE" "$CURRENT_BRANCH"

echo ""
info "Release complete!"
info "  Branch: main (merged from $CURRENT_BRANCH)"
info "  Tag:    $NEW_TAG"
info "  Remote: $REMOTE"
echo ""
info "GitHub Actions will now deploy main to PRODUCTION."
if [[ -n "$REMOTE_URL_PATH" ]]; then
  info "Watch progress: https://github.com/$REMOTE_URL_PATH/actions"
fi
