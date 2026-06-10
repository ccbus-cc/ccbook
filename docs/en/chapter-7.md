---
title: "Chapter 7: Layer 2 Scaling"
---

<div class="ccbus-hero">
  <div class="ccbus-hero-avatar">
    <img src="../public/images/avatars/heroes/chain-hopper.png" alt="Chain Hopper" />
  </div>
  <div class="ccbus-hero-content">
    <h1>Chapter 7: Layer 2 Scaling</h1>
    <div class="ccbus-teacher-label">🎙️ Taught by: <strong>Chain Hopper</strong> · The L2 "test driver" — tries every Rollup for you</div>
  </div>
</div>


<div class="chapter-intro">

**Difficulty Level:** 🔴 Advanced
**Estimated Learning Time:** 5-6 hours

**Chapter Objectives:**
- Understand blockchain scaling challenges
- Master Layer 2 technologies
- Compare different scaling solutions
- Explore future scaling directions

</div>


## 7.0 2025-2026 Perspective: Why Reread This Chapter

Layer 2 has moved from "scaling experiment" to "mainstream settlement layer". Key 2025-2026 changes:

1. **OP Rollup vs ZK Rollup cost economics**:
   - **OP Rollup** dominant: Arbitrum ($15B TVL), OP Mainnet ($3B TVL), Base ($5B TVL), Blast, Manta
   - **ZK Rollup** catching up: Linea ($1.5B), zkSync Era ($1.2B), Polygon zkEVM ($0.4B), Scroll ($0.3B), Starknet ($0.7B)
   - **Post-EIP-4844 Blob (2024-03)**: L2 transaction gas cost from $0.10 to $0.001, 100x reduction
   - **EIP-7691 (Pectra 2025-05)**: Blob target 3→6, max 6→9, L2 capacity doubled
   - **PeerDAS (Fusaka 2026-Q2)**: Blob capacity expanded 4-8x

2. **OP Stack Superchain**:
   - Concept: shared sequencing, shared bridging, shared governance
   - Members: Base (operated by Coinbase, 50M+ MAU), OP Mainnet, Zora, Mode, Worldcoin, Kinto
   - **OP Succinct (2025-Q1)**: Upgrades OP Stack to ZK fraud proof, finality reduced from 7 days to 1 hour

3. **ZK Rollup finality breakthroughs**:
   - **Polygon zkEVM**: Plonky3 proof, verification < 2s
   - **zkSync Era**: Boojum proof system, verification < 1s
   - **Linea**: Vortex proof, verification < 1s
   - **Starknet**: STARK Cairo, verification < 5s
   - **2026 trend**: ZKP proof time approaches L1 block time; users don't perceive "L2"

4. **Appchain rise**:
   - **dYdX v4** (2023-08): migrated from zk-rollup StarkEx to Cosmos appchain
   - **Berachain** (2025-Q1): PoL (Proof of Liquidity) consensus L1, TVL broke $5B
   - **Hyperliquid** (2024-Q4): self-built L1 + HyperBFT consensus, $500M+ daily volume
   - **Apex Protocol** (2025-Q1): Monad-based decentralized perpetuals

5. **L2-to-L2 bridge new paradigm**:
   - **Across Protocol**: intent bridge, 2-second arrival
   - **deBridge DLN**: cross-chain intent, 3-second arrival
   - **Stargate**: LayerZero-based unified liquidity bridge
   - **2026 projection**: L2 internal transfer speed will approach L1 internal transfer

### 🖥️ Real-world Example: CCBus Cross-Chain Swap (L2-Friendly Bridge)

CCBus's cross-chain swap is built on LayerZero / Wormhole / Stargate — a classic L2-era asset-flow scenario. Users bridge from Arbitrum to Base without ever touching L1.

![CCBus cross-chain swap, showing L2-to-L2 asset flow](../public/images/chapters/zh/cross-chain-swap.png)

*Figure 7-1: CCBus cross-chain swap. The 2026 L2-to-L2 bridge UI: the user sees only 'from chain A to chain B' — L1 is invisible.*

## 7.1 Scaling Problem Analysis

Blockchain faces scalability limitations due to the trilemma.

## 7.2 State Channels

**Lightning Network** (Bitcoin) and **Raiden** (Ethereum) enable off-chain transactions.

## 7.3 Sidechains

**Polygon** and **Liquid** are popular sidechain solutions.

## 7.4 Rollups

### Optimistic Rollups
- Assume transactions are valid by default
- Fraud proofs for disputes

### ZK-Rollups
- Zero-knowledge proofs for validity
- Immediate finality

## 7.5 Plasma and Validium

Child chains with different security trade-offs.

## 7.6 Scaling Solution Comparison

| Solution | TPS | Security | Decentralization |
|----------|-----|----------|------------------|
| State Channels | Very High | High | High |
| Sidechains | High | Medium | Medium |
| Optimistic Rollups | Medium-High | High | High |
| ZK-Rollups | High | Very High | High |

## 7.7 Future of Scaling

- **Sharding** - Parallel processing across multiple chains
- **Danksharding** - Ethereum's advanced sharding approach



### EIP-4844 Blob Math: Post-Pectra L2 Cost Model

EIP-4844 introduced in Cancun (2024-03) is the turning point of L2 economics. Understanding it requires examining three layers:

**Blob physical properties**:
- Each tx can attach max 6 blobs (target 3, max 6)
- Each blob ≈ 125 KB (actual 125.5 KB)
- Blob data expires in 18 days (4096 epoch ≈ 18.2 days)
- L1 contracts can only read blob metadata via `BLOBHASH` / `BLOBBASEFEE`, not blob contents
- Blob content verification is via data availability sampling (DAS) after EIP-7594 (PeerDAS, Fusaka 2026-Q2)

**Blob gas price dynamics**:
- Blob gas does NOT follow EIP-1559 base fee; it's independently adjusted
- When blob usage > 50%, blob base fee rises (similar to EIP-1559)
- When blob usage < 50%, blob base fee falls
- Adjustment coefficient 1.125 — every usage above 50% bumps price 12.5%

**Real L2 cost comparison**:

| Scenario | Pre-Cancun (calldata) | Post-Cancun (blob) | Post-Pectra (blob×2) |
|---|---|---|---|
| Single swap on Arbitrum | $0.10 | $0.001 | $0.0005 |
| 100 swap batch | $10 | $0.1 | $0.05 |
| NFT mint | $1.50 | $0.015 | $0.008 |
| Large transfer (>1M USDC) | $5 | $0.05 | $0.025 |

**Pectra upgrade (2025-05-07) L2 impact**:
- **EIP-7691**: blob target 3→6, max 6→9, L2 capacity doubled
- **EIP-7251**: validator max effective balance 32→2048 ETH, makes restaking protocols (EigenLayer, Symbiotic) potential security providers for L2
- **EIP-7702**: lets EOA temporarily upgrade to contract account, L2 users can batch operations on L1

**Fusaka upgrade (2026-Q2 planned) L2 impact**:
- **EIP-7594 (PeerDAS)**: nodes only need to download partial blob data + verify other nodes' commitments, L2 blob capacity expands 4-8x more
- **EIP-7883 (Modular exponentiation precompile)**: makes L2 on-chain ZKP verification cheaper
- **2027 prediction**: L2 single-tx cost drops to <$0.0001, approaching Web2 server cost

<div class="ccbus-teacher-credits">
  <div class="ccbus-teacher-credits-avatar">
    <img src="../public/images/avatars/heroes/chain-hopper.png" alt="Chain Hopper" />
  </div>
  <div class="ccbus-teacher-credits-body">
    Taught by: <strong>Chain Hopper</strong> — The L2 "test driver" — tries every Rollup for you<br />
    <span style="font-size: 0.85em; color: var(--vp-c-text-3);">📚 The next chapter [Chapter 8: Interoperability and Cross-Chain] will be taught by another CCBus guide.</span>
  </div>
</div>

<div class="chapter-footer">

### Key Takeaways
- Layer 2 solutions address scalability without compromising security
- Different solutions have different trade-offs
- Rollups are emerging as the preferred scaling approach

</div>

<div style="background: rgba(52, 81, 178, 0.06); padding: 1.5em; border-radius: 4px; margin: 2em 0;">
<svg class="svg-7-0" viewBox="0 0 700 450" xmlns="http://www.w3.org/2000/svg" style="width: 100%; max-width: 800px; display: block; margin: 0 auto;">
<defs>
<style>
      .svg-7-0 .tri-text-title { font-family: arial, sans-serif; font-size: 14px; fill: #1f2937; font-weight: bold; }
      .svg-7-0 .tri-text { font-family: arial, sans-serif; font-size: 10px; fill: #1f2937; }
      .svg-7-0 .tri-text-small { font-family: arial, sans-serif; font-size: 8px; fill: #1f2937; }
      .svg-7-0 .tri-line { stroke: #4c9be8; fill: none; stroke-width: 2; fill: none; }
      .svg-7-0 .tri-circle { fill: rgba(52, 81, 178, 0.15); stroke: #4c9be8; stroke-width: 2; }
      .svg-7-0 .tri-center { fill: rgba(223, 105, 25, 0.08); stroke: #df6919; stroke-width: 1.5; }
    </style>
</defs>
  <text class="tri-text-title" x="350" y="25" text-anchor="middle">BlockchainTrilemma (Blockchain Trilemma)</text>
  <line class="tri-line" x1="350" y1="100" x2="150" y2="350"/>
  <line class="tri-line" x1="350" y1="100" x2="550" y2="350"/>
  <line class="tri-line" x1="150" y1="350" x2="550" y2="350"/>
  <circle class="tri-circle" cx="350" cy="100" r="60"/>
  <text class="tri-text" x="350" y="90" text-anchor="middle" font-weight="bold">Decentralization</text>
  <text class="tri-text-small" x="350" y="105" text-anchor="middle">Decentralization</text>
  <text class="tri-text-small" x="350" y="125" text-anchor="middle">• Nodedist广泛</text>
  <text class="tri-text-small" x="350" y="138" text-anchor="middle">• Nonesingle pointcontrol</text>
  <text class="tri-text-small" x="350" y="151" text-anchor="middle">• censorship-resistant</text>
  <circle class="tri-circle" cx="150" cy="350" r="60"/>
  <text class="tri-text" x="150" y="340" text-anchor="middle" font-weight="bold">Security</text>
  <text class="tri-text-small" x="150" y="355" text-anchor="middle">Security</text>
  <text class="tri-text-small" x="150" y="375" text-anchor="middle">• preventDouble Spend</text>
  <text class="tri-text-small" x="150" y="388" text-anchor="middle">• 抗51%attack</text>
  <text class="tri-text-small" x="150" y="401" text-anchor="middle">• viaeconsafe</text>
  <circle class="tri-circle" cx="550" cy="350" r="60"/>
  <text class="tri-text" x="550" y="340" text-anchor="middle" font-weight="bold">Scalability</text>
  <text class="tri-text-small" x="550" y="355" text-anchor="middle">Scalability</text>
  <text class="tri-text-small" x="550" y="375" text-anchor="middle">• HighTPS</text>
  <text class="tri-text-small" x="550" y="388" text-anchor="middle">• Low Latency</text>
  <text class="tri-text-small" x="550" y="401" text-anchor="middle">• LowCost</text>
  <circle class="tri-center" cx="350" cy="260" r="45"/>
  <text class="tri-text-small" x="350" y="250" text-anchor="middle" font-weight="bold">idealState</text>
  <text class="tri-text-small" x="350" y="263" text-anchor="middle">threeagent兼顾</text>
  <text class="tri-text-small" x="350" y="276" text-anchor="middle">❌ hardpastimplement</text>
  <rect x="30" y="50" width="200" height="80" rx="4" fill="rgba(52, 81, 178, 0.07)" stroke="#4c9be8" stroke-width="1"/>
  <text class="tri-text" x="130" y="68" text-anchor="middle" font-weight="bold">Bitcoin</text>
  <text class="tri-text-small" x="40" y="83">✓ Decentralization: 15,000+Node</text>
  <text class="tri-text-small" x="40" y="96">✓ Security: PoWHighHashrate</text>
  <text class="tri-text-small" x="40" y="109">✗ Scalability: ~7 TPS</text>
  <text class="tri-text-small" x="40" y="122">  10minBlock Production</text>
  <rect x="470" y="50" width="200" height="80" rx="4" fill="rgba(92, 184, 92, 0.07)" stroke="#5cb85c" stroke-width="1"/>
  <text class="tri-text" x="570" y="68" text-anchor="middle" font-weight="bold">Solana</text>
  <text class="tri-text-small" x="480" y="83">✗ Decentralization: ~1900Node</text>
  <text class="tri-text-small" x="480" y="96">? Security: Manytimes宕machine</text>
  <text class="tri-text-small" x="480" y="109">✓ Scalability: ~3000 TPS</text>
  <text class="tri-text-small" x="480" y="122">  0.4secBlock Production</text>
  <rect x="30" y="420" width="640" height="20" rx="3" fill="rgba(223, 105, 25, 0.06)" stroke="#df6919" stroke-width="1"/>
  <text class="tri-text-small" x="350" y="434" text-anchor="middle" font-style="italic">Layer 2solution: atprotectsupportLayer 1Security&Decentralizationagreehour，willScalabilityproposerisetoLayer 2</text>
</svg>
</div>

<div style="background: rgba(52, 81, 178, 0.06); padding: 1.5em; border-radius: 4px; margin: 2em 0;">
<svg class="svg-7-1" viewBox="0 0 750 380" xmlns="http://www.w3.org/2000/svg" style="width: 100%; max-width: 800px; display: block; margin: 0 auto;">
<defs>
<style>
      .svg-7-1 .l2-text-title { font-family: arial, sans-serif; font-size: 14px; fill: #1f2937; font-weight: bold; }
      .svg-7-1 .l2-text { font-family: arial, sans-serif; font-size: 10px; fill: #1f2937; }
      .svg-7-1 .l2-text-small { font-family: arial, sans-serif; font-size: 8px; fill: #1f2937; }
      .svg-7-1 .l2-box-l1 { fill: rgba(223, 105, 25, 0.25); stroke: #df6919; stroke-width: 1.5; }
      .svg-7-1 .l2-box-l2 { fill: rgba(76, 156, 232, 0.25); stroke: #4c9be8; stroke-width: 1.5; }
      .svg-7-1 .l2-line { stroke: #5cb85c; fill: none; stroke-width: 1.2; stroke-dasharray: 4,2; }
    </style>
    <marker id="l2-arrow" markerWidth="8" markerHeight="8" refX="8" refY="4" orient="auto">
      <polygon points="0 0, 8 4, 0 8" fill="#5cb85c"/>
    </marker>
  </defs>
  <text class="l2-text-title" x="375" y="25" text-anchor="middle">Layer 2 Scalingminclass</text>
  <rect class="l2-box-l1" x="50" y="50" width="650" height="80" rx="4"/>
  <text class="l2-text" x="375" y="70" text-anchor="middle" font-weight="bold">Layer 1 (EthereumMainnet)</text>
  <text class="l2-text-small" x="60" y="90">• Security: PoSconsensus，Staking32 ETH × Validatorcount</text>
  <text class="l2-text-small" x="60" y="103">• Decentralization: ~800,000+ Validator</text>
  <text class="l2-text-small" x="60" y="116">• Performance: ~15-30 TPS, GasfeeHigh</text>
  <text class="l2-text-small" x="450" y="90">• workuse: DA + resultcalclayer + consensus</text>
  <text class="l2-text-small" x="450" y="103">• allL2InheritanceL1Security</text>
  <line class="l2-line" x1="375" y1="130" x2="375" y2="155" marker-end="url(#l2-arrow)"/>
  <rect class="l2-box-l2" x="50" y="155" width="650" height="205" rx="4"/>
  <text class="l2-text" x="375" y="175" text-anchor="middle" font-weight="bold">Layer 2 Scaling</text>
  <rect x="60" y="190" width="150" height="80" rx="3" fill="rgba(52, 81, 178, 0.07)" stroke="#4c9be8" stroke-width="1"/>
  <text class="l2-text" x="135" y="205" text-anchor="middle" font-weight="bold">Rollups</text>
  <text class="l2-text-small" x="70" y="220">✓ InheritanceL1Security</text>
  <text class="l2-text-small" x="70" y="233">• Optimistic Rollup</text>
  <text class="l2-text-small" x="75" y="245">  Arbitrum, Optimism</text>
  <text class="l2-text-small" x="70" y="257">• ZK Rollup</text>
  <text class="l2-text-small" x="75" y="268">  zkSync, StarkNet</text>
  <rect x="220" y="190" width="150" height="80" rx="3" fill="rgba(92, 184, 92, 0.07)" stroke="#5cb85c" stroke-width="1"/>
  <text class="l2-text" x="295" y="205" text-anchor="middle" font-weight="bold">State Channel</text>
  <text class="l2-text-small" x="230" y="220">✓ Instant Finality</text>
  <text class="l2-text-small" x="230" y="233">✓ LowCost</text>
  <text class="l2-text-small" x="230" y="245">• Lightning Network</text>
  <text class="l2-text-small" x="230" y="257">• Raiden Network</text>
  <text class="l2-text-small" x="230" y="268">✗ needlockdecidefunds</text>
  <rect x="380" y="190" width="150" height="80" rx="3" fill="rgba(223, 105, 25, 0.06)" stroke="#df6919" stroke-width="1"/>
  <text class="l2-text" x="455" y="205" text-anchor="middle" font-weight="bold">Sidechain</text>
  <text class="l2-text-small" x="390" y="220">✗ independentSecurity</text>
  <text class="l2-text-small" x="390" y="233">✓ High Perf.</text>
  <text class="l2-text-small" x="390" y="245">• Polygon PoS</text>
  <text class="l2-text-small" x="390" y="257">• Gnosis</text>
  <text class="l2-text-small" x="390" y="268">• Ronin (Axie Infinity)</text>
  <rect x="540" y="190" width="150" height="80" rx="3" fill="rgba(156, 89, 182, 0.15)" stroke="#9c59b6" stroke-width="1"/>
  <text class="l2-text" x="615" y="205" text-anchor="middle" font-weight="bold">Hybridsolution</text>
  <text class="l2-text-small" x="550" y="220">• Validium</text>
  <text class="l2-text-small" x="555" y="232">  ZKProof + chainDownDA</text>
  <text class="l2-text-small" x="550" y="245">• Plasma</text>
  <text class="l2-text-small" x="555" y="257">  earlyexpectsolution</text>
  <text class="l2-text-small" x="550" y="268">• Optimium</text>
  <rect x="60" y="285" width="630" height="65" rx="3" fill="rgba(92, 184, 92, 0.1)" stroke="#5cb85c" stroke-width="1"/>
  <text class="l2-text" x="375" y="303" text-anchor="middle" font-weight="bold">Layer 2 PerformanceCompare</text>
  <text class="l2-text-small" x="70" y="320">• TPS: 2,000 - 20,000+ (ratioL1proposerise100-1000x)</text>
  <text class="l2-text-small" x="70" y="333">• Gasfee: $0.01 - $0.5 (ratioL1dropLow100-1000x)</text>
  <text class="l2-text-small" x="430" y="320">• Confirmation Time: 1-2sec (UX)</text>
  <text class="l2-text-small" x="430" y="333">• L1Finalized: 7day(OP) / instant(ZK)</text>
</svg>
</div>

<div style="background: rgba(52, 81, 178, 0.06); padding: 1.5em; border-radius: 4px; margin: 2em 0;">
<svg class="svg-7-2" viewBox="0 0 750 520" xmlns="http://www.w3.org/2000/svg" style="width: 100%; max-width: 800px; display: block; margin: 0 auto;">
<defs>
<style>
      .svg-7-2 .op-text-title { font-family: arial, sans-serif; font-size: 14px; fill: #1f2937; font-weight: bold; }
      .svg-7-2 .op-text { font-family: arial, sans-serif; font-size: 10px; fill: #1f2937; }
      .svg-7-2 .op-text-small { font-family: arial, sans-serif; font-size: 8px; fill: #1f2937; }
      .svg-7-2 .op-box-step { fill: rgba(52, 81, 178, 0.10); stroke: #4c9be8; stroke-width: 1; }
      .svg-7-2 .op-box-challenge { fill: rgba(223, 105, 25, 0.08); stroke: #df6919; stroke-width: 1; }
      .svg-7-2 .op-line-flow { stroke: #4c9be8; fill: none; stroke-width: 1.5; stroke-dasharray: 3,2; }
      .svg-7-2 .op-circle-num { fill: rgba(92, 184, 92, 0.15); stroke: #5cb85c; stroke-width: 1; }
    </style>
    <marker id="op-arrow" markerWidth="8" markerHeight="8" refX="8" refY="4" orient="auto">
      <polygon points="0 0, 8 4, 0 8" fill="#4c9be8"/>
    </marker>
  </defs>
  <text class="op-text-title" x="375" y="25" text-anchor="middle">Optimistic Rollup workflowjourney</text>
  <rect class="op-box-step" x="30" y="50" width="330" height="90" rx="4"/>
  <circle class="op-circle-num" cx="50" cy="70" r="12"/>
  <text class="op-text" x="50" y="75" text-anchor="middle" font-weight="bold">1</text>
  <text class="op-text" x="70" y="70" font-weight="bold">L2TransactionExecute</text>
  <text class="op-text-small" x="70" y="88">• UseratL2Submit Tx</text>
  <text class="op-text-small" x="70" y="101">• SequencerOrdermergeExecute</text>
  <text class="op-text-small" x="70" y="114">• moreNewL2State</text>
  <text class="op-text-small" x="70" y="127">• instantfeedbackgiveUser (~1-2sec)</text>
  <line class="op-line-flow" x1="360" y1="95" x2="390" y2="95" marker-end="url(#op-arrow)"/>
  <rect class="op-box-step" x="390" y="50" width="330" height="90" rx="4"/>
  <circle class="op-circle-num" cx="410" cy="70" r="12"/>
  <text class="op-text" x="410" y="75" text-anchor="middle" font-weight="bold">2</text>
  <text class="op-text" x="430" y="70" font-weight="bold">approvemeasureCommittoL1</text>
  <text class="op-text-small" x="430" y="88">• SequencerdecideexpectBundle Tx</text>
  <text class="op-text-small" x="430" y="101">• CommitCompressionTransactionDatatoL1</text>
  <text class="op-text-small" x="430" y="114">• publishNewStateroot (State Root)</text>
  <text class="op-text-small" x="430" y="127">• freqlead: perhow manyminorperNpen nameTransaction</text>
  <line class="op-line-flow" x1="375" y1="140" x2="375" y2="165" marker-end="url(#op-arrow)"/>
  <rect class="op-box-challenge" x="30" y="165" width="690" height="110" rx="4"/>
  <circle class="op-circle-num" cx="50" cy="185" r="12"/>
  <text class="op-text" x="50" y="190" text-anchor="middle" font-weight="bold">3</text>
  <text class="op-text" x="70" y="185" font-weight="bold">Challengesexpect (Challenge Period)</text>
  <text class="op-text-small" x="70" y="203">• supportcontTime: 7day (Arbitrum/Optimism)</text>
  <text class="op-text-small" x="70" y="216">• AnyonecanpastChallengesNoneeffectStateroot</text>
  <text class="op-text-small" x="70" y="229">• ChallengerneedStakingprotectproofgold</text>
  <rect x="80" y="240" width="300" height="25" rx="3" fill="rgba(52, 81, 178, 0.07)" stroke="#4c9be8" stroke-width="1"/>
  <text class="op-text-small" x="90" y="257" font-weight="bold">thingconditionA: NoneChallenges → Stateblanketaccept ✓</text>
  <rect x="400" y="240" width="300" height="25" rx="3" fill="rgba(223, 105, 25, 0.06)" stroke="#df6919" stroke-width="1"/>
  <text class="op-text-small" x="410" y="257" font-weight="bold">thingconditionB: yesChallenges → EnterFraud Proof ↓</text>
  <line class="op-line-flow" x1="195" y1="275" x2="195" y2="300" marker-end="url(#op-arrow)"/>
  <line class="op-line-flow" x1="555" y1="275" x2="555" y2="300" marker-end="url(#op-arrow)"/>
  <rect class="op-box-step" x="30" y="300" width="330" height="90" rx="4"/>
  <circle class="op-circle-num" cx="50" cy="320" r="12"/>
  <text class="op-text" x="50" y="325" text-anchor="middle" font-weight="bold">4A</text>
  <text class="op-text" x="70" y="320" font-weight="bold">positiveoftenflow: withdraw</text>
  <text class="op-text-small" x="70" y="338">• 7daypost，StaterootFinalized</text>
  <text class="op-text-small" x="70" y="351">• UsercanpastwithdrawtoL1</text>
  <text class="op-text-small" x="70" y="364">• proposesupplyMerkle proofVerifyBalance</text>
  <text class="op-text-small" x="70" y="377">• L1Contractreleasefunds</text>
  <rect class="op-box-challenge" x="390" y="300" width="330" height="90" rx="4"/>
  <circle class="op-circle-num" cx="410" cy="320" r="12"/>
  <text class="op-text" x="410" y="325" text-anchor="middle" font-weight="bold">4B</text>
  <text class="op-text" x="430" y="320" font-weight="bold">Fraud Proof (Fraud Proof)</text>
  <text class="op-text-small" x="430" y="338">• L1chainUpheavyputyes争suggestTransaction</text>
  <text class="op-text-small" x="430" y="351">• twominsearchlocateerrorstep</text>
  <text class="op-text-small" x="430" y="364">• judgedecide: Challengervs → RollbackState</text>
  <text class="op-text-small" x="430" y="377">• judgedecide: Sequencervs → PenaltyChallenger</text>
  <rect x="30" y="410" width="690" height="90" rx="4" fill="rgba(92, 184, 92, 0.1)" stroke="#5cb85c" stroke-width="1"/>
  <text class="op-text" x="375" y="428" text-anchor="middle" font-weight="bold">Optimistic Rollup corePros</text>
  <text class="op-text-small" x="40" y="448">✓ EVMGood Compat: devagentcanstraightreceivemigrateEthereumContract</text>
  <text class="op-text-small" x="40" y="461">✓ DA: allTransactionDatapublishtoL1，AnyonecanVerify</text>
  <text class="op-text-small" x="40" y="474">✓ Security: InheritanceL1Security，oddHonestValidatori.e.canprotectproofpositiveexactnature</text>
  <text class="op-text-small" x="40" y="487">✗ withdrawlatency: 7dayChallengesexpect（canpassthirdplaceFastfastBridgesolve）</text>
</svg>
</div>

<div style="background: rgba(52, 81, 178, 0.06); padding: 1.5em; border-radius: 4px; margin: 2em 0;">
<svg class="svg-7-3" viewBox="0 0 750 480" xmlns="http://www.w3.org/2000/svg" style="width: 100%; max-width: 800px; display: block; margin: 0 auto;">
<defs>
<style>
      .svg-7-3 .zk-text-title { font-family: arial, sans-serif; font-size: 14px; fill: #1f2937; font-weight: bold; }
      .svg-7-3 .zk-text { font-family: arial, sans-serif; font-size: 10px; fill: #1f2937; }
      .svg-7-3 .zk-text-small { font-family: arial, sans-serif; font-size: 8px; fill: #1f2937; }
      .svg-7-3 .zk-box-step { fill: rgba(52, 81, 178, 0.10); stroke: #4c9be8; stroke-width: 1; }
      .svg-7-3 .zk-box-proof { fill: rgba(92, 184, 92, 0.10); stroke: #5cb85c; stroke-width: 1; }
      .svg-7-3 .zk-line-flow { stroke: #4c9be8; fill: none; stroke-width: 1.5; stroke-dasharray: 3,2; }
      .svg-7-3 .zk-circle-num { fill: rgba(223, 105, 25, 0.12); stroke: #df6919; stroke-width: 1; }
    </style>
    <marker id="zk-arrow" markerWidth="8" markerHeight="8" refX="8" refY="4" orient="auto">
      <polygon points="0 0, 8 4, 0 8" fill="#4c9be8"/>
    </marker>
  </defs>
  <text class="zk-text-title" x="375" y="25" text-anchor="middle">ZK Rollup workflowjourney</text>
  <rect class="zk-box-step" x="30" y="50" width="330" height="90" rx="4"/>
  <circle class="zk-circle-num" cx="50" cy="70" r="12"/>
  <text class="zk-text" x="50" y="75" text-anchor="middle" font-weight="bold">1</text>
  <text class="zk-text" x="70" y="70" font-weight="bold">L2TransactionExecute</text>
  <text class="zk-text-small" x="70" y="88">• User SubmitstoL2</text>
  <text class="zk-text-small" x="70" y="101">• SequencerapprovemeasureprocessTransaction</text>
  <text class="zk-text-small" x="70" y="114">• moreNewL2Statetree</text>
  <text class="zk-text-small" x="70" y="127">• instantUserfeedback</text>
  <line class="zk-line-flow" x1="360" y1="95" x2="390" y2="95" marker-end="url(#zk-arrow)"/>
  <rect class="zk-box-step" x="390" y="50" width="330" height="90" rx="4"/>
  <circle class="zk-circle-num" cx="410" cy="70" r="12"/>
  <text class="zk-text" x="410" y="75" text-anchor="middle" font-weight="bold">2</text>
  <text class="zk-text" x="430" y="70" font-weight="bold">generateZKP</text>
  <text class="zk-text-small" x="430" y="88">• ProverCollectapprovetimesTransaction</text>
  <text class="zk-text-small" x="430" y="101">• CalcStateconvertswapProof</text>
  <text class="zk-text-small" x="430" y="114">• generateZK-SNARK/STARKProof</text>
  <text class="zk-text-small" x="430" y="127">• ProofLargeSmall: how manyKB (Compression)</text>
  <line class="zk-line-flow" x1="375" y1="140" x2="375" y2="165" marker-end="url(#zk-arrow)"/>
  <rect class="zk-box-proof" x="30" y="165" width="690" height="100" rx="4"/>
  <circle class="zk-circle-num" cx="50" cy="185" r="12"/>
  <text class="zk-text" x="50" y="190" text-anchor="middle" font-weight="bold">3</text>
  <text class="zk-text" x="70" y="185" font-weight="bold">CommitProoftoL1</text>
  <text class="zk-text-small" x="70" y="203">• willProof + NewStaterootpublishtoL1</text>
  <text class="zk-text-small" x="70" y="216">• L1Smart ContractVerifyProof</text>
  <text class="zk-text-small" x="70" y="229">• VerifyTime: how manyms (chainUp)</text>
  <text class="zk-text-small" x="70" y="242">• VerifyCost: ~400k Gas (SNARK) / ~2M Gas (STARK)</text>
  <rect x="80" y="250" width="300" height="8" rx="2" fill="rgba(92, 184, 92, 0.4)"/>
  <text class="zk-text-small" x="230" y="258" text-anchor="middle">evenschoolVerify (Noneneedtrust)</text>
  <rect x="400" y="250" width="300" height="8" rx="2" fill="rgba(76, 156, 232, 0.4)"/>
  <text class="zk-text-small" x="550" y="258" text-anchor="middle">Instant Finality</text>
  <line class="zk-line-flow" x1="375" y1="265" x2="375" y2="290" marker-end="url(#zk-arrow)"/>
  <rect class="zk-box-step" x="30" y="290" width="690" height="80" rx="4"/>
  <circle class="zk-circle-num" cx="50" cy="310" r="12"/>
  <text class="zk-text" x="50" y="315" text-anchor="middle" font-weight="bold">4</text>
  <text class="zk-text" x="70" y="310" font-weight="bold">StateFinalized & withdraw</text>
  <text class="zk-text-small" x="70" y="328">• ProofVerifypass → Staterootblanketaccept</text>
  <text class="zk-text-small" x="70" y="341">• ❌ NoneneedChallengesexpect！Usercanstandi.e.withdraw</text>
  <text class="zk-text-small" x="70" y="354">• withdrawtoL1: ~20min (etc.treatL1BlockConfirm)</text>
  <text class="zk-text-small" x="400" y="328">• DA: TransactionDatapublishtoL1</text>
  <text class="zk-text-small" x="400" y="341">• Fully: AnyonecanheavysuggestState</text>
  <rect x="30" y="390" width="690" height="70" rx="4" fill="rgba(223, 105, 25, 0.05)" stroke="#df6919" stroke-width="1"/>
  <text class="zk-text" x="375" y="408" text-anchor="middle" font-weight="bold">ZK Rollup vs Optimistic Rollup</text>
  <text class="zk-text-small" x="40" y="426">ZK: ✓ instantwithdraw ✓ moreHighSecurity ✗ generateProofCostHigh ✗ EVMcompathard</text>
  <text class="zk-text-small" x="40" y="439">OP: ✓ EVMcompatgood ✓ devsimple ✗ 7daywithdrawexpect ✗ needaliveleapValidator</text>
  <text class="zk-text-small" x="40" y="452">trend: ZKTechFastfastinputstep，EVMcompatnaturechangegood (zkEVM)</text>
</svg>
</div>

<div style="background: rgba(52, 81, 178, 0.06); padding: 1.5em; border-radius: 4px; margin: 2em 0;">
<svg class="svg-7-4" viewBox="0 0 700 420" xmlns="http://www.w3.org/2000/svg" style="width: 100%; max-width: 800px; display: block; margin: 0 auto;">
<defs>
<style>
      .svg-7-4 .zkp-text-title { font-family: arial, sans-serif; font-size: 14px; fill: #1f2937; font-weight: bold; }
      .svg-7-4 .zkp-text { font-family: arial, sans-serif; font-size: 10px; fill: #1f2937; }
      .svg-7-4 .zkp-text-small { font-family: arial, sans-serif; font-size: 8px; fill: #1f2937; }
      .svg-7-4 .zkp-box-project { fill: rgba(52, 81, 178, 0.10); stroke: #4c9be8; stroke-width: 1; }
    </style>
</defs>
  <text class="zkp-text-title" x="350" y="25" text-anchor="middle">Primaryflow ZK Rollup projectCompare</text>
  <rect class="zkp-box-project" x="30" y="50" width="200" height="160" rx="4"/>
  <text class="zkp-text" x="130" y="70" text-anchor="middle" font-weight="bold">zkSync Era</text>
  <text class="zkp-text-small" x="40" y="88">Type: Type 4 zkEVM</text>
  <text class="zkp-text-small" x="40" y="101">Proof: PLONK</text>
  <text class="zkp-text-small" x="40" y="114">Solidity → zkSync VM</text>
  <text class="zkp-text-small" x="40" y="127">Features: </text>
  <text class="zkp-text-small" x="45" y="140">• AA</text>
  <text class="zkp-text-small" x="45" y="153">• nativePaymaster</text>
  <text class="zkp-text-small" x="45" y="166">• HighPerf Opt</text>
  <text class="zkp-text-small" x="40" y="182">TPS: ~2000</text>
  <text class="zkp-text-small" x="40" y="195">TVL: ~$500M</text>
  <rect class="zkp-box-project" x="250" y="50" width="200" height="160" rx="4"/>
  <text class="zkp-text" x="350" y="70" text-anchor="middle" font-weight="bold">StarkNet</text>
  <text class="zkp-text-small" x="260" y="88">Type: Type 4 (Cairo VM)</text>
  <text class="zkp-text-small" x="260" y="101">Proof: ZK-STARK</text>
  <text class="zkp-text-small" x="260" y="114">language: Cairo (dedicated)</text>
  <text class="zkp-text-small" x="260" y="127">Features:</text>
  <text class="zkp-text-small" x="265" y="140">• NoneneedTrusted Setup</text>
  <text class="zkp-text-small" x="265" y="153">• 抗Quantum Computing</text>
  <text class="zkp-text-small" x="265" y="166">• nativeAA</text>
  <text class="zkp-text-small" x="260" y="182">TPS: ~1000</text>
  <text class="zkp-text-small" x="260" y="195">TVL: ~$1B</text>
  <rect class="zkp-box-project" x="470" y="50" width="200" height="160" rx="4"/>
  <text class="zkp-text" x="570" y="70" text-anchor="middle" font-weight="bold">Polygon zkEVM</text>
  <text class="zkp-text-small" x="480" y="88">Type: Type 2 zkEVM</text>
  <text class="zkp-text-small" x="480" y="101">Proof: ZK-SNARK</text>
  <text class="zkp-text-small" x="480" y="114">language: Solidity (fullycompat)</text>
  <text class="zkp-text-small" x="480" y="127">Features:</text>
  <text class="zkp-text-small" x="485" y="140">• mostgoodEVMcompat</text>
  <text class="zkp-text-small" x="485" y="153">• easyinmigrate</text>
  <text class="zkp-text-small" x="485" y="166">• Polygoneco</text>
  <text class="zkp-text-small" x="480" y="182">TPS: ~2000</text>
  <text class="zkp-text-small" x="480" y="195">TVL: ~$200M</text>
  <rect class="zkp-box-project" x="30" y="230" width="200" height="160" rx="4"/>
  <text class="zkp-text" x="130" y="250" text-anchor="middle" font-weight="bold">Scroll</text>
  <text class="zkp-text-small" x="40" y="268">Type: Type 2 zkEVM</text>
  <text class="zkp-text-small" x="40" y="281">Proof: ZK-SNARK (Halo2)</text>
  <text class="zkp-text-small" x="40" y="294">Solidity (Bytecode Compat)</text>
  <text class="zkp-text-small" x="40" y="307">Features:</text>
  <text class="zkp-text-small" x="45" y="320">• Bytecodegradecompat</text>
  <text class="zkp-text-small" x="45" y="333">• DecentralizationProverNetwork</text>
  <text class="zkp-text-small" x="45" y="346">• beginsourcezkEVM</text>
  <text class="zkp-text-small" x="40" y="362">TPS: ~1500</text>
  <text class="zkp-text-small" x="40" y="375">TVL: ~$300M</text>
  <rect class="zkp-box-project" x="250" y="230" width="200" height="160" rx="4"/>
  <text class="zkp-text" x="350" y="250" text-anchor="middle" font-weight="bold">Linea</text>
  <text class="zkp-text-small" x="260" y="268">Type: Type 2 zkEVM</text>
  <text class="zkp-text-small" x="260" y="281">Proof: ZK-SNARK (Lattice)</text>
  <text class="zkp-text-small" x="260" y="294">language: Solidity</text>
  <text class="zkp-text-small" x="260" y="307">Features:</text>
  <text class="zkp-text-small" x="265" y="320">• ConsenSysdev</text>
  <text class="zkp-text-small" x="265" y="333">• MetaMaskcollectcomplete</text>
  <text class="zkp-text-small" x="265" y="346">• EnterprisegradeSupport</text>
  <text class="zkp-text-small" x="260" y="362">TPS: ~2000</text>
  <text class="zkp-text-small" x="260" y="375">TVL: ~$800M</text>
  <rect class="zkp-box-project" x="470" y="230" width="200" height="160" rx="4"/>
  <text class="zkp-text" x="570" y="250" text-anchor="middle" font-weight="bold">Taiko</text>
  <text class="zkp-text-small" x="480" y="268">Type: Type 1 zkEVM</text>
  <text class="zkp-text-small" x="480" y="281">Proof: ZK-SNARK</text>
  <text class="zkp-text-small" x="480" y="294">language: fullyEthereumetc.price</text>
  <text class="zkp-text-small" x="480" y="307">Features:</text>
  <text class="zkp-text-small" x="485" y="320">• 100%Ethereumcompat</text>
  <text class="zkp-text-small" x="485" y="333">• DecentralizationSequencer</text>
  <text class="zkp-text-small" x="485" y="346">• Based Rollup</text>
  <text class="zkp-text-small" x="480" y="362">TPS: ~150 (ProofSlow)</text>
  <text class="zkp-text-small" x="480" y="375">TVL: ~$100M</text>
</svg>
</div>

<div style="background: rgba(52, 81, 178, 0.06); padding: 1.5em; border-radius: 4px; margin: 2em 0;">
<svg class="svg-7-5" viewBox="0 0 750 500" xmlns="http://www.w3.org/2000/svg" style="width: 100%; max-width: 800px; display: block; margin: 0 auto;">
<defs>
<style>
      .svg-7-5 .eco-text-title { font-family: arial, sans-serif; font-size: 14px; fill: #1f2937; font-weight: bold; }
      .svg-7-5 .eco-text { font-family: arial, sans-serif; font-size: 9px; fill: #1f2937; }
      .svg-7-5 .eco-text-small { font-family: arial, sans-serif; font-size: 7px; fill: #1f2937; }
      .svg-7-5 .eco-header { fill: rgba(52, 81, 178, 0.15); }
      .svg-7-5 .eco-cell { fill: rgba(52, 81, 178, 0.04); }
      .svg-7-5 .eco-line { stroke: #4c9be8; stroke-width: 1; fill: none; }
    </style>
</defs>
  <text class="eco-text-title" x="375" y="25" text-anchor="middle">Layer 2 solutionwholesurfaceCompare</text>
  <rect class="eco-header" x="30" y="45" width="100" height="30"/>
  <text class="eco-text" x="80" y="64" text-anchor="middle" font-weight="bold">Dimension</text>
  <rect class="eco-header" x="130" y="45" width="120" height="30"/>
  <text class="eco-text" x="190" y="64" text-anchor="middle" font-weight="bold">Optimistic Rollup</text>
  <rect class="eco-header" x="250" y="45" width="120" height="30"/>
  <text class="eco-text" x="310" y="64" text-anchor="middle" font-weight="bold">ZK Rollup</text>
  <rect class="eco-header" x="370" y="45" width="120" height="30"/>
  <text class="eco-text" x="430" y="64" text-anchor="middle" font-weight="bold">Validium</text>
  <rect class="eco-header" x="490" y="45" width="120" height="30"/>
  <text class="eco-text" x="550" y="64" text-anchor="middle" font-weight="bold">Plasma</text>
  <rect class="eco-header" x="610" y="45" width="120" height="30"/>
  <text class="eco-text" x="670" y="64" text-anchor="middle" font-weight="bold">Sidechain</text>
  <rect class="eco-header" x="30" y="75" width="100" height="25"/>
  <text class="eco-text-small" x="80" y="91" text-anchor="middle">DA</text>
  <rect class="eco-cell" x="130" y="75" width="120" height="25"/>
  <text class="eco-text-small" x="190" y="91" text-anchor="middle">L1 ✓</text>
  <rect class="eco-cell" x="250" y="75" width="120" height="25"/>
  <text class="eco-text-small" x="310" y="91" text-anchor="middle">L1 ✓</text>
  <rect class="eco-cell" x="370" y="75" width="120" height="25"/>
  <text class="eco-text-small" x="430" y="91" text-anchor="middle">chainDown</text>
  <rect class="eco-cell" x="490" y="75" width="120" height="25"/>
  <text class="eco-text-small" x="550" y="91" text-anchor="middle">chainDown</text>
  <rect class="eco-cell" x="610" y="75" width="120" height="25"/>
  <text class="eco-text-small" x="670" y="91" text-anchor="middle">independentchain</text>
  <line class="eco-line" x1="30" y1="75" x2="730" y2="75"/>
  <rect class="eco-header" x="30" y="100" width="100" height="25"/>
  <text class="eco-text-small" x="80" y="116" text-anchor="middle">Validity Proof</text>
  <rect class="eco-cell" x="130" y="100" width="120" height="25"/>
  <text class="eco-text-small" x="190" y="116" text-anchor="middle">Fraud Proof</text>
  <rect class="eco-cell" x="250" y="100" width="120" height="25"/>
  <text class="eco-text-small" x="310" y="116" text-anchor="middle">ZKProof ✓</text>
  <rect class="eco-cell" x="370" y="100" width="120" height="25"/>
  <text class="eco-text-small" x="430" y="116" text-anchor="middle">ZKProof ✓</text>
  <rect class="eco-cell" x="490" y="100" width="120" height="25"/>
  <text class="eco-text-small" x="550" y="116" text-anchor="middle">Fraud Proof</text>
  <rect class="eco-cell" x="610" y="100" width="120" height="25"/>
  <text class="eco-text-small" x="670" y="116" text-anchor="middle">independentconsensus</text>
  <line class="eco-line" x1="30" y1="100" x2="730" y2="100"/>
  <rect class="eco-header" x="30" y="125" width="100" height="25"/>
  <text class="eco-text-small" x="80" y="141" text-anchor="middle">Security</text>
  <rect class="eco-cell" x="130" y="125" width="120" height="25"/>
  <text class="eco-text-small" x="190" y="141" text-anchor="middle">InheritanceL1 ✓</text>
  <rect class="eco-cell" x="250" y="125" width="120" height="25"/>
  <text class="eco-text-small" x="310" y="141" text-anchor="middle">InheritanceL1 ✓</text>
  <rect class="eco-cell" x="370" y="125" width="120" height="25"/>
  <text class="eco-text-small" x="430" y="141" text-anchor="middle">Data委员can</text>
  <rect class="eco-cell" x="490" y="125" width="120" height="25"/>
  <text class="eco-text-small" x="550" y="141" text-anchor="middle">Operationsagent</text>
  <rect class="eco-cell" x="610" y="125" width="120" height="25"/>
  <text class="eco-text-small" x="670" y="141" text-anchor="middle">independentValidator</text>
  <line class="eco-line" x1="30" y1="125" x2="730" y2="125"/>
  <rect class="eco-header" x="30" y="150" width="100" height="25"/>
  <text class="eco-text-small" x="80" y="166" text-anchor="middle">withdrawTime</text>
  <rect class="eco-cell" x="130" y="150" width="120" height="25"/>
  <text class="eco-text-small" x="190" y="166" text-anchor="middle">7day</text>
  <rect class="eco-cell" x="250" y="150" width="120" height="25"/>
  <text class="eco-text-small" x="310" y="166" text-anchor="middle">~1Smallhour ✓</text>
  <rect class="eco-cell" x="370" y="150" width="120" height="25"/>
  <text class="eco-text-small" x="430" y="166" text-anchor="middle">~1Smallhour</text>
  <rect class="eco-cell" x="490" y="150" width="120" height="25"/>
  <text class="eco-text-small" x="550" y="166" text-anchor="middle">7day</text>
  <rect class="eco-cell" x="610" y="150" width="120" height="25"/>
  <text class="eco-text-small" x="670" y="166" text-anchor="middle">Fastfast</text>
  <line class="eco-line" x1="30" y1="150" x2="730" y2="150"/>
  <rect class="eco-header" x="30" y="175" width="100" height="25"/>
  <text class="eco-text-small" x="80" y="191" text-anchor="middle">TPS</text>
  <rect class="eco-cell" x="130" y="175" width="120" height="25"/>
  <text class="eco-text-small" x="190" y="191" text-anchor="middle">2000-4000</text>
  <rect class="eco-cell" x="250" y="175" width="120" height="25"/>
  <text class="eco-text-small" x="310" y="191" text-anchor="middle">2000-5000</text>
  <rect class="eco-cell" x="370" y="175" width="120" height="25"/>
  <text class="eco-text-small" x="430" y="191" text-anchor="middle">5000-10000 ✓</text>
  <rect class="eco-cell" x="490" y="175" width="120" height="25"/>
  <text class="eco-text-small" x="550" y="191" text-anchor="middle">~1000</text>
  <rect class="eco-cell" x="610" y="175" width="120" height="25"/>
  <text class="eco-text-small" x="670" y="191" text-anchor="middle">5000-10000 ✓</text>
  <line class="eco-line" x1="30" y1="175" x2="730" y2="175"/>
  <rect class="eco-header" x="30" y="200" width="100" height="25"/>
  <text class="eco-text-small" x="80" y="216" text-anchor="middle">GasCost</text>
  <rect class="eco-cell" x="130" y="200" width="120" height="25"/>
  <text class="eco-text-small" x="190" y="216" text-anchor="middle">$0.1-0.5</text>
  <rect class="eco-cell" x="250" y="200" width="120" height="25"/>
  <text class="eco-text-small" x="310" y="216" text-anchor="middle">$0.05-0.2 ✓</text>
  <rect class="eco-cell" x="370" y="200" width="120" height="25"/>
  <text class="eco-text-small" x="430" y="216" text-anchor="middle">$0.001-0.01 ✓</text>
  <rect class="eco-cell" x="490" y="200" width="120" height="25"/>
  <text class="eco-text-small" x="550" y="216" text-anchor="middle">$0.01-0.1</text>
  <rect class="eco-cell" x="610" y="200" width="120" height="25"/>
  <text class="eco-text-small" x="670" y="216" text-anchor="middle">$0.001-0.01 ✓</text>
  <line class="eco-line" x1="30" y1="200" x2="730" y2="200"/>
  <rect class="eco-header" x="30" y="225" width="100" height="25"/>
  <text class="eco-text-small" x="80" y="241" text-anchor="middle">EVMcompat</text>
  <rect class="eco-cell" x="130" y="225" width="120" height="25"/>
  <text class="eco-text-small" x="190" y="241" text-anchor="middle">fully ✓</text>
  <rect class="eco-cell" x="250" y="225" width="120" height="25"/>
  <text class="eco-text-small" x="310" y="241" text-anchor="middle">High-fully</text>
  <rect class="eco-cell" x="370" y="225" width="120" height="25"/>
  <text class="eco-text-small" x="430" y="241" text-anchor="middle">High</text>
  <rect class="eco-cell" x="490" y="225" width="120" height="25"/>
  <text class="eco-text-small" x="550" y="241" text-anchor="middle">Limited</text>
  <rect class="eco-cell" x="610" y="225" width="120" height="25"/>
  <text class="eco-text-small" x="670" y="241" text-anchor="middle">fully ✓</text>
  <line class="eco-line" x1="30" y1="225" x2="730" y2="225"/>
  <rect class="eco-header" x="30" y="250" width="100" height="25"/>
  <text class="eco-text-small" x="80" y="266" text-anchor="middle">Techcomplexmeasure</text>
  <rect class="eco-cell" x="130" y="250" width="120" height="25"/>
  <text class="eco-text-small" x="190" y="266" text-anchor="middle">Medium</text>
  <rect class="eco-cell" x="250" y="250" width="120" height="25"/>
  <text class="eco-text-small" x="310" y="266" text-anchor="middle">High</text>
  <rect class="eco-cell" x="370" y="250" width="120" height="25"/>
  <text class="eco-text-small" x="430" y="266" text-anchor="middle">High</text>
  <rect class="eco-cell" x="490" y="250" width="120" height="25"/>
  <text class="eco-text-small" x="550" y="266" text-anchor="middle">Medium</text>
  <rect class="eco-cell" x="610" y="250" width="120" height="25"/>
  <text class="eco-text-small" x="670" y="266" text-anchor="middle">Low-Medium</text>
  <line class="eco-line" x1="30" y1="250" x2="730" y2="250"/>
  <rect class="eco-header" x="30" y="275" width="100" height="30"/>
  <text class="eco-text-small" x="80" y="291" text-anchor="middle" font-weight="bold">Examples</text>
  <rect class="eco-cell" x="130" y="275" width="120" height="30"/>
  <text class="eco-text-small" x="190" y="285" text-anchor="middle">Arbitrum</text>
  <text class="eco-text-small" x="190" y="297" text-anchor="middle">Optimism, Base</text>
  <rect class="eco-cell" x="250" y="275" width="120" height="30"/>
  <text class="eco-text-small" x="310" y="285" text-anchor="middle">zkSync Era</text>
  <text class="eco-text-small" x="310" y="297" text-anchor="middle">StarkNet, Scroll</text>
  <rect class="eco-cell" x="370" y="275" width="120" height="30"/>
  <text class="eco-text-small" x="430" y="285" text-anchor="middle">StarkEx</text>
  <text class="eco-text-small" x="430" y="297" text-anchor="middle">Immutable X</text>
  <rect class="eco-cell" x="490" y="275" width="120" height="30"/>
  <text class="eco-text-small" x="550" y="285" text-anchor="middle">OMG Network</text>
  <text class="eco-text-small" x="550" y="297" text-anchor="middle">(alreadywasheliminate)</text>
  <rect class="eco-cell" x="610" y="275" width="120" height="30"/>
  <text class="eco-text-small" x="670" y="285" text-anchor="middle">Polygon PoS</text>
  <text class="eco-text-small" x="670" y="297" text-anchor="middle">Gnosis, Ronin</text>
  <rect x="30" y="320" width="700" height="70" rx="4" fill="rgba(223, 105, 25, 0.05)" stroke="#df6919" stroke-width="1"/>
  <text class="eco-text" x="380" y="338" text-anchor="middle" font-weight="bold">Choosesuggestsuggest</text>
  <text class="eco-text-small" x="40" y="353">• generalDApp: Optimistic Rollup (matureeco) or zkEVM (longexpect)</text>
  <text class="eco-text-small" x="40" y="366">• NFT/Gaming: Validium (Immutable X) or Sidechain (Polygon)</text>
  <text class="eco-text-small" x="40" y="379">• DeFi: ZK Rollup (Security) or Optimistic (Liquidity)</text>
  <rect x="30" y="405" width="700" height="75" rx="4" fill="rgba(52, 81, 178, 0.05)" stroke="#4c9be8" stroke-width="1"/>
  <text class="eco-text" x="380" y="423" text-anchor="middle" font-weight="bold">TVL rowname (2025year start)</text>
  <text class="eco-text-small" x="40" y="440">1. Arbitrum One: ~$10B  |  2. Optimism: ~$7B  |  3. Polygon PoS: ~$5B</text>
  <text class="eco-text-small" x="40" y="453">4. Base: ~$3B  |  5. Blast: ~$2B  |  6. StarkNet: ~$1B  |  7. Linea: ~$800M</text>
  <text class="eco-text-small" x="40" y="466">8. zkSync Era: ~$500M  |  9. Scroll: ~$300M  |  10. Polygon zkEVM: ~$200M</text>
</svg>
</div>
