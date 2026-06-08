# CCBook

A comprehensive blockchain technology learning handbook, covering everything from fundamentals to advanced applications.

🌐 **Live site:** https://ccbook.ccbus.cc  
🔗 **Project page (GitHub Pages):** https://ccbus-cc.github.io/ccbook/

## Development

```bash
npm install
npm run docs:dev      # local dev server
npm run docs:build    # production build to docs/.vitepress/dist
npm run docs:preview  # preview the production build
```

## Content refresh (2025-2026)

Every chapter was updated in 2026 to reflect the current state of the
blockchain industry: zkEVM, restaking (EigenLayer), account abstraction
(ERC-4337), intent-centric protocols (UniswapX, CoW Swap, Across), modular
blockchains, RWA tokenization, AI agent economies, and more.

Each chapter includes a "Real-world example: CCBus" subsection with screenshots
captured from the live CCBus toolkit at https://ccbus.cc. To re-capture
screenshots when the CCBus UI changes:

```bash
# From the ccbus.cc repo (which has Playwright installed)
npx tsx capture-ccbook-screenshots.ts
```

The capture script writes PNG files to `docs/public/images/chapters/{zh,en}/`.

## Deployment

Pushes to `main` are auto-deployed to https://ccbook.ccbus.cc via GitHub Pages.

For routine updates:

```bash
git checkout dev
# make your edits
git add -A
git commit -m "Describe your change"
bin/release -m "Describe your change"   # merges dev→main, tags, pushes
```

## Repository Layout

```
.
├── docs/
│   ├── .vitepress/
│   │   ├── config.ts          # main VitePress config (locales, theme)
│   │   ├── config/
│   │   │   ├── zh.ts          # Chinese sidebar / nav
│   │   │   └── en.ts          # English sidebar / nav
│   │   └── theme/
│   │       ├── index.ts       # theme entry
│   │       ├── custom.css     # CCBook-specific styling
│   │       └── math.css       # MathJax 3 output styling
│   ├── index.md               # language picker (root)
│   ├── zh/                    # Chinese chapters
│   │   ├── index.md
│   │   └── chapter-1.md ... chapter-16.md
│   ├── en/                    # English chapters
│   │   ├── index.md
│   │   └── chapter-1.md ... chapter-16.md
│   └── public/                # static assets (favicons, logo, CNAME)
├── .github/workflows/deploy.yml
├── bin/release.sh             # dev→main release helper
└── package.json
```

## Chapter Map

| Part | Chapters | Level |
|------|----------|-------|
| I: Foundations | 1-4 | 🟢 Beginner |
| II: Technical Deep Dive | 5-8 | 🟡 Intermediate |
| III: Advanced Concepts | 9-12 | 🟠 Advanced |
| IV: Ecosystem & Applications | 13-16 | 🟢🟡🟠 All Levels |

## License

Copyright © CCBus. All rights reserved.
