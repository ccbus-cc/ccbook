---
title: "Chapter 6: Blockchain Architecture"
---

<div class="ccbus-hero">
  <div class="ccbus-hero-avatar">
    <img src="../public/images/avatars/heroes/chain-hopper.png" alt="Chain Hopper" />
  </div>
  <div class="ccbus-hero-content">
    <h1>Chapter 6: Blockchain Architecture</h1>
    <div class="ccbus-teacher-label">🎙️ 本章讲师:<strong>Chain Hopper</strong> · The architecture "tour guide" — shows you the L1/L2 modules</div>
  </div>
</div>

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



### 6.7 Modular Data Availability (DA) Layer: From EigenDA to PeerDAS

![CCBus multi-chain market overview — unified data view across DA layers](../public/images/chapters/zh/market-overview.png)

*图: CCBus multi-chain market overview — unified data view across DA layers*


**What is data availability (DA)?**

Data availability refers to "whether anyone can download and verify all the transaction data of a block". If data is unavailable, although there is a "state root" on-chain, the full state cannot be reconstructed. This is the **data availability problem**.

**Why need a dedicated DA layer?**

- **Traditional L1 (ETH, Solana)**: DA + execution + consensus on the same chain, all nodes must store full data
- **Modular L1**: DA provided by dedicated layer (Celestia, EigenDA, Avail), execution chain only needs to download from DA layer
- **Advantage**: execution chain nodes have less storage pressure, can independently scale throughput

**Celestia (2023-10 mainnet): first dedicated DA layer**

- **Core technology**: Data Availability Sampling (DAS)
- Nodes only need to download partial data + verify other nodes' commitments, high-probability data availability
- Namespaced Merkle Tree (NMT) allows multi-Rollup to share Celestia space
- **2026 real projects**: Manta, Movement, Berachain (EVM-L1, Celestia syncing as settlement)

**EigenDA (2024-Q2 mainnet): EigenLayer-based DA**

- **Economic model**: Operators stake ETH on EigenLayer, qualify to provide DA service
- **Throughput**: up to 10 MB/s
- **2026 real projects**: Mantle, Cyber, Caldera etc. rollups choose EigenDA

**Avail (Polygon team, 2024-Q3 mainnet)**

- Similar to Celestia, but supports KZG commitments
- **2026 real projects**: Lens, Centrifuge, Space ID

**EIP-4844 Blob (2024-03, Cancun upgrade)**

- Ethereum's native "short-term DA"
- blob data expires after 18 days
- Compared to calldata, blob is cheaper (target 3, max 6, each 125KB)
- **2026 real data**: Blob gas fee 0.001 gwei, daily blob usage 1.2M

**PeerDAS (planned 2026-Q2, Fusaka upgrade)**

- DAS introduced into Ethereum itself
- Nodes only need to sample partial blob
- blob capacity expanded 4-8x more

**Comparison table**:

| DA scheme | Throughput | Cost | Trust model | Ecosystem |
|---|---|---|---|---|
| **Ethereum L1 calldata** | Low | High | PoS | All L2 |
| **EIP-4844 Blob** | Med | Very low | PoS | All L2 |
| **Celestia** | High | Low | PoS (independent) | Manta, Movement |
| **EigenDA** | Very high | Med | Restaking | Mantle, Cyber |
| **Avail** | High | Low | PoS (independent) | Centrifuge |

**Developer recommendations**:
- Mainnet EVM chain → choose EIP-4844 blob (cheap and secure)
- High-throughput apps (SocialFi, GameFi) → choose Celestia or EigenDA
- Hybrid strategy: use Celestia for long-term storage, blob for short-term cost optimization

## 6.6 Blockchain Trilemma

The fundamental challenge: balancing **Scalability**, **Security**, and **Decentralization**.

## 6.7 State Management and Storage

How blockchain systems manage and store state data efficiently.

<div class="ccbus-teacher-credits">
  <div class="ccbus-teacher-credits-avatar">
    <img src="../public/images/avatars/heroes/chain-hopper.png" alt="Chain Hopper" />
  </div>
  <div class="ccbus-teacher-credits-body">
    Taught by: <strong>Chain Hopper</strong> — The architecture "tour guide" — shows you the L1/L2 modules<br />
    <span style="font-size: 0.85em; color: var(--vp-c-text-3);">📚 The next chapter [Chapter 7: Layer 2 Scaling Solutions] will be taught by another CCBus guide.</span>
  </div>
</div>

<div class="chapter-footer">

### Key Takeaways
- P2P architecture enables decentralization
- Different node types serve different purposes
- The blockchain trilemma is a fundamental constraint
- State management is crucial for scalability

</div>
