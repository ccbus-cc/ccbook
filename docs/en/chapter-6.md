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


## 6.0 2025-2026 视角:为什么这一章要重新读

Blockchain architecture is undergoing a paradigm shift from monolithic to modular. Celestia, EigenDA, and Avail decouple data availability from execution; Espresso and Astria provide shared sequencers; Ethereum embraces the DA layer via EIP-4844 (blob) and the danksharding roadmap. This chapter systematically explains the four-layer architecture: **Execution, Settlement, Consensus, Data Availability (DA)**.

### 🖥️ Real-world Example: CCBus's Multi-Chain Architecture Adaptation

CCBus runs simultaneously on EVM-family (BSC, ETH, Base, Arbitrum, zkSync), Solana-family, Bitcoin-family (via Inscription), and Tron-family (TRC-20) — all heterogeneous architectures. Its contract logic must be abstracted to be 'execution-layer-agnostic'. The screenshot below shows CCBus's standard token creation form; the platform auto-adapts to the target chain.

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
