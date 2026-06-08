---
title: "Chapter 7: Layer 2 Scaling Solutions"
---


# Chapter 7: Layer 2 Scaling Solutions

<div class="chapter-intro">

**Difficulty Level:** 🔴 Advanced
**Estimated Learning Time:** 5-6 hours

**Chapter Objectives:**
- Understand blockchain scaling challenges
- Master Layer 2 technologies
- Compare different scaling solutions
- Explore future scaling directions

</div>


## 7.0 2025-2026 视角:为什么这一章要重新读

Layer 2 has moved from 'scaling experiment' to 'mainstream settlement layer'. Optimistic Rollup (Arbitrum, OP Mainnet, Base) and zkRollup (zkSync Era, Polygon zkEVM, Linea, Scroll, Starknet) have all surpassed many L1s in TVL, users, and transaction count. This chapter explains the fundamental difference between OP and ZK, the post-EIP-4844 blob cost structure, and 2026 trends: **Based Rollup, Native Rollup, Intents on L2**.

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

<div class="chapter-footer">

### Key Takeaways
- Layer 2 solutions address scalability without compromising security
- Different solutions have different trade-offs
- Rollups are emerging as the preferred scaling approach

</div>
