---
title: "Chapter 6: Blockchain Architecture"
---

<div class="ccbus-hero">
  <div class="ccbus-hero-avatar">
    <img src="../public/images/avatars/heroes/chain-hopper.png" alt="Chain Hopper" />
  </div>
  <div class="ccbus-hero-content">
    <h1>Chapter 6: Blockchain Architecture</h1>
    <div class="ccbus-teacher-label">🎙️ Taught by:<strong>Chain Hopper</strong> · The architecture "tour guide" — shows you the L1/L2 modules</div>
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

*Figure: CCBus multi-chain market overview — unified data view across DA layers*


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

<div style="background: rgba(52, 81, 178, 0.06); padding: 1.5em; border-radius: 4px; margin: 2em 0;">
<svg class="svg-6-0" viewBox="0 0 750 550" xmlns="http://www.w3.org/2000/svg" style="width: 100%; max-width: 800px; display: block; margin: 0 auto;">
<defs>
<style>
      .svg-6-0 .arch-text-title { font-family: arial, sans-serif; font-size: 14px; fill: #1f2937; font-weight: bold; }
      .svg-6-0 .arch-text { font-family: arial, sans-serif; font-size: 10px; fill: #1f2937; }
      .svg-6-0 .arch-text-small { font-family: arial, sans-serif; font-size: 8px; fill: #1f2937; }
      .svg-6-0 .arch-layer-app { fill: rgba(223, 105, 25, 0.25); stroke: #df6919; stroke-width: 1.5; }
      .svg-6-0 .arch-layer-contract { fill: rgba(76, 156, 232, 0.25); stroke: #4c9be8; stroke-width: 1.5; }
      .svg-6-0 .arch-layer-consensus { fill: rgba(92, 184, 92, 0.25); stroke: #5cb85c; stroke-width: 1.5; }
      .svg-6-0 .arch-layer-network { fill: rgba(156, 89, 182, 0.25); stroke: #9c59b6; stroke-width: 1.5; }
      .svg-6-0 .arch-layer-data { fill: rgba(241, 196, 15, 0.25); stroke: rgba(245, 194, 66, 0.20); stroke-width: 1.5; }
      .svg-6-0 .arch-layer-infra { fill: rgba(52, 73, 94, 0.35); stroke: #34495e; stroke-width: 1.5; }
      .svg-6-0 .arch-arrow { stroke: #4c9be8; fill: none; stroke-width: 1; stroke-dasharray: 3,2; }
    </style>
    <marker id="arch-arrow-down" markerWidth="8" markerHeight="8" refX="8" refY="4" orient="auto">
      <polygon points="0 0, 8 4, 0 8" fill="#4c9be8"/>
    </marker>
  </defs>
  <text class="arch-text-title" x="375" y="25" text-anchor="middle">Blockchain六layerarchitecturemodel</text>
  <rect class="arch-layer-app" x="50" y="50" width="650" height="70" rx="4"/>
  <text class="arch-text" x="70" y="70" font-weight="bold">App Layer (Application Layer)</text>
  <text class="arch-text-small" x="70" y="88">• DApps: DecentralizationApp (DeFi, NFT, DAO, GameFi)</text>
  <text class="arch-text-small" x="70" y="101">• SDK & API: devtoolpack&Appjourneyserialinterface</text>
  <text class="arch-text-small" x="70" y="114">• Web3Frontend: Wallet Connect、Tx Signature、StateQuery</text>
  <text class="arch-text-small" x="550" y="88" fill="#df6919" font-weight="bold">Userinteractlayer</text>
  <line class="arch-arrow" x1="375" y1="120" x2="375" y2="135" marker-end="url(#arch-arrow-down)"/>
  <rect class="arch-layer-contract" x="50" y="135" width="650" height="70" rx="4"/>
  <text class="arch-text" x="70" y="155" font-weight="bold">Contractlayer (Smart Contract Layer)</text>
  <text class="arch-text-small" x="70" y="173">• VM: EVM, WASM, Move VM</text>
  <text class="arch-text-small" x="70" y="186">• Smart Contract: businesslogical、Statemgmt、Eventtrigger</text>
  <text class="arch-text-small" x="70" y="199">• Contractstandard: ERC-20, ERC-721, ERC-1155, ERC-4337</text>
  <text class="arch-text-small" x="550" y="173" fill="#4c9be8" font-weight="bold">businesslogic layer</text>
  <line class="arch-arrow" x1="375" y1="205" x2="375" y2="220" marker-end="url(#arch-arrow-down)"/>
  <rect class="arch-layer-consensus" x="50" y="220" width="650" height="70" rx="4"/>
  <text class="arch-text" x="70" y="240" font-weight="bold">consensuslayer (Consensus Layer)</text>
  <text class="arch-text-small" x="70" y="258">• Consensus: PoW, PoS, DPoS, PBFT, PoA</text>
  <text class="arch-text-small" x="70" y="271">• Blockprod: Block Productionmechanism、ValidatorChoose</text>
  <text class="arch-text-small" x="70" y="284">• Forkprocess: Longest Chainrule、Deterministic</text>
  <text class="arch-text-small" x="550" y="258" fill="#5cb85c" font-weight="bold">Trust Buildinglayer</text>
  <line class="arch-arrow" x1="375" y1="290" x2="375" y2="305" marker-end="url(#arch-arrow-down)"/>
  <rect class="arch-layer-network" x="50" y="305" width="650" height="70" rx="4"/>
  <text class="arch-text" x="70" y="325" font-weight="bold">Networklayer (Network Layer)</text>
  <text class="arch-text-small" x="70" y="343">• P2PNetwork: PeerDiscovery&connect (Kademlia, GossipSub)</text>
  <text class="arch-text-small" x="70" y="356">• Datapropagate: BlockBroadcast、TransactionpoolSync</text>
  <text class="arch-text-small" x="70" y="369">• NetworkProtocol: TCP/IP, libp2p, DevP2P</text>
  <text class="arch-text-small" x="550" y="343" fill="#9c59b6" font-weight="bold">translatetrustcoordinatelayer</text>
  <line class="arch-arrow" x1="375" y1="375" x2="375" y2="390" marker-end="url(#arch-arrow-down)"/>
  <rect class="arch-layer-data" x="50" y="390" width="650" height="70" rx="4"/>
  <text class="arch-text" x="70" y="410" font-weight="bold">Datalayer (Data Layer)</text>
  <text class="arch-text-small" x="70" y="428">• Block Structure: Block Header、Block Body、Transactionlist</text>
  <text class="arch-text-small" x="70" y="441">• Datastructure: Merkletree、Patriciatree、accountmodel/UTXO</text>
  <text class="arch-text-small" x="70" y="454">• Cryptography: HashFunction、digitalSign、ZKP</text>
  <text class="arch-text-small" x="550" y="428" fill="rgba(245, 194, 66, 0.20)" font-weight="bold">Dataorganizationlayer</text>
  <line class="arch-arrow" x1="375" y1="460" x2="375" y2="475" marker-end="url(#arch-arrow-down)"/>
  <rect class="arch-layer-infra" x="50" y="475" width="650" height="60" rx="4"/>
  <text class="arch-text" x="70" y="495" font-weight="bold">foundationset施layer (Infrastructure Layer)</text>
  <text class="arch-text-small" x="70" y="513">• Storageguideengine: LevelDB, RocksDB, IPFS, Arweave</text>
  <text class="arch-text-small" x="70" y="526">• Hardwareassetsource: CPU、mem、disk、Networkbandwidth</text>
  <text class="arch-text-small" x="550" y="513" fill="#34495e" font-weight="bold">physicalsupportsupportlayer</text>
</svg>
</div>

<div style="background: rgba(52, 81, 178, 0.06); padding: 1.5em; border-radius: 4px; margin: 2em 0;">
<svg class="svg-6-1" viewBox="0 0 750 500" xmlns="http://www.w3.org/2000/svg" style="width: 100%; max-width: 800px; display: block; margin: 0 auto;">
<defs>
<style>
      .svg-6-1 .p2p-text-title { font-family: arial, sans-serif; font-size: 14px; fill: #1f2937; font-weight: bold; }
      .svg-6-1 .p2p-text { font-family: arial, sans-serif; font-size: 10px; fill: #1f2937; }
      .svg-6-1 .p2p-text-small { font-family: arial, sans-serif; font-size: 8px; fill: #1f2937; }
      .svg-6-1 .p2p-node-full { fill: rgba(52, 81, 178, 0.15); stroke: #4c9be8; stroke-width: 1.5; }
      .svg-6-1 .p2p-node-light { fill: rgba(92, 184, 92, 0.25); stroke: #5cb85c; stroke-width: 1; }
      .svg-6-1 .p2p-node-archive { fill: rgba(223, 105, 25, 0.12); stroke: #df6919; stroke-width: 1.5; }
      .svg-6-1 .p2p-line-conn { stroke: #4c9be8; fill: none; stroke-width: 1; opacity: 0.5; }
      .svg-6-1 .p2p-line-sync { stroke: #5cb85c; fill: none; stroke-width: 1.2; stroke-dasharray: 4,2; }
    </style>
    <marker id="p2p-arrow" markerWidth="6" markerHeight="6" refX="6" refY="3" orient="auto">
      <polygon points="0 0, 6 3, 0 6" fill="#5cb85c"/>
    </marker>
  </defs>
  <text class="p2p-text-title" x="375" y="25" text-anchor="middle">BlockchainP2PNetwork拓扑structure</text>
  <circle class="p2p-node-archive" cx="375" cy="80" r="28"/>
  <text class="p2p-text-small" x="375" y="78" text-anchor="middle" font-weight="bold">Archive Node</text>
  <text class="p2p-text-small" x="375" y="90" text-anchor="middle">Archive</text>
  <circle class="p2p-node-full" cx="200" cy="170" r="24"/>
  <text class="p2p-text-small" x="200" y="168" text-anchor="middle" font-weight="bold">Full Node1</text>
  <text class="p2p-text-small" x="200" y="180" text-anchor="middle">Full Node</text>
  <circle class="p2p-node-full" cx="375" cy="200" r="24"/>
  <text class="p2p-text-small" x="375" y="198" text-anchor="middle" font-weight="bold">Full Node2</text>
  <text class="p2p-text-small" x="375" y="210" text-anchor="middle">Full Node</text>
  <circle class="p2p-node-full" cx="550" cy="170" r="24"/>
  <text class="p2p-text-small" x="550" y="168" text-anchor="middle" font-weight="bold">Full Node3</text>
  <text class="p2p-text-small" x="550" y="180" text-anchor="middle">Full Node</text>
  <circle class="p2p-node-light" cx="100" cy="280" r="20"/>
  <text class="p2p-text-small" x="100" y="280" text-anchor="middle">Light Node</text>
  <circle class="p2p-node-light" cx="200" cy="310" r="20"/>
  <text class="p2p-text-small" x="200" y="310" text-anchor="middle">Light Node</text>
  <circle class="p2p-node-light" cx="310" cy="330" r="20"/>
  <text class="p2p-text-small" x="310" y="330" text-anchor="middle">Light Node</text>
  <circle class="p2p-node-light" cx="440" cy="330" r="20"/>
  <text class="p2p-text-small" x="440" y="330" text-anchor="middle">Light Node</text>
  <circle class="p2p-node-light" cx="550" cy="310" r="20"/>
  <text class="p2p-text-small" x="550" y="310" text-anchor="middle">Light Node</text>
  <circle class="p2p-node-light" cx="650" cy="280" r="20"/>
  <text class="p2p-text-small" x="650" y="280" text-anchor="middle">Light Node</text>
  <line class="p2p-line-conn" x1="375" y1="108" x2="200" y2="146"/>
  <line class="p2p-line-conn" x1="375" y1="108" x2="375" y2="176"/>
  <line class="p2p-line-conn" x1="375" y1="108" x2="550" y2="146"/>
  <line class="p2p-line-conn" x1="200" y1="194" x2="375" y2="180"/>
  <line class="p2p-line-conn" x1="375" y1="224" x2="550" y2="194"/>
  <line class="p2p-line-conn" x1="550" y1="194" x2="200" y2="194"/>
  <line class="p2p-line-conn" x1="100" y1="280" x2="200" y2="190"/>
  <line class="p2p-line-conn" x1="200" y1="290" x2="200" y2="194"/>
  <line class="p2p-line-conn" x1="310" y1="310" x2="375" y2="224"/>
  <line class="p2p-line-conn" x1="440" y1="310" x2="375" y2="224"/>
  <line class="p2p-line-conn" x1="550" y1="290" x2="550" y2="194"/>
  <line class="p2p-line-conn" x1="650" y1="280" x2="550" y2="190"/>
  <line class="p2p-line-sync" x1="220" y1="160" x2="355" y2="190" marker-end="url(#p2p-arrow)"/>
  <text class="p2p-text-small" x="270" y="165" fill="#5cb85c">Block Sync</text>
  <rect x="30" y="370" width="210" height="110" rx="4" fill="rgba(52, 81, 178, 0.07)" stroke="#4c9be8" stroke-width="1"/>
  <text class="p2p-text" x="135" y="388" text-anchor="middle" font-weight="bold">Full Node (Full Node)</text>
  <text class="p2p-text-small" x="40" y="405">• StoragefullBlockchainData</text>
  <text class="p2p-text-small" x="40" y="418">• independentVerifyallTransaction&Block</text>
  <text class="p2p-text-small" x="40" y="431">• param&Networkconsensus</text>
  <text class="p2p-text-small" x="40" y="444">• convertemitBlock&Transaction</text>
  <text class="p2p-text-small" x="40" y="457">• typicalStorage: evenpercentGB</text>
  <text class="p2p-text-small" x="40" y="470">  (EthereumFull Node ~800GB)</text>
  <rect x="260" y="370" width="210" height="110" rx="4" fill="rgba(92, 184, 92, 0.07)" stroke="#5cb85c" stroke-width="1"/>
  <text class="p2p-text" x="365" y="388" text-anchor="middle" font-weight="bold">Light Node (Light Node)</text>
  <text class="p2p-text-small" x="270" y="405">• onlyStorageBlock Header</text>
  <text class="p2p-text-small" x="270" y="418">• useSPVVerify</text>
  <text class="p2p-text-small" x="270" y="431">• dependFull NodeobtaintakeData</text>
  <text class="p2p-text-small" x="270" y="444">• assetsourceconsumeLow</text>
  <text class="p2p-text-small" x="270" y="457">• typicalStorage: evenMBtoevenGB</text>
  <text class="p2p-text-small" x="270" y="470">• fituseinmovemovesetprepare、wallet</text>
  <rect x="490" y="370" width="230" height="110" rx="4" fill="rgba(223, 105, 25, 0.06)" stroke="#df6919" stroke-width="1"/>
  <text class="p2p-text" x="605" y="388" text-anchor="middle" font-weight="bold">Archive Node (Archive Node)</text>
  <text class="p2p-text-small" x="500" y="405">• StorageallhistoryState</text>
  <text class="p2p-text-small" x="500" y="418">• SupporthistoryQuery</text>
  <text class="p2p-text-small" x="500" y="431">• Blockchain浏viewerdepend</text>
  <text class="p2p-text-small" x="500" y="444">• Data Analysis、audituseway</text>
  <text class="p2p-text-small" x="500" y="457">• 巨LargeStoragerequirement</text>
  <text class="p2p-text-small" x="500" y="470">  (EthereumArchive Node >12TB)</text>
</svg>
</div>

<div style="background: rgba(52, 81, 178, 0.06); padding: 1.5em; border-radius: 4px; margin: 2em 0;">
<svg class="svg-6-2" viewBox="0 0 700 420" xmlns="http://www.w3.org/2000/svg" style="width: 100%; max-width: 800px; display: block; margin: 0 auto;">
<defs>
<style>
      .svg-6-2 .prop-text-title { font-family: arial, sans-serif; font-size: 14px; fill: #1f2937; font-weight: bold; }
      .svg-6-2 .prop-text { font-family: arial, sans-serif; font-size: 10px; fill: #1f2937; }
      .svg-6-2 .prop-text-small { font-family: arial, sans-serif; font-size: 8px; fill: #1f2937; }
      .svg-6-2 .prop-box-step { fill: rgba(52, 81, 178, 0.10); stroke: #4c9be8; stroke-width: 1; }
      .svg-6-2 .prop-circle-node { fill: rgba(92, 184, 92, 0.25); stroke: #5cb85c; stroke-width: 1; }
      .svg-6-2 .prop-wave { stroke: #df6919; stroke-width: 2; fill: none; opacity: 0.6; }
    </style>
    <marker id="prop-arrow" markerWidth="8" markerHeight="8" refX="8" refY="4" orient="auto">
      <polygon points="0 0, 8 4, 0 8" fill="#df6919"/>
    </marker>
  </defs>
  <text class="prop-text-title" x="350" y="25" text-anchor="middle">GossipProtocol - Datapropagatemechanism</text>
  <rect class="prop-box-step" x="30" y="50" width="640" height="280" rx="4"/>
  <text class="prop-text" x="350" y="70" text-anchor="middle" font-weight="bold">Gossip (flowspeech) propagateProcess</text>
  <circle class="prop-circle-node" cx="100" cy="120" r="22"/>
  <text class="prop-text-small" x="100" y="118" text-anchor="middle" font-weight="bold">NodeA</text>
  <text class="prop-text-small" x="100" y="130" text-anchor="middle">sourceNode</text>
  <rect x="140" y="105" width="100" height="30" rx="3" fill="rgba(223, 105, 25, 0.08)" stroke="#df6919" stroke-width="1"/>
  <text class="prop-text-small" x="190" y="124" text-anchor="middle">NewTransaction/Block</text>
  <circle class="prop-circle-node" cx="280" cy="90" r="18"/>
  <text class="prop-text-small" x="280" y="93" text-anchor="middle">NodeB</text>
  <circle class="prop-circle-node" cx="280" cy="150" r="18"/>
  <text class="prop-text-small" x="280" y="153" text-anchor="middle">NodeC</text>
  <line class="prop-wave" x1="122" y1="120" x2="262" y2="90" marker-end="url(#prop-arrow)"/>
  <line class="prop-wave" x1="122" y1="120" x2="262" y2="150" marker-end="url(#prop-arrow)"/>
  <text class="prop-text-small" x="180" y="100" fill="#df6919">Broadcast</text>
  <circle class="prop-circle-node" cx="380" cy="60" r="18"/>
  <text class="prop-text-small" x="380" y="63" text-anchor="middle">NodeD</text>
  <circle class="prop-circle-node" cx="380" cy="120" r="18"/>
  <text class="prop-text-small" x="380" y="123" text-anchor="middle">NodeE</text>
  <circle class="prop-circle-node" cx="380" cy="180" r="18"/>
  <text class="prop-text-small" x="380" y="183" text-anchor="middle">NodeF</text>
  <line class="prop-wave" x1="298" y1="90" x2="362" y2="60" marker-end="url(#prop-arrow)"/>
  <line class="prop-wave" x1="298" y1="90" x2="362" y2="120" marker-end="url(#prop-arrow)"/>
  <line class="prop-wave" x1="298" y1="150" x2="362" y2="120" marker-end="url(#prop-arrow)"/>
  <line class="prop-wave" x1="298" y1="150" x2="362" y2="180" marker-end="url(#prop-arrow)"/>
  <text class="prop-text-small" x="330" y="75" fill="#df6919">convertemit</text>
  <circle class="prop-circle-node" cx="500" cy="90" r="18"/>
  <text class="prop-text-small" x="500" y="93" text-anchor="middle">NodeG</text>
  <circle class="prop-circle-node" cx="500" cy="150" r="18"/>
  <text class="prop-text-small" x="500" y="153" text-anchor="middle">NodeH</text>
  <circle class="prop-circle-node" cx="600" cy="120" r="18"/>
  <text class="prop-text-small" x="600" y="123" text-anchor="middle">NodeI</text>
  <line class="prop-wave" x1="398" y1="120" x2="482" y2="90" marker-end="url(#prop-arrow)"/>
  <line class="prop-wave" x1="398" y1="120" x2="482" y2="150" marker-end="url(#prop-arrow)"/>
  <line class="prop-wave" x1="518" y1="90" x2="582" y2="120" marker-end="url(#prop-arrow)"/>
  <line class="prop-wave" x1="518" y1="150" x2="582" y2="120" marker-end="url(#prop-arrow)"/>
  <text class="prop-text-small" x="440" y="110" fill="#df6919">扩scatter</text>
  <rect x="40" y="210" width="300" height="110" rx="3" fill="rgba(52, 81, 178, 0.05)" stroke="#4c9be8" stroke-width="1"/>
  <text class="prop-text" x="190" y="228" text-anchor="middle" font-weight="bold">GossipProtocolFeatures</text>
  <text class="prop-text-small" x="50" y="245">✓ Decentralization: NoneneedMediumcentercoordinateNode</text>
  <text class="prop-text-small" x="50" y="258">✓ Fault Tol.naturestrong: Nodeloseeffectnoimpactwholebodypropagate</text>
  <text class="prop-text-small" x="50" y="271">✓ indicateeven扩scatter: O(log N)RoundflipcoverNetwork</text>
  <text class="prop-text-small" x="50" y="284">✓ 冗balpropagate: agreeuniteDataManytimesreceivereceive</text>
  <text class="prop-text-small" x="50" y="297">✗ bandwidthconsume: heavyreplyMessage占useassetsource</text>
  <text class="prop-text-small" x="50" y="310">✗ latencynoexactdecide: propagateTimeyeswavemove</text>
  <rect x="360" y="210" width="310" height="110" rx="3" fill="rgba(92, 184, 92, 0.1)" stroke="#5cb85c" stroke-width="1"/>
  <text class="prop-text" x="515" y="228" text-anchor="middle" font-weight="bold">optimizestrategy</text>
  <text class="prop-text-small" x="370" y="245">• outgoingheavymechanism: useHashcachealreadyseeMessage</text>
  <text class="prop-text-small" x="370" y="258">• Choosenatureconvertemit: onlyconvertemitgivepartial邻reside</text>
  <text class="prop-text-small" x="370" y="271">• Inv-Getpattern: firstemitclearodd，pressneedobtaintake</text>
  <text class="prop-text-small" x="370" y="284">  - Bitcoin: inv → getdata → block</text>
  <text class="prop-text-small" x="370" y="297">• Compressionencodecode: subtractFewDatatransmitlosemeasure</text>
  <text class="prop-text-small" x="370" y="310">• excellentfirstgradequeue: importantMessageexcellentfirstpropagate</text>
  <rect x="30" y="340" width="640" height="60" rx="3" fill="rgba(223, 105, 25, 0.05)" stroke="#df6919" stroke-width="1"/>
  <text class="prop-text" x="350" y="358" text-anchor="middle" font-weight="bold">propagatePerformanceindicatelabel</text>
  <text class="prop-text-small" x="40" y="375">• propagateTime: fromsourceNodeto50%/90%NodeTime</text>
  <text class="prop-text-small" x="40" y="388">  - Ethereum: avg2-5sectounderstand50%Node, 10-20sectounderstand90%Node</text>
  <text class="prop-text-small" x="400" y="375">• bandwidthUtilization: validData / totaltransmitlosemeasure</text>
  <text class="prop-text-small" x="400" y="388">• flipcoverlead: finalreceivereceivetoMessageNoderatio</text>
</svg>
</div>

<div style="background: rgba(52, 81, 178, 0.06); padding: 1.5em; border-radius: 4px; margin: 2em 0;">
<svg class="svg-6-3" viewBox="0 0 750 520" xmlns="http://www.w3.org/2000/svg" style="width: 100%; max-width: 800px; display: block; margin: 0 auto;">
<defs>
<style>
      .svg-6-3 .blk-text-title { font-family: arial, sans-serif; font-size: 14px; fill: #1f2937; font-weight: bold; }
      .svg-6-3 .blk-text { font-family: arial, sans-serif; font-size: 10px; fill: #1f2937; }
      .svg-6-3 .blk-text-small { font-family: arial, sans-serif; font-size: 8px; fill: #1f2937; }
      .svg-6-3 .blk-box-header { fill: rgba(223, 105, 25, 0.25); stroke: #df6919; stroke-width: 1.5; }
      .svg-6-3 .blk-box-body { fill: rgba(76, 156, 232, 0.25); stroke: #4c9be8; stroke-width: 1.5; }
      .svg-6-3 .blk-box-field { fill: rgba(92, 184, 92, 0.07); stroke: #5cb85c; stroke-width: 1; }
      .svg-6-3 .blk-line-link { stroke: #4c9be8; fill: none; stroke-width: 1.2; stroke-dasharray: 3,2; }
    </style>
    <marker id="blk-arrow" markerWidth="8" markerHeight="8" refX="8" refY="4" orient="auto">
      <polygon points="0 0, 8 4, 0 8" fill="#4c9be8"/>
    </marker>
  </defs>
  <text class="blk-text-title" x="375" y="25" text-anchor="middle">Block Structure详solution (Ethereumforcase)</text>
  <rect class="blk-box-header" x="50" y="50" width="650" height="220" rx="4"/>
  <text class="blk-text" x="70" y="70" font-weight="bold">Block Header (Block Header) - fixedLargeSmall ~500Bytes</text>
  <rect class="blk-box-field" x="70" y="80" width="300" height="35" rx="3"/>
  <text class="blk-text-small" x="80" y="95" font-weight="bold">parentHash (32Bytes)</text>
  <text class="blk-text-small" x="80" y="108">fatherBlockHash，chainreceivetopreuniteBlock</text>
  <rect class="blk-box-field" x="380" y="80" width="300" height="35" rx="3"/>
  <text class="blk-text-small" x="390" y="95" font-weight="bold">stateRoot (32Bytes)</text>
  <text class="blk-text-small" x="390" y="108">StatetreerootHash，recordaccountState</text>
  <rect class="blk-box-field" x="70" y="125" width="300" height="35" rx="3"/>
  <text class="blk-text-small" x="80" y="140" font-weight="bold">transactionsRoot (32Bytes)</text>
  <text class="blk-text-small" x="80" y="153">TransactiontreerootHash，Merkletreeroot</text>
  <rect class="blk-box-field" x="380" y="125" width="300" height="35" rx="3"/>
  <text class="blk-text-small" x="390" y="140" font-weight="bold">receiptsRoot (32Bytes)</text>
  <text class="blk-text-small" x="390" y="153">receiveevidencetreerootHash，Result</text>
  <rect class="blk-box-field" x="70" y="170" width="145" height="30" rx="3"/>
  <text class="blk-text-small" x="80" y="185" font-weight="bold">number</text>
  <text class="blk-text-small" x="80" y="195">Blockno.</text>
  <rect class="blk-box-field" x="225" y="170" width="145" height="30" rx="3"/>
  <text class="blk-text-small" x="235" y="185" font-weight="bold">timestamp</text>
  <text class="blk-text-small" x="235" y="195">Timestamp</text>
  <rect class="blk-box-field" x="380" y="170" width="145" height="30" rx="3"/>
  <text class="blk-text-small" x="390" y="185" font-weight="bold">gasLimit</text>
  <text class="blk-text-small" x="390" y="195">GasUplimit</text>
  <rect class="blk-box-field" x="535" y="170" width="145" height="30" rx="3"/>
  <text class="blk-text-small" x="545" y="185" font-weight="bold">gasUsed</text>
  <text class="blk-text-small" x="545" y="195">Gasconsume</text>
  <rect class="blk-box-field" x="70" y="210" width="145" height="30" rx="3"/>
  <text class="blk-text-small" x="80" y="225" font-weight="bold">miner</text>
  <text class="blk-text-small" x="80" y="235">MinerAddress</text>
  <rect class="blk-box-field" x="225" y="210" width="145" height="30" rx="3"/>
  <text class="blk-text-small" x="235" y="225" font-weight="bold">difficulty</text>
  <text class="blk-text-small" x="235" y="235">Difficultyvalue</text>
  <rect class="blk-box-field" x="380" y="210" width="145" height="30" rx="3"/>
  <text class="blk-text-small" x="390" y="225" font-weight="bold">nonce</text>
  <text class="blk-text-small" x="390" y="235">Proof of Work</text>
  <rect class="blk-box-field" x="535" y="210" width="145" height="30" rx="3"/>
  <text class="blk-text-small" x="545" y="225" font-weight="bold">extraData</text>
  <text class="blk-text-small" x="545" y="235">plaqueoutData</text>
  <text class="blk-text-small" x="70" y="258" font-style="italic">Block HeadercontainseraData&Merkle Root，useinFastfastVerify&SPVClient</text>
  <line class="blk-line-link" x1="375" y1="270" x2="375" y2="285" marker-end="url(#blk-arrow)"/>
  <rect class="blk-box-body" x="50" y="285" width="650" height="215" rx="4"/>
  <text class="blk-text" x="70" y="305" font-weight="bold">Block Body (Block Body) - canchangeLargeSmall</text>
  <rect x="70" y="315" width="610" height="80" rx="3" fill="rgba(52, 81, 178, 0.07)" stroke="#4c9be8" stroke-width="1"/>
  <text class="blk-text" x="375" y="333" text-anchor="middle" font-weight="bold">Transactionlist (Transactions)</text>
  <rect x="80" y="345" width="180" height="40" rx="2" fill="rgba(92, 184, 92, 0.1)" stroke="#5cb85c" stroke-width="1"/>
  <text class="blk-text-small" x="90" y="360">Tx 1: from → to</text>
  <text class="blk-text-small" x="90" y="373">value: 1.5 ETH, gas: 21000</text>
  <rect x="270" y="345" width="180" height="40" rx="2" fill="rgba(92, 184, 92, 0.1)" stroke="#5cb85c" stroke-width="1"/>
  <text class="blk-text-small" x="280" y="360">Tx 2: ContractCall</text>
  <text class="blk-text-small" x="280" y="373">data: 0x..., gas: 150000</text>
  <rect x="460" y="345" width="210" height="40" rx="2" fill="rgba(92, 184, 92, 0.1)" stroke="#5cb85c" stroke-width="1"/>
  <text class="blk-text-small" x="470" y="360">Transaction N: ...</text>
  <text class="blk-text-small" x="470" y="373">avgperBlock 150-200 pen nameTransaction</text>
  <rect x="70" y="405" width="295" height="80" rx="3" fill="rgba(223, 105, 25, 0.05)" stroke="#df6919" stroke-width="1"/>
  <text class="blk-text" x="217" y="423" text-anchor="middle" font-weight="bold">Uncle Block (Uncles/Ommers)</text>
  <text class="blk-text-small" x="80" y="440">• nearexpectblanketForkvalidBlock</text>
  <text class="blk-text-small" x="80" y="453">• mostManycontains2Uncle Block</text>
  <text class="blk-text-small" x="80" y="466">• Uncle BlockReward: dropLowalonepiecelead</text>
  <text class="blk-text-small" x="80" y="479">• PoSpostalreadymoveremove</text>
  <rect x="385" y="405" width="295" height="80" rx="3" fill="rgba(52, 81, 178, 0.05)" stroke="#4c9be8" stroke-width="1"/>
  <text class="blk-text" x="532" y="423" text-anchor="middle" font-weight="bold">BlockLargeSmalllimit</text>
  <text class="blk-text-small" x="395" y="440">• Bitcoin: 1-4 MB (SegWit)</text>
  <text class="blk-text-small" x="395" y="453">• Ethereum: 30M Gas (~2-5 MB)</text>
  <text class="blk-text-small" x="395" y="466">• Solana: NonefixedUplimit</text>
  <text class="blk-text-small" x="395" y="479">  fromValidatorPerformancedecidedecide</text>
</svg>
</div>

<div style="background: rgba(52, 81, 178, 0.06); padding: 1.5em; border-radius: 4px; margin: 2em 0;">
<svg class="svg-6-4" viewBox="0 0 750 450" xmlns="http://www.w3.org/2000/svg" style="width: 100%; max-width: 800px; display: block; margin: 0 auto;">
<defs>
<style>
      .svg-6-4 .acc-text-title { font-family: arial, sans-serif; font-size: 14px; fill: #1f2937; font-weight: bold; }
      .svg-6-4 .acc-text { font-family: arial, sans-serif; font-size: 10px; fill: #1f2937; }
      .svg-6-4 .acc-text-small { font-family: arial, sans-serif; font-size: 8px; fill: #1f2937; }
      .svg-6-4 .acc-box-account { fill: rgba(52, 81, 178, 0.10); stroke: #4c9be8; stroke-width: 1.2; }
      .svg-6-4 .acc-box-utxo { fill: rgba(223, 105, 25, 0.08); stroke: #df6919; stroke-width: 1.2; }
    </style>
</defs>
  <text class="acc-text-title" x="375" y="25" text-anchor="middle">accountmodel vs UTXOmodelCompare</text>
  <rect class="acc-box-account" x="30" y="50" width="330" height="370" rx="4"/>
  <text class="acc-text" x="195" y="72" text-anchor="middle" font-weight="bold">accountmodel (Account Model)</text>
  <text class="acc-text-small" x="40" y="90" font-style="italic">Examples: Ethereum、Polkadot、Solana</text>
  <rect x="40" y="105" width="310" height="135" rx="3" fill="rgba(52, 81, 178, 0.07)" stroke="#4c9be8" stroke-width="1"/>
  <text class="acc-text" x="195" y="123" text-anchor="middle" font-weight="bold">wholebureauStatetree</text>
  <rect x="50" y="135" width="130" height="95" rx="2" fill="rgba(92, 184, 92, 0.1)" stroke="#5cb85c" stroke-width="1"/>
  <text class="acc-text-small" x="60" y="150" font-weight="bold">accountA</text>
  <text class="acc-text-small" x="60" y="163">Address: 0xAbc...</text>
  <text class="acc-text-small" x="60" y="176">Balance: 10.5 ETH</text>
  <text class="acc-text-small" x="60" y="189">nonce: 25</text>
  <text class="acc-text-small" x="60" y="202">codeHash: 0x0</text>
  <text class="acc-text-small" x="60" y="215">storageRoot: 0x...</text>
  <rect x="190" y="135" width="150" height="95" rx="2" fill="rgba(223, 105, 25, 0.05)" stroke="#df6919" stroke-width="1"/>
  <text class="acc-text-small" x="200" y="150" font-weight="bold">Smart ContractB</text>
  <text class="acc-text-small" x="200" y="163">Address: 0xDef...</text>
  <text class="acc-text-small" x="200" y="176">Balance: 0 ETH</text>
  <text class="acc-text-small" x="200" y="189">nonce: 1</text>
  <text class="acc-text-small" x="200" y="202">codeHash: 0x9a7...</text>
  <text class="acc-text-small" x="200" y="215">storage: mappingData</text>
  <rect x="40" y="250" width="310" height="160" rx="3" fill="rgba(92, 184, 92, 0.1)" stroke="#5cb85c" stroke-width="1"/>
  <text class="acc-text" x="195" y="268" text-anchor="middle" font-weight="bold">pros</text>
  <text class="acc-text-small" x="50" y="283">✓ Statestraighttemple: Balanceuniteorderunderstand然</text>
  <text class="acc-text-small" x="50" y="296">✓ encodejourneysimple: fitfitSmart Contract</text>
  <text class="acc-text-small" x="50" y="309">✓ nullbetweenefficiency: noNeedStoragehistory</text>
  <text class="acc-text-small" x="50" y="322">✓ Supportcomplexlogical: Statecanchange</text>
  <text class="acc-text" x="195" y="342" text-anchor="middle" font-weight="bold">Drawbacks</text>
  <text class="acc-text-small" x="50" y="357">✗ concurrencyprocesshard: NeedpreventDouble Spend</text>
  <text class="acc-text-small" x="50" y="370">✗ privatemoreweak: Balancetraceable</text>
  <text class="acc-text-small" x="50" y="383">✗ heavyputattack: Neednoncemechanism</text>
  <text class="acc-text-small" x="50" y="396">✗ wholebureauState膨胀issue</text>
  <rect class="acc-box-utxo" x="390" y="50" width="330" height="370" rx="4"/>
  <text class="acc-text" x="555" y="72" text-anchor="middle" font-weight="bold">UTXOmodel (Unspent TX Output)</text>
  <text class="acc-text-small" x="400" y="90" font-style="italic">Examples: Bitcoin、Cardano、Nervos</text>
  <rect x="400" y="105" width="310" height="135" rx="3" fill="rgba(223, 105, 25, 0.06)" stroke="#df6919" stroke-width="1"/>
  <text class="acc-text" x="555" y="123" text-anchor="middle" font-weight="bold">notflowerfeeOutputset</text>
  <rect x="410" y="135" width="140" height="85" rx="2" fill="rgba(52, 81, 178, 0.05)" stroke="#4c9be8" stroke-width="1"/>
  <text class="acc-text-small" x="420" y="150" font-weight="bold">UTXO 1</text>
  <text class="acc-text-small" x="420" y="163">TxID: 7a8b...</text>
  <text class="acc-text-small" x="420" y="176">Index: 0</text>
  <text class="acc-text-small" x="420" y="189">Amount: 2.5 BTC</text>
  <text class="acc-text-small" x="420" y="202">ScriptPubKey:</text>
  <text class="acc-text-small" x="425" y="212">OP_DUP OP_HASH160...</text>
  <rect x="560" y="135" width="140" height="85" rx="2" fill="rgba(92, 184, 92, 0.1)" stroke="#5cb85c" stroke-width="1"/>
  <text class="acc-text-small" x="570" y="150" font-weight="bold">UTXO 2</text>
  <text class="acc-text-small" x="570" y="163">TxID: 3c9d...</text>
  <text class="acc-text-small" x="570" y="176">Index: 1</text>
  <text class="acc-text-small" x="570" y="189">Amount: 0.8 BTC</text>
  <text class="acc-text-small" x="570" y="202">ScriptPubKey:</text>
  <text class="acc-text-small" x="575" y="212">OP_CHECKSIG</text>
  <rect x="400" y="250" width="310" height="160" rx="3" fill="rgba(223, 105, 25, 0.05)" stroke="#df6919" stroke-width="1"/>
  <text class="acc-text" x="555" y="268" text-anchor="middle" font-weight="bold">pros</text>
  <text class="acc-text-small" x="410" y="283">✓ concurrencyfriendgood: UTXOindependent，easyparallel</text>
  <text class="acc-text-small" x="410" y="296">✓ privatenaturestrong: pertimesuseNewAddress</text>
  <text class="acc-text-small" x="410" y="309">✓ Noneheavyputattack: UTXOunitetimesnature</text>
  <text class="acc-text-small" x="410" y="322">✓ simpleVerify: NoneneedwholebureauState</text>
  <text class="acc-text" x="555" y="342" text-anchor="middle" font-weight="bold">Drawbacks</text>
  <text class="acc-text-small" x="410" y="357">✗ encodejourneycomplex: nofitfitSmart Contract</text>
  <text class="acc-text-small" x="410" y="370">✗ nullbetweenbegin销: StorageLargemeasureUTXO</text>
  <text class="acc-text-small" x="410" y="383">✗ findzerohempannoy: NeedgeneratefindzeroOutput</text>
  <text class="acc-text-small" x="410" y="396">✗ BalanceCalc: needtimes历allUTXO</text>
</svg>
</div>

<div style="background: rgba(52, 81, 178, 0.06); padding: 1.5em; border-radius: 4px; margin: 2em 0;">
<svg class="svg-6-5" viewBox="0 0 750 480" xmlns="http://www.w3.org/2000/svg" style="width: 100%; max-width: 800px; display: block; margin: 0 auto;">
<defs>
<style>
      .svg-6-5 .comp-text-title { font-family: arial, sans-serif; font-size: 14px; fill: #1f2937; font-weight: bold; }
      .svg-6-5 .comp-text { font-family: arial, sans-serif; font-size: 10px; fill: #1f2937; }
      .svg-6-5 .comp-text-small { font-family: arial, sans-serif; font-size: 8px; fill: #1f2937; }
      .svg-6-5 .comp-box-single { fill: rgba(52, 81, 178, 0.10); stroke: #4c9be8; stroke-width: 1; }
      .svg-6-5 .comp-box-multi { fill: rgba(92, 184, 92, 0.10); stroke: #5cb85c; stroke-width: 1; }
      .svg-6-5 .comp-box-shard { fill: rgba(223, 105, 25, 0.08); stroke: #df6919; stroke-width: 1; }
      .svg-6-5 .comp-block { fill: rgba(52, 81, 178, 0.15); stroke: #4c9be8; stroke-width: 1; }
    </style>
</defs>
  <text class="comp-text-title" x="375" y="25" text-anchor="middle">Blockchainarch patternCompare</text>
  <rect class="comp-box-single" x="30" y="50" width="220" height="400" rx="4"/>
  <text class="comp-text" x="140" y="70" text-anchor="middle" font-weight="bold">oddchainarchitecture</text>
  <text class="comp-text-small" x="40" y="88" font-style="italic">Bitcoin, Ethereum (PoSpre)</text>
  <rect class="comp-block" x="100" y="105" width="80" height="30" rx="2"/>
  <text class="comp-text-small" x="140" y="124" text-anchor="middle">Block N</text>
  <line x1="140" y1="135" x2="140" y2="150" stroke="#4c9be8" stroke-width="1.5" fill="none"/>
  <rect class="comp-block" x="100" y="150" width="80" height="30" rx="2"/>
  <text class="comp-text-small" x="140" y="169" text-anchor="middle">Block N+1</text>
  <line x1="140" y1="180" x2="140" y2="195" stroke="#4c9be8" stroke-width="1.5" fill="none"/>
  <rect class="comp-block" x="100" y="195" width="80" height="30" rx="2"/>
  <text class="comp-text-small" x="140" y="214" text-anchor="middle">Block N+2</text>
  <line x1="140" y1="225" x2="140" y2="240" stroke="#4c9be8" stroke-width="1.5" fill="none"/>
  <text class="comp-text-small" x="140" y="255" text-anchor="middle">...</text>
  <rect x="40" y="270" width="200" height="170" rx="3" fill="rgba(52, 81, 178, 0.05)" stroke="#4c9be8" stroke-width="1"/>
  <text class="comp-text" x="140" y="288" text-anchor="middle" font-weight="bold">Features</text>
  <text class="comp-text-small" x="50" y="305">✓ simplecanlean</text>
  <text class="comp-text-small" x="50" y="318">✓ SecurityHigh</text>
  <text class="comp-text-small" x="50" y="331">✓ DecentralizationjourneymeasureHigh</text>
  <text class="comp-text-small" x="50" y="344">✗ ThroughputLow</text>
  <text class="comp-text-small" x="50" y="357">✗ latencyHigh</text>
  <text class="comp-text-small" x="50" y="373" font-weight="bold">Performance:</text>
  <text class="comp-text-small" x="50" y="386">• BTC: ~7 TPS</text>
  <text class="comp-text-small" x="50" y="399">• ETH: ~15-30 TPS</text>
  <text class="comp-text-small" x="50" y="412">• Confirmation Time:</text>
  <text class="comp-text-small" x="55" y="425">  BTC 10min, ETH 12sec</text>
  <rect class="comp-box-multi" x="270" y="50" width="220" height="400" rx="4"/>
  <text class="comp-text" x="380" y="70" text-anchor="middle" font-weight="bold">Manychainarchitecture</text>
  <text class="comp-text-small" x="280" y="88" font-style="italic">Polkadot, Cosmos</text>
  <rect x="290" y="105" width="70" height="25" rx="2" fill="rgba(223, 105, 25, 0.25)" stroke="#df6919" stroke-width="1"/>
  <text class="comp-text-small" x="325" y="121" text-anchor="middle" font-weight="bold">Relay Chain</text>
  <line x1="325" y1="130" x2="290" y2="155" stroke="#5cb85c" stroke-width="1" fill="none"/>
  <line x1="325" y1="130" x2="325" y2="155" stroke="#5cb85c" stroke-width="1" fill="none"/>
  <line x1="325" y1="130" x2="360" y2="155" stroke="#5cb85c" stroke-width="1" fill="none"/>
  <rect x="275" y="155" width="45" height="20" rx="2" fill="rgba(92, 184, 92, 0.25)" stroke="#5cb85c" stroke-width="1"/>
  <text class="comp-text-small" x="297" y="169" text-anchor="middle">chainA</text>
  <rect x="328" y="155" width="45" height="20" rx="2" fill="rgba(92, 184, 92, 0.25)" stroke="#5cb85c" stroke-width="1"/>
  <text class="comp-text-small" x="350" y="169" text-anchor="middle">chainB</text>
  <rect x="381" y="155" width="45" height="20" rx="2" fill="rgba(92, 184, 92, 0.25)" stroke="#5cb85c" stroke-width="1"/>
  <text class="comp-text-small" x="403" y="169" text-anchor="middle">chainC</text>
  <line x1="297" y1="175" x2="297" y2="190" stroke="#5cb85c" stroke-width="1" fill="none"/>
  <line x1="350" y1="175" x2="350" y2="190" stroke="#5cb85c" stroke-width="1" fill="none"/>
  <line x1="403" y1="175" x2="403" y2="190" stroke="#5cb85c" stroke-width="1" fill="none"/>
  <rect x="275" y="190" width="45" height="15" rx="2" fill="rgba(52, 81, 178, 0.10)" stroke="#4c9be8" stroke-width="1"/>
  <text class="comp-text-small" x="297" y="201" text-anchor="middle" font-size="7">DeFi</text>
  <rect x="328" y="190" width="45" height="15" rx="2" fill="rgba(52, 81, 178, 0.10)" stroke="#4c9be8" stroke-width="1"/>
  <text class="comp-text-small" x="350" y="201" text-anchor="middle" font-size="7">NFT</text>
  <rect x="381" y="190" width="45" height="15" rx="2" fill="rgba(52, 81, 178, 0.10)" stroke="#4c9be8" stroke-width="1"/>
  <text class="comp-text-small" x="403" y="201" text-anchor="middle" font-size="7">Game</text>
  <line x1="297" y1="205" x2="297" y2="220" stroke="#5cb85c" stroke-width="1" fill="none"/>
  <line x1="350" y1="205" x2="350" y2="220" stroke="#5cb85c" stroke-width="1" fill="none"/>
  <line x1="403" y1="205" x2="403" y2="220" stroke="#5cb85c" stroke-width="1" fill="none"/>
  <rect x="275" y="220" width="45" height="15" rx="2" fill="rgba(52, 81, 178, 0.10)" stroke="#4c9be8" stroke-width="1"/>
  <text class="comp-text-small" x="297" y="231" text-anchor="middle" font-size="7">Block</text>
  <rect x="328" y="220" width="45" height="15" rx="2" fill="rgba(52, 81, 178, 0.10)" stroke="#4c9be8" stroke-width="1"/>
  <text class="comp-text-small" x="350" y="231" text-anchor="middle" font-size="7">Block</text>
  <rect x="381" y="220" width="45" height="15" rx="2" fill="rgba(52, 81, 178, 0.10)" stroke="#4c9be8" stroke-width="1"/>
  <text class="comp-text-small" x="403" y="231" text-anchor="middle" font-size="7">Block</text>
  <rect x="280" y="270" width="200" height="170" rx="3" fill="rgba(92, 184, 92, 0.1)" stroke="#5cb85c" stroke-width="1"/>
  <text class="comp-text" x="380" y="288" text-anchor="middle" font-weight="bold">Features</text>
  <text class="comp-text-small" x="290" y="305">✓ dedicatedchainoptimize</text>
  <text class="comp-text-small" x="290" y="318">✓ IBC</text>
  <text class="comp-text-small" x="290" y="331">✓ flexiblescale</text>
  <text class="comp-text-small" x="290" y="344">✗ complexnatureHigh</text>
  <text class="comp-text-small" x="290" y="357">✗ SecuritydependRelay Chain</text>
  <text class="comp-text-small" x="290" y="373" font-weight="bold">Performance:</text>
  <text class="comp-text-small" x="290" y="386">• Polkadot: ~1000 TPS</text>
  <text class="comp-text-small" x="290" y="399">  (stepallParachain)</text>
  <text class="comp-text-small" x="290" y="412">• Cosmos: canchange</text>
  <text class="comp-text-small" x="295" y="425">  perlabelchainindependent</text>
  <rect class="comp-box-shard" x="510" y="50" width="220" height="400" rx="4"/>
  <text class="comp-text" x="620" y="70" text-anchor="middle" font-weight="bold">Shardarchitecture</text>
  <text class="comp-text-small" x="520" y="88" font-style="italic">Ethereum 2.0, NEAR, Zilliqa</text>
  <rect x="560" y="105" width="120" height="25" rx="2" fill="rgba(223, 105, 25, 0.25)" stroke="#df6919" stroke-width="1"/>
  <text class="comp-text-small" x="620" y="121" text-anchor="middle" font-weight="bold">Beacon Chain/coordinatelayer</text>
  <line x1="560" y1="130" x2="540" y2="155" stroke="#df6919" stroke-width="1" fill="none"/>
  <line x1="620" y1="130" x2="620" y2="155" stroke="#df6919" stroke-width="1" fill="none"/>
  <line x1="680" y1="130" x2="700" y2="155" stroke="#df6919" stroke-width="1" fill="none"/>
  <rect x="525" y="155" width="40" height="20" rx="2" fill="rgba(76, 156, 232, 0.25)" stroke="#4c9be8" stroke-width="1"/>
  <text class="comp-text-small" x="545" y="169" text-anchor="middle">Shard0</text>
  <rect x="600" y="155" width="40" height="20" rx="2" fill="rgba(76, 156, 232, 0.25)" stroke="#4c9be8" stroke-width="1"/>
  <text class="comp-text-small" x="620" y="169" text-anchor="middle">Share 1</text>
  <rect x="675" y="155" width="40" height="20" rx="2" fill="rgba(76, 156, 232, 0.25)" stroke="#4c9be8" stroke-width="1"/>
  <text class="comp-text-small" x="695" y="169" text-anchor="middle">ShardN</text>
  <line x1="545" y1="175" x2="545" y2="190" stroke="#4c9be8" stroke-width="1" fill="none"/>
  <line x1="620" y1="175" x2="620" y2="190" stroke="#4c9be8" stroke-width="1" fill="none"/>
  <line x1="695" y1="175" x2="695" y2="190" stroke="#4c9be8" stroke-width="1" fill="none"/>
  <rect x="530" y="190" width="30" height="40" rx="2" fill="rgba(92, 184, 92, 0.07)" stroke="#5cb85c" stroke-width="1"/>
  <text class="comp-text-small" x="545" y="203" text-anchor="middle" font-size="6">Blk 1</text>
  <text class="comp-text-small" x="545" y="213" text-anchor="middle" font-size="6">Blk 2</text>
  <text class="comp-text-small" x="545" y="223" text-anchor="middle" font-size="6">Blk 3</text>
  <rect x="605" y="190" width="30" height="40" rx="2" fill="rgba(92, 184, 92, 0.07)" stroke="#5cb85c" stroke-width="1"/>
  <text class="comp-text-small" x="620" y="203" text-anchor="middle" font-size="6">Blk 1</text>
  <text class="comp-text-small" x="620" y="213" text-anchor="middle" font-size="6">Blk 2</text>
  <text class="comp-text-small" x="620" y="223" text-anchor="middle" font-size="6">Blk 3</text>
  <rect x="680" y="190" width="30" height="40" rx="2" fill="rgba(92, 184, 92, 0.07)" stroke="#5cb85c" stroke-width="1"/>
  <text class="comp-text-small" x="695" y="203" text-anchor="middle" font-size="6">Blk 1</text>
  <text class="comp-text-small" x="695" y="213" text-anchor="middle" font-size="6">Blk 2</text>
  <text class="comp-text-small" x="695" y="223" text-anchor="middle" font-size="6">Blk 3</text>
  <rect x="520" y="270" width="200" height="170" rx="3" fill="rgba(223, 105, 25, 0.05)" stroke="#df6919" stroke-width="1"/>
  <text class="comp-text" x="620" y="288" text-anchor="middle" font-weight="bold">Features</text>
  <text class="comp-text-small" x="530" y="305">✓ High Throughput</text>
  <text class="comp-text-small" x="530" y="318">✓ parallelprocess</text>
  <text class="comp-text-small" x="530" y="331">✓ agreestructurescale</text>
  <text class="comp-text-small" x="530" y="344">✗ stepShardtranslatetrustcomplex</text>
  <text class="comp-text-small" x="530" y="357">✗ Securitydistributed</text>
  <text class="comp-text-small" x="530" y="373" font-weight="bold">Performance:</text>
  <text class="comp-text-small" x="530" y="386">• ETH 2.0: Target ~100k TPS</text>
  <text class="comp-text-small" x="530" y="399">• NEAR: ~100k TPS</text>
  <text class="comp-text-small" x="530" y="412">• Zilliqa: ~2800 TPS</text>
  <text class="comp-text-small" x="535" y="425">  (6Shard)</text>
</svg>
</div>

<div style="background: rgba(52, 81, 178, 0.06); padding: 1.5em; border-radius: 4px; margin: 2em 0;">
<svg class="svg-6-6" viewBox="0 0 700 450" xmlns="http://www.w3.org/2000/svg" style="width: 100%; max-width: 800px; display: block; margin: 0 auto;">
<defs>
<style>
      .svg-6-6 .perf-text-title { font-family: arial, sans-serif; font-size: 14px; fill: #1f2937; font-weight: bold; }
      .svg-6-6 .perf-text { font-family: arial, sans-serif; font-size: 10px; fill: #1f2937; }
      .svg-6-6 .perf-text-small { font-family: arial, sans-serif; font-size: 8px; fill: #1f2937; }
      .svg-6-6 .perf-box-opt { fill: rgba(52, 81, 178, 0.10); stroke: #4c9be8; stroke-width: 1; }
    </style>
</defs>
  <text class="perf-text-title" x="350" y="25" text-anchor="middle">High Perf.Blockchainoptimizestrategy</text>
  <rect class="perf-box-opt" x="30" y="50" width="320" height="180" rx="4"/>
  <text class="perf-text" x="190" y="70" text-anchor="middle" font-weight="bold">1. parallelExecute</text>
  <text class="perf-text-small" x="40" y="90" font-weight="bold">Solana - Sealevelparallelrunhour</text>
  <text class="perf-text-small" x="40" y="105">• Transaction预firstsoundclearRW Set</text>
  <text class="perf-text-small" x="40" y="118">• None冲suddenTransactionparallelExecute</text>
  <text class="perf-text-small" x="40" y="131">• profituseManyverifyCPU</text>
  <text class="perf-text-small" x="40" y="147" font-weight="bold">Aptos - Block-STM</text>
  <text class="perf-text-small" x="40" y="162">• pleasuretempleconcurrencycontrol</text>
  <text class="perf-text-small" x="40" y="175">• 冲suddencheckmeasure&heavyExecute</text>
  <text class="perf-text-small" x="40" y="188">• softwaretxmem (STM)</text>
  <text class="perf-text-small" x="40" y="203">• Performanceproposerise: 8-16x</text>
  <rect class="perf-box-opt" x="370" y="50" width="310" height="180" rx="4"/>
  <text class="perf-text" x="525" y="70" text-anchor="middle" font-weight="bold">2. DAS</text>
  <text class="perf-text-small" x="380" y="90">• Light ClientwithmachineusetypeBlock</text>
  <text class="perf-text-small" x="380" y="103">• NoneneedDownvigintillionfullBlock</text>
  <text class="perf-text-small" x="380" y="116">• useErasure Coding (Erasure Coding)</text>
  <text class="perf-text-small" x="380" y="132" font-weight="bold">Celestiaimplement:</text>
  <text class="perf-text-small" x="380" y="147">• BlockminforManychunk</text>
  <text class="perf-text-small" x="380" y="160">• NodewithmachineusetypeFewmeasurechunk</text>
  <text class="perf-text-small" x="380" y="173">• statschoolprotectproofDataavailable</text>
  <text class="perf-text-small" x="380" y="186">• SupportultraLargeBlock (GBgrade)</text>
  <text class="perf-text-small" x="380" y="203">• bandwidthdropLow: ~99%</text>
  <rect class="perf-box-opt" x="30" y="250" width="320" height="180" rx="4"/>
  <text class="perf-text" x="190" y="270" text-anchor="middle" font-weight="bold">3. flowwaterline&Async</text>
  <text class="perf-text-small" x="40" y="290" font-weight="bold">Solana - 8gradeflowwaterline</text>
  <text class="perf-text-small" x="40" y="305">1. Dataobtaintake (Fetch)</text>
  <text class="perf-text-small" x="40" y="318">2. GPUSignature Verify (SigVerify)</text>
  <text class="perf-text-small" x="40" y="331">3. Banking (Execute)</text>
  <text class="perf-text-small" x="40" y="344">4. PoHgenerate (Proof of History)</text>
  <text class="perf-text-small" x="40" y="357">5. EntryBroadcast</text>
  <text class="perf-text-small" x="40" y="370">6. ShredShard</text>
  <text class="perf-text-small" x="40" y="383">7. Turbinepropagate</text>
  <text class="perf-text-small" x="40" y="396">8. ArchiversStorage</text>
  <text class="perf-text-small" x="40" y="412">• eachPhaseparallelrun</text>
  <rect class="perf-box-opt" x="370" y="250" width="310" height="180" rx="4"/>
  <text class="perf-text" x="525" y="270" text-anchor="middle" font-weight="bold">4. dedicatedHardwareaccelerate</text>
  <text class="perf-text-small" x="380" y="290" font-weight="bold">GPUaccelerate:</text>
  <text class="perf-text-small" x="380" y="305">• Signature Verify (ECDSA, Ed25519)</text>
  <text class="perf-text-small" x="380" y="318">• HashCalc (Keccak, SHA-256)</text>
  <text class="perf-text-small" x="380" y="331">• Merkletreestructuresuggest</text>
  <text class="perf-text-small" x="380" y="347" font-weight="bold">FPGA/ASIC:</text>
  <text class="perf-text-small" x="380" y="362">• PoWMining (Bitcoin ASIC)</text>
  <text class="perf-text-small" x="380" y="375">• VDFCalc (Chia, Ethereum)</text>
  <text class="perf-text-small" x="380" y="391" font-weight="bold">Performanceproposerise:</text>
  <text class="perf-text-small" x="380" y="406">• GPUSignature Verify: 100-1000x</text>
  <text class="perf-text-small" x="380" y="419">• Throughput: >50,000 sig/s</text>
</svg>
</div>
