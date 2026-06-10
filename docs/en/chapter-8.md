---
title: "Chapter 8: Interoperability and Cross-Chain"
---

<div class="ccbus-hero">
  <div class="ccbus-hero-avatar">
    <img src="../public/images/avatars/heroes/chain-hopper.png" alt="Chain Hopper" />
  </div>
  <div class="ccbus-hero-content">
    <h1>Chapter 8: Interoperability and Cross-Chain</h1>
    <div class="ccbus-teacher-label">🎙️ Taught by:<strong>Chain Hopper</strong> · The cross-chain "bridge engineer" — primary domain</div>
  </div>
</div>

<div class="chapter-intro">

**Difficulty Level:** 🔴 Advanced
**Estimated Learning Time:** 4-5 hours

**Chapter Objectives:**
- Understand interoperability challenges
- Learn cross-chain technologies
- Explore multi-chain ecosystems
- Master bridge protocols

</div>


## 8.0 2025-2026 Perspective: Why Reread This Chapter

Cross-chain has evolved from "bridges" to "intents". 2025-2026 mainstream solutions:

1. **LayerZero V2 (2024-Q3) + WireLib General Message**:
   - Omnichain bridge, OFT (Omnichain Fungible Token) standard
   - Supports 50+ chains: BSC, ETH, Solana, Base, Arbitrum, zkSync, Linea, Scroll
   - **2026 real projects**: Stargate (OFT bridge), Tether (USDT omnichain), PancakeSwap (omnichain DEX), Radiant (omnichain lending)

2. **Wormhole NTT (Native Token Transfer, 2024-Q4)**:
   - Different implementation path from OFT, based on Wormhole guardian signatures
   - Supports more chains (70+)
   - **2026 real projects**: Sky (formerly MakerDAO), Karura, Acala (Polkadot family)

3. **Chainlink CCIP (Cross-Chain Interoperability Protocol)**:
   - Off-chain OCR + on-chain verification
   - Risk-graded management (bidirectional, multi-sig)
   - **2026 real projects**: Aave cross-chain version (GHO cross-chain), Synthetix v3

4. **Across Protocol**: representative intent-based bridge
   - 2-second arrival (no need to wait for destination chain finality)
   - Optimistic verification (similar to Optimism)
   - **2026 stats**: $500M+ daily volume, $500M bridge TVL

5. **deBridge DLN (DeBridge Liquidity Network)**:
   - Another school of cross-chain intent
   - Solver bidding + on-chain settlement
   - **2026 real projects**: 1inch Fusion+, Matcha, ParaSwap integration

6. **ZK-based cross-chain (ZK Light Client)**:
   - **zkBridge** (2023-08, 2024 upgrade): uses ZK proofs to verify source chain consensus
   - **Electron Labs**: ZK proofs from Bitcoin to EVM
   - **Lagrange**: cross-chain ZK proof computation
   - **2026 advantage**: trustless, no intermediary, fully decentralized verification

7. **Axelar GMP (General Message Passing)**:
   - Security model via PoS validator set
   - Integrates Squid, Satellite and other cross-chain dApps
   - Continues to dominate appchain-to-appchain bridging in 2026

### 🖥️ Real-world Example: CCBus's Three-Layer Cross-Chain Architecture

CCBus offers three cross-chain entry points:

- **Cross-chain Swap**: intent-based, user expresses 'swap 100 USDC on BSC for ETH on Base', solvers bid to fill.
- **Bridge C (LayerZero)**: general-message bridge, for contract-level cross-chain calls.
- **Bridge Z (zkBridge)**: zero-knowledge proof verification, for large-value transfers.

![CCBus Bridge C (LayerZero general message)](../public/images/chapters/zh/bridge-c.png)

![CCBus Bridge Z (zkBridge)](../public/images/chapters/zh/bridge-z.png)

*Figures 8-1 & 8-2: CCBus's two cross-chain bridge implementations. **The optimistic model of LayerZero** and **the validity-proof model of zkBridge** are the two main lines of cross-chain security tradeoffs today.*

## 8.1 Interoperability Challenges

Different blockchains use different protocols, making communication difficult.

## 8.2 Atomic Swaps

Trustless cross-chain asset exchanges using hash time-locked contracts (HTLCs).

## 8.3 Wrapped Tokens

**WBTC** and **WETH** enable assets to move between chains.

## 8.4 Cross-Chain Bridge Protocols

### Trustless Bridges
- Decentralized validators
- Smart contract-based

### Trusted Bridges
- Centralized operators
- Faster but less secure

## 8.5 Cross-Chain Communication Protocols

Standardized messaging between blockchains.



### 8.7 Intent-based Cross-Chain: 2024-2026 Mainstreaming

![CCBus cross-chain swap — UI template for intent-based cross-chain](../public/images/chapters/zh/cross-chain-swap.png)

*Figure: CCBus cross-chain swap — UI template for intent-based cross-chain*


**Problems with traditional cross-chain**:
- User must choose bridge, source chain, target chain
- User must accept "optimal path" determined by router, may not be optimal
- User must wait for L1/L2 finality (minutes to days)

**Core of intent-based cross-chain**:
- User **only expresses "what I want"** (intent)
- Solver/relayer bids to execute
- User doesn't need to understand technical details

**Intent-based cross-chain flow**:
1. User signs intent: `Swap 100 USDC on BSC to ETH on Base, minimum 0.03 ETH`
2. Solvers monitor intent pool on-chain, bid
3. Winning solver executes cross-chain (may use Stargate, Across, own liquidity)
4. User receives ETH on target chain within 2-10 seconds

**Production intent-based projects (2025-2026)**:

| Project | Type | Description |
|---|---|---|
| **UniswapX** | DEX intent | Dutch auction, MEV protection |
| **Across Protocol** | Cross-chain intent | 2-second arrival, Optimistic verification |
| **deBridge DLN** | Cross-chain intent | Solver bidding + on-chain settlement |
| **1inch Fusion** | DEX intent | Solver network |
| **CoW Swap** | DEX intent | Batch settlement + CoW |
| **Squid Router** | Cross-chain intent | Integrates Across + Stargate |
| **KIP Protocol** | AI-driven intent | AI solver |

**Intent-based vs traditional cross-chain comparison**:

| Dimension | Traditional bridge (Stargate) | Intent-based (Across DLN) |
|---|---|---|
| User experience | Choose source/bridge/target | Only express intent |
| Speed | 5-30 minutes | 2-10 seconds |
| Optimal path | Determined by router | Determined by solver bidding |
| MEV risk | High | Low (solver absorbs) |
| Cost | Medium | Low (competitive pressure) |
| Failure rollback | Slow | Fast (solver fronted) |

**Intent standardization (2024-2025)**:
- **ERC-7683** (jointly proposed by Across + Uniswap): intent standard, any wallet/dApp can use same intent to call any solver
- **ERC-7715**: intent authorization standard, off-chain identity can delegate
- **1inch intent standard**: customized for Fusion+
- **CoW Swap Coincidence-of-Wants**: batch settlement algorithm

**2026 real data on intent-based cross-chain**:
- **UniswapX volume**: 30%+ of DEX total
- **Across daily volume**: $500M+
- **deBridge DLN daily volume**: $100M+
- **Intent-based total share of 2026 cross-chain bridge flow**: 60%+

**Challenges**:
- **Solver centralization**: a few large solvers dominate most orders
- **Solver cartel risk**: solvers may form cartel
- **Trust assumption**: Optimistic verification needs fraud proof
- **Regulatory risk**: solvers are "intermediaries", may be classified as money transmitters

## 8.6 Cosmos and IBC

**Inter-Blockchain Communication** protocol enables seamless cross-chain transfers.

## 8.7 Polkadot and Parachains

Shared security model with specialized parachains.

## 8.8 LayerZero and Omnichain

Universal messaging layer for cross-chain applications.

<div class="ccbus-teacher-credits">
  <div class="ccbus-teacher-credits-avatar">
    <img src="../public/images/avatars/heroes/chain-hopper.png" alt="Chain Hopper" />
  </div>
  <div class="ccbus-teacher-credits-body">

    Taught by: <strong>Chain Hopper</strong> — The cross-chain "bridge engineer" — primary domain<br />
    <span style="font-size: 0.85em; color: var(--vp-c-text-3);">📚 The next chapter [Chapter 9: Advanced Cryptography] will be taught by another CCBus guide.</span>
  </div>
</div>

<div class="chapter-footer">

### Key Takeaways
- Interoperability is crucial for blockchain's future
- Multiple approaches exist with different trade-offs
- Cross-chain bridges are critical infrastructure

</div>

<div style="background: rgba(52, 81, 178, 0.06); padding: 1.5em; border-radius: 4px; margin: 2em 0;">
<svg class="svg-8-0" viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg" style="width: 100%; max-width: 900px; display: block; margin: 0 auto;">
<defs>
<style>
.svg-8-0 .inter-title { font-family: arial, sans-serif; font-size: 16px; fill: #1f2937; font-weight: bold; }
.svg-8-0 .inter-chain { font-family: arial, sans-serif; font-size: 14px; fill: #1f2937; font-weight: bold; }
.svg-8-0 .inter-text { font-family: arial, sans-serif; font-size: 11px; fill: #1f2937; }
.svg-8-0 .inter-small { font-family: arial, sans-serif; font-size: 9px; fill: #b0a090; }
.svg-8-0 .inter-chain-circle { fill: rgba(52, 81, 178, 0.15); stroke: #4c9be8; stroke-width: 2; }
.svg-8-0 .inter-bridge-line { stroke: #df6919; stroke-width: 2; stroke-dasharray: 5,5; fill: none; }
.svg-8-0 .inter-arrow { fill: #df6919; }
.svg-8-0 .inter-isolated { stroke: #dc3545; stroke-width: 2; stroke-dasharray: 3,3; fill: none; }
</style>
</defs>
<text x="400" y="25" text-anchor="middle" class="inter-title">BlockchainaloneislandissuedemoIntent</text>
<text x="400" y="45" text-anchor="middle" class="inter-small">current：eachchainindependenttransportwork，asset&DataNonelawstraightreceiveinteract</text>
<circle cx="200" cy="150" r="60" class="inter-chain-circle"/>
<text x="200" y="145" text-anchor="middle" class="inter-chain">Bitcoin</text>
<text x="200" y="162" text-anchor="middle" class="inter-text">BTC: $50K</text>
<text x="200" y="175" text-anchor="middle" class="inter-small">PoWconsensus</text>
<circle cx="600" cy="150" r="60" class="inter-chain-circle"/>
<text x="600" y="145" text-anchor="middle" class="inter-chain">Ethereum</text>
<text x="600" y="162" text-anchor="middle" class="inter-text">ETH: $3K</text>
<text x="600" y="175" text-anchor="middle" class="inter-small">PoSconsensus</text>
<circle cx="150" cy="320" r="60" class="inter-chain-circle"/>
<text x="150" y="315" text-anchor="middle" class="inter-chain">Solana</text>
<text x="150" y="332" text-anchor="middle" class="inter-text">SOL: $100</text>
<text x="150" y="345" text-anchor="middle" class="inter-small">HighTPS</text>
<circle cx="400" cy="320" r="60" class="inter-chain-circle"/>
<text x="400" y="315" text-anchor="middle" class="inter-chain">Polygon</text>
<text x="400" y="332" text-anchor="middle" class="inter-text">MATIC: $1</text>
<text x="400" y="345" text-anchor="middle" class="inter-small">Layer 2</text>
<circle cx="650" cy="320" r="60" class="inter-chain-circle"/>
<text x="650" y="315" text-anchor="middle" class="inter-chain">BSC</text>
<text x="650" y="332" text-anchor="middle" class="inter-text">BNB: $400</text>
<text x="650" y="345" text-anchor="middle" class="inter-small">EVMcompat</text>
<ellipse cx="200" cy="150" rx="65" ry="65" class="inter-isolated"/>
<ellipse cx="600" cy="150" rx="65" ry="65" class="inter-isolated"/>
<ellipse cx="150" cy="320" rx="65" ry="65" class="inter-isolated"/>
<ellipse cx="400" cy="320" rx="65" ry="65" class="inter-isolated"/>
<ellipse cx="650" cy="320" rx="65" ry="65" class="inter-isolated"/>
<rect x="50" y="405" width="160" height="35" fill="rgba(220, 53, 69, 0.2)" stroke="#dc3545" stroke-width="1" rx="4"/>
<text x="60" y="420" class="inter-text" fill="#dc3545">❌ Nonelawstraightreceivetransferasset</text>
<text x="60" y="435" class="inter-text" fill="#dc3545">❌ Cannot call other chain</text>
<rect x="320" y="405" width="160" height="35" fill="rgba(223, 105, 25, 0.08)" stroke="#df6919" stroke-width="1" rx="4"/>
<text x="330" y="420" class="inter-text" fill="#df6919">⚠️  Liquiditydistributed</text>
<text x="330" y="435" class="inter-text" fill="#df6919">⚠️  Poor UX</text>
<rect x="590" y="405" width="160" height="35" fill="rgba(52, 81, 178, 0.10)" stroke="#4c9be8" stroke-width="1" rx="4"/>
<text x="600" y="420" class="inter-text" fill="#4c9be8">💡 Need cross-chain</text>
<text x="600" y="435" class="inter-text" fill="#4c9be8">💡 implementInteroperability</text>
</svg>
</div>

<div style="background: rgba(52, 81, 178, 0.06); padding: 1.5em; border-radius: 4px; margin: 2em 0;">
<svg class="svg-8-1" viewBox="0 0 850 500" xmlns="http://www.w3.org/2000/svg" style="width: 100%; max-width: 950px; display: block; margin: 0 auto;">
<defs>
<style>
.svg-8-1 .bridge-title { font-family: arial, sans-serif; font-size: 16px; fill: #1f2937; font-weight: bold; }
.svg-8-1 .bridge-type { font-family: arial, sans-serif; font-size: 14px; fill: #1f2937; font-weight: bold; }
.svg-8-1 .bridge-text { font-family: arial, sans-serif; font-size: 11px; fill: #1f2937; }
.svg-8-1 .bridge-small { font-family: arial, sans-serif; font-size: 9px; fill: #b0a090; }
.svg-8-1 .bridge-box { fill: rgba(52, 81, 178, 0.10); stroke: #4c9be8; stroke-width: 2; }
.svg-8-1 .bridge-trusted { fill: rgba(223, 105, 25, 0.08); stroke: #df6919; stroke-width: 2; }
.svg-8-1 .bridge-trustless { fill: rgba(92, 184, 92, 0.10); stroke: #5cb85c; stroke-width: 2; }
.svg-8-1 .bridge-arrow { stroke: #1f2937; stroke-width: 1.5; fill: none; marker-end: url(#arrowBridge); }
</style>
<marker id="arrowBridge" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
<path d="M0,0 L0,6 L9,3 z" fill="#1f2937"/>
</marker>
</defs>
<text x="425" y="25" text-anchor="middle" class="bridge-title">Bridgeminclass&Compare</text>
<text x="425" y="45" text-anchor="middle" class="bridge-small">presstrustmodel&implementmethodminclass</text>
<rect x="50" y="70" width="750" height="60" class="bridge-box" rx="8"/>
<text x="425" y="95" text-anchor="middle" class="bridge-type">Bridge (Cross-Chain Bridges)</text>
<text x="425" y="115" text-anchor="middle" class="bridge-text">connectdifferentBlockchain，implementasset&Datatransferfoundationset施</text>
<line x1="425" y1="130" x2="200" y2="160" class="bridge-arrow"/>
<line x1="425" y1="130" x2="650" y2="160" class="bridge-arrow"/>
<rect x="50" y="170" width="300" height="280" class="bridge-trusted" rx="8"/>
<text x="200" y="195" text-anchor="middle" class="bridge-type">1️⃣ trusttypeBridge (Trusted)</text>
<text x="60" y="220" class="bridge-text" font-weight="bold">🔸 Features：</text>
<text x="70" y="238" class="bridge-text">• dependCentralizedValidator/Custodialplace</text>
<text x="70" y="254" class="bridge-text">• thirdplaceprotect管lockdecideasset</text>
<text x="70" y="270" class="bridge-text">• speedFast、CostLow</text>
<text x="60" y="295" class="bridge-text" font-weight="bold">🔸 Examples：</text>
<text x="70" y="313" class="bridge-text">• Multichain (alreadystoptransport)</text>
<text x="70" y="329" class="bridge-text">• Wormhole (MultiSigValidator)</text>
<text x="70" y="345" class="bridge-text">• Ronin Bridge</text>
<text x="60" y="370" class="bridge-text" font-weight="bold">🔸 At Risk：</text>
<text x="70" y="388" class="bridge-text" fill="#df6919">❌ single pointFaultyAt Risk</text>
<text x="70" y="404" class="bridge-text" fill="#df6919">❌ Trust Requiredthirdplace</text>
<text x="70" y="420" class="bridge-text" fill="#df6919">❌ Validatorcancanworkevil</text>
<text x="70" y="440" class="bridge-small">case：Ronin Bridgeblanketblackclient盗take$625M</text>
<rect x="500" y="170" width="300" height="280" class="bridge-trustless" rx="8"/>
<text x="650" y="195" text-anchor="middle" class="bridge-type">2️⃣ outgoingtrusttypeBridge (Trustless)</text>
<text x="510" y="220" class="bridge-text" font-weight="bold">🔸 Features：</text>
<text x="520" y="238" class="bridge-text">• based onCryptographyVerify</text>
<text x="520" y="254" class="bridge-text">• Light Client/Relay ChainVerify</text>
<text x="520" y="270" class="bridge-text">• Decentralizationsafeprotectbarrier</text>
<text x="510" y="295" class="bridge-text" font-weight="bold">🔸 Examples：</text>
<text x="520" y="313" class="bridge-text">• IBC (Cosmoseco)</text>
<text x="520" y="329" class="bridge-text">• Polkadot XCMP</text>
<text x="520" y="345" class="bridge-text">• Rainbow Bridge (NEAR)</text>
<text x="510" y="370" class="bridge-text" font-weight="bold">🔸 Pros：</text>
<text x="520" y="388" class="bridge-text" fill="#5cb85c">✅ Noneneedtrustthirdplace</text>
<text x="520" y="404" class="bridge-text" fill="#5cb85c">✅ Cryptographysafeprotectproof</text>
<text x="520" y="420" class="bridge-text" fill="#5cb85c">✅ InheritancesourcechainSecurity</text>
<text x="520" y="440" class="bridge-small">Challenges：implementcomplex、CostmoreHigh</text>
<rect x="50" y="465" width="180" height="25" fill="rgba(223, 105, 25, 0.12)" stroke="#df6919" stroke-width="1" rx="4"/>
<text x="140" y="482" text-anchor="middle" class="bridge-text">trusttype：speed ⚡⚡⚡ safe 🔒</text>
<rect x="620" y="465" width="180" height="25" fill="rgba(92, 184, 92, 0.15)" stroke="#5cb85c" stroke-width="1" rx="4"/>
<text x="710" y="482" text-anchor="middle" class="bridge-text">outgoingtrusttype：speed ⚡ safe 🔒🔒🔒</text>
</svg>
</div>

<div style="background: rgba(52, 81, 178, 0.06); padding: 1.5em; border-radius: 4px; margin: 2em 0;">
<svg class="svg-8-2" viewBox="0 0 900 550" xmlns="http://www.w3.org/2000/svg" style="width: 100%; max-width: 1000px; display: block; margin: 0 auto;">
<defs>
<style>
.svg-8-2 .flow-title { font-family: arial, sans-serif; font-size: 16px; fill: #1f2937; font-weight: bold; }
.svg-8-2 .flow-step { font-family: arial, sans-serif; font-size: 13px; fill: #1f2937; font-weight: bold; }
.svg-8-2 .flow-text { font-family: arial, sans-serif; font-size: 11px; fill: #1f2937; }
.svg-8-2 .flow-small { font-family: arial, sans-serif; font-size: 9px; fill: #b0a090; }
.svg-8-2 .flow-box { fill: rgba(52, 81, 178, 0.10); stroke: #4c9be8; stroke-width: 2; }
.svg-8-2 .flow-chain { fill: rgba(223, 105, 25, 0.08); stroke: #df6919; stroke-width: 2; }
.svg-8-2 .flow-bridge { fill: rgba(92, 184, 92, 0.10); stroke: #5cb85c; stroke-width: 2; }
.svg-8-2 .flow-arrow { stroke: #1f2937; stroke-width: 2; fill: none; marker-end: url(#arrowFlow); }
.svg-8-2 .flow-arrow-bi { stroke: #5cb85c; stroke-width: 2; fill: none; }
</style>
<marker id="arrowFlow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
<path d="M0,0 L0,6 L9,3 z" fill="#1f2937"/>
</marker>
</defs>
<text x="450" y="25" text-anchor="middle" class="flow-title">Bridgeassettransferflow (Lock & Mint pattern)</text>
<text x="450" y="45" text-anchor="middle" class="flow-small">Example：will 100 ETH fromEthereumtransferto BSC</text>
<rect x="50" y="70" width="200" height="100" class="flow-chain" rx="8"/>
<text x="150" y="95" text-anchor="middle" class="flow-step">sourcechain：Ethereum</text>
<text x="60" y="115" class="flow-text">• UserAddress：0xABC...</text>
<text x="60" y="132" class="flow-text">• Balance：100 ETH</text>
<text x="60" y="149" class="flow-text">• op：lockdecideasset</text>
<rect x="350" y="70" width="200" height="100" class="flow-bridge" rx="8"/>
<text x="450" y="95" text-anchor="middle" class="flow-step">BridgeContract</text>
<text x="360" y="115" class="flow-text">• CustodialContract：Lock</text>
<text x="360" y="132" class="flow-text">• ValidatorNetwork</text>
<text x="360" y="149" class="flow-text">• Relayservice</text>
<rect x="650" y="70" width="200" height="100" class="flow-chain" rx="8"/>
<text x="750" y="95" text-anchor="middle" class="flow-step">Targetchain：BSC</text>
<text x="660" y="115" class="flow-text">• UserAddress：0xABC...</text>
<text x="660" y="132" class="flow-text">• Balance：0 WETH</text>
<text x="660" y="149" class="flow-text">• op：castmakeasset</text>
<line x1="250" y1="120" x2="350" y2="120" class="flow-arrow"/>
<line x1="550" y1="120" x2="650" y2="120" class="flow-arrow"/>
<rect x="50" y="200" width="800" height="60" class="flow-box" rx="8"/>
<text x="450" y="225" text-anchor="middle" class="flow-step">step 1️⃣：Useratsourcechainlockdecideasset</text>
<text x="60" y="247" class="flow-text">UserCallEthereumBridgeContract lock(100 ETH, targetChain=BSC) Function，will 100 ETH lockdecideatCustodialContractMedium</text>
<rect x="50" y="280" width="800" height="60" class="flow-box" rx="8"/>
<text x="450" y="305" text-anchor="middle" class="flow-step">step 2️⃣：ValidatorlistenmergeConfirmEvent</text>
<text x="60" y="327" class="flow-text">ValidatorNodelistenEthereumEvent，etc.treatBlockConfirm（e.g.12Block），ReachMultiSigconsensuspostgenerateProof</text>
<rect x="50" y="360" width="800" height="60" class="flow-box" rx="8"/>
<text x="450" y="385" text-anchor="middle" class="flow-step">step 3️⃣：RelaywillProofCommittoTargetchain</text>
<text x="60" y="407" class="flow-text">RelayservicewillValidatorSign&lockdecideProofCommitto BSC BridgeContract submitProof(proof, signatures)</text>
<rect x="50" y="440" width="800" height="60" class="flow-box" rx="8"/>
<text x="450" y="465" text-anchor="middle" class="flow-step">step 4️⃣：Targetchaincastmakeetc.valuepackinstallasset</text>
<text x="60" y="487" class="flow-text">BSC BridgeContractVerifyProofpost，forUsercastmake 100 WETH（Wrapped ETH），Usercanat BSC Upuse</text>
<rect x="50" y="515" width="400" height="25" fill="rgba(92, 184, 92, 0.10)" stroke="#5cb85c" stroke-width="1" rx="4"/>
<text x="60" y="532" class="flow-text">✅ Complete：sourcechainlockdecide 100 ETH，Targetchainget 100 WETH</text>
<rect x="500" y="515" width="350" height="25" fill="rgba(223, 105, 25, 0.08)" stroke="#df6919" stroke-width="1" rx="4"/>
<text x="510" y="532" class="flow-text">⚠️  opposetowardop：burn WETH → unlock ETH（Burn & Unlock）</text>
</svg>
</div>

<div style="background: rgba(52, 81, 178, 0.06); padding: 1.5em; border-radius: 4px; margin: 2em 0;">
<svg class="svg-8-3" viewBox="0 0 850 600" xmlns="http://www.w3.org/2000/svg" style="width: 100%; max-width: 950px; display: block; margin: 0 auto;">
<defs>
<style>
.svg-8-3 .ibc-title { font-family: arial, sans-serif; font-size: 16px; fill: #1f2937; font-weight: bold; }
.svg-8-3 .ibc-layer { font-family: arial, sans-serif; font-size: 13px; fill: #1f2937; font-weight: bold; }
.svg-8-3 .ibc-text { font-family: arial, sans-serif; font-size: 11px; fill: #1f2937; }
.svg-8-3 .ibc-small { font-family: arial, sans-serif; font-size: 9px; fill: #b0a090; }
.svg-8-3 .ibc-box { fill: rgba(52, 81, 178, 0.10); stroke: #4c9be8; stroke-width: 2; }
.svg-8-3 .ibc-app { fill: rgba(223, 105, 25, 0.08); stroke: #df6919; stroke-width: 2; }
.svg-8-3 .ibc-transport { fill: rgba(92, 184, 92, 0.10); stroke: #5cb85c; stroke-width: 2; }
.svg-8-3 .ibc-arrow { stroke: #1f2937; stroke-width: 1.5; fill: none; marker-end: url(#arrowIBC); }
.svg-8-3 .ibc-data { stroke: #df6919; stroke-width: 2; fill: none; stroke-dasharray: 5,5; }
</style>
<marker id="arrowIBC" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
<path d="M0,0 L0,6 L9,3 z" fill="#1f2937"/>
</marker>
</defs>
<text x="425" y="25" text-anchor="middle" class="ibc-title">IBC Protocolarchitecture (Inter-Blockchain Communication)</text>
<text x="425" y="45" text-anchor="middle" class="ibc-small">Cosmos EcosystemStandardIBCProtocol - based onLight Client Verification</text>
<rect x="50" y="70" width="350" height="480" fill="rgba(52, 81, 178, 0.05)" stroke="#4c9be8" stroke-width="2" stroke-dasharray="5,5" rx="8"/>
<text x="225" y="95" text-anchor="middle" class="ibc-layer">Blockchain A (Cosmos Hub)</text>
<rect x="450" y="70" width="350" height="480" fill="rgba(92, 184, 92, 0.1)" stroke="#5cb85c" stroke-width="2" stroke-dasharray="5,5" rx="8"/>
<text x="625" y="95" text-anchor="middle" class="ibc-layer">Blockchain B (Osmosis)</text>
<rect x="70" y="115" width="310" height="80" class="ibc-app" rx="6"/>
<text x="225" y="140" text-anchor="middle" class="ibc-layer">App Layer (IBC Application)</text>
<text x="80" y="162" class="ibc-text">• ICS-20: Tokentransfer</text>
<text x="80" y="178" class="ibc-text">• ICS-27: Cross-chainaccount (ICA)</text>
<text x="80" y="194" class="ibc-text">• CustomAppmodule</text>
<rect x="470" y="115" width="310" height="80" class="ibc-app" rx="6"/>
<text x="625" y="140" text-anchor="middle" class="ibc-layer">App Layer (IBC Application)</text>
<text x="480" y="162" class="ibc-text">• ICS-20: Tokentransfer</text>
<text x="480" y="178" class="ibc-text">• ICS-27: Cross-chainaccount (ICA)</text>
<text x="480" y="194" class="ibc-text">• CustomAppmodule</text>
<path d="M 380,155 Q 425,155 470,155" class="ibc-data"/>
<text x="425" y="150" text-anchor="middle" class="ibc-small" fill="#df6919">Datapack</text>
<rect x="70" y="220" width="310" height="100" class="ibc-box" rx="6"/>
<text x="225" y="245" text-anchor="middle" class="ibc-layer">IBC corelayer (IBC/TAO)</text>
<text x="80" y="267" class="ibc-text">• ICS-2: Clientlanguagemeaning</text>
<text x="80" y="283" class="ibc-text">• ICS-3: connectgrasphand</text>
<text x="80" y="299" class="ibc-text">• ICS-4: translateroad&Datapack</text>
<text x="80" y="315" class="ibc-text">• ICS-23: vector承诺Proof</text>
<rect x="470" y="220" width="310" height="100" class="ibc-box" rx="6"/>
<text x="625" y="245" text-anchor="middle" class="ibc-layer">IBC corelayer (IBC/TAO)</text>
<text x="480" y="267" class="ibc-text">• ICS-2: Clientlanguagemeaning</text>
<text x="480" y="283" class="ibc-text">• ICS-3: connectgrasphand</text>
<text x="480" y="299" class="ibc-text">• ICS-4: translateroad&Datapack</text>
<text x="480" y="315" class="ibc-text">• ICS-23: vector承诺Proof</text>
<line x1="225" y1="320" x2="225" y2="340" class="ibc-arrow"/>
<line x1="625" y1="320" x2="625" y2="340" class="ibc-arrow"/>
<rect x="70" y="340" width="310" height="80" class="ibc-transport" rx="6"/>
<text x="225" y="365" text-anchor="middle" class="ibc-layer">Light Client (Light Client)</text>
<text x="80" y="387" class="ibc-text">• StorageBlockchain B Stateroot</text>
<text x="80" y="403" class="ibc-text">• Validate Blockchain B Proof</text>
<text x="80" y="419" class="ibc-text">• Tendermint consensusVerify</text>
<rect x="470" y="340" width="310" height="80" class="ibc-transport" rx="6"/>
<text x="625" y="365" text-anchor="middle" class="ibc-layer">Light Client (Light Client)</text>
<text x="480" y="387" class="ibc-text">• StorageBlockchain A Stateroot</text>
<text x="480" y="403" class="ibc-text">• Validate Blockchain A Proof</text>
<text x="480" y="419" class="ibc-text">• Tendermint consensusVerify</text>
<path d="M 380,380 Q 425,380 470,380" class="ibc-arrow"/>
<path d="M 470,400 Q 425,400 380,400" class="ibc-arrow"/>
<text x="425" y="375" text-anchor="middle" class="ibc-small">State Proof →</text>
<text x="425" y="415" text-anchor="middle" class="ibc-small">← Confirmreturn执</text>
<rect x="70" y="440" width="310" height="100" class="ibc-box" rx="6"/>
<text x="225" y="465" text-anchor="middle" class="ibc-layer">Blockchain A consensuslayer</text>
<text x="80" y="487" class="ibc-text">• Tendermint BFT consensus</text>
<text x="80" y="503" class="ibc-text">• Blockgenerate&Verify</text>
<text x="80" y="519" class="ibc-text">• StaterootHash：0xABC...</text>
<text x="80" y="535" class="ibc-text">• Height：#1,234,567</text>
<rect x="470" y="440" width="310" height="100" class="ibc-box" rx="6"/>
<text x="625" y="465" text-anchor="middle" class="ibc-layer">Blockchain B consensuslayer</text>
<text x="480" y="487" class="ibc-text">• Tendermint BFT consensus</text>
<text x="480" y="503" class="ibc-text">• Blockgenerate&Verify</text>
<text x="480" y="519" class="ibc-text">• StaterootHash：0xDEF...</text>
<text x="480" y="535" class="ibc-text">• Height：#2,345,678</text>
<rect x="50" y="565" width="380" height="25" fill="rgba(92, 184, 92, 0.15)" stroke="#5cb85c" stroke-width="1" rx="4"/>
<text x="60" y="582" class="ibc-text">✅ Pros：Noneneedtrustthirdplace，InheritancesourcechainSecurity</text>
<rect x="470" y="565" width="330" height="25" fill="rgba(223, 105, 25, 0.12)" stroke="#df6919" stroke-width="1" rx="4"/>
<text x="480" y="582" class="ibc-text">⚠️  require：evenplacechainmustwhiskerSupportLight Client Verification</text>
</svg>
</div>

<div style="background: rgba(52, 81, 178, 0.06); padding: 1.5em; border-radius: 4px; margin: 2em 0;">
<svg class="svg-8-4" viewBox="0 0 900 520" xmlns="http://www.w3.org/2000/svg" style="width: 100%; max-width: 1000px; display: block; margin: 0 auto;">
<defs>
<style>
.svg-8-4 .risk-title { font-family: arial, sans-serif; font-size: 16px; fill: #1f2937; font-weight: bold; }
.svg-8-4 .risk-event { font-family: arial, sans-serif; font-size: 12px; fill: #1f2937; font-weight: bold; }
.svg-8-4 .risk-text { font-family: arial, sans-serif; font-size: 10px; fill: #1f2937; }
.svg-8-4 .risk-small { font-family: arial, sans-serif; font-size: 9px; fill: #b0a090; }
.svg-8-4 .risk-critical { fill: rgba(220, 53, 69, 0.3); stroke: #dc3545; stroke-width: 2; }
.svg-8-4 .risk-high { fill: rgba(223, 105, 25, 0.12); stroke: #df6919; stroke-width: 2; }
.svg-8-4 .risk-timeline { stroke: #4c9be8; stroke-width: 3; fill: none; }
</style>
</defs>
<text x="450" y="25" text-anchor="middle" class="risk-title">BridgeheavyLargeIncident Timeline</text>
<text x="450" y="45" text-anchor="middle" class="risk-small">2021-2024year，Bridgelossultra $30 hundred millionperfectera</text>
<line x1="50" y1="80" x2="850" y2="80" class="risk-timeline"/>
<circle cx="150" cy="80" r="5" fill="#dc3545"/>
<circle cx="350" cy="80" r="5" fill="#dc3545"/>
<circle cx="550" cy="80" r="5" fill="#df6919"/>
<circle cx="750" cy="80" r="5" fill="#df6919"/>
<text x="150" y="100" text-anchor="middle" class="risk-small">2022.03</text>
<text x="350" y="100" text-anchor="middle" class="risk-small">2022.08</text>
<text x="550" y="100" text-anchor="middle" class="risk-small">2022.02</text>
<text x="750" y="100" text-anchor="middle" class="risk-small">2023.07</text>
<rect x="30" y="120" width="240" height="110" class="risk-critical" rx="6"/>
<text x="150" y="140" text-anchor="middle" class="risk-event">🔴 Ronin Bridge</text>
<text x="40" y="160" class="risk-text">loss：$625M (史UpmostLarge)</text>
<text x="40" y="175" class="risk-text">attackmethod：</text>
<text x="50" y="190" class="risk-text">• blackclientcontrol 5/9 ValidatorPrivate Key</text>
<text x="50" y="205" class="risk-text">• fakemakewithdrawTransaction</text>
<text x="50" y="220" class="risk-text">• 盗take 173,600 ETH + USDC</text>
<rect x="330" y="120" width="240" height="110" class="risk-critical" rx="6"/>
<text x="450" y="140" text-anchor="middle" class="risk-event">🔴 Nomad Bridge</text>
<text x="340" y="160" class="risk-text">loss：$190M</text>
<text x="340" y="175" class="risk-text">attackmethod：</text>
<text x="350" y="190" class="risk-text">• beginningbeginifyFunctionvuln</text>
<text x="350" y="205" class="risk-text">• AnyonecanfakemakeMessage</text>
<text x="350" y="220" class="risk-text">• exemptfeeproposetakefunds</text>
<rect x="630" y="120" width="240" height="110" class="risk-high" rx="6"/>
<text x="750" y="140" text-anchor="middle" class="risk-event">🟠 Wormhole</text>
<text x="640" y="160" class="risk-text">loss：$325M</text>
<text x="640" y="175" class="risk-text">attackmethod：</text>
<text x="650" y="190" class="risk-text">• Signature Verifybypassfault</text>
<text x="650" y="205" class="risk-text">• castmake 120,000 false ETH</text>
<text x="650" y="220" class="risk-text">• Jump Crypto wholeplaquecompensatepay</text>
<rect x="330" y="250" width="240" height="110" class="risk-high" rx="6"/>
<text x="450" y="270" text-anchor="middle" class="risk-event">🟠 Multichain</text>
<text x="340" y="290" class="risk-text">loss：$126M</text>
<text x="340" y="305" class="risk-text">Event：</text>
<text x="350" y="320" class="risk-text">• CEO loselink，Private Keyloselose</text>
<text x="350" y="335" class="risk-text">• exceptionwithdraw，projectstoptransport</text>
<text x="350" y="350" class="risk-text">• Centralizationtypicalcase</text>
<rect x="50" y="380" width="800" height="100" fill="rgba(220, 53, 69, 0.2)" stroke="#dc3545" stroke-width="2" rx="8"/>
<text x="450" y="405" text-anchor="middle" class="risk-event">oftenseeattackvectorSummary</text>
<text x="60" y="425" class="risk-text">1️⃣ <tspan font-weight="bold">验证者私钥泄露</tspan>：多签钱包被攻破，控制验证者私钥</text>
<text x="60" y="442" class="risk-text">2️⃣ <tspan font-weight="bold">智能合约漏洞</tspan>：签名验证、重入、访问控制等合约 bug</text>
<text x="60" y="459" class="risk-text">3️⃣ <tspan font-weight="bold">中心化风险</tspan>：依赖单点（如 Multichain CEO 私钥）</text>
<text x="60" y="476" class="risk-text">4️⃣ <tspan font-weight="bold">共识攻击</tspan>：轻客户端实现缺陷，伪造链状态</text>
<rect x="50" y="490" width="400" height="20" fill="rgba(220, 53, 69, 0.4)" rx="4"/>
<text x="60" y="504" class="risk-text" fill="#dc3545">💀 Bridge losses (2021-2024)：ultra $30 hundred millionperfectera</text>
<rect x="500" y="490" width="350" height="20" fill="rgba(223, 105, 25, 0.4)" rx="4"/>
<text x="510" y="504" class="risk-text" fill="#df6919">⚠️  占 DeFi totalblackclientattackloss ~60%</text>
</svg>
</div>

<div style="background: rgba(52, 81, 178, 0.06); padding: 1.5em; border-radius: 4px; margin: 2em 0;">
<svg class="svg-8-5" viewBox="0 0 850 570" xmlns="http://www.w3.org/2000/svg" style="width: 100%; max-width: 950px; display: block; margin: 0 auto;">
<defs>
<style>
.svg-8-5 .future-title { font-family: arial, sans-serif; font-size: 16px; fill: #1f2937; font-weight: bold; }
.svg-8-5 .future-cat { font-family: arial, sans-serif; font-size: 13px; fill: #1f2937; font-weight: bold; }
.svg-8-5 .future-text { font-family: arial, sans-serif; font-size: 11px; fill: #1f2937; }
.svg-8-5 .future-small { font-family: arial, sans-serif; font-size: 9px; fill: #b0a090; }
.svg-8-5 .future-trend { fill: rgba(92, 184, 92, 0.10); stroke: #5cb85c; stroke-width: 2; }
.svg-8-5 .future-challenge { fill: rgba(223, 105, 25, 0.08); stroke: #df6919; stroke-width: 2; }
</style>
</defs>
<text x="425" y="25" text-anchor="middle" class="future-title">Cross-chainTechGrowthtrend&Challenges</text>
<text x="425" y="45" text-anchor="middle" class="future-small">from"chainbetweenBridgebeam"to"wholechainInteroperability"</text>
<rect x="50" y="70" width="370" height="220" class="future-trend" rx="8"/>
<text x="235" y="95" text-anchor="middle" class="future-cat">🚀 Growthtrend</text>
<text x="60" y="120" class="future-text" font-weight="bold">1️⃣ fromassetBridgetowholechainInterop</text>
<text x="70" y="138" class="future-text">• noonlytransferToken，returnwanttransmitdeliverMessage</text>
<text x="70" y="153" class="future-text">• Cross-chainSmart ContractCallcompleteforlabelmatch</text>
<text x="70" y="168" class="future-text">• case：LayerZero、Axelar GMP</text>
<text x="60" y="193" class="future-text" font-weight="bold">2️⃣ Standard&moduleify</text>
<text x="70" y="211" class="future-text">• IBCstandard：IBC、XCMP</text>
<text x="70" y="226" class="future-text">• composableCross-chainmodule</text>
<text x="70" y="241" class="future-text">• Interoperabilitycompleteforfoundationset施</text>
<text x="60" y="266" class="future-text" font-weight="bold">3️⃣ IntentdrivemoveCross-chain</text>
<text x="70" y="284" class="future-text">• UsertableunderstandIntent，Systemautoroadfrom</text>
<rect x="430" y="70" width="370" height="220" class="future-challenge" rx="8"/>
<text x="615" y="95" text-anchor="middle" class="future-cat">⚠️  PrimarywantChallenges</text>
<text x="440" y="120" class="future-text" font-weight="bold">1️⃣ SecurityyesmostLargebarrier</text>
<text x="450" y="138" class="future-text">• BridgeyesblackclientprimaryTarget</text>
<text x="450" y="153" class="future-text">• NeedmoregoodFormal Verify</text>
<text x="450" y="168" class="future-text">• Insurance&At Riskmgmtmechanism</text>
<text x="440" y="193" class="future-text" font-weight="bold">2️⃣ trustassumptionrightmeasure</text>
<text x="450" y="211" class="future-text">• outgoingtrust = HighCost、Lowspeed</text>
<text x="450" y="226" class="future-text">• trusttype = LowCost、HighAt Risk</text>
<text x="450" y="241" class="future-text">• NeedcreateNewtrustmodel</text>
<text x="440" y="266" class="future-text" font-weight="bold">3️⃣ Liquidity碎filmify</text>
<text x="450" y="284" class="future-text">• packinstallasset泛滥（WETH、WBTC...）</text>
<rect x="50" y="310" width="750" height="220" fill="rgba(52, 81, 178, 0.10)" stroke="#4c9be8" stroke-width="2" rx="8"/>
<text x="425" y="335" text-anchor="middle" class="future-cat">🌐 futurevision：wholechainecoSystem (Omnichain Ecosystem)</text>
<text x="60" y="360" class="future-text" font-weight="bold">Uservisionangle：</text>
<text x="70" y="378" class="future-text">• noNeedcloseheartassetatwhichlabelchainUp</text>
<text x="70" y="393" class="future-text">• walletautoChoosemostexcellentchainExecute Tx</text>
<text x="70" y="408" class="future-text">• Gas FeeavailableAnyTokenpayment</text>
<text x="70" y="423" class="future-text">• Cross-chainope.g.agreeoddchainunitetypesimple</text>
<text x="60" y="448" class="future-text" font-weight="bold">devagentvisionangle：</text>
<text x="70" y="466" class="future-text">• encodewriteunitetimesContract，Deploytoallchain</text>
<text x="70" y="481" class="future-text">• canCallAnychainSmart Contract</text>
<text x="70" y="496" class="future-text">• uniteunitedevtool&standard</text>
<text x="70" y="511" class="future-text">• Liquidityatwholechainbetweenfromfromflowmove</text>
<rect x="50" y="540" width="750" height="20" fill="rgba(92, 184, 92, 0.15)" stroke="#5cb85c" stroke-width="1" rx="4"/>
<text x="60" y="554" class="future-text">💡 corereasonthought：Blockchainnoresponseshouldyesaloneisland，butresponseshouldyesmutuallinkmutualtranslatewholesphereNetwork</text>
</svg>
</div>
