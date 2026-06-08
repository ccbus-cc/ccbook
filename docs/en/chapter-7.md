---
title: "Chapter 7: Layer 2 Scaling"
---

# Chapter 7: Layer 2 Scaling

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

<div class="chapter-footer">

### Key Takeaways
- Layer 2 solutions address scalability without compromising security
- Different solutions have different trade-offs
- Rollups are emerging as the preferred scaling approach

</div>
