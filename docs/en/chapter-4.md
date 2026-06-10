---
title: "Chapter 4: Consensus Mechanisms"
---

<div class="ccbus-hero">
  <div class="ccbus-hero-avatar">
    <img src="../public/images/avatars/heroes/captain-ccbus.png" alt="Captain CCBus" />
  </div>
  <div class="ccbus-hero-content">
    <h1>Chapter 4: Consensus Mechanisms</h1>
    <div class="ccbus-teacher-label">🎙️ Taught by:<strong>Captain CCBus</strong> · The "dispatching supervisor" of consensus</div>
  </div>
</div>

<div class="chapter-intro">
  <p><strong>Chapter Introduction</strong></p>
  <p>Consensus mechanisms are the core of blockchain, ensuring all nodes in a distributed network agree on the ledger state. This chapter explores in depth the working principles, pros and cons of mainstream consensus mechanisms, and their applications in different blockchain systems.</p>
  <p><strong>Learning Objectives:</strong></p>
  <ul>
    <li>Understand the essence and importance of consensus mechanisms</li>
    <li>Master mainstream consensus algorithms like PoW, PoS, DPoS</li>
    <li>Learn about the Byzantine Fault Tolerance problem and its solutions</li>
    <li>Compare performance and security of different consensus mechanisms</li>
    <li>Recognize trends in consensus mechanism development</li>
  </ul>
</div>


## 4.0 2025-2026 Perspective: Why Reread This Chapter

Consensus mechanisms in 2025-2026 have moved past the "PoW vs PoS binary debate" into a **multi-polar coexistence + shared security + modular consensus** landscape. Core changes you need to internalize in this chapter:

1. **PoS dominates L1, PoW retreats to BTC + a few new chains**:
   - **Ethereum** (PoS since 2022) holds 58% of crypto total market TVL; beacon chain holds 105M ETH
   - **BNB Chain** (PoSA = PoS + Authority) processes 6M+ daily transactions
   - **Solana** (PoH + PoS + Tower BFT) measured TPS 3000+
   - **Bitcoin** (PoW) hasn't upgraded consensus but indirectly integrates PoS economics via Babylon, BitVM L2s

2. **Restaking + shared security rise**:
   - **EigenLayer** (mainnet 2023-06) TVL broke $20B; allows restaking ETH to secure other AVS (Actively Validated Services)
   - **Symbiotic** (2024-09) cross-chain restaking protocol
   - **Karak** (2024-Q3) integrated with Mantle, DSRV
   - **EigenLayer AVS ecosystem**: cross-chain bridges (LayerZero AVS), data availability (EigenDA), oracles (Chainlink CRE), AI inference (0G Labs)

3. **DAG consensus and parallel execution progress**:
   - **Aptos, Sui, Movement** use Block-STM parallel execution engine, TPS 160k+
   - **Monad** (launching 2025-10) uses MonadBFT + optimistic parallel, TPS 10k
   - **Sei V2** (2024-Q4) parallelized EVM chain

4. **New attack vectors based on staking economics**:
   - **Long-range attack**: PoS chain history can theoretically be rewritten to recover keys
   - **Sandwich on validator selection**: predictability of validator selection algorithm exploited
   - **MEV-Boost / centralized MEV relay**: Flashbots' mev-boost occupies 90% of Ethereum blocks

5. **The consensus impossible triangle is partially broken in 2026**:
   - The traditional **decentralization × security × scalability** impossible triangle, after DA-layer separation, allows each dimension to scale independently
   - **Celestia + DA layer** lets execution layers independently pursue high TPS; DA layer provides security via PoS
   - **EigenLayer + AVS** makes reusing security as easy as "renting cloud services"

### 🖥️ Real-world Example: CCBus's Multi-Chain Consensus Layer

CCBus simultaneously supports BNB Chain (PoSA), Solana (PoH+PoS), Base (OP-Stack), Arbitrum (AnyTrust), and 10+ other chains. Every token issuance, liquidity addition, and cross-chain bridge operation touches a different consensus. The screenshot below shows CCBus's market overview aggregating real-time data across multiple chains.

![CCBus market overview showing live multi-chain consensus data aggregation](../public/images/chapters/zh/market-overview.png)

*Figure 4-1: CCBus market overview. This is a real-world view of PoS + OP Stack + zkEVM + Solana coexisting — a single frontend subscribing to finality and reorg events on a dozen chains.*

## 4.1 What is a Consensus Mechanism?

A **Consensus Mechanism** is the process and algorithm by which multiple nodes in a distributed system reach agreement on a proposal or state. In blockchain networks, consensus mechanisms solve how to achieve consensus on transaction order and blockchain state without central authority.

### Core Goals of Consensus Mechanisms

<div style="background: rgba(52, 81, 178, 0.06); padding: 1.5em; border-radius: 4px; margin: 2em 0;">
<svg class="svg-4-0" viewBox="0 0 700 400" xmlns="http://www.w3.org/2000/svg" style="width: 100%; max-width: 800px; display: block; margin: 0 auto;">
<defs>
<style>
      .svg-4-0 .cons-text-title { font-family: arial, sans-serif; font-size: 14px; fill: #1f2937; font-weight: bold; }
      .svg-4-0 .cons-text { font-family: arial, sans-serif; font-size: 10px; fill: #1f2937; }
      .svg-4-0 .cons-text-small { font-family: arial, sans-serif; font-size: 9px; fill: #1f2937; }
      .svg-4-0 .cons-circle-center { fill: #4c9be8; stroke: #1f2937; stroke-width: 1; }
      .svg-4-0 .cons-circle-goal { fill: rgba(223, 105, 25, 0.08); stroke: #df6919; stroke-width: 1; }
      .svg-4-0 .cons-line { stroke: #df6919; stroke-width: 1; fill: none; }
    </style>
    <marker id="cons-arrow-1" markerWidth="6" markerHeight="6" refX="6" refY="3" orient="auto">
      <polygon points="0 0, 6 3, 0 6" fill="#df6919"/>
    </marker>
  </defs>
  <text class="cons-text-title" x="350" y="25" text-anchor="middle">Four Core Goals of Consensus Mechanisms</text>
  <circle class="cons-circle-center" cx="350" cy="200" r="50"/>
  <text class="cons-text" x="350" y="195" text-anchor="middle" font-weight="bold">Consensus</text>
  <text class="cons-text-small" x="350" y="210" text-anchor="middle">Mechanism</text>
  <circle class="cons-circle-goal" cx="150" cy="100" r="60"/>
  <text class="cons-text" x="150" y="90" text-anchor="middle" font-weight="bold">Consistency</text>
  <text class="cons-text-small" x="150" y="105" text-anchor="middle">Agreement</text>
  <text class="cons-text-small" x="150" y="125" text-anchor="middle">All honest nodes</text>
  <text class="cons-text-small" x="150" y="138" text-anchor="middle">agree on state</text>
  <line class="cons-line" x1="200" y1="130" x2="310" y2="170" marker-end="url(#cons-arrow-1)"/>
  <circle class="cons-circle-goal" cx="550" cy="100" r="60"/>
  <text class="cons-text" x="550" y="90" text-anchor="middle" font-weight="bold">Fault Tolerance</text>
  <text class="cons-text-small" x="550" y="105" text-anchor="middle">Resilience</text>
  <text class="cons-text-small" x="550" y="125" text-anchor="middle">Resist malicious nodes</text>
  <text class="cons-text-small" x="550" y="138" text-anchor="middle">and network failures</text>
  <line class="cons-line" x1="500" y1="130" x2="390" y2="170" marker-end="url(#cons-arrow-1)"/>
  <circle class="cons-circle-goal" cx="150" cy="300" r="60"/>
  <text class="cons-text" x="150" y="290" text-anchor="middle" font-weight="bold">Liveness</text>
  <text class="cons-text-small" x="150" y="305" text-anchor="middle">Progress</text>
  <text class="cons-text-small" x="150" y="325" text-anchor="middle">System continuously</text>
  <text class="cons-text-small" x="150" y="338" text-anchor="middle">produces new blocks</text>
  <line class="cons-line" x1="200" y1="270" x2="310" y2="230" marker-end="url(#cons-arrow-1)"/>
  <circle class="cons-circle-goal" cx="550" cy="300" r="60"/>
  <text class="cons-text" x="550" y="290" text-anchor="middle" font-weight="bold">Finality</text>
  <text class="cons-text-small" x="550" y="305" text-anchor="middle">Irreversibility</text>
  <text class="cons-text-small" x="550" y="325" text-anchor="middle">Confirmed transactions</text>
  <text class="cons-text-small" x="550" y="338" text-anchor="middle">cannot be reversed</text>
  <line class="cons-line" x1="500" y1="270" x2="390" y2="230" marker-end="url(#cons-arrow-1)"/>
  <text class="cons-text-small" x="350" y="380" text-anchor="middle" font-style="italic">Balancing these four goals is the key challenge in designing consensus mechanisms</text>
</svg>
</div>

### The Byzantine Generals Problem

The core problem consensus mechanisms need to solve is the **Byzantine Generals Problem**, a classic distributed systems challenge.

#### Problem Description

Imagine Byzantine Empire generals surrounding a city, needing to coordinate whether to attack or retreat. However:

- Generals are scattered and can only communicate via messengers
- Some generals may be traitors sending false information
- All loyal generals must reach a consistent decision
- A minority of traitors cannot affect loyal generals' consistency

_(Byzantine Generals Problem SVG diagram omitted for brevity - same structure as Chinese version with translated labels)_

#### Byzantine Problem in Blockchain

In blockchain networks, this problem manifests as:

- **Nodes** = Generals
- **Malicious Nodes** = Traitors
- **Transaction Order/Blocks** = Decision Content
- **Consensus Mechanism** = Coordination Algorithm

### Classification of Consensus Mechanisms

Consensus mechanisms can be classified by different dimensions:

| Classification | Type | Representative Mechanisms |
|----------------|------|---------------------------|
| **Resource Dependency** | Computational | PoW |
| | Stake | PoS, DPoS |
| | Storage | PoC, PoST |
| **Fault Tolerance Type** | Crash Fault Tolerance (CFT) | Paxos, Raft |
| | Byzantine Fault Tolerance (BFT) | PBFT, Tendermint |
| **Participation** | Permissionless | PoW, PoS |
| | Permissioned | PBFT, Raft |
| **Selection Mechanism** | Competitive | PoW |
| | Voting | DPoS, PBFT |
| | Random | PoS (Algorand) |

## 4.2 Proof of Work (PoW)

**Proof of Work** is the earliest and most mature consensus mechanism, first applied by Bitcoin. It grants bookkeeping rights by requiring nodes to complete a certain amount of computational work.


<div style="background: rgba(52, 81, 178, 0.06); padding: 1.5em; border-radius: 4px; margin: 2em 0;">
<svg class="svg-4-2" viewBox="0 0 700 450" xmlns="http://www.w3.org/2000/svg" style="width: 100%; max-width: 800px; display: block; margin: 0 auto;">
<defs>
<style>
      .svg-4-2 .pow-text-title { font-family: arial, sans-serif; font-size: 14px; fill: #1f2937; font-weight: bold; }
      .svg-4-2 .pow-text { font-family: arial, sans-serif; font-size: 9px; fill: #1f2937; }
      .svg-4-2 .pow-text-small { font-family: arial, sans-serif; font-size: 8px; fill: #1f2937; }
      .svg-4-2 .pow-rect-step { fill: rgba(52, 81, 178, 0.10); stroke: #4c9be8; stroke-width: 1; }
      .svg-4-2 .pow-rect-success { fill: rgba(92, 184, 92, 0.10); stroke: #5cb85c; stroke-width: 1; }
      .svg-4-2 .pow-rect-fail { fill: rgba(217, 83, 79, 0.2); stroke: #d9534f; stroke-width: 1; }
      .svg-4-2 .pow-line { stroke: #4c9be8; stroke-width: 1; fill: none; }
    </style>
    <marker id="pow-arrow" markerWidth="6" markerHeight="6" refX="6" refY="3" orient="auto">
      <polygon points="0 0, 6 3, 0 6" fill="#4c9be8"/>
    </marker>
  </defs>
  <text class="pow-text-title" x="350" y="25" text-anchor="middle">PoW Miningflow</text>
  <rect class="pow-rect-step" x="250" y="50" width="200" height="40" rx="4"/>
  <text class="pow-text" x="350" y="65" text-anchor="middle" font-weight="bold">1. CollecttreatConfirmTransaction</text>
  <text class="pow-text-small" x="350" y="80" text-anchor="middle">fromTransactionpoolChooseTransactiongroupcompleteBlock</text>
  <line class="pow-line" x1="350" y1="90" x2="350" y2="110" marker-end="url(#pow-arrow)"/>
  <rect class="pow-rect-step" x="250" y="110" width="200" height="40" rx="4"/>
  <text class="pow-text" x="350" y="125" text-anchor="middle" font-weight="bold">2. structuremakeBlock Header</text>
  <text class="pow-text-small" x="350" y="140" text-anchor="middle">Contains: prev hash + Merkle root + timestamp</text>
  <line class="pow-line" x1="350" y1="150" x2="350" y2="170" marker-end="url(#pow-arrow)"/>
  <rect class="pow-rect-step" x="250" y="170" width="200" height="50" rx="4"/>
  <text class="pow-text" x="350" y="185" text-anchor="middle" font-weight="bold">3. tastetrydifferent Nonce value</text>
  <text class="pow-text-small" x="350" y="200" text-anchor="middle">Nonce = 0, 1, 2, 3, ...</text>
  <text class="pow-text-small" x="350" y="213" text-anchor="middle">Calc: Hash = SHA256(Block Header)</text>
  <line class="pow-line" x1="350" y1="220" x2="350" y2="240" marker-end="url(#pow-arrow)"/>
  <rect class="pow-rect-step" x="220" y="240" width="260" height="50" rx="4"/>
  <text class="pow-text" x="350" y="255" text-anchor="middle" font-weight="bold">4. checkHashvalueyesnofullfootDifficultyTarget</text>
  <text class="pow-text-small" x="350" y="270" text-anchor="middle">Hash &lt; Target ?</text>
  <text class="pow-text-small" x="350" y="283" text-anchor="middle">(preguidezeroeven ≥ Difficultyrequire)</text>
  <line class="pow-line" x1="220" y1="265" x2="120" y2="265"/>
  <line class="pow-line" x1="120" y1="265" x2="120" y2="195"/>
  <line class="pow-line" x1="120" y1="195" x2="250" y2="195" marker-end="url(#pow-arrow)"/>
  <text class="pow-text-small" x="150" y="230" fill="#d9534f">no: moreswapNonce</text>
  <line class="pow-line" x1="350" y1="290" x2="350" y2="310" marker-end="url(#pow-arrow)"/>
  <text class="pow-text-small" x="390" y="302" fill="#5cb85c">yes</text>
  <rect class="pow-rect-success" x="250" y="310" width="200" height="40" rx="4"/>
  <text class="pow-text" x="350" y="325" text-anchor="middle" font-weight="bold">5. findtovalidsolution!</text>
  <text class="pow-text-small" x="350" y="340" text-anchor="middle">Broadcast BlocktoNetwork</text>
  <line class="pow-line" x1="350" y1="350" x2="350" y2="370" marker-end="url(#pow-arrow)"/>
  <rect class="pow-rect-success" x="250" y="370" width="200" height="50" rx="4"/>
  <text class="pow-text" x="350" y="385" text-anchor="middle" font-weight="bold">6. otherNodeVerify</text>
  <text class="pow-text-small" x="350" y="400" text-anchor="middle">Verifypass → addaddtoPrimarychain</text>
  <text class="pow-text-small" x="350" y="413" text-anchor="middle">MinergetBlock Reward + Transactionfee</text>
  <rect class="pow-rect-fail" x="520" y="170" width="150" height="50" rx="4"/>
  <text class="pow-text" x="595" y="185" text-anchor="middle" fill="#d9534f" font-weight="bold">raceFail</text>
  <text class="pow-text-small" x="595" y="200" text-anchor="middle">otherMinerfirstfindtosolution</text>
  <text class="pow-text-small" x="595" y="213" text-anchor="middle">→ put弃currentPrevious</text>
  <line class="pow-line" x1="450" y1="195" x2="520" y2="195" marker-end="url(#pow-arrow)"/>
  <text class="pow-text-small" x="350" y="442" text-anchor="middle" font-style="italic">avgper10minproducelifeuniteNewBlock (Bitcoin)</text>
</svg>
</div>

### How PoW Works

_(PoW Mining Flow SVG diagram - translated version)_

### Mathematical Principles of PoW

Mining is the process of finding a Nonce value such that:

$$
\text{SHA256}(\text{SHA256}(\text{BlockHeader})) < \text{Target}
$$

Where:
- **Target**: Determined by difficulty value, more leading zeros = higher difficulty
- **Nonce**: Random number, range $0$ to $2^{32} - 1$
- **Difficulty Adjustment**: Every 2016 blocks, maintaining ~10 minute block time

#### Difficulty Calculation

$$
\text{Difficulty} = \frac{\text{Max Target}}{\text{Current Target}}
$$

$$
\text{New Difficulty} = \text{Old Difficulty} \times \frac{20160 \text{ minutes}}{\text{Actual Time}}
$$

### PoW Pros and Cons

#### Pros

1. **High Security**
   - 51% attack extremely costly
   - Proven by Bitcoin for 13+ years

2. **Fully Decentralized**
   - Anyone can participate in mining
   - Permissionless

3. **Clear Incentives**
   - Block rewards + transaction fees
   - Game theory ensures honest behavior

#### Cons

1. **Massive Energy Consumption**
   - Bitcoin annual electricity usage exceeds Argentina
   - Significant environmental impact

2. **Slow Transaction Confirmation**
   - Bitcoin: ~10 minutes/block
   - Requires multiple confirmations for finality

3. **Hash Power Centralization Risk**
   - High mining pool concentration
   - ASIC miners prevent ordinary user participation

4. **Low Throughput**
   - Bitcoin: ~7 TPS
   - Ethereum (PoW): ~15 TPS

### PoW Variants

| Variant | Representative Coin | Features |
|---------|-------------------|----------|
| **SHA-256** | Bitcoin | Most classic, ASIC-friendly |
| **Ethash** | Ethereum 1.0 | Memory-hard, ASIC-resistant |
| **Equihash** | Zcash | Memory-hard |
| **Scrypt** | Litecoin | ASIC-resistant (early) |
| **RandomX** | Monero | CPU-friendly, ASIC-resistant |

## 4.3 Proof of Stake (PoS)

**Proof of Stake** grants bookkeeping rights based on token holdings and time, rather than computational power competition.


<div style="background: rgba(52, 81, 178, 0.06); padding: 1.5em; border-radius: 4px; margin: 2em 0;">
<svg class="svg-4-3" viewBox="0 0 700 400" xmlns="http://www.w3.org/2000/svg" style="width: 100%; max-width: 800px; display: block; margin: 0 auto;">
<defs>
<style>
      .svg-4-3 .pos-text-title { font-family: arial, sans-serif; font-size: 14px; fill: #1f2937; font-weight: bold; }
      .svg-4-3 .pos-text { font-family: arial, sans-serif; font-size: 9px; fill: #1f2937; }
      .svg-4-3 .pos-text-small { font-family: arial, sans-serif; font-size: 8px; fill: #1f2937; }
      .svg-4-3 .pos-rect-step { fill: rgba(52, 81, 178, 0.10); stroke: #4c9be8; stroke-width: 1; }
      .svg-4-3 .pos-rect-validator { fill: rgba(92, 184, 92, 0.10); stroke: #5cb85c; stroke-width: 1; }
      .svg-4-3 .pos-line { stroke: #4c9be8; stroke-width: 1; fill: none; }
      .svg-4-3 .pos-circle { fill: none; stroke: #df6919; stroke-width: 1; }
    </style>
    <marker id="pos-arrow" markerWidth="6" markerHeight="6" refX="6" refY="3" orient="auto">
      <polygon points="0 0, 6 3, 0 6" fill="#4c9be8"/>
    </marker>
  </defs>
  <text class="pos-text-title" x="350" y="25" text-anchor="middle">PoS ValidatorChooseflow</text>
  <rect class="pos-rect-step" x="50" y="60" width="120" height="50" rx="4"/>
  <text class="pos-text" x="110" y="75" text-anchor="middle" font-weight="bold">Validatorpool</text>
  <text class="pos-text-small" x="110" y="90" text-anchor="middle">Staking32 ETH</text>
  <text class="pos-text-small" x="110" y="102" text-anchor="middle">Validator1-1000</text>
  <rect class="pos-rect-validator" x="50" y="140" width="120" height="35" rx="4"/>
  <text class="pos-text-small" x="110" y="155" text-anchor="middle">Validator #42</text>
  <text class="pos-text-small" x="110" y="168" text-anchor="middle">Staking: 32 ETH</text>
  <rect class="pos-rect-validator" x="50" y="185" width="120" height="35" rx="4"/>
  <text class="pos-text-small" x="110" y="200" text-anchor="middle">Validator #137</text>
  <text class="pos-text-small" x="110" y="213" text-anchor="middle">Staking: 64 ETH</text>
  <rect class="pos-rect-validator" x="50" y="230" width="120" height="35" rx="4"/>
  <text class="pos-text-small" x="110" y="245" text-anchor="middle">Validator #891</text>
  <text class="pos-text-small" x="110" y="258" text-anchor="middle">Staking: 32 ETH</text>
  <circle class="pos-circle" cx="300" cy="150" r="70"/>
  <text class="pos-text" x="300" y="140" text-anchor="middle" font-weight="bold">Random Sel.calclaw</text>
  <text class="pos-text-small" x="300" y="155" text-anchor="middle">based on:</text>
  <text class="pos-text-small" x="300" y="168" text-anchor="middle">• StakingAmount</text>
  <text class="pos-text-small" x="300" y="181" text-anchor="middle">• StakingTime</text>
  <line class="pos-line" x1="170" y1="90" x2="230" y2="130" marker-end="url(#pos-arrow)"/>
  <line class="pos-line" x1="370" y1="150" x2="480" y2="150" marker-end="url(#pos-arrow)"/>
  <rect class="pos-rect-step" x="480" y="120" width="180" height="60" rx="4"/>
  <text class="pos-text" x="570" y="140" text-anchor="middle" font-weight="bold">blanketchooseMediumValidator</text>
  <text class="pos-text-small" x="570" y="155" text-anchor="middle">createsuggestNewBlock</text>
  <text class="pos-text-small" x="570" y="168" text-anchor="middle">Bundle Tx</text>
  <line class="pos-line" x1="570" y1="180" x2="570" y2="220" marker-end="url(#pos-arrow)"/>
  <rect class="pos-rect-step" x="480" y="220" width="180" height="60" rx="4"/>
  <text class="pos-text" x="570" y="240" text-anchor="middle" font-weight="bold">otherValidatorVerify</text>
  <text class="pos-text-small" x="570" y="255" text-anchor="middle">Validate Blockvalidnature</text>
  <text class="pos-text-small" x="570" y="268" text-anchor="middle">2/3 Manyevenpass → Confirm</text>
  <line class="pos-line" x1="570" y1="280" x2="570" y2="310" marker-end="url(#pos-arrow)"/>
  <rect class="pos-rect-step" x="480" y="310" width="180" height="50" rx="4"/>
  <text class="pos-text" x="570" y="330" text-anchor="middle" font-weight="bold">getReward</text>
  <text class="pos-text-small" x="570" y="345" text-anchor="middle">Block Reward + Transactionfee</text>
  <rect class="pos-rect-step" x="50" y="310" width="120" height="50" rx="4"/>
  <text class="pos-text" x="110" y="325" text-anchor="middle" font-weight="bold" fill="#d9534f">Maliciousrowfor</text>
  <text class="pos-text-small" x="110" y="340" text-anchor="middle">Double Sign</text>
  <text class="pos-text-small" x="110" y="353" text-anchor="middle">offlinenoparam&</text>
  <line class="pos-line" x1="170" y1="335" x2="280" y2="335" marker-end="url(#pos-arrow)" stroke="#d9534f" fill="none"/>
  <rect class="pos-rect-step" x="280" y="310" width="120" height="50" rx="4"/>
  <text class="pos-text" x="340" y="330" text-anchor="middle" font-weight="bold" fill="#d9534f">Slashing Penalty</text>
  <text class="pos-text-small" x="340" y="345" text-anchor="middle">buttonremoveStakinggold</text>
  <text class="pos-text-small" x="340" y="358" text-anchor="middle">strongmakeExited</text>
  <text class="pos-text-small" x="350" y="390" text-anchor="middle" font-style="italic">viaecon激励exactprotectValidatorHonestrowfor</text>
</svg>
</div>

<div style="background: rgba(52, 81, 178, 0.06); padding: 1.5em; border-radius: 4px; margin: 2em 0;">
<svg class="svg-4-4" viewBox="0 0 700 380" xmlns="http://www.w3.org/2000/svg" style="width: 100%; max-width: 800px; display: block; margin: 0 auto;">
<defs>
<style>
      .svg-4-4 .dpos-text-title { font-family: arial, sans-serif; font-size: 14px; fill: #1f2937; font-weight: bold; }
      .svg-4-4 .dpos-text { font-family: arial, sans-serif; font-size: 9px; fill: #1f2937; }
      .svg-4-4 .dpos-text-small { font-family: arial, sans-serif; font-size: 8px; fill: #1f2937; }
      .svg-4-4 .dpos-circle-holder { fill: rgba(52, 81, 178, 0.10); stroke: #4c9be8; stroke-width: 1; }
      .svg-4-4 .dpos-rect-witness { fill: rgba(92, 184, 92, 0.10); stroke: #5cb85c; stroke-width: 1; }
      .svg-4-4 .dpos-line { stroke: #df6919; stroke-width: 1; fill: none; }
    </style>
    <marker id="dpos-arrow" markerWidth="6" markerHeight="6" refX="6" refY="3" orient="auto">
      <polygon points="0 0, 6 3, 0 6" fill="#df6919"/>
    </marker>
  </defs>
  <text class="dpos-text-title" x="350" y="25" text-anchor="middle">DPoS Vote&Block Productionmechanism</text>
  <text class="dpos-text" x="350" y="50" text-anchor="middle" font-weight="bold">1. Token HolderVote</text>
  <circle class="dpos-circle-holder" cx="100" cy="100" r="25"/>
  <text class="dpos-text-small" x="100" y="100" text-anchor="middle">holderA</text>
  <text class="dpos-text-small" x="100" y="112" text-anchor="middle">1000 EOS</text>
  <circle class="dpos-circle-holder" cx="200" cy="100" r="25"/>
  <text class="dpos-text-small" x="200" y="100" text-anchor="middle">holderB</text>
  <text class="dpos-text-small" x="200" y="112" text-anchor="middle">5000 EOS</text>
  <circle class="dpos-circle-holder" cx="300" cy="100" r="25"/>
  <text class="dpos-text-small" x="300" y="100" text-anchor="middle">holderC</text>
  <text class="dpos-text-small" x="300" y="112" text-anchor="middle">2000 EOS</text>
  <circle class="dpos-circle-holder" cx="400" cy="100" r="25"/>
  <text class="dpos-text-small" x="400" y="100" text-anchor="middle">holderD</text>
  <text class="dpos-text-small" x="400" y="112" text-anchor="middle">500 EOS</text>
  <circle class="dpos-circle-holder" cx="500" cy="100" r="25"/>
  <text class="dpos-text-small" x="500" y="100" text-anchor="middle">holderE</text>
  <text class="dpos-text-small" x="500" y="112" text-anchor="middle">3000 EOS</text>
  <circle class="dpos-circle-holder" cx="600" cy="100" r="25"/>
  <text class="dpos-text-small" x="600" y="100" text-anchor="middle">...</text>
  <text class="dpos-text-small" x="600" y="112" text-anchor="middle">moreManyholder</text>
  <text class="dpos-text-small" x="150" y="140">🗳️ Vote</text>
  <line class="dpos-line" x1="100" y1="125" x2="150" y2="180" marker-end="url(#dpos-arrow)"/>
  <line class="dpos-line" x1="200" y1="125" x2="250" y2="180" marker-end="url(#dpos-arrow)"/>
  <line class="dpos-line" x1="300" y1="125" x2="350" y2="180" marker-end="url(#dpos-arrow)"/>
  <line class="dpos-line" x1="400" y1="125" x2="450" y2="180" marker-end="url(#dpos-arrow)"/>
  <line class="dpos-line" x1="500" y1="125" x2="550" y2="180" marker-end="url(#dpos-arrow)"/>
  <text class="dpos-text" x="350" y="175" text-anchor="middle" font-weight="bold">2. chooseoutput21Super Node (Witness)</text>
  <rect class="dpos-rect-witness" x="80" y="200" width="80" height="35" rx="3"/>
  <text class="dpos-text-small" x="120" y="215" text-anchor="middle">Witness #1</text>
  <text class="dpos-text-small" x="120" y="228" text-anchor="middle">getticket: 5010K</text>
  <rect class="dpos-rect-witness" x="180" y="200" width="80" height="35" rx="3"/>
  <text class="dpos-text-small" x="220" y="215" text-anchor="middle">Witness #2</text>
  <text class="dpos-text-small" x="220" y="228" text-anchor="middle">getticket: 4810K</text>
  <rect class="dpos-rect-witness" x="280" y="200" width="80" height="35" rx="3"/>
  <text class="dpos-text-small" x="320" y="215" text-anchor="middle">Witness #3</text>
  <text class="dpos-text-small" x="320" y="228" text-anchor="middle">getticket: 4510K</text>
  <rect class="dpos-rect-witness" x="380" y="200" width="80" height="35" rx="3"/>
  <text class="dpos-text-small" x="420" y="215" text-anchor="middle">...</text>
  <text class="dpos-text-small" x="420" y="228" text-anchor="middle">...</text>
  <rect class="dpos-rect-witness" x="480" y="200" width="80" height="35" rx="3"/>
  <text class="dpos-text-small" x="520" y="215" text-anchor="middle">Witness #21</text>
  <text class="dpos-text-small" x="520" y="228" text-anchor="middle">getticket: 3010K</text>
  <text class="dpos-text" x="350" y="260" text-anchor="middle" font-weight="bold">3. Round-robin (per0.5sec)</text>
  <rect class="dpos-rect-witness" x="130" y="280" width="120" height="30" rx="3"/>
  <text class="dpos-text-small" x="190" y="298" text-anchor="middle">Block #1000: Witness #1</text>
  <rect class="dpos-rect-witness" x="260" y="280" width="120" height="30" rx="3"/>
  <text class="dpos-text-small" x="320" y="298" text-anchor="middle">Block #1001: Witness #2</text>
  <rect class="dpos-rect-witness" x="390" y="280" width="120" height="30" rx="3"/>
  <text class="dpos-text-small" x="450" y="298" text-anchor="middle">Block #1002: Witness #3</text>
  <text class="dpos-text-small" x="350" y="330" text-anchor="middle">perRound21witnesseseachproducelife1Block → followringoutgoingreply</text>
  <text class="dpos-text" x="50" y="360" font-weight="bold">✅ Pros:</text>
  <text class="dpos-text-small" x="50" y="373">High Perf. (EOS: 4000 TPS)</text>
  <text class="dpos-text" x="350" y="360" font-weight="bold">⚠️ Challenges:</text>
  <text class="dpos-text-small" x="350" y="373">Centralization (only21nodes)</text>
</svg>
</div>

### PoS Core Concepts

In PoS systems:
- **Validator**: Node that stakes tokens
- **Staking**: Locking a certain amount of tokens as collateral
- **Slashing**: Malicious behavior results in confiscated stake

_(PoS Validator Selection Flow SVG diagram - translated version)_

### PoS Variants

#### 1. Pure PoS
- **Representative**: Algorand
- **Features**: Fully stake-based, VRF random selection
- **Advantage**: Instant finality

#### 2. BFT-PoS (Byzantine Fault Tolerant PoS)
- **Representative**: Ethereum 2.0 (Casper FFG), Cosmos (Tendermint)
- **Features**: Combines PoS and BFT consensus
- **Advantage**: Stronger finality guarantees

#### 3. LPoS (Liquid PoS)
- **Representative**: Tezos
- **Features**: Supports delegation while delegators retain voting rights
- **Advantage**: More flexible participation

### Ethereum 2.0 PoS

Ethereum completed "The Merge" in September 2022, switching from PoW to PoS.

#### Key Parameters

- **Minimum Stake**: 32 ETH
- **Validator Count**: Theoretically unlimited
- **Block Time**: 12 seconds
- **Epoch**: 32 Slots (6.4 minutes)
- **Finality**: 2 Epochs (~12.8 minutes)

#### Reward Mechanism

$$
\text{Base Reward} = \frac{\text{Effective Balance} \times \text{Base Reward Factor}}{\sqrt{\text{Total Active Balance}}}
$$

### PoS vs PoW Comparison

| Feature | PoW | PoS |
|---------|-----|-----|
| **Resource Consumption** | Extremely High (electricity) | Very Low |
| **Hardware Requirements** | Specialized miners | Regular servers |
| **Entry Barrier** | High (equipment investment) | Medium (staked tokens) |
| **51% Attack Cost** | Hash power cost | Token cost (higher) |
| **Block Time** | Slow (~10 minutes) | Fast (~12 seconds) |
| **Finality** | Probabilistic | Deterministic |
| **Decentralization** | Pool concentration | Theoretically more distributed |
| **Environmental** | ❌ | ✅ |

## 4.4 Delegated Proof of Stake (DPoS)

**Delegated Proof of Stake** is an optimized version of PoS, producing blocks through a voted minority of representative nodes.

### DPoS Workflow

_(DPoS Voting and Block Production SVG diagram - translated version)_

### DPoS Characteristics

#### Pros
1. **High Performance**: EOS achieves 4000+ TPS
2. **Fast Confirmation**: Sub-second block time
3. **Energy Efficient**: Only 21 nodes running
4. **Flexible Governance**: Can vote to replace witnesses

#### Cons
1. **Centralization**: Only 21 super nodes
2. **Vote Manipulation**: Large holders may control elections
3. **Cartel Risk**: Witnesses may collude
4. **Liveness Dependency**: Requires 2/3+1 witnesses online

### DPoS Representative Projects

| Project | Witnesses | Block Time | TPS |
|---------|-----------|------------|-----|
| **EOS** | 21 | 0.5s | 4000+ |
| **TRON** | 27 | 3s | 2000 |
| **Lisk** | 101 | 10s | ~100 |
| **Ark** | 51 | 8s | ~50 |

## 4.5 Practical Byzantine Fault Tolerance (PBFT)

**Practical Byzantine Fault Tolerance** is a classic Byzantine fault tolerance algorithm widely used in permissioned chains.


<div style="background: rgba(52, 81, 178, 0.06); padding: 1.5em; border-radius: 4px; margin: 2em 0;">
<svg class="svg-4-5" viewBox="0 0 650 500" xmlns="http://www.w3.org/2000/svg" style="width: 100%; max-width: 800px; display: block; margin: 0 auto;">
<defs>
<style>
      .svg-4-5 .pbft-text-title { font-family: arial, sans-serif; font-size: 14px; fill: #1f2937; font-weight: bold; }
      .svg-4-5 .pbft-text { font-family: arial, sans-serif; font-size: 10px; fill: #1f2937; }
      .svg-4-5 .pbft-text-small { font-family: arial, sans-serif; font-size: 8px; fill: #1f2937; }
      .svg-4-5 .pbft-text-label { font-family: arial, sans-serif; font-size: 9px; fill: #4c9be8; font-weight: bold; }
      .svg-4-5 .pbft-node-primary { fill: rgba(223, 105, 25, 0.12); stroke: #df6919; stroke-width: 1; }
      .svg-4-5 .pbft-node-backup { fill: rgba(52, 81, 178, 0.10); stroke: #4c9be8; stroke-width: 1; }
      .svg-4-5 .pbft-box-phase { fill: rgba(92, 184, 92, 0.07); stroke: #5cb85c; stroke-width: 1; }
      .svg-4-5 .pbft-line-flow { stroke: #4c9be8; fill: none; stroke-width: 1.5; stroke-dasharray: 3,2; }
      .svg-4-5 .pbft-line-broadcast { stroke: #df6919; fill: none; stroke-width: 1; opacity: 0.6; }
      .svg-4-5 .pbft-circle-step { fill: rgba(92, 184, 92, 0.15); stroke: #5cb85c; stroke-width: 1; }
    </style>
    <marker id="pbft-arrow-blue" markerWidth="8" markerHeight="8" refX="8" refY="4" orient="auto">
      <polygon points="0 0, 8 4, 0 8" fill="#4c9be8"/>
    </marker>
    <marker id="pbft-arrow-orange" markerWidth="6" markerHeight="6" refX="6" refY="3" orient="auto">
      <polygon points="0 0, 6 3, 0 6" fill="#df6919"/>
    </marker>
  </defs>
  <text class="pbft-text-title" x="325" y="25" text-anchor="middle">PBFT Three-Phaseconsensusflow (4NodeExample)</text>
  <rect x="20" y="45" width="110" height="60" rx="4" fill="rgba(52, 81, 178, 0.04)" stroke="#4c9be8" stroke-width="1"/>
  <text class="pbft-text" x="75" y="62" text-anchor="middle" font-weight="bold">Nodeconfig</text>
  <text class="pbft-text-small" x="30" y="78">• Total: n = 4</text>
  <text class="pbft-text-small" x="30" y="90">• Fault Tolerance: f = 1</text>
  <text class="pbft-text-small" x="30" y="102">• Threshold: 2f+1 = 3</text>
  <circle class="pbft-node-primary" cx="200" cy="75" r="22"/>
  <text class="pbft-text-small" x="200" y="72" text-anchor="middle" font-weight="bold">Primary</text>
  <text class="pbft-text-small" x="200" y="83" text-anchor="middle">Primary</text>
  <circle class="pbft-node-backup" cx="280" cy="75" r="18"/>
  <text class="pbft-text-small" x="280" y="78" text-anchor="middle">B1</text>
  <circle class="pbft-node-backup" cx="340" cy="75" r="18"/>
  <text class="pbft-text-small" x="340" y="78" text-anchor="middle">B2</text>
  <circle class="pbft-node-backup" cx="400" cy="75" r="18"/>
  <text class="pbft-text-small" x="400" y="78" text-anchor="middle">B3</text>
  <rect class="pbft-box-phase" x="30" y="125" width="590" height="80" rx="4"/>
  <circle class="pbft-circle-step" cx="50" cy="145" r="12"/>
  <text class="pbft-text" x="50" y="150" text-anchor="middle" font-weight="bold">1</text>
  <text class="pbft-text" x="70" y="145" font-weight="bold">Phase 1: Pre-Prepare (Pre-Prepare)</text>
  <text class="pbft-text-small" x="70" y="161">• PrimaryreceivereceiveClientRequest</text>
  <text class="pbft-text-small" x="70" y="174">• minmatchserialno.mergeBroadcastMessage: &lt;PRE-PREPARE, v, n, d&gt;</text>
  <text class="pbft-text-small" x="70" y="187">• v=View #, n=Seq #, d=Request Digest</text>
  <line class="pbft-line-flow" x1="200" y1="97" x2="200" y2="125" marker-end="url(#pbft-arrow-blue)"/>
  <path class="pbft-line-broadcast" d="M 220 105 Q 250 115, 280 100" marker-end="url(#pbft-arrow-orange)"/>
  <path class="pbft-line-broadcast" d="M 220 110 Q 270 125, 340 105" marker-end="url(#pbft-arrow-orange)"/>
  <path class="pbft-line-broadcast" d="M 220 115 Q 290 135, 400 110" marker-end="url(#pbft-arrow-orange)"/>
  <text class="pbft-text-label" x="250" y="125">Broadcast</text>
  <rect class="pbft-box-phase" x="30" y="225" width="590" height="95" rx="4"/>
  <circle class="pbft-circle-step" cx="50" cy="245" r="12"/>
  <text class="pbft-text" x="50" y="250" text-anchor="middle" font-weight="bold">2</text>
  <text class="pbft-text" x="70" y="245" font-weight="bold">Phase 2: Prepare (Prepare)</text>
  <text class="pbft-text-small" x="70" y="261">• BackupVerifyPRE-PREPAREMessage (checkserialno.、摘want、Sign)</text>
  <text class="pbft-text-small" x="70" y="274">• Verifypasspost,eachNodeBroadcast: &lt;PREPARE, v, n, d, i&gt;</text>
  <text class="pbft-text-small" x="70" y="287">• i=Nodelabelsense</text>
  <rect x="70" y="295" width="535" height="18" rx="2" fill="rgba(52, 81, 178, 0.05)" stroke="#4c9be8" stroke-width="1"/>
  <text class="pbft-text-small" x="75" y="307" font-weight="bold">🔄 Network-wide Broadcast → pernodesCollectPREPAREMessage → understandto2f+1=3 → EnterpreparedState</text>
  <line class="pbft-line-flow" x1="280" y1="205" x2="280" y2="225" marker-end="url(#pbft-arrow-blue)"/>
  <line class="pbft-line-flow" x1="340" y1="205" x2="340" y2="225" marker-end="url(#pbft-arrow-blue)"/>
  <line class="pbft-line-flow" x1="400" y1="205" x2="400" y2="225" marker-end="url(#pbft-arrow-blue)"/>
  <rect class="pbft-box-phase" x="30" y="340" width="590" height="95" rx="4"/>
  <circle class="pbft-circle-step" cx="50" cy="360" r="12"/>
  <text class="pbft-text" x="50" y="365" text-anchor="middle" font-weight="bold">3</text>
  <text class="pbft-text" x="70" y="360" font-weight="bold">Phase 3: Commit (Commit)</text>
  <text class="pbft-text-small" x="70" y="376">• EnterpreparedStateNodeBroadcast: &lt;COMMIT, v, n, d, i&gt;</text>
  <text class="pbft-text-small" x="70" y="389">• receiveto2f+1=3COMMITMessagepost → execute request</text>
  <text class="pbft-text-small" x="70" y="402">• willReplyemitsendgiveClient</text>
  <rect x="70" y="410" width="535" height="18" rx="2" fill="rgba(92, 184, 92, 0.07)" stroke="#5cb85c" stroke-width="1"/>
  <text class="pbft-text-small" x="75" y="422" font-weight="bold">✓ Clientreceivetof+1=2matching replies → confirmcorrectly executed</text>
  <line class="pbft-line-flow" x1="200" y1="320" x2="200" y2="340" marker-end="url(#pbft-arrow-blue)"/>
  <line class="pbft-line-flow" x1="280" y1="320" x2="280" y2="340" marker-end="url(#pbft-arrow-blue)"/>
  <line class="pbft-line-flow" x1="340" y1="320" x2="340" y2="340" marker-end="url(#pbft-arrow-blue)"/>
  <line class="pbft-line-flow" x1="400" y1="320" x2="400" y2="340" marker-end="url(#pbft-arrow-blue)"/>
  <rect x="30" y="455" width="590" height="35" rx="4" fill="rgba(223, 105, 25, 0.05)" stroke="#df6919" stroke-width="1"/>
  <text class="pbft-text" x="325" y="470" text-anchor="middle" font-weight="bold">Consensus Done - SystemState Consistent</text>
  <text class="pbft-text-small" x="325" y="484" text-anchor="middle" font-style="italic">Fault Tol.canstrength: mostMany容忍 f = ⌊(n-1)/3⌋ = 1 MaliciousorFaultyNode</text>
</svg>
</div>

### PBFT Three-Phase Protocol

_(PBFT Three-Phase Consensus Flow SVG diagram - translated version)_

### PBFT Key Features

#### Fault Tolerance Capability
- **Maximum Fault Tolerance**: $f = \lfloor \frac{n-1}{3} \rfloor$
- **Minimum Nodes**: $n \geq 3f + 1$
- **Required**: At least $2f + 1$ honest nodes

For example: 4 nodes can tolerate 1 malicious node, 7 nodes can tolerate 2.

#### View Change
When primary node fails or acts maliciously, view change is triggered:
1. Backup nodes detect timeout
2. Send VIEW-CHANGE messages
3. After receiving $2f+1$ messages, new primary takes over

### PBFT Pros and Cons

#### Pros
1. **High Performance**: Hyperledger Fabric achieves 20000+ TPS
2. **Deterministic Finality**: No need to wait for multiple confirmations
3. **Low Latency**: Usually <1 second
4. **Energy Efficient**: No mining required

#### Cons
1. **Permissioned Only**: Requires knowing participants in advance
2. **High Communication Complexity**: $O(n^2)$ message complexity
3. **Poor Scalability**: Limited number of nodes
4. **High View Change Cost**: Primary switch overhead

### PBFT Applications

| Project | Nodes | TPS | Use Case |
|---------|-------|-----|----------|
| **Hyperledger Fabric** | Configurable | 20000+ | Enterprise consortium |
| **Zilliqa** | ~600 | 2828 | Public chain (sharded) |
| **NEO** | 7 | 1000 | Public chain (dBFT variant) |
| **Tendermint** | Configurable | 1000-10000 | Cosmos ecosystem |

## 4.6 Other Consensus Mechanisms

Besides mainstream PoW, PoS, DPoS and PBFT, there are many innovative consensus mechanisms.

### Proof of Capacity (PoC)

**Proof of Capacity** uses hard disk space instead of computational power.

- **Representative**: Chia, Burst
- **Principle**: Pre-compute and store "plots", mine by finding best answer
- **Advantage**: More energy efficient than PoW, ordinary hard drives can participate
- **Disadvantage**: Wastes storage resources, ASIC trend

### Proof of Authority (PoA)

**Proof of Authority** consensus based on identity and reputation.

- **Representative**: VeChain, xDai
- **Principle**: Pre-selected authority nodes take turns producing blocks
- **Advantage**: High performance, suitable for enterprise applications
- **Disadvantage**: Centralized, requires trust

### Proof of Burn (PoB)

**Proof of Burn** obtains mining rights by destroying tokens.

- **Representative**: Slimcoin, Counterparty
- **Principle**: Send tokens to unrecoverable address, proving long-term commitment
- **Advantage**: No hardware investment needed
- **Disadvantage**: Complex economic model

### Proof of Space-Time (PoST)

**Proof of Space-Time** proves continuous data storage over time.

- **Representative**: Filecoin
- **Principle**: PoC + time dimension, periodically prove still storing
- **Advantage**: Incentivizes real storage, supports decentralized storage network
- **Disadvantage**: Complex verification

## 4.7 Consensus Mechanism Comparison

The table below summarizes key characteristics of mainstream consensus mechanisms:

| Feature | PoW | PoS | DPoS | PBFT |
|---------|-----|-----|------|------|
| **Energy Efficiency** | ❌ Very Low | ✅ High | ✅ High | ✅ High |
| **TPS** | Low (7-15) | Medium (30-100) | High (1000-4000) | Very High (10000+) |
| **Confirmation Time** | Slow (10min-1hr) | Fast (seconds) | Fast (seconds) | Very Fast (<1s) |
| **Finality** | Probabilistic | Deterministic | Fast finality | Instant finality |
| **Decentralization** | High | High | Medium | Low |
| **Entry Barrier** | Permissionless | Permissionless | Permissionless | Permissioned |
| **Fault Tolerance** | 51% hash power | 51% stake | 67% witnesses | 33% nodes |
| **Hardware Requirements** | Very High (ASIC) | Low | Low | Low |
| **Representative** | BTC, ETH 1.0 | ETH 2.0, Cardano | EOS, TRON | Fabric, NEO |
| **Use Case** | Public chain, high security | Public chain, balanced | Public chain, high performance | Consortium, enterprise |

_(Performance vs Decentralization Trade-off SVG diagram - translated version)_

### The Impossible Triangle

Blockchain systems typically face the **Blockchain Trilemma**:

1. **Decentralization**
2. **Security**
3. **Scalability**

It's difficult to achieve optimal on all three simultaneously; most systems require trade-offs.

## 4.8 Future of Consensus Mechanisms

### Hybrid Consensus

Combining advantages of multiple consensus mechanisms:

- **Decred**: PoW + PoS hybrid, PoW produces blocks, PoS votes for confirmation
- **Ethereum**: PoS (beacon chain) + data sharding
- **Polkadot**: NPoS (Nominated Proof of Stake) + GRANDPA finality

### Layer 2 and Modularity

Separating consensus layer from execution layer:

- **Rollups**: Execute on Layer 2, Layer 1 provides security and data availability
- **Celestia**: Focuses on consensus and data availability, execution layer independent
- **Polygon zkEVM**: Zero-knowledge proofs + PoS

### Quantum Resistance

Preparing for the quantum computing era:

- **Quantum-Safe Signatures**: CRYSTALS-Dilithium, SPHINCS+
- **Post-Quantum Cryptography**: Lattice cryptography, hash-based cryptography
- **Research Projects**: QRL (Quantum Resistant Ledger)

### Green Consensus

Addressing energy consumption:

- **PoS Mainstreaming**: Ethereum post-Merge reduced energy consumption by 99.95%
- **Carbon Neutral**: Algorand, Cardano declare carbon neutrality
- **Sustainability**: Consensus design considers environmental impact

<div class="ccbus-teacher-credits">
  <div class="ccbus-teacher-credits-avatar">
    <img src="../public/images/avatars/heroes/captain-ccbus.png" alt="Captain CCBus" />
  </div>
  <div class="ccbus-teacher-credits-body">

    Taught by: <strong>Captain CCBus</strong> — The "dispatching supervisor" of consensus<br />
    <span style="font-size: 0.85em; color: var(--vp-c-text-3);">📚 The next chapter [Chapter 5: Smart Contracts] will be taught by another CCBus guide.</span>
  </div>
</div>

<div class="chapter-footer">
  <h3>Chapter Summary</h3>
  <p>Consensus mechanisms are the core of blockchain, with different consensus algorithms making different trade-offs between decentralization, performance, and security. PoW provides the highest security but consumes massive energy, PoS greatly improves efficiency while maintaining decentralization, DPoS sacrifices some decentralization for extreme performance, and PBFT suits high-performance needs in permissioned scenarios. Future consensus mechanisms will develop toward greater efficiency, environmental friendliness, and security.</p>

  <h3>Further Reading</h3>
  <ul>
    <li>Satoshi Nakamoto - Bitcoin: A Peer-to-Peer Electronic Cash System</li>
    <li>Vitalik Buterin - A Proof of Stake Design Philosophy</li>
    <li>Leslie Lamport - The Part-Time Parliament (Paxos)</li>
    <li>Miguel Castro & Barbara Liskov - Practical Byzantine Fault Tolerance</li>
    <li>Ethereum Foundation - The Merge (PoS Transition)</li>
  </ul>

  <h3>Next Chapter Preview</h3>
  <p>

### EigenLayer and Shared Security: "Cloud Service" for L1 Security

EigenLayer (2023-06 mainnet) is the biggest consensus mechanism paradigm innovation in 2025-2026. It solves the "cost of launching new chains/services" problem.

**Core idea**:
- Users re-stake already-staked ETH (or LST, e.g., stETH) to EigenLayer
- This ETH simultaneously secures other services (AVS — Actively Validated Services)
- Users get additional yield (base + AVS rewards)
- AVS projects don't need to maintain their own validator set

**AVS ecosystem (2026 data)**:

| AVS | Category | Description |
|---|---|---|
| **LayerZero AVS** | Cross-chain bridge | Cross-chain message verification |
| **EigenDA** | Data availability | High-throughput DA service |
| **AltLayer** | Verification service | restaking-as-a-service |
| **Hyperlane AVS** | Cross-chain message | ISM framework integration |
| **Brevis** | ZK coprocessor | ZK proof computation |
| **Omni** | Cross-chain | Omnichain messaging |
| **Aethos** | AI inference | Decentralized GPU cluster |
| **Witness** | Off-chain compute | Witness Chain verification |
| **Espresso AVS** | Sequencing | Shared sequencing integration |

**AVS economic model**:
- **Operators**: entities running AVS nodes, qualify by staking ETH via EigenLayer
- **AVS consumers**: pay for AVS services (can be fiat/stablecoins/AVS tokens/ETH)
- **Stakers (restakers)**: delegate ETH to operators, earn yield
- **Slash conditions**: operator misbehavior results in staked ETH being slashed

**EigenLayer TVL evolution (2024-2026)**:
- 2023-06 mainnet: 10K ETH
- 2024-Q1: 4M ETH ($14B)
- 2024-Q3: 6M ETH ($20B)
- 2025-Q1: 7M ETH ($28B)
- 2026-Q1: 5.5M ETH ($20B, slight pullback)

**Symbiotic and Karak: competitors**:
- **Symbiotic (2024-09)**: accepts any staked asset (ETH + LST + LRT + SOL + TON), more flexible
- **Karak (2024-Q3)**: deep integration with Mantle ecosystem
- **EigenLayer v2 (2025)**: open to non-ETH assets

**Cost of shared security**:
- **Risk contagion**: restaked asset being slashed affects all AVS
- **Validator concentration**: a few large operators control most AVS
- **Regulatory uncertainty**: SEC may view restaking as securities

**EigenLayer's significance for 2026**: it turns "launching a new chain" from 0→1 into 0→0.1. Any team can launch an AVS for $1M, not $100M to launch an L1. This is the "cloudification" of consensus.

Chapter 5 will explore <strong>Smart Contracts</strong> in depth, learning how to write and deploy executable code on blockchain, and studying Solidity language and smart contract security.</p>

  <div style="margin-top: 2em; padding-top: 1em; border-top: 2px solid #4c9be8;">
    <p style="text-align: center;">
      <a href="/en/chapter-3" style="margin: 0 1em;">← Previous: Cryptocurrency Fundamentals</a>
      <a href="/en/" style="margin: 0 1em;">Back to Contents</a>
      <a href="/en/chapter-5" style="margin: 0 1em;">Next: Smart Contracts →</a>
    </p>
  </div>
</div>

<div style="background: rgba(52, 81, 178, 0.06); padding: 1.5em; border-radius: 4px; margin: 2em 0;">
<svg class="svg-4-1" viewBox="0 0 700 350" xmlns="http://www.w3.org/2000/svg" style="width: 100%; max-width: 800px; display: block; margin: 0 auto;">
<defs>
<style>
      .svg-4-1 .byz-text-title { font-family: arial, sans-serif; font-size: 14px; fill: #1f2937; font-weight: bold; }
      .svg-4-1 .byz-text { font-family: arial, sans-serif; font-size: 9px; fill: #1f2937; }
      .svg-4-1 .byz-text-small { font-family: arial, sans-serif; font-size: 8px; fill: #1f2937; }
      .svg-4-1 .byz-circle-loyal { fill: #5cb85c; stroke: #1f2937; stroke-width: 1; }
      .svg-4-1 .byz-circle-traitor { fill: #d9534f; stroke: #1f2937; stroke-width: 1; }
      .svg-4-1 .byz-line-true { stroke: #5cb85c; fill: none; stroke-width: 1; stroke-dasharray: 2,2; }
      .svg-4-1 .byz-line-false { stroke: #d9534f; fill: none; stroke-width: 1; stroke-dasharray: 2,2; }
      .svg-4-1 .byz-rect-city { fill: rgba(78, 93, 108, 0.3); stroke: #4e5d6c; stroke-width: 1; }
    </style>
</defs>
  <text class="byz-text-title" x="350" y="25" text-anchor="middle">bow占庭GeneralissuedemoIntent</text>
  <rect class="byz-rect-city" x="280" y="140" width="140" height="80" rx="4"/>
  <text class="byz-text" x="350" y="170" text-anchor="middle" font-weight="bold">🏰 citycity</text>
  <text class="byz-text-small" x="350" y="185" text-anchor="middle">Needcoordinateinputattack</text>
  <circle class="byz-circle-loyal" cx="350" cy="60" r="25"/>
  <text class="byz-text" x="350" y="63" text-anchor="middle">GeneralA</text>
  <text class="byz-text-small" x="350" y="75" text-anchor="middle">(indicate挥official)</text>
  <circle class="byz-circle-loyal" cx="150" cy="180" r="25"/>
  <text class="byz-text" x="150" y="183" text-anchor="middle">GeneralB</text>
  <text class="byz-text-small" x="150" y="195" text-anchor="middle">(Loyal)</text>
  <circle class="byz-circle-traitor" cx="150" cy="280" r="25"/>
  <text class="byz-text" x="150" y="283" text-anchor="middle">GeneralC</text>
  <text class="byz-text-small" x="150" y="295" text-anchor="middle">(Traitor)</text>
  <circle class="byz-circle-loyal" cx="550" cy="180" r="25"/>
  <text class="byz-text" x="550" y="183" text-anchor="middle">GeneralD</text>
  <text class="byz-text-small" x="550" y="195" text-anchor="middle">(Loyal)</text>
  <circle class="byz-circle-loyal" cx="550" cy="280" r="25"/>
  <text class="byz-text" x="550" y="283" text-anchor="middle">GeneralE</text>
  <text class="byz-text-small" x="550" y="295" text-anchor="middle">(Loyal)</text>
  <line class="byz-line-true" x1="350" y1="85" x2="170" y2="160"/>
  <text class="byz-text-small" x="250" y="115" fill="#5cb85c">inputattack</text>
  <line class="byz-line-true" x1="350" y1="85" x2="530" y2="160"/>
  <text class="byz-text-small" x="450" y="115" fill="#5cb85c">inputattack</text>
  <line class="byz-line-false" x1="350" y1="85" x2="530" y2="260"/>
  <text class="byz-text-small" x="450" y="165" fill="#d9534f">撤retreat</text>
  <line class="byz-line-false" x1="150" y1="255" x2="150" y2="205"/>
  <text class="byz-text-small" x="120" y="230" fill="#d9534f">撤retreat</text>
  <line class="byz-line-false" x1="175" y1="275" x2="525" y2="275"/>
  <text class="byz-text-small" x="350" y="270" fill="#d9534f">inputattack</text>
  <text class="byz-text" x="50" y="330" fill="#5cb85c">✓ LoyalGeneral (3person)</text>
  <text class="byz-text" x="250" y="330" fill="#d9534f">✗ TraitorGeneral (1person)</text>
  <text class="byz-text-small" x="350" y="345" text-anchor="middle" font-style="italic">Traitoremitsend矛盾info,trygraphbreakbadconsensus</text>
</svg>
</div>

<div style="background: rgba(52, 81, 178, 0.06); padding: 1.5em; border-radius: 4px; margin: 2em 0;">
<svg class="svg-4-6" viewBox="0 0 700 350" xmlns="http://www.w3.org/2000/svg" style="width: 100%; max-width: 800px; display: block; margin: 0 auto;">
<defs>
<style>
      .svg-4-6 .comp-text-title { font-family: arial, sans-serif; font-size: 14px; fill: #1f2937; font-weight: bold; }
      .svg-4-6 .comp-text { font-family: arial, sans-serif; font-size: 9px; fill: #1f2937; }
      .svg-4-6 .comp-text-small { font-family: arial, sans-serif; font-size: 8px; fill: #1f2937; }
      .svg-4-6 .comp-axis { stroke: #1f2937; stroke-width: 2.5; fill: none; }
      .svg-4-6 .comp-trilemma { stroke: #df6919; stroke-width: 1.5; fill: none; stroke-dasharray: 4,3; }
      .svg-4-6 .comp-circle-pow { fill: rgba(217, 83, 79, 0.4); stroke: #d9534f; stroke-width: 1; }
      .svg-4-6 .comp-circle-pos { fill: rgba(76, 156, 232, 0.4); stroke: #4c9be8; stroke-width: 1; }
      .svg-4-6 .comp-circle-dpos { fill: rgba(223, 105, 25, 0.4); stroke: #df6919; stroke-width: 1; }
      .svg-4-6 .comp-circle-pbft { fill: rgba(92, 184, 92, 0.4); stroke: #5cb85c; stroke-width: 1; }
    </style>
</defs>
  <text class="comp-text-title" x="350" y="25" text-anchor="middle">consensusmechanismPerformance&Decentralizationrightmeasure</text>
  <line class="comp-axis" x1="80" y1="300" x2="650" y2="300"/>
  <line class="comp-axis" x1="80" y1="300" x2="80" y2="60"/>
  <line class="comp-trilemma" x1="120" y1="135" x2="550" y2="220"/>

  <text class="comp-text" x="360" y="330" text-anchor="middle">Performance (TPS) →</text>
  <text class="comp-text" x="40" y="180" text-anchor="middle" transform="rotate(-90 40 180)">Decentralizationjourneymeasure →</text>
  <text class="comp-text-small" x="80" y="315">0</text>
  <text class="comp-text-small" x="200" y="315">1000</text>
  <text class="comp-text-small" x="350" y="315">5000</text>
  <text class="comp-text-small" x="500" y="315">10000</text>
  <text class="comp-text-small" x="620" y="315">20000+</text>
  <text class="comp-text-small" x="60" y="305">Low</text>
  <text class="comp-text-small" x="60" y="230">Medium</text>
  <text class="comp-text-small" x="60" y="155">High</text>
  <text class="comp-text-small" x="60" y="80">Very High</text>
  <circle class="comp-circle-pow" cx="120" cy="100" r="35"/>
  <text class="comp-text" x="120" y="95" text-anchor="middle" font-weight="bold">PoW</text>
  <text class="comp-text-small" x="120" y="108" text-anchor="middle">Decentralization: High</text>
  <text class="comp-text-small" x="120" y="120" text-anchor="middle">TPS: 7-15</text>
  <circle class="comp-circle-pos" cx="250" cy="130" r="35"/>
  <text class="comp-text" x="250" y="125" text-anchor="middle" font-weight="bold">PoS</text>
  <text class="comp-text-small" x="250" y="138" text-anchor="middle">Decentralization: High</text>
  <text class="comp-text-small" x="250" y="150" text-anchor="middle">TPS: 30-100</text>
  <circle class="comp-circle-dpos" cx="400" cy="200" r="35"/>
  <text class="comp-text" x="400" y="195" text-anchor="middle" font-weight="bold">DPoS</text>
  <text class="comp-text-small" x="400" y="208" text-anchor="middle">Decentralization: Medium</text>
  <text class="comp-text-small" x="400" y="220" text-anchor="middle">TPS: 1000-4000</text>
  <circle class="comp-circle-pbft" cx="580" cy="250" r="35"/>
  <text class="comp-text" x="580" y="245" text-anchor="middle" font-weight="bold">PBFT</text>
  <text class="comp-text-small" x="580" y="258" text-anchor="middle">Decentralization: Low</text>
  <text class="comp-text-small" x="580" y="270" text-anchor="middle">TPS: 10000+</text>
  <text class="comp-text-small" x="350" y="165" fill="#df6919">Perf-Decentralization Trilemma</text>
  <text class="comp-text-small" x="350" y="342" text-anchor="middle" font-style="italic">Trade-off between perf, decentralization, security</text>
</svg>
</div>
