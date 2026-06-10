---
title: "Chapter 12: Governance and DAO"
---

<div class="ccbus-hero">
  <div class="ccbus-hero-avatar">
    <img src="../public/images/avatars/heroes/community-conductor.png" alt="Community Conductor" />
  </div>
  <div class="ccbus-hero-content">
    <h1>Chapter 12: Governance and DAO</h1>
    <div class="ccbus-teacher-label">🎙️ Taught by: <strong>Community Conductor</strong> · The "community chair" of DAO governance — calls your vote</div>
  </div>
</div>


<div class="chapter-intro">

**Difficulty Level:** 🟡 Intermediate
**Estimated Learning Time:** 4-5 hours

**Chapter Objectives:**
- Understand on-chain governance
- Master DAO structures
- Learn voting mechanisms
- Explore treasury management

</div>


## 12.0 2025-2026 Perspective: Why Reread This Chapter

Governance and DAO in 2026 have moved past the simple 'vote + multisig' model into **off-chain delegation, on-chain executable proposals, Optimistic governance, SubDAO nesting, and AI governance agents**.

1. **Snapshot v2 + on-chain execution**:
   - **Snapshot X (2024-Q4)**: from pure off-chain voting to zk-validated off-chain + on-chain execution
   - **Tally**: on-chain governance frontend, supports Compound, Uniswap, Aave etc.
   - **Boardroom**: DAO governance aggregation platform
   - **2026 real use**: 90%+ mainstream DAOs use Snapshot + on-chain executor

2. **Safe Module system**:
   - **Safe{Core}**: modular smart contract account
   - **Safe Modules**: Zodiac Modules, Sign Protocol, UMA Optimistic Oracle can all be mounted as governance executors
   - **2026 real projects**: Aavegotchi DAO, Decentraland DAO, ENS DAO

3. **Optimistic Governance (Optimism Citizens' House model)**:
   - Citizenship proof → delegate to representative → decide public goods funding
   - **2026 real projects**: Optimism RetroPGF, Coinbase Verified Pools
   - Advantage: doesn't require token holdings, reduces governance centralization

4. **SubDAO nesting**:
   - **MakerDAO / Sky**: Spark SubDAO, Allocation Core Unit
   - **Aave**: Aave Grants DAO, Aave Companies
   - **Uniswap**: Uniswap Foundation, Uniswap Grants
   - **2026 trend**: DAO governance is being layered and specialized

5. **AI governance agents**:
   - **ai16z DAO (2024-Q4)**: MetaDAO + AI agents, Eliza framework
   - **Virtuals Protocol (2024-Q4)**: AI agents can initiate DAO proposals
   - **Aethernet (2025-Q1)**: AI agents become DAO voters
   - **2026 controversy**: should AI agents have voting rights? Frontier question

6. **Protocol-level governance (CCBus example)**:
   - **Protocol 314**: composite protocol merging hold-reflections, referral rewards, on-chain buybacks, with auto-adjusting on-chain parameters — no manual voting required
   - **Blackhole**: project tokens sent to blackhole address to reduce circulating supply
   - **Multi-Function**: tax rates, whitelists, referrals all configured in one contract, with upgradable governance parameters

### 🖥️ Real-world Example: CCBus Protocol-Level Governance (314 + Blackhole)


<div style="background: rgba(52, 81, 178, 0.06); padding: 1.5em; border-radius: 4px; margin: 2em 0;">
<svg class="svg-12-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 850 450">
<defs>
<style>
.svg-12-2 .snap-title { font: bold 24px sans-serif; fill: #4c9be8; }
.svg-12-2 .snap-subtitle { font: bold 16px sans-serif; fill: #1f2937; }
.svg-12-2 .snap-label { font: 13px sans-serif; fill: #1f2937; }
.svg-12-2 .snap-box-on { fill: rgba(52, 81, 178, 0.07); stroke: #4c9be8; stroke-width: 2; }
.svg-12-2 .snap-box-off { fill: rgba(223, 105, 25, 0.06); stroke: #df6919; stroke-width: 2; }
.svg-12-2 .snap-check { fill: #5cb85c; }
.svg-12-2 .snap-cross { fill: #d9534f; }
</style>
</defs>
<text x="425" y="35" class="snap-title" text-anchor="middle">On-chain Gov vs Off-chain Gov (Snapshot)</text>
<rect x="50" y="70" width="350" height="350" class="snap-box-on" rx="8"/>
<text x="225" y="105" class="snap-subtitle" text-anchor="middle">⛓️ On-chain Gov (On-Chain)</text>
<text x="70" y="140" class="snap-label" font-weight="bold">pros：</text>
<circle cx="80" cy="160" r="5" class="snap-check"/>
<text x="95" y="165" class="snap-label">autoExecute (Trustless)</text>
<circle cx="80" cy="185" r="5" class="snap-check"/>
<text x="95" y="190" class="snap-label">immutable</text>
<circle cx="80" cy="210" r="5" class="snap-check"/>
<text x="95" y="215" class="snap-label">fullyDecentralization</text>
<text x="70" y="250" class="snap-label" font-weight="bold">Drawbacks：</text>
<line x1="75" y1="265" x2="85" y2="275" class="snap-cross" stroke-width="2"/>
<line x1="85" y1="265" x2="75" y2="275" class="snap-cross" stroke-width="2"/>
<text x="95" y="275" class="snap-label">High Gas Fees ($50-500/Vote)</text>
<line x1="75" y1="290" x2="85" y2="300" class="snap-cross" stroke-width="2"/>
<line x1="85" y1="290" x2="75" y2="300" class="snap-cross" stroke-width="2"/>
<text x="95" y="300" class="snap-label">VoteleadLow (Usually &lt; 10%)</text>
<line x1="75" y1="315" x2="85" y2="325" class="snap-cross" stroke-width="2"/>
<line x1="85" y1="315" x2="75" y2="325" class="snap-cross" stroke-width="2"/>
<text x="95" y="325" class="snap-label">Deploycomplex</text>
<text x="70" y="360" class="snap-label" font-weight="bold" fill="#4c9be8">Use Case：</text>
<text x="70" y="380" class="snap-label">• Highvaluedecision (e.g.Protocol Upgrade)</text>
<text x="70" y="400" class="snap-label">• NeedstrongmakeExecutePropose</text>
<rect x="450" y="70" width="350" height="350" class="snap-box-off" rx="8"/>
<text x="625" y="105" class="snap-subtitle" text-anchor="middle">📸 Off-chain Gov (Snapshot)</text>
<text x="470" y="140" class="snap-label" font-weight="bold">pros：</text>
<circle cx="480" cy="160" r="5" class="snap-check"/>
<text x="495" y="165" class="snap-label">zero Gas Fee (SignVote)</text>
<circle cx="480" cy="185" r="5" class="snap-check"/>
<text x="495" y="190" class="snap-label">HighVotelead (20-40%)</text>
<circle cx="480" cy="210" r="5" class="snap-check"/>
<text x="495" y="215" class="snap-label">FastfastDeploy (NoneneedContract)</text>
<circle cx="480" cy="235" r="5" class="snap-check"/>
<text x="495" y="240" class="snap-label">flexibleVotestrategy</text>
<text x="470" y="275" class="snap-label" font-weight="bold">Drawbacks：</text>
<line x1="475" y1="290" x2="485" y2="300" class="snap-cross" stroke-width="2"/>
<line x1="485" y1="290" x2="475" y2="300" class="snap-cross" stroke-width="2"/>
<text x="495" y="300" class="snap-label">noautoExecute (needpersonwork)</text>
<line x1="475" y1="315" x2="485" y2="325" class="snap-cross" stroke-width="2"/>
<line x1="485" y1="315" x2="475" y2="325" class="snap-cross" stroke-width="2"/>
<text x="495" y="325" class="snap-label">dependCentralizedserviceer</text>
<text x="470" y="360" class="snap-label" font-weight="bold" fill="#df6919">Use Case：</text>
<text x="470" y="380" class="snap-label">• warmmeasurecheckmeasure (Sentiment Check)</text>
<text x="470" y="400" class="snap-label">• nocriticalnaturedecision (e.g.itemplaquedesign)</text>
</svg>
</div>
## 12.1 On-Chain Governance Mechanisms

Decision-making encoded in smart contracts.

## 12.2 Decentralized Autonomous Organizations (DAOs)

**DAOs** are organizations governed by code and community voting.

### DAO Types
- Protocol DAOs (Uniswap, Aave)
- Investment DAOs (The LAO)
- Social DAOs
- Collector DAOs

## 12.3 Governance Token Models

Tokens that grant voting rights and protocol ownership.

## 12.4 Voting Mechanisms

### Token-Weighted Voting
- One token = one vote
- Risk of plutocracy

### Quadratic Voting
- Cost increases quadratically
- Reduces whale influence

### Delegation
- Delegate voting power to experts

## 12.5 Treasury Management

Managing DAO funds transparently and efficiently.



### 12.7 Protocol-Level Governance: CCBus Instance

CCBus provides several **protocol-level governance token** implementations, building governance parameters and tokenomics directly into the contract, without manual voting.

**1. Protocol 314 — Fully automated composite protocol**

Combines three most common tokenomics functions into one contract:
- **Hold-to-earn**: holders auto-receive rewards (USDT, BNB, native) by holding
- **Referral reward**: invite friends, earn % of their transaction fees
- **On-chain buyback**: use project fees to auto-buy on DEX, then burn

**Protocol 314 economic model**:
- 5% fee on every transfer
- 2% to dividend pool
- 1% to referrer
- 1% auto-buyback and burn
- 1% to LP providers
- Holders auto-earn by holding
- **2026 real projects**: PancakeSwap BabyCake, SafeMoon v2 (similar model)

**2. Blackhole (blackhole dividend)**

Transfer project tokens to 0x000...dead blackhole address, permanently reduce circulating supply.

**Blackhole applications**:
- Auto-burn some tokens on each transaction
- Holders gain "scarcity premium" by holding
- **2026 real projects**: HEX, PancakeSwap, SHIB (similar burn mechanism)

**Blackhole implementation steps**:
1. Project mints 100% tokens
2. Project transfers 50% to blackhole
3. At launch, 50% goes to liquidity pool
4. Burn 1% on each transaction
5. **Long-term**: after 1 year, circulating supply drops from 50% to 35%

**3. Multi-Function (multi-functional token)**

A single contract configures simultaneously:
- Tax rate (tiered, buy/sell different)
- Whitelist (exempt specific addresses from tax)
- Referrer (auto-reward)
- Governance parameters (upgradable)
- Dividend mode (USDT/native/BNB/ETH)

**Multi-Function advantages**:
- One contract replaces 5-10 separate contracts
- High gas efficiency
- Parameters adjustable on-chain
- **2026 real projects**: most 2025-2026 new meme coins use Multi-Function pattern

**4. Protocol-level vs on-chain DAO governance**

| Dimension | Protocol-level (Protocol 314) | DAO governance (Snapshot + Safe) |
|---|---|---|
| Governance speed | Real-time (auto-execute) | Slow (days of voting) |
| Governance flexibility | Low (preset params) | High (any proposal) |
| Governance cost | 0 (no gas) | High (voting gas) |
| Transparency | 100% (public code) | 100% |
| User-friendly | High (no voting) | Medium (need to participate) |
| Use case | Meme coins, commercial dApps | Protocol governance, DeFi protocols |

**2026 trend**: **Protocol-level governance + DAO supervision** hybrid model
- Protocol parameters auto-adjust (protocol-level)
- But key decisions (whitelist / large adjustments) need DAO vote
- AI agents continuously audit protocol parameters


![CCBus Protocol 314 (protocol-level governance example)](../public/images/chapters/zh/protocol-314.png)

*图: CCBus Protocol 314 (protocol-level governance example)*

## 12.6 DAO Tools and Frameworks

- **Snapshot** - Off-chain voting
- **Tally** - On-chain governance
- **Gnosis Safe** - Multi-sig treasury

## 12.7 Legal and Regulatory Considerations

DAOs navigate complex legal landscapes.

## 12.8 Successful DAO Case Studies

- **MakerDAO** - Decentralized stablecoin governance
- **Compound** - Lending protocol governance
- **Gitcoin** - Public goods funding

<div class="ccbus-teacher-credits">
  <div class="ccbus-teacher-credits-avatar">
    <img src="../public/images/avatars/heroes/community-conductor.png" alt="Community Conductor" />
  </div>
  <div class="ccbus-teacher-credits-body">
    Taught by: <strong>Community Conductor</strong> — The "community chair" of DAO governance — calls your vote<br />
    <span style="font-size: 0.85em; color: var(--vp-c-text-3);">📚 The next chapter [Chapter 13: Blockchain Platform Comparison] will be taught by another CCBus guide.</span>
  </div>
</div>

<div class="chapter-footer">

### Key Takeaways
- DAOs enable decentralized coordination
- Governance mechanisms balance efficiency and fairness
- Legal frameworks are still evolving

</div>

<div style="background: rgba(52, 81, 178, 0.06); padding: 1.5em; border-radius: 4px; margin: 2em 0;">
<svg class="svg-12-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 500">
<defs>
<style>
.svg-12-0 .dao-title { font: bold 24px sans-serif; fill: #4c9be8; }
.svg-12-0 .dao-subtitle { font: bold 16px sans-serif; fill: #1f2937; }
.svg-12-0 .dao-label { font: 13px sans-serif; fill: #1f2937; }
.svg-12-0 .dao-box-trad { fill: rgba(217, 83, 79, 0.15); stroke: #d9534f; stroke-width: 2; }
.svg-12-0 .dao-box-dao { fill: rgba(92, 184, 92, 0.07); stroke: #5cb85c; stroke-width: 2; }
.svg-12-0 .dao-arrow { stroke: #4c9be8; stroke-width: 2; fill: none; }
.svg-12-0 .dao-check { fill: #5cb85c; }
.svg-12-0 .dao-cross { fill: #d9534f; }
</style>
</defs>
<text x="450" y="35" class="dao-title" text-anchor="middle">tradorganization vs DAO</text>
<rect x="50" y="70" width="380" height="400" class="dao-box-trad" rx="8"/>
<text x="240" y="105" class="dao-subtitle" text-anchor="middle">🏢 tradorganization (Traditional Org)</text>
<text x="70" y="145" class="dao-label" font-weight="bold">Governancestructure：</text>
<text x="70" y="170" class="dao-label">• etc.grademake (Hierarchical)</text>
<text x="70" y="190" class="dao-label">• CEO/董mattercandecision</text>
<text x="70" y="210" class="dao-label">• 股东Vote (yearmeasure)</text>
<text x="70" y="245" class="dao-label" font-weight="bold">Transparency：</text>
<line x1="75" y1="260" x2="85" y2="270" class="dao-cross" stroke-width="2"/>
<line x1="85" y1="260" x2="75" y2="270" class="dao-cross" stroke-width="2"/>
<text x="95" y="270" class="dao-label">financebusinessnoPublic</text>
<line x1="75" y1="285" x2="85" y2="295" class="dao-cross" stroke-width="2"/>
<line x1="85" y1="285" x2="75" y2="295" class="dao-cross" stroke-width="2"/>
<text x="95" y="295" class="dao-label">decisionProcessnotransparent</text>
<text x="70" y="330" class="dao-label" font-weight="bold">Executemethod：</text>
<text x="70" y="355" class="dao-label">• personworkExecute</text>
<text x="70" y="375" class="dao-label">• cancanblanket操纵</text>
<text x="70" y="395" class="dao-label">• Trust RequiredMediummediate</text>
<text x="70" y="430" class="dao-label" font-weight="bold">approveintrothreshold：</text>
<line x1="75" y1="445" x2="85" y2="455" class="dao-cross" stroke-width="2"/>
<line x1="85" y1="445" x2="75" y2="455" class="dao-cross" stroke-width="2"/>
<text x="95" y="455" class="dao-label">High (Permissioned、KYC)</text>
<rect x="470" y="70" width="380" height="400" class="dao-box-dao" rx="8"/>
<text x="660" y="105" class="dao-subtitle" text-anchor="middle">🌐 DAO (Decentralizationorganization)</text>
<text x="490" y="145" class="dao-label" font-weight="bold">Governancestructure：</text>
<text x="490" y="170" class="dao-label">• 扁flatify (Flat)</text>
<text x="490" y="190" class="dao-label">• communityVotedecision</text>
<text x="490" y="210" class="dao-label">• supportcontPropose (24/7)</text>
<text x="490" y="245" class="dao-label" font-weight="bold">Transparency：</text>
<circle cx="500" cy="265" r="5" class="dao-check"/>
<text x="515" y="270" class="dao-label">allTransactionchainUpPublic</text>
<circle cx="500" cy="290" r="5" class="dao-check"/>
<text x="515" y="295" class="dao-label">Smart Contractcodebeginsource</text>
<circle cx="500" cy="315" r="5" class="dao-check"/>
<text x="515" y="320" class="dao-label">Voteresultreal-timecansee</text>
<text x="490" y="355" class="dao-label" font-weight="bold">Executemethod：</text>
<text x="490" y="380" class="dao-label">• Smart ContractautoExecute</text>
<text x="490" y="400" class="dao-label">• immutable</text>
<text x="490" y="420" class="dao-label">• Noneneedtrust (Trustless)</text>
<text x="490" y="455" class="dao-label" font-weight="bold">approveintrothreshold：</text>
<circle cx="500" cy="465" r="5" class="dao-check"/>
<text x="515" y="470" class="dao-label">Low (supportyesTokeni.e.can)</text>
</svg>
</div>

<div style="background: rgba(52, 81, 178, 0.06); padding: 1.5em; border-radius: 4px; margin: 2em 0;">
<svg class="svg-12-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600">
<defs>
<style>
.svg-12-1 .gov-title { font: bold 24px sans-serif; fill: #4c9be8; }
.svg-12-1 .gov-step { font: bold 16px sans-serif; fill: #1f2937; }
.svg-12-1 .gov-label { font: 13px sans-serif; fill: #1f2937; }
.svg-12-1 .gov-box { fill: rgba(52, 81, 178, 0.05); stroke: #4c9be8; stroke-width: 2; }
.svg-12-1 .gov-active { fill: rgba(92, 184, 92, 0.10); stroke: #5cb85c; stroke-width: 3; }
.svg-12-1 .gov-arrow { stroke: #df6919; stroke-width: 3; fill: none; marker-end: url(#gov-arrow); }
.svg-12-1 .gov-time { font: 11px sans-serif; fill: #f0ad4e; font-style: italic; }
</style>
<marker id="gov-arrow" markerWidth="12" markerHeight="12" refX="10" refY="3" orient="auto" markerUnits="strokeWidth">
<path d="M0,0 L0,6 L9,3 z" fill="#df6919"/>
</marker>
</defs>
<text x="450" y="35" class="gov-title" text-anchor="middle">chainUpGovernance (Governor Contract)</text>
<g id="step1">
<rect x="50" y="80" width="160" height="100" class="gov-box" rx="8"/>
<text x="130" y="110" class="gov-step" text-anchor="middle">1. Create Proposal</text>
<text x="70" y="140" class="gov-label">(Propose)</text>
<text x="70" y="160" class="gov-label">• NeedmostLowTokenmeasure</text>
<text x="70" y="175" class="gov-label">  (e.g. 100,000 UNI)</text>
</g>
<path d="M 220 130 L 260 130" class="gov-arrow"/>
<g id="step2">
<rect x="270" y="80" width="160" height="100" class="gov-box" rx="8"/>
<text x="350" y="110" class="gov-step" text-anchor="middle">2. Votelatency</text>
<text x="290" y="140" class="gov-label">(Voting Delay)</text>
<text x="290" y="160" class="gov-label">⏰ 1-2 day</text>
<text x="290" y="175" class="gov-time">preventFlash Loan Attack</text>
</g>
<path d="M 440 130 L 480 130" class="gov-arrow"/>
<g id="step3">
<rect x="490" y="80" width="160" height="100" class="gov-active" rx="8"/>
<text x="570" y="110" class="gov-step" text-anchor="middle">3. Voting</text>
<text x="510" y="140" class="gov-label">(Voting Period)</text>
<text x="510" y="160" class="gov-label">⏰ 3-7 day</text>
<text x="510" y="175" class="gov-label">🗳️ For / Against / Abstain</text>
</g>
<path d="M 690 130 L 730 130" class="gov-arrow"/>
<g id="step4">
<rect x="740" y="80" width="110" height="100" class="gov-box" rx="8"/>
<text x="795" y="110" class="gov-step" text-anchor="middle" font-size="14">4. result</text>
<text x="760" y="140" class="gov-label">(Tally)</text>
<text x="760" y="160" class="gov-label">✅ understandto</text>
<text x="760" y="175" class="gov-label">   lawdecidepersoneven</text>
</g>
<path d="M 795 190 L 795 230" class="gov-arrow"/>
<g id="step5">
<rect x="690" y="240" width="210" height="100" class="gov-box" rx="8"/>
<text x="795" y="270" class="gov-step" text-anchor="middle">5. Timelock</text>
<text x="710" y="300" class="gov-label">(Timelock)</text>
<text x="710" y="320" class="gov-label">⏰ 2 dayetc.treatexpect</text>
<text x="710" y="335" class="gov-time">allowpermitUserExited (e.g.resultdifferentagree)</text>
</g>
<path d="M 680 290 L 640 290" class="gov-arrow"/>
<g id="step6">
<rect x="430" y="240" width="200" height="100" class="gov-active" rx="8"/>
<text x="530" y="270" class="gov-step" text-anchor="middle">6. Execute</text>
<text x="450" y="300" class="gov-label">(Execute)</text>
<text x="450" y="320" class="gov-label">🤖 Smart ContractautoExecute</text>
</g>
<g id="failure-path">
<text x="50" y="270" class="gov-label" fill="#d9534f" font-weight="bold">❌ Proposenotpass：</text>
<text x="50" y="295" class="gov-label">• notunderstandlawdecidepersoneven (Quorum)</text>
<text x="50" y="315" class="gov-label">• Againstticket > supportcompleteticket</text>
<text x="50" y="335" class="gov-label">→ Failed，noExecute</text>
</g>
<g id="parameters">
<rect x="50" y="380" width="800" height="190" class="gov-box" rx="8" opacity="0.3"/>
<text x="450" y="415" class="gov-step" text-anchor="middle">criticalGovernanceparam (Governance Parameters)</text>
<text x="70" y="450" class="gov-label" font-weight="bold">1. Proposedoorthreshold (Proposal Threshold):</text>
<text x="90" y="470" class="gov-label">• Uniswap: 2.5M UNI (Total Supply 0.25%)</text>
<text x="90" y="490" class="gov-label">• Compound: 100,000 COMP (1%)</text>
<text x="470" y="450" class="gov-label" font-weight="bold">2. lawdecidepersoneven (Quorum):</text>
<text x="490" y="470" class="gov-label">• Uniswap: 40M UNI (4%)</text>
<text x="490" y="490" class="gov-label">• Aave: 320,000 AAVE (movestatetunewhole)</text>
<text x="70" y="525" class="gov-label" font-weight="bold">3. Voting Weight (Voting Power):</text>
<text x="90" y="545" class="gov-label">• 1 Token = 1 ticket (Token-weighted)</text>
<text x="470" y="525" class="gov-label" font-weight="bold">4. delegate (Delegation):</text>
<text x="490" y="545" class="gov-label">• canwillVoterightdelegategivededicatedjobperson士</text>
</g>
</svg>
</div>

<div style="background: rgba(52, 81, 178, 0.06); padding: 1.5em; border-radius: 4px; margin: 2em 0;">
<svg class="svg-12-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 550">
<defs>
<style>
.svg-12-3 .token-title { font: bold 24px sans-serif; fill: #4c9be8; }
.svg-12-3 .token-cat { font: bold 16px sans-serif; fill: #1f2937; }
.svg-12-3 .token-label { font: 13px sans-serif; fill: #1f2937; }
.svg-12-3 .token-slice { stroke: #3451b2; stroke-width: 2; fill: none; }
.svg-12-3 .token-legend { font: 14px sans-serif; fill: #1f2937; }
</style>
</defs>
<text x="450" y="35" class="token-title" text-anchor="middle">Tokenminmatchmodel (Tokenomics)</text>
<g id="pie-chart">
<circle cx="250" cy="280" r="150" fill="none" stroke="#4c9be8" stroke-width="2"/>
<path d="M 250 130 A 150 150 0 0 1 358.3 208.3 L 250 280 Z" class="token-slice" fill="rgba(52, 81, 178, 0.15)"/>
<text x="290" y="200" class="token-cat">25%</text>
<text x="280" y="220" class="token-label">community</text>
<path d="M 358.3 208.3 A 150 150 0 0 1 358.3 351.7 L 250 280 Z" class="token-slice" fill="rgba(92, 184, 92, 0.15)"/>
<text x="340" y="290" class="token-cat">20%</text>
<text x="330" y="310" class="token-label">team</text>
<path d="M 358.3 351.7 A 150 150 0 0 1 250 430 L 250 280 Z" class="token-slice" fill="rgba(223, 105, 25, 0.12)"/>
<text x="290" y="380" class="token-cat">15%</text>
<text x="280" y="400" class="token-label">investperson</text>
<path d="M 250 430 A 150 150 0 0 1 141.7 351.7 L 250 280 Z" class="token-slice" fill="rgba(147, 112, 219, 0.3)"/>
<text x="170" y="380" class="token-cat">10%</text>
<text x="160" y="400" class="token-label">eco</text>
<path d="M 141.7 351.7 A 150 150 0 0 1 141.7 208.3 L 250 280 Z" class="token-slice" fill="rgba(240, 173, 78, 0.3)"/>
<text x="120" y="290" class="token-cat">15%</text>
<text x="110" y="310" class="token-label">Liquidity</text>
<path d="M 141.7 208.3 A 150 150 0 0 1 250 130 L 250 280 Z" class="token-slice" fill="rgba(217, 83, 79, 0.3)"/>
<text x="170" y="200" class="token-cat">15%</text>
<text x="160" y="220" class="token-label">financelib</text>
</g>
<g id="vesting-schedule">
<rect x="480" y="70" width="380" height="460" fill="rgba(52, 81, 178, 0.06)" stroke="#4c9be8" stroke-width="2" rx="8"/>
<text x="670" y="105" class="token-cat" text-anchor="middle">releaseTimetable (Vesting Schedule)</text>
<rect x="500" y="130" width="340" height="60" fill="rgba(52, 81, 178, 0.07)" stroke="#4c9be8" stroke-width="2" rx="4"/>
<text x="510" y="155" class="token-label" font-weight="bold">community (25%):</text>
<text x="510" y="175" class="token-label">• standi.e.release 50% (nullinvest/Yield Farming)</text>
<text x="510" y="190" class="token-label">• 剩bal 50% linenaturerelease (4 year)</text>
<rect x="500" y="210" width="340" height="60" fill="rgba(92, 184, 92, 0.07)" stroke="#5cb85c" stroke-width="2" rx="4"/>
<text x="510" y="235" class="token-label" font-weight="bold">team (20%):</text>
<text x="510" y="255" class="token-label">• 1 yearlockdecide (Cliff)</text>
<text x="510" y="270" class="token-label">• 然post 3 yearlinenaturerelease</text>
<rect x="500" y="290" width="340" height="60" fill="rgba(223, 105, 25, 0.06)" stroke="#df6919" stroke-width="2" rx="4"/>
<text x="510" y="315" class="token-label" font-weight="bold">investperson (15%):</text>
<text x="510" y="335" class="token-label">• 6 monthlockdecide</text>
<text x="510" y="350" class="token-label">• 然post 2 yearlinenaturerelease</text>
<rect x="500" y="370" width="340" height="75" fill="rgba(217, 83, 79, 0.15)" stroke="#d9534f" stroke-width="2" rx="4"/>
<text x="510" y="395" class="token-label" font-weight="bold">financelib (15%):</text>
<text x="510" y="415" class="token-label">• DAO MultiSigcontrol</text>
<text x="510" y="430" class="token-label">• useineco激励、fitwork伙伴</text>
<text x="510" y="445" class="token-label">• needGovernance Voteapproveuse</text>
<text x="670" y="480" class="token-label" text-anchor="middle" font-weight="bold" fill="#f0ad4e">Total Supply: 10 hundred millionToken</text>
<text x="670" y="505" class="token-label" text-anchor="middle" fill="#f0ad4e">Inflationlead: peryear 2% (useinStakingReward)</text>
</g>
</svg>
</div>

<div style="background: rgba(52, 81, 178, 0.06); padding: 1.5em; border-radius: 4px; margin: 2em 0;">
<svg class="svg-12-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 500">
<defs>
<style>
.svg-12-4 .safe-title { font: bold 24px sans-serif; fill: #4c9be8; }
.svg-12-4 .safe-step { font: bold 16px sans-serif; fill: #1f2937; }
.svg-12-4 .safe-label { font: 13px sans-serif; fill: #1f2937; }
.svg-12-4 .safe-box { fill: rgba(52, 81, 178, 0.05); stroke: #4c9be8; stroke-width: 2; }
.svg-12-4 .safe-signer { fill: rgba(92, 184, 92, 0.10); stroke: #5cb85c; stroke-width: 2; }
.svg-12-4 .safe-arrow { stroke: #df6919; stroke-width: 2; fill: none; marker-end: url(#safe-arrow); }
</style>
<marker id="safe-arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
<path d="M0,0 L0,6 L9,3 z" fill="#df6919"/>
</marker>
</defs>
<text x="450" y="35" class="safe-title" text-anchor="middle">MultiSigwalletworkflowjourney (Gnosis Safe)</text>
<g id="signers">
<text x="450" y="75" class="safe-step" text-anchor="middle">👥 Signer (Signers)</text>
<circle cx="300" cy="120" r="35" class="safe-signer"/>
<text x="300" y="130" class="safe-label" text-anchor="middle" font-weight="bold">Alice</text>
<circle cx="450" cy="120" r="35" class="safe-signer"/>
<text x="450" y="130" class="safe-label" text-anchor="middle" font-weight="bold">Bob</text>
<circle cx="600" cy="120" r="35" class="safe-signer"/>
<text x="600" y="130" class="safe-label" text-anchor="middle" font-weight="bold">Charlie</text>
<text x="450" y="180" class="safe-label" text-anchor="middle" font-style="italic">3-of-5 MultiSig (Need 3 Sign)</text>
</g>
<path d="M 450 190 L 450 220" class="safe-arrow"/>
<g id="step1">
<rect x="250" y="230" width="400" height="70" class="safe-box" rx="8"/>
<text x="450" y="260" class="safe-step" text-anchor="middle">Step 1: Alice createsuggestTransaction</text>
<text x="270" y="285" class="safe-label">proposesuggest: fromfinancelibtransfer 100 ETH todevteam</text>
</g>
<path d="M 450 310 L 450 340" class="safe-arrow"/>
<g id="step2">
<rect x="250" y="350" width="400" height="70" class="safe-box" rx="8"/>
<text x="450" y="380" class="safe-step" text-anchor="middle">Step 2: Bob & Charlie Sign</text>
<text x="270" y="405" class="safe-label">✅ Alice (1/3) → ✅ Bob (2/3) → ✅ Charlie (3/3)</text>
</g>
<path d="M 450 430 L 450 460" class="safe-arrow"/>
<g id="step3">
<rect x="250" y="470" width="400" height="20" class="safe-box" rx="8" fill="rgba(92, 184, 92, 0.15)"/>
<text x="450" y="487" class="safe-step" text-anchor="middle" font-size="14">✅ TransactionExecute</text>
</g>
<g id="info">
<rect x="50" y="230" width="180" height="190" class="safe-box" rx="8" opacity="0.5"/>
<text x="140" y="260" class="safe-label" text-anchor="middle" font-weight="bold">oftenseeconfig</text>
<text x="70" y="285" class="safe-label">2-of-3: Smallteam</text>
<text x="70" y="305" class="safe-label">3-of-5: Mediumtypeproject</text>
<text x="70" y="325" class="safe-label">5-of-9: Largetype DAO</text>
<text x="70" y="360" class="safe-label" font-weight="bold">Pros:</text>
<text x="70" y="380" class="safe-label">• preventsingle pointFaulty</text>
<text x="70" y="400" class="safe-label">• transparentaudit</text>
</g>
<g id="security">
<rect x="670" y="230" width="180" height="190" class="safe-box" rx="8" opacity="0.5"/>
<text x="760" y="260" class="safe-label" text-anchor="middle" font-weight="bold" fill="#d9534f">⚠️ safeAt Risk</text>
<text x="690" y="285" class="safe-label">共planattack</text>
<text x="690" y="300" class="safe-label" font-size="11">→ NeedtrustedSigner</text>
<text x="690" y="330" class="safe-label">Keyloselose</text>
<text x="690" y="345" class="safe-label" font-size="11">→ Backuprecoversolution</text>
<text x="690" y="375" class="safe-label">latencyattack</text>
<text x="690" y="390" class="safe-label" font-size="11">→ settingsTransactionfaultexpectTime</text>
</g>
</svg>
</div>

<div style="background: rgba(52, 81, 178, 0.06); padding: 1.5em; border-radius: 4px; margin: 2em 0;">
<svg class="svg-12-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 650">
<defs>
<style>
.svg-12-5 .tool-title { font: bold 24px sans-serif; fill: #4c9be8; }
.svg-12-5 .tool-cat { font: bold 16px sans-serif; fill: #1f2937; }
.svg-12-5 .tool-label { font: 13px sans-serif; fill: #1f2937; }
.svg-12-5 .tool-box-gov { fill: rgba(52, 81, 178, 0.07); stroke: #4c9be8; stroke-width: 2; }
.svg-12-5 .tool-box-comm { fill: rgba(92, 184, 92, 0.07); stroke: #5cb85c; stroke-width: 2; }
.svg-12-5 .tool-box-pay { fill: rgba(223, 105, 25, 0.06); stroke: #df6919; stroke-width: 2; }
.svg-12-5 .tool-box-ops { fill: rgba(147, 112, 219, 0.15); stroke: #9370db; stroke-width: 2; }
</style>
</defs>
<text x="450" y="35" class="tool-title" text-anchor="middle">DAO toolecoSystem</text>
<g id="governance-tools">
<rect x="50" y="70" width="380" height="130" class="tool-box-gov" rx="8"/>
<text x="240" y="100" class="tool-cat" text-anchor="middle">🗳️ Governancetool</text>
<text x="70" y="130" class="tool-label" font-weight="bold">Snapshot:</text>
<text x="160" y="130" class="tool-label">Off-chain Vote (zero Gas)</text>
<text x="70" y="150" class="tool-label" font-weight="bold">Tally:</text>
<text x="160" y="150" class="tool-label">On-chain Gov仪tableboard</text>
<text x="70" y="170" class="tool-label" font-weight="bold">Boardroom:</text>
<text x="160" y="170" class="tool-label">GovernanceAggregator</text>
<text x="70" y="190" class="tool-label" font-weight="bold">Governor (OZ):</text>
<text x="160" y="190" class="tool-label">Smart Contractstandard</text>
</g>
<g id="treasury-tools">
<rect x="470" y="70" width="380" height="130" class="tool-box-pay" rx="8"/>
<text x="660" y="100" class="tool-cat" text-anchor="middle">💰 financelibmgmt</text>
<text x="490" y="130" class="tool-label" font-weight="bold">Gnosis Safe:</text>
<text x="590" y="130" class="tool-label">MultiSigwallet</text>
<text x="490" y="150" class="tool-label" font-weight="bold">Llama:</text>
<text x="590" y="150" class="tool-label">financelibanalyze & strategy</text>
<text x="490" y="170" class="tool-label" font-weight="bold">Parcel:</text>
<text x="590" y="170" class="tool-label">approvemeasurepayment</text>
<text x="490" y="190" class="tool-label" font-weight="bold">Hedgey:</text>
<text x="590" y="190" class="tool-label">Tokenreleasemgmt</text>
</g>
<g id="comm-tools">
<rect x="50" y="230" width="380" height="150" class="tool-box-comm" rx="8"/>
<text x="240" y="260" class="tool-cat" text-anchor="middle">💬 collab & octilliontranslate</text>
<text x="70" y="290" class="tool-label" font-weight="bold">Discord:</text>
<text x="160" y="290" class="tool-label">community讨discuss (Collabland Verify)</text>
<text x="70" y="310" class="tool-label" font-weight="bold">Commonwealth:</text>
<text x="160" y="310" class="tool-label">discussaltar & Propose讨discuss</text>
<text x="70" y="330" class="tool-label" font-weight="bold">Discourse:</text>
<text x="160" y="330" class="tool-label">longarticle讨discussPlatform</text>
<text x="70" y="350" class="tool-label" font-weight="bold">Notion:</text>
<text x="160" y="350" class="tool-label">sensesenselib & doc</text>
<text x="70" y="370" class="tool-label" font-weight="bold">Coordinape:</text>
<text x="160" y="370" class="tool-label">contributorRewardminmatch</text>
</g>
<g id="ops-tools">
<rect x="470" y="230" width="380" height="150" class="tool-box-ops" rx="8"/>
<text x="660" y="260" class="tool-cat" text-anchor="middle">⚙️ Operationstool</text>
<text x="490" y="290" class="tool-label" font-weight="bold">Dework:</text>
<text x="590" y="290" class="tool-label">taskmgmt & 赏gold</text>
<text x="490" y="310" class="tool-label" font-weight="bold">Sourcecred:</text>
<text x="590" y="310" class="tool-label">贡献measuremeasureify</text>
<text x="490" y="330" class="tool-label" font-weight="bold">Utopia Labs:</text>
<text x="590" y="330" class="tool-label">paymentautoify</text>
<text x="490" y="350" class="tool-label" font-weight="bold">Collab.Land:</text>
<text x="590" y="350" class="tool-label">Tokendoorcontrol (Token Gating)</text>
<text x="490" y="370" class="tool-label" font-weight="bold">Guild.xyz:</text>
<text x="590" y="370" class="tool-label">Rolemgmt</text>
</g>
<g id="case-study">
<rect x="50" y="410" width="800" height="220" class="tool-box-gov" rx="8" opacity="0.3"/>
<text x="450" y="445" class="tool-cat" text-anchor="middle">📊 case: Uniswap DAO toolstack</text>
<text x="70" y="480" class="tool-label" font-weight="bold">Governance:</text>
<text x="70" y="500" class="tool-label">• chainUp: Governor Contract (Ethereum) + Timelock</text>
<text x="70" y="520" class="tool-label">• chainDown: Snapshot (warmmeasurecheckmeasure) + Tally (Data展demo)</text>
<text x="70" y="555" class="tool-label" font-weight="bold">financelib:</text>
<text x="70" y="575" class="tool-label">• Gnosis Safe (MultiSigwallet，5-of-9)</text>
<text x="70" y="595" class="tool-label">• Llama (financelibanalyze，$4B+ TVL)</text>
<text x="470" y="480" class="tool-label" font-weight="bold">octilliontranslate:</text>
<text x="470" y="500" class="tool-label">• Discord (100,000+ complete员)</text>
<text x="470" y="520" class="tool-label">• Discourse discussaltar (Propose讨discuss)</text>
<text x="470" y="555" class="tool-label" font-weight="bold">Operations:</text>
<text x="470" y="575" class="tool-label">• Grants plan (asset助ecoproject)</text>
<text x="470" y="595" class="tool-label">• delegatesystem (Delegation givededicatedjobVoteagent)</text>
</g>
</svg>
</div>
