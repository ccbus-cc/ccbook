---
title: "Chapter 8: Interoperability and Cross-Chain"
---

# Chapter 8: Interoperability and Cross-Chain

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

*图: CCBus cross-chain swap — UI template for intent-based cross-chain*


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

<div class="chapter-footer">

### Key Takeaways
- Interoperability is crucial for blockchain's future
- Multiple approaches exist with different trade-offs
- Cross-chain bridges are critical infrastructure

</div>
