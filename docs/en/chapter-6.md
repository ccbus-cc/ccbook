---
title: "Chapter 6: Blockchain Architecture"
---

# Chapter 6: Blockchain Architecture

<div class="chapter-intro">

**Difficulty Level:** 🟡 Intermediate
**Estimated Learning Time:** 4-5 hours

**Chapter Objectives:**
- Understand blockchain system technical architecture
- Learn P2P network architecture
- Master node types and their roles
- Understand blockchain trilemma

</div>


## 6.0 2025-2026 Perspective: Why Reread This Chapter

Blockchain architecture is undergoing a paradigm shift from **monolithic** to **modular**. The new layering you need to understand in 2025-2026:

**Execution + Settlement + Consensus + Data Availability (DA) = Modern blockchain architecture**

1. **Data Availability (DA) layer boom**:
   - **Celestia** (mainnet 2023-10): first dedicated DA layer, uses data availability sampling (DAS) for high throughput
   - **EigenDA** (2024-Q2): EigenLayer-restaked DA layer, economic model differs from traditional L1
   - **Avail**: Polygon team's general-purpose DA layer
   - **EIP-4844 Blob** (2024-03): Ethereum's native DA, blob data expires in 18 days, L2 cost down 100x
   - **PeerDAS (Fusaka 2026-Q2 planned)**: further expands blob capacity 4-8x

2. **Shared Sequencer**:
   - **Espresso**: first production-grade shared sequencer, serving OP Stack chains
   - **Astria**: Celestia ecosystem shared sequencer
   - **Radius**: emerging shared sequencer focused on cross-chain atomicity
   - **Advantages**: cross-chain atomicity (one user tx affects multiple L2s), MEV democratization, censorship resistance

3. **Based Rollup (L1-sequenced) and Native Rollup**:
   - **Based Rollup** (proposed by Justin Drake): directly sequenced by L1 validators, no independent sequencer, inherits L1 censorship resistance
   - **Native Rollup**: executed inside L1 nodes, achieving ultra-low latency
   - **Representative projects**: Taiko (earliest based rollup), Fuel (SVM-based), MegaETH (optimistic)

4. **Appchain ecosystem**:
   - **Cosmos SDK + IBC**: 100+ appchains, e.g., dYdX (perpetuals), Berachain (Proof of Liquidity)
   - **OP Stack Superchain**: Base, OP Mainnet, Zora, Mode, Worldcoin share sequencing and bridging
   - **Polygon CDK**: Polygon zkEVM, Immutable, Astar share zkEVM proof
   - **Arbitrum Stylus**: Rust + C++ can write L2 contracts, WASM execution

### 🖥️ Real-world Example: CCBus's Multi-Chain Architecture Adaptation

CCBus runs simultaneously on EVM-family (BSC, ETH, Base, Arbitrum, zkSync), Solana-family, Bitcoin-family (via Inscription), and Tron-family (TRC-20) — all heterogeneous architectures. Its contract logic must be abstracted to be "execution-layer-agnostic". The screenshot below shows CCBus's standard token creation form; the platform auto-adapts to the target chain.

![CCBus multi-chain architecture adaptation](../public/images/chapters/zh/standard-token-create.png)

*Figure 6-1: CCBus standard token creation demonstrates multi-chain architecture adaptation. ERC-20 on EVM chains, SPL Token on Solana — the bytecode is completely different.*

## 6.1 P2P Network Architecture

Blockchain operates on a peer-to-peer network where all nodes are equal participants.

## 6.2 Node Types

- **Full Nodes** - Store complete blockchain history
- **Light Nodes** - Store only block headers
- **Archive Nodes** - Store all historical states

## 6.3 Network Propagation and Synchronization

How blocks and transactions spread across the network.

## 6.4 Mempool and Transaction Ordering

The memory pool holds pending transactions before they're included in blocks.

## 6.5 Fork Types

- **Soft Forks** - Backward-compatible protocol changes
- **Hard Forks** - Non-backward-compatible changes

## 6.6 Blockchain Trilemma

The fundamental challenge: balancing **Scalability**, **Security**, and **Decentralization**.

## 6.7 State Management and Storage

How blockchain systems manage and store state data efficiently.

<div class="chapter-footer">

### Key Takeaways
- P2P architecture enables decentralization
- Different node types serve different purposes
- The blockchain trilemma is a fundamental constraint
- State management is crucial for scalability

</div>
