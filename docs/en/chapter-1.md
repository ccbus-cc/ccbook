---
title: "Chapter 1: Blockchain Fundamentals"
---

<div class="ccbus-hero">
  <div class="ccbus-hero-avatar">
    <img src="../public/images/avatars/heroes/captain-ccbus.png" alt="Captain CCBus" />
  </div>
  <div class="ccbus-hero-content">
    <h1>Chapter 1: Blockchain Fundamentals</h1>
    <div class="ccbus-teacher-label">🎙️ Taught by:<strong>Captain CCBus</strong> · The "professor + tour guide + friendly bus" of blockchain</div>
  </div>
</div>

## 1.0 2025-2026 Perspective: Why Reread This Chapter

By 2026, blockchain is no longer "a novel digital-currency technology". It has evolved into the **underlying infrastructure of the global digital economy**, serving three distinct roles:

1. **Value settlement layer** — Bitcoin (BTC), stablecoins (USDT, USDC, USDe, PYUSD, FDUSD) form a $3.4 trillion on-chain asset class
2. **Programmable finance layer** — Ethereum + L2s combined carry a smart contract ecosystem with daily transaction volume 3x that of Visa
3. **Identity & data layer** — ENS, Lens, Farcaster, SBT, Worldcoin are redefining "account"

**Key 2025-2026 changes that warrant a reread**:

- **Multi-chain universe has crystallized**: 2025 was the watershed where L1 + L2 went from "experiment" to "production". Ethereum (+ L2s) holds 60%+ TVL; Solana is the single-chain throughput king; BNB Chain dominates memes and retail; Ton is the gateway to Telegram's 1.4B users; Sui/Aptos are Move-family rising stars; Monad/Berachain/Story are 2025-2026 launches
- **"Blockchain" is no longer just "a chain"**: Celestia, EigenDA, Avail provide modular data availability (DA) layers; Espresso, Astria provide shared sequencers — "blockchain" has split into four independent modules: execution, settlement, consensus, DA
- **AI agent economy takes off**: ai16z DAO, Virtuals Protocol, Aethernet, Zerebro make AI agents native on-chain actors; 2025-Q4 saw $8B+ in assets managed by on-chain AI agents
- **RWA mainstreaming accelerates**: BlackRock BUIDL, Ondo Finance, Maple Finance, Securitize have tokenized $30B+ in real-world assets to public chains (T-bills, credit, real estate, private funds)
- **Quantum-resistance preparation**: NIST formally released FIPS 203/204/205 (ML-KEM, ML-DSA, SLH-DSA) in 2024-08; post-quantum cryptography (PQC) is entering the migration period for blockchain stacks

### 🖥️ Real-world Example: CCBus All-in-One DeFi Toolkit

**CCBus** (ccbus.cc) is a multi-chain (BNB Chain, Solana, etc.) one-stop DeFi toolkit that packages nearly all the core blockchain capabilities covered in this chapter — **token standards, on-chain interaction, wallet management, contract verification, market analytics** — into a visual GUI. The screenshot below shows the platform's homepage feature matrix.

![CCBus All-in-One DeFi Toolkit homepage](../public/images/chapters/en/home-overview-en.png)

*Figure 1-1: CCBus homepage. Notice how mainstream public-chain features — **dividend tokens, liquidity-pool tokens, cross-chain bridges, DeFi tools, market analytics** — are surfaced to end users through visual tooling.*


<div style="background: rgba(52, 81, 178, 0.06); padding: 1.5em; border-radius: 4px; margin: 2em 0;">
<svg class="svg-1-17" viewBox="0 0 500 280" xmlns="http://www.w3.org/2000/svg" style="width: 100%; max-width: 600px; display: block; margin: 0 auto;">
<defs>
<style>
      .svg-1-17 .df-text-18 { font-family: arial, sans-serif; font-size: 9px; fill: #1f2937; }
      .svg-1-17 .df-actor-18 { fill: #4c9be8; stroke: #ccc; stroke-width: 1; }
      .svg-1-17 .df-line-18 { fill: none; stroke: #4c9be8; stroke-width: 1; }
      .svg-1-17 .df-note-18 { fill: rgba(52, 81, 178, 0.10); stroke: #4c9be8; stroke-width: 1; }
    </style>
    <marker id="df-arrow-18" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
      <path d="M 0 0 L 6 3 L 0 6 z" fill="#4c9be8"/>
    </marker>
  </defs>
  <rect class="df-actor-18" x="10" y="10" width="50" height="25" rx="2"/>
  <text class="df-text-18" x="35" y="26" text-anchor="middle">User</text>
  <rect class="df-actor-18" x="205" y="10" width="70" height="25" rx="2"/>
  <text class="df-text-18" x="240" y="26" text-anchor="middle">Smart Contract</text>
  <rect class="df-actor-18" x="380" y="10" width="80" height="25" rx="2"/>
  <text class="df-text-18" x="420" y="26" text-anchor="middle">Liquidity Pool</text>
  <line class="df-line-18" x1="35" y1="35" x2="35" y2="270" stroke-dasharray="2,2"/>
  <line class="df-line-18" x1="240" y1="35" x2="240" y2="270" stroke-dasharray="2,2"/>
  <line class="df-line-18" x1="420" y1="35" x2="420" y2="270" stroke-dasharray="2,2"/>
  <path class="df-line-18" d="M 35 50 L 240 50" marker-end="url(#df-arrow-18)"/>
  <text class="df-text-18" x="137" y="47" text-anchor="middle">1. existinputCollateralitem（e.g.ETH）</text>
  <path class="df-line-18" d="M 240 65 L 240 85" marker-end="url(#df-arrow-18)"/>
  <text class="df-text-18" x="255" y="75" text-anchor="start">2. VerifyCollateralitemvalue</text>
  <path class="df-line-18" d="M 240 95 L 420 95" marker-end="url(#df-arrow-18)"/>
  <text class="df-text-18" x="330" y="92" text-anchor="middle">3. fromLiquidity Pool</text>
  <text class="df-text-18" x="330" y="102" text-anchor="middle">LendStablecoin</text>
  <path class="df-line-18" d="M 420 110 L 35 110" marker-end="url(#df-arrow-18)"/>
  <text class="df-text-18" x="227" y="107" text-anchor="middle">4. standi.e.receivetoBorrow</text>
  <rect class="df-note-18" x="150" y="125" width="180" height="40" rx="2"/>
  <text class="df-text-18" x="240" y="138" text-anchor="middle">Noneneedpersonworkauditapprove</text>
  <text class="df-text-18" x="240" y="149" text-anchor="middle">fullyautoify</text>
  <text class="df-text-18" x="240" y="160" text-anchor="middle">transparentcanVerify</text>
  <path class="df-line-18" d="M 35 180 L 240 180" marker-end="url(#df-arrow-18)"/>
  <text class="df-text-18" x="137" y="177" text-anchor="middle">5. repay+interest</text>
  <path class="df-line-18" d="M 240 195 L 420 195" marker-end="url(#df-arrow-18)"/>
  <text class="df-text-18" x="330" y="192" text-anchor="middle">6. returnreturnLiquidity Pool</text>
  <path class="df-line-18" d="M 240 210 L 35 210" marker-end="url(#df-arrow-18)"/>
  <text class="df-text-18" x="137" y="207" text-anchor="middle">7. returnreturnCollateralitem</text>
</svg>
</div>

## 1.1 What is Blockchain?

**Blockchain** is a distributed ledger technology (DLT) that allows data to be stored in blocks and linked together through cryptography, forming a chain. Each block contains a batch of transaction records, and once added to the chain, it is nearly impossible to modify.

The name "blockchain" comes from its structural characteristics:
- **Blocks**: Containers for data, including transaction records, timestamps, and other metadata
- **Chain**: Blocks are connected through cryptographic hash values, forming an immutable time sequence

### Basic Structure of a Block

Each block typically contains the following information:

1. **Block Header**
   - Hash of the previous block
   - Timestamp
   - Difficulty target
   - Nonce
   - Merkle tree root

2. **Transaction Data**
   - All transaction records contained in the block
   - Organized using a Merkle tree for easy verification

3. **Other Metadata**
   - Block size
   - Block height
   - Version information

## 1.2 Core Features of Blockchain


<div style="background: rgba(52, 81, 178, 0.06); padding: 1.5em; border-radius: 4px; margin: 2em 0;">
<svg class="svg-1-2" viewBox="0 0 500 280" xmlns="http://www.w3.org/2000/svg" style="width: 100%; max-width: 600px; display: block; margin: 0 auto;">
<defs>
<style>
      .svg-1-2 .mm-text-3 { font-family: arial, sans-serif; font-size: 10px; fill: #1f2937; }
      .svg-1-2 .mm-text-dark-3 { font-family: arial, sans-serif; font-size: 10px; fill: #222; }
      .svg-1-2 .mm-center-3 { fill: rgba(245, 194, 66, 0.50); stroke: #333; stroke-width: 1; }
      .svg-1-2 .mm-main-3 { fill: #4c9be8; stroke: #ccc; stroke-width: 1; }
      .svg-1-2 .mm-sub-3 { fill: rgba(52, 81, 178, 0.10); stroke: #4c9be8; stroke-width: 1; }
      .svg-1-2 .mm-line-3 { fill: none; stroke: #4c9be8; stroke-width: 1; }
    </style>
</defs>
  <circle class="mm-center-3" cx="250" cy="140" r="35"/>
  <text class="mm-text-dark-3" x="250" y="135" text-anchor="middle">Blockchain</text>
  <text class="mm-text-dark-3" x="250" y="147" text-anchor="middle">corefeature</text>
  <line class="mm-line-3" x1="285" y1="140" x2="330" y2="60"/>
  <rect class="mm-main-3" x="330" y="45" width="75" height="30" rx="3"/>
  <text class="mm-text-3" x="367" y="65" text-anchor="middle">Decentralization</text>
  <rect class="mm-sub-3" x="415" y="15" width="75" height="18" rx="2"/>
  <text class="mm-text-3" x="452" y="27" text-anchor="middle">Nonesingle pointFaulty</text>
  <rect class="mm-sub-3" x="415" y="38" width="55" height="18" rx="2"/>
  <text class="mm-text-3" x="442" y="50" text-anchor="middle">censorship-resistant</text>
  <rect class="mm-sub-3" x="415" y="61" width="65" height="18" rx="2"/>
  <text class="mm-text-3" x="447" y="73" text-anchor="middle">rightstrengthdistributed</text>
  <line class="mm-line-3" x1="285" y1="140" x2="355" y2="105"/>
  <rect class="mm-main-3" x="355" y="90" width="60" height="30" rx="3"/>
  <text class="mm-text-3" x="385" y="110" text-anchor="middle">transparentnature</text>
  <rect class="mm-sub-3" x="425" y="85" width="70" height="18" rx="2"/>
  <text class="mm-text-3" x="460" y="97" text-anchor="middle">PubliccanVerify</text>
  <rect class="mm-sub-3" x="425" y="108" width="65" height="18" rx="2"/>
  <text class="mm-text-3" x="457" y="120" text-anchor="middle">real-timeaudit</text>
  <rect class="mm-sub-3" x="425" y="131" width="65" height="18" rx="2"/>
  <text class="mm-text-3" x="457" y="143" text-anchor="middle">trustmechanism</text>
  <line class="mm-line-3" x1="250" y1="175" x2="250" y2="215"/>
  <rect class="mm-main-3" x="205" y="215" width="90" height="30" rx="3"/>
  <text class="mm-text-3" x="250" y="235" text-anchor="middle">immutablenature</text>
  <rect class="mm-sub-3" x="130" y="225" width="70" height="18" rx="2"/>
  <text class="mm-text-3" x="165" y="237" text-anchor="middle">Cryptographyprotect</text>
  <rect class="mm-sub-3" x="305" y="218" width="65" height="18" rx="2"/>
  <text class="mm-text-3" x="337" y="230" text-anchor="middle">historyrecord</text>
  <rect class="mm-sub-3" x="305" y="241" width="70" height="18" rx="2"/>
  <text class="mm-text-3" x="340" y="253" text-anchor="middle">Datafullnature</text>
  <line class="mm-line-3" x1="215" y1="140" x2="150" y2="105"/>
  <rect class="mm-main-3" x="90" y="90" width="60" height="30" rx="3"/>
  <text class="mm-text-3" x="120" y="110" text-anchor="middle">Security</text>
  <rect class="mm-sub-3" x="10" y="85" width="65" height="18" rx="2"/>
  <text class="mm-text-3" x="42" y="97" text-anchor="middle">EncryptTech</text>
  <rect class="mm-sub-3" x="10" y="108" width="65" height="18" rx="2"/>
  <text class="mm-text-3" x="42" y="120" text-anchor="middle">consensusmechanism</text>
  <rect class="mm-sub-3" x="10" y="131" width="75" height="18" rx="2"/>
  <text class="mm-text-3" x="47" y="143" text-anchor="middle">disttypearchitecture</text>
</svg>
</div>

### 1.2.1 Decentralization

**Decentralization** is one of the most important characteristics of blockchain. Traditional systems usually rely on centralized servers or institutions, while blockchain distributes data and control to multiple nodes in the network.

**Advantages:**
- No single point of failure
- Strong censorship resistance
- No dependence on a single entity
- More equitable distribution of power

**Examples:**
- Traditional banking system: Banks control all accounts and transactions
- Bitcoin network: Thousands of nodes jointly maintain the ledger

### 1.2.2 Transparency

All transactions on the blockchain are publicly visible. Anyone can view the data on the blockchain, but personal identities are usually anonymous (using addresses instead of real names).

**Benefits:**
- Enhances trust
- Facilitates auditing
- Reduces corruption
- Improves accountability

### 1.2.3 Immutability

Once data is recorded on the blockchain, it is extremely difficult to modify. This is because:

1. Each block contains the hash of the previous block
2. Modifying historical data requires recalculating all subsequent blocks
3. Requires controlling the majority of the network's computing power

**Practical Significance:**
```
If an attacker wants to modify data in block 100:
1. Must recalculate the hash of block 100
2. This will change the input of block 101
3. Must recalculate blocks 101, 102, 103... until the latest block
4. Must complete all calculations before other honest nodes
5. Practically impossible (requires controlling >51% of network hash power)
```

### 1.2.4 Security

Blockchain uses powerful cryptographic techniques to protect data:

- **Hash Functions**: SHA-256, Keccak-256, etc.
- **Public Key Encryption**: Elliptic Curve Digital Signature Algorithm (ECDSA)
- **Consensus Mechanisms**: Proof of Work (PoW), Proof of Stake (PoS), etc.


<div style="background: rgba(52, 81, 178, 0.06); padding: 1.5em; border-radius: 4px; margin: 2em 0;">
<svg class="svg-1-5" viewBox="0 0 300 250" xmlns="http://www.w3.org/2000/svg" style="width: 100%; max-width: 400px; display: block; margin: 0 auto;">
<defs>
<style>
      .svg-1-5 .sl-text-6 { font-family: arial, sans-serif; font-size: 10px; fill: #1f2937; }
      .svg-1-5 .sl-text-dark-6 { font-family: arial, sans-serif; font-size: 10px; fill: #222; }
      .svg-1-5 .sl-title-6 { font-family: arial, sans-serif; font-size: 11px; fill: #1f2937; font-weight: bold; }
      .svg-1-5 .sl-box1-6 { fill: rgba(52, 81, 178, 0.10); stroke: #ccc; stroke-width: 1; }
      .svg-1-5 .sl-box2-6 { fill: rgba(223, 105, 25, 0.08); stroke: #ccc; stroke-width: 1; }
      .svg-1-5 .sl-box3-6 { fill: rgba(220, 53, 69, 0.10); stroke: #ccc; stroke-width: 1; }
      .svg-1-5 .sl-box4-6 { fill: rgba(147, 112, 219, 0.10); stroke: #ccc; stroke-width: 1; }
      .svg-1-5 .sl-arrow-6 { fill: none; stroke: #4c9be8; stroke-width: 1; }
    </style>
    <marker id="sl-arrow-6" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
      <path d="M 0 0 L 6 3 L 0 6 z" fill="#4c9be8"/>
    </marker>
  </defs>
  <text class="sl-title-6" x="150" y="20" text-anchor="middle">Blockchainsafelayertimes</text>
  <rect class="sl-box1-6" x="75" y="40" width="150" height="35" rx="2"/>
  <text class="sl-text-dark-6" x="150" y="53" text-anchor="middle">Cryptographylayer</text>
  <text class="sl-text-dark-6" x="150" y="67" text-anchor="middle">Hash、Sign、Encrypt</text>
  <path class="sl-arrow-6" d="M 150 75 L 150 95" marker-end="url(#sl-arrow-6)"/>
  <rect class="sl-box2-6" x="75" y="95" width="150" height="35" rx="2"/>
  <text class="sl-text-dark-6" x="150" y="108" text-anchor="middle">consensuslayer</text>
  <text class="sl-text-dark-6" x="150" y="122" text-anchor="middle">PoW、PoSetc.</text>
  <path class="sl-arrow-6" d="M 150 130 L 150 150" marker-end="url(#sl-arrow-6)"/>
  <rect class="sl-box3-6" x="75" y="150" width="150" height="35" rx="2"/>
  <text class="sl-text-dark-6" x="150" y="163" text-anchor="middle">Networklayer</text>
  <text class="sl-text-dark-6" x="150" y="177" text-anchor="middle">P2P、disttype</text>
  <path class="sl-arrow-6" d="M 150 185 L 150 205" marker-end="url(#sl-arrow-6)"/>
  <rect class="sl-box4-6" x="75" y="205" width="150" height="35" rx="2"/>
  <text class="sl-text-dark-6" x="150" y="218" text-anchor="middle">App Layer</text>
  <text class="sl-text-dark-6" x="150" y="232" text-anchor="middle">Smart Contract、Access Control</text>
</svg>
</div>

## 1.3 How Blockchain Works

### Transaction Flow

Let's understand how blockchain works through a Bitcoin transaction example:

#### Step 1: Create Transaction

Alice wants to send 1 BTC to Bob:
```
Transaction content:
- Sender: Alice's address
- Receiver: Bob's address
- Amount: 1 BTC
- Fee: 0.0001 BTC
```

#### Step 2: Sign Transaction

Alice uses her private key to digitally sign the transaction, proving she owns these bitcoins.

#### Step 3: Broadcast to Network

The signed transaction is broadcast to all nodes in the Bitcoin network.

#### Step 4: Verify Transaction

Nodes in the network verify the transaction's validity:
- Does Alice have sufficient balance?
- Is the signature valid?
- Is the transaction format correct?

#### Step 5: Enter Memory Pool

Valid transactions enter the memory pool (Mempool), waiting to be packaged into a block.

#### Step 6: Mining

Miners select transactions from the memory pool, package them into a new block, and start solving mathematical puzzles (Proof of Work).

#### Step 7: Block Confirmation

The first miner to solve the puzzle broadcasts the new block to the network, and other nodes verify and accept this block.

#### Step 8: Transaction Complete

As more blocks are added to the chain, this transaction receives more confirmations and becomes increasingly irreversible.

## 1.4 Types of Blockchain


<div style="background: rgba(52, 81, 178, 0.06); padding: 1.5em; border-radius: 4px; margin: 2em 0;">
<svg class="svg-1-10" viewBox="0 0 650 280" xmlns="http://www.w3.org/2000/svg" style="width: 100%; max-width: 650px; display: block; margin: 0 auto;">
<defs>
<style>
      .svg-1-10 .bt-text-11 { font-family: arial, sans-serif; font-size: 9px; fill: #1f2937; }
      .svg-1-10 .bt-text-dark-11 { font-family: arial, sans-serif; font-size: 9px; fill: #222; }
      .svg-1-10 .bt-root-11 { fill: rgba(245, 194, 66, 0.50); stroke: #333; stroke-width: 1; }
      .svg-1-10 .bt-pub-11 { fill: rgba(52, 81, 178, 0.10); stroke: #ccc; stroke-width: 1; }
      .svg-1-10 .bt-pri-11 { fill: rgba(220, 53, 69, 0.10); stroke: #ccc; stroke-width: 1; }
      .svg-1-10 .bt-con-11 { fill: rgba(223, 105, 25, 0.08); stroke: #ccc; stroke-width: 1; }
      .svg-1-10 .bt-hyb-11 { fill: rgba(147, 112, 219, 0.10); stroke: #ccc; stroke-width: 1; }
      .svg-1-10 .bt-sub-11 { fill: rgba(52, 81, 178, 0.10); stroke: #4c9be8; stroke-width: 1; }
      .svg-1-10 .bt-line-11 { fill: none; stroke: #4c9be8; stroke-width: 1; }
    </style>
</defs>
  <rect class="bt-root-11" x="220" y="10" width="110" height="25" rx="2"/>
  <text class="bt-text-dark-11" x="275" y="26" text-anchor="middle">Blockchain Type</text>
  <line class="bt-line-11" x1="240" y1="35" x2="90" y2="60"/>
  <line class="bt-line-11" x1="275" y1="35" x2="215" y2="60"/>
  <line class="bt-line-11" x1="300" y1="35" x2="365" y2="60"/>
  <line class="bt-line-11" x1="310" y1="35" x2="520" y2="60"/>
  <rect class="bt-pub-11" x="30" y="60" width="120" height="30" rx="2"/>
  <text class="bt-text-dark-11" x="90" y="70" text-anchor="middle">Public</text>
  <text class="bt-text-dark-11" x="90" y="82" text-anchor="middle">Public Blockchain</text>
  <rect class="bt-pri-11" x="165" y="60" width="120" height="30" rx="2"/>
  <text class="bt-text-dark-11" x="225" y="70" text-anchor="middle">Private</text>
  <text class="bt-text-dark-11" x="225" y="82" text-anchor="middle">Private Blockchain</text>
  <rect class="bt-con-11" x="320" y="60" width="130" height="30" rx="2"/>
  <text class="bt-text-dark-11" x="385" y="70" text-anchor="middle">Consortium</text>
  <text class="bt-text-dark-11" x="385" y="82" text-anchor="middle">Consortium Blockchain</text>
  <rect class="bt-hyb-11" x="495" y="60" width="95" height="30" rx="2"/>
  <text class="bt-text-dark-11" x="542" y="70" text-anchor="middle">Hybrid</text>
  <text class="bt-text-dark-11" x="542" y="82" text-anchor="middle">Hybrid Blockchain</text>
  <line class="bt-line-11" x1="70" y1="90" x2="40" y2="120"/>
  <line class="bt-line-11" x1="110" y1="90" x2="140" y2="120"/>
  <rect class="bt-sub-11" x="10" y="120" width="80" height="30" rx="2"/>
  <text class="bt-text-11" x="50" y="132" text-anchor="middle">Fully Open</text>
  <text class="bt-text-11" x="50" y="144" text-anchor="middle">Anyone</text>
  <rect class="bt-sub-11" x="100" y="120" width="90" height="30" rx="2"/>
  <text class="bt-text-11" x="145" y="132" text-anchor="middle">Example：Bitcoin</text>
  <text class="bt-text-11" x="145" y="144" text-anchor="middle">Ethereum</text>
  <line class="bt-line-11" x1="225" y1="90" x2="195" y2="170"/>
  <line class="bt-line-11" x1="265" y1="90" x2="295" y2="170"/>
  <rect class="bt-sub-11" x="150" y="170" width="95" height="30" rx="2"/>
  <text class="bt-text-11" x="197" y="182" text-anchor="middle">singleorganizationcontrol</text>
  <text class="bt-text-11" x="197" y="194" text-anchor="middle">permitcanapproveinput</text>
  <rect class="bt-sub-11" x="255" y="170" width="90" height="30" rx="2"/>
  <text class="bt-text-11" x="300" y="182" text-anchor="middle">Example：</text>
  <text class="bt-text-11" x="300" y="194" text-anchor="middle">Internalchain</text>
  <line class="bt-line-11" x1="385" y1="90" x2="350" y2="220"/>
  <line class="bt-line-11" x1="405" y1="90" x2="450" y2="220"/>
  <rect class="bt-sub-11" x="285" y="220" width="110" height="30" rx="2"/>
  <text class="bt-text-11" x="330" y="232" text-anchor="middle">Manyorganization共治</text>
  <text class="bt-text-11" x="330" y="244" text-anchor="middle">halfDecentralization</text>
  <rect class="bt-sub-11" x="405" y="220" width="100" height="30" rx="2"/>
  <text class="bt-text-11" x="455" y="232" text-anchor="middle">Example：Hyperledger</text>
  <text class="bt-text-11" x="455" y="244" text-anchor="middle">R3 Corda</text>
  <line class="bt-line-11" x1="525" y1="90" x2="505" y2="120"/>
  <line class="bt-line-11" x1="559" y1="90" x2="579" y2="120"/>
  <rect class="bt-sub-11" x="455" y="120" width="100" height="30" rx="2"/>
  <text class="bt-text-11" x="505" y="132" text-anchor="middle">public+Privateresultfit</text>
  <text class="bt-text-11" x="505" y="144" text-anchor="middle">flexibleconfig</text>
  <rect class="bt-sub-11" x="565" y="120" width="80" height="30" rx="2"/>
  <text class="bt-text-11" x="585" y="132" text-anchor="middle">Example：</text>
  <text class="bt-text-11" x="600" y="144" text-anchor="middle">Dragonchain</text>
</svg>
</div>

### 1.4.1 Public Blockchain

Public blockchains are completely open blockchain networks where anyone can:
- Participate in transactions
- Run nodes
- Participate in the consensus process

**Characteristics:**
- ✅ Fully decentralized
- ✅ Highly transparent
- ✅ Censorship resistant
- ❌ Poor scalability
- ❌ Slow transaction speed

**Typical Examples:**
- **Bitcoin**: The first public blockchain, focused on value storage and transfer
- **Ethereum**: Public blockchain supporting smart contracts
- **Solana**: High-performance public blockchain

### 1.4.2 Private Blockchain

Private blockchains have restricted access, and only authorized participants can join the network.

**Characteristics:**
- ✅ High efficiency
- ✅ Better privacy protection
- ✅ Easy to manage
- ❌ Higher degree of centralization
- ❌ Lower trustworthiness

**Use Cases:**
- Enterprise internal data sharing
- Supply chain management
- Internal audit systems

**Typical Examples:**
- **Hyperledger Fabric**: IBM-led enterprise blockchain framework
- **R3 Corda**: Distributed ledger focused on the financial industry

### 1.4.3 Consortium Blockchain

Consortium blockchains are between public and private blockchains, managed by a group of pre-selected nodes.

**Characteristics:**
- Partially decentralized
- Only consortium members can participate in consensus
- Faster than public chains, more decentralized than private chains

**Use Cases:**
- Cross-organizational collaboration
- Interbank settlement
- Industry alliances

**Typical Examples:**
- **Quorum**: Enterprise-grade Ethereum developed by JPMorgan
- **VeChain**: Supply chain management consortium blockchain



### 1.9 Rethinking "Blockchain" — From Monolithic Chain to Modular Stack

**Traditional view (2018-2022)**: A blockchain = consensus + execution + data availability + settlement (all bundled into one chain)
- Examples: BTC, ETH (pre-merge), Solana

**2025-2026 new view**: A "blockchain" = 4 independently replaceable modules
- **Execution layer**: EVM, SVM, MoveVM, WASM run contracts
- **Settlement layer**: validates execution results, provides finality
- **Consensus layer**: orders transactions
- **Data Availability layer (DA)**: ensures data is downloadable by anyone

**Real 2025-2026 layered projects**:

| Module | Representative | Tech |
|---|---|---|
| Execution | Arbitrum Stylus, EVM, Solana SVM, Sui Move | EVM / WASM / MoveVM |
| Settlement | Ethereum L1, Celestia, Berachain | Any chain providing finality |
| Consensus | Ethereum Beacon Chain, Celestia, Solana Tower BFT | PoS / PoH / BFT |
| DA | Celestia, EigenDA, EIP-4844 Blob, Avail | DAS / Blob |

**Example: Rollup + Blob**:
- **Execution**: Arbitrum One (Optimistic), zkSync Era (ZK)
- **Settlement + Consensus + DA**: Ethereum L1 (rollup posts state root to L1)
- **DA**: blob data lives on L1 nodes, expires after 18 days

**Example: Sovereign Rollup on Celestia**:
- **Execution + Settlement**: Manta, Movement (each rollup)
- **DA**: Celestia (shared)
- **Consensus**: Celestia (shared)

**What this means for developers**:
- Stop "choosing an L1"; start "choosing a set of modules"
- Marginal cost of launching an app drops from $100M (L1) to $1K (Rollup)
- Single-point-of-failure risk spread across multiple modules

### 1.10 AI Agent Accounts (2025-2026 New Paradigm)

![CCBus wallet manager — prototype of smart accounts and AI agent wallets](../public/images/chapters/zh/my-wallets.png)

*Figure: CCBus wallet manager — prototype of smart accounts and AI agent wallets*


By 2026, the "user" of on-chain accounts is no longer just humans. An **AI agent account** is an on-chain account controlled by an AI model, holding its own private keys.

**Characteristics of AI agent accounts**:
- Own its own wallet (e.g., Safe smart account)
- Can initiate transactions autonomously
- Can hold assets (ETH, USDC, tokens)
- Can join DAO voting
- Can interact with other AI agents

**Production projects (2025-2026)**:

| Project | Description |
|---|---|
| **ai16z (Eliza framework)** | $1.6B-scale open-source AI agent framework, DAO-governed |
| **Virtuals Protocol** | One-click create AI agent token, agent can initiate governance proposals |
| **Aethernet** | AI agents can become DAO voters |
| **Zerebro** | Fully autonomous AI agent, issues its own tokens |
| **Truth Terminal** | AI-manipulated meme coin GOAT broke $1.3B market cap |
| **Aethernet DAO** | AI agents have formal voting rights in DAO governance |

**Tech stack for AI agent accounts**:
- **Wallet**: Safe smart account (supports Session Keys, spending limits)
- **Private key**: MPC multi-sig (avoid single-point-of-failure)
- **Identity**: SBT (soulbound credential) proves agent identity
- **Audit**: all AI agent decisions on-chain, auditable by traditional tools
- **Rate-limiting**: max daily spending limit, prevent runaways

**Controversies (2026-Q1)**:
- **Issue 1**: Should AI agents have voting rights? Legally voting is a "human right"
- **Issue 2**: If AI agent loses user money, who bears responsibility?
- **Issue 3**: If AI agent is malicious, is it the developer's or model's fault?
- **2026 regulatory stance**: US SEC does not recognize AI agents as "accredited investors"; EU MiCA requires a natural person behind the agent
- **2027 prediction**: AI agents will get limited "on-chain personhood" — they can do specific behaviors (e.g., automated market making) but not full voting rights

**AI agent account smart contract example (simplified)**:

```solidity
// A minimal AI agent smart account
contract AIAgentAccount {
    address public owner;       // human creator
    address public operator;    // AI agent's session key
    uint256 public dailyLimit;  // daily spending limit
    mapping(bytes32 => bool) public usedHashes; // replay protection

    modifier onlyOperator() {
        require(msg.sender == operator, "not operator");
        _;
    }

    modifier withinLimit(uint256 amount) {
        require(amount <= dailyLimit, "over daily limit");
        _;
    }

    function execute(address to, uint256 value, bytes calldata data, uint256 nonce)
        external onlyOperator withinLimit(value)
        returns (bytes memory)
    {
        // Replay protection
        bytes32 txHash = keccak256(abi.encodePacked(to, value, data, nonce));
        require(!usedHashes[txHash], "replay");
        usedHashes[txHash] = true;

        // Execute
        (bool success, bytes memory result) = to.call{value: value}(data);
        require(success, "exec failed");
        return result;
    }

    function rotateOperator(address newOperator) external {
        require(msg.sender == owner, "only owner");
        operator = newOperator;
    }
}
```

**Summary**: AI agent accounts are the most important new account paradigm of 2026. They blur the line between "user" and "tool", requiring new regulatory, technical, and ethical frameworks.

## 1.5 Blockchain Applications

### Financial Services
- Cross-border payments
- Digital currencies
- Decentralized Finance (DeFi)

### Supply Chain Management
- Product traceability
- Logistics tracking
- Anti-counterfeiting verification

### Digital Identity
- Identity verification
- Academic credentials
- Medical records

### Intellectual Property
- Copyright protection
- NFT artwork
- Digital asset ownership

### Voting Systems
- Electronic voting
- DAO governance
- Community decision-making


<div style="background: rgba(52, 81, 178, 0.06); padding: 1.5em; border-radius: 4px; margin: 2em 0;">
<svg class="svg-1-0" viewBox="0 0 520 45" xmlns="http://www.w3.org/2000/svg" style="width: 100%; max-width: 600px; display: block; margin: 0 auto;">
<defs>
<style>
      .svg-1-0 .bc-text-dark-1 { font-family: arial, sans-serif; font-size: 10px; fill: #222; }
      .svg-1-0 .bc-text-1 { font-family: arial, sans-serif; font-size: 10px; fill: #1f2937; }
      .svg-1-0 .bc-box1-1 { fill: rgba(52, 81, 178, 0.10); stroke: #ccc; stroke-width: 1; }
      .svg-1-0 .bc-box2-1 { fill: rgba(223, 105, 25, 0.08); stroke: #ccc; stroke-width: 1; }
      .svg-1-0 .bc-arrow-1 { fill: none; stroke: #4c9be8; stroke-width: 1; }
    </style>
    <marker id="bc-arrow-1" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
      <path d="M 0 0 L 6 3 L 0 6 z" fill="#4c9be8"/>
    </marker>
  </defs>
  <rect class="bc-box1-1" x="10" y="10" width="80" height="25" rx="2"/>
  <text class="bc-text-dark-1" x="50" y="20" text-anchor="middle">Block 1</text>
  <text class="bc-text-dark-1" x="50" y="30" text-anchor="middle">GenesisBlock</text>
  <path class="bc-arrow-1" d="M 90 22 L 115 22" marker-end="url(#bc-arrow-1)"/>
  <rect class="bc-box2-1" x="115" y="10" width="60" height="25" rx="2"/>
  <text class="bc-text-dark-1" x="145" y="26" text-anchor="middle">Block 2</text>
  <path class="bc-arrow-1" d="M 175 22 L 200 22" marker-end="url(#bc-arrow-1)"/>
  <rect class="bc-box2-1" x="200" y="10" width="60" height="25" rx="2"/>
  <text class="bc-text-dark-1" x="230" y="26" text-anchor="middle">Block 3</text>
  <path class="bc-arrow-1" d="M 260 22 L 285 22" marker-end="url(#bc-arrow-1)"/>
  <rect class="bc-box2-1" x="285" y="10" width="60" height="25" rx="2"/>
  <text class="bc-text-dark-1" x="315" y="26" text-anchor="middle">Block 4</text>
  <path class="bc-arrow-1" d="M 345 22 L 370 22" marker-end="url(#bc-arrow-1)"/>
  <rect class="bc-box2-1" x="370" y="10" width="40" height="25" rx="2"/>
  <text class="bc-text-dark-1" x="390" y="26" text-anchor="middle">...</text>
</svg>
</div>

<div style="background: rgba(52, 81, 178, 0.06); padding: 1.5em; border-radius: 4px; margin: 2em 0;">
<svg class="svg-1-1" viewBox="0 0 650 220" xmlns="http://www.w3.org/2000/svg" style="width: 100%; max-width: 750px; display: block; margin: 0 auto;">
<defs>
<style>
      .svg-1-1 .tl-text-2 { font-family: arial, sans-serif; font-size: 10px; fill: #1f2937; }
      .svg-1-1 .tl-year-2 { font-family: arial, sans-serif; font-size: 11px; fill: #1f2937; font-weight: bold; }
      .svg-1-1 .tl-line-2 { fill: none; stroke: #4c9be8; stroke-width: 1; }
      .svg-1-1 .tl-dot-2 { fill: #4c9be8; }
    </style>
</defs>
  <text class="tl-year-2" x="325" y="15" text-anchor="middle">BlockchainTechGrowth史</text>
  <line class="tl-line-2" x1="20" y1="30" x2="630" y2="30"/>
  <circle class="tl-dot-2" cx="60" cy="30" r="3"/>
  <text class="tl-year-2" x="60" y="45" text-anchor="middle">1991</text>
  <text class="tl-text-2" x="60" y="58" text-anchor="middle">TimestampTech</text>
  <text class="tl-text-2" x="60" y="70" text-anchor="middle">Stuart Haber &amp;</text>
  <text class="tl-text-2" x="60" y="82" text-anchor="middle">Scott Stornetta</text>
  <circle class="tl-dot-2" cx="120" cy="30" r="3"/>
  <text class="tl-year-2" x="120" y="95" text-anchor="middle">2008</text>
  <text class="tl-text-2" x="120" y="108" text-anchor="middle">Bitcoinwhitepaper</text>
  <text class="tl-text-2" x="120" y="120" text-anchor="middle">Mediumorigin聪</text>
  <circle class="tl-dot-2" cx="180" cy="30" r="3"/>
  <text class="tl-year-2" x="180" y="45" text-anchor="middle">2009</text>
  <text class="tl-text-2" x="180" y="58" text-anchor="middle">BitcoinNetworkstartmove</text>
  <text class="tl-text-2" x="180" y="70" text-anchor="middle">GenesisBlock诞life</text>
  <circle class="tl-dot-2" cx="240" cy="30" r="3"/>
  <text class="tl-year-2" x="240" y="135" text-anchor="middle">2013</text>
  <text class="tl-text-2" x="240" y="148" text-anchor="middle">Ethereumstructurethought</text>
  <text class="tl-text-2" x="240" y="160" text-anchor="middle">Vitalik Buterin</text>
  <circle class="tl-dot-2" cx="300" cy="30" r="3"/>
  <text class="tl-year-2" x="300" y="45" text-anchor="middle">2015</text>
  <text class="tl-text-2" x="300" y="58" text-anchor="middle">EthereumMainnetUpline</text>
  <text class="tl-text-2" x="300" y="70" text-anchor="middle">Smart Contracthourera</text>
  <circle class="tl-dot-2" cx="360" cy="30" r="3"/>
  <text class="tl-year-2" x="360" y="175" text-anchor="middle">2017</text>
  <text class="tl-text-2" x="360" y="188" text-anchor="middle">ICOhot潮</text>
  <text class="tl-text-2" x="360" y="200" text-anchor="middle">Blockchain1.0to2.0</text>
  <circle class="tl-dot-2" cx="420" cy="30" r="3"/>
  <text class="tl-year-2" x="420" y="95" text-anchor="middle">2020</text>
  <text class="tl-text-2" x="420" y="108" text-anchor="middle">DeFi Summer</text>
  <text class="tl-text-2" x="420" y="120" text-anchor="middle">DeFi爆emit</text>
  <circle class="tl-dot-2" cx="480" cy="30" r="3"/>
  <text class="tl-year-2" x="480" y="45" text-anchor="middle">2021</text>
  <text class="tl-text-2" x="480" y="58" text-anchor="middle">NFTerayear</text>
  <text class="tl-text-2" x="480" y="70" text-anchor="middle">digitalasset革命</text>
  <circle class="tl-dot-2" cx="540" cy="30" r="3"/>
  <text class="tl-year-2" x="540" y="135" text-anchor="middle">2022</text>
  <text class="tl-text-2" x="540" y="148" text-anchor="middle">Layer 2scale</text>
  <text class="tl-text-2" x="540" y="160" text-anchor="middle">Scalingsolutionmature</text>
  <circle class="tl-dot-2" cx="600" cy="30" r="3"/>
  <text class="tl-year-2" x="600" y="175" text-anchor="middle">2024</text>
  <text class="tl-text-2" x="600" y="188" text-anchor="middle">InstitutionalAdoption</text>
  <text class="tl-text-2" x="600" y="200" text-anchor="middle">EnterprisegradeAppfallfloor</text>
</svg>
</div>

<div style="background: rgba(52, 81, 178, 0.06); padding: 1.5em; border-radius: 4px; margin: 2em 0;">
<svg class="svg-1-3" viewBox="0 0 500 200" xmlns="http://www.w3.org/2000/svg" style="width: 100%; max-width: 600px; display: block; margin: 0 auto;">
<defs>
<style>
      .svg-1-3 .cd-text-4 { font-family: arial, sans-serif; font-size: 10px; fill: #1f2937; }
      .svg-1-3 .cd-text-dark-4 { font-family: arial, sans-serif; font-size: 10px; fill: #222; }
      .svg-1-3 .cd-title-4 { font-family: arial, sans-serif; font-size: 11px; fill: #1f2937; font-weight: bold; }
      .svg-1-3 .cd-center-4 { fill: rgba(220, 53, 69, 0.25); stroke: #ccc; stroke-width: 1; }
      .svg-1-3 .cd-user-4 { fill: rgba(223, 105, 25, 0.08); stroke: #ccc; stroke-width: 1; }
      .svg-1-3 .cd-node-4 { fill: rgba(52, 81, 178, 0.10); stroke: #ccc; stroke-width: 1; }
      .svg-1-3 .cd-line-4 { fill: none; stroke: #4c9be8; stroke-width: 1; }
    </style>
</defs>
  <text class="cd-title-4" x="90" y="15" text-anchor="middle">CentralizedSystem</text>
  <rect class="cd-center-4" x="60" y="85" width="60" height="30" rx="2"/>
  <text class="cd-text-4" x="90" y="95" text-anchor="middle">Mediumheart</text>
  <text class="cd-text-4" x="90" y="107" text-anchor="middle">serviceer</text>
  <rect class="cd-user-4" x="10" y="30" width="40" height="20" rx="2"/>
  <text class="cd-text-dark-4" x="30" y="43" text-anchor="middle">User</text>
  <line class="cd-line-4" x1="30" y1="50" x2="75" y2="85"/>
  <rect class="cd-user-4" x="70" y="30" width="40" height="20" rx="2"/>
  <text class="cd-text-dark-4" x="90" y="43" text-anchor="middle">User</text>
  <line class="cd-line-4" x1="90" y1="50" x2="90" y2="85"/>
  <rect class="cd-user-4" x="130" y="30" width="40" height="20" rx="2"/>
  <text class="cd-text-dark-4" x="150" y="43" text-anchor="middle">User</text>
  <line class="cd-line-4" x1="150" y1="50" x2="105" y2="85"/>
  <rect class="cd-user-4" x="55" y="150" width="40" height="20" rx="2"/>
  <text class="cd-text-dark-4" x="75" y="163" text-anchor="middle">User</text>
  <line class="cd-line-4" x1="75" y1="150" x2="80" y2="115"/>
  <text class="cd-title-4" x="370" y="15" text-anchor="middle">DecentralizationSystem</text>
  <circle class="cd-node-4" cx="280" cy="60" r="15"/>
  <text class="cd-text-dark-4" x="280" y="65" text-anchor="middle">Node</text>
  <circle class="cd-node-4" cx="350" cy="60" r="15"/>
  <text class="cd-text-dark-4" x="350" y="65" text-anchor="middle">Node</text>
  <circle class="cd-node-4" cx="420" cy="60" r="15"/>
  <text class="cd-text-dark-4" x="420" y="65" text-anchor="middle">Node</text>
  <circle class="cd-node-4" cx="315" cy="130" r="15"/>
  <text class="cd-text-dark-4" x="315" y="135" text-anchor="middle">Node</text>
  <circle class="cd-node-4" cx="385" cy="130" r="15"/>
  <text class="cd-text-dark-4" x="385" y="135" text-anchor="middle">Node</text>
  <line class="cd-line-4" x1="295" y1="60" x2="335" y2="60"/>
  <line class="cd-line-4" x1="365" y1="60" x2="405" y2="60"/>
  <line class="cd-line-4" x1="290" y1="70" x2="307" y2="118"/>
  <line class="cd-line-4" x1="350" y1="75" x2="323" y2="118"/>
  <line class="cd-line-4" x1="350" y1="75" x2="377" y2="118"/>
  <line class="cd-line-4" x1="410" y1="70" x2="393" y2="118"/>
  <line class="cd-line-4" x1="330" y1="130" x2="370" y2="130"/>
</svg>
</div>

<div style="background: rgba(52, 81, 178, 0.06); padding: 1.5em; border-radius: 4px; margin: 2em 0;">
<svg class="svg-1-4" viewBox="0 0 550 200" xmlns="http://www.w3.org/2000/svg" style="width: 100%; max-width: 650px; display: block; margin: 0 auto;">
<defs>
<style>
      .svg-1-4 .bh-text-5 { font-family: arial, sans-serif; font-size: 9px; fill: #1f2937; }
      .svg-1-4 .bh-text-dark-5 { font-family: arial, sans-serif; font-size: 9px; fill: #222; }
      .svg-1-4 .bh-box-5 { fill: rgba(223, 105, 25, 0.08); stroke: #ccc; stroke-width: 1; }
      .svg-1-4 .bh-box-warn-5 { fill: rgba(220, 53, 69, 0.10); stroke: #ccc; stroke-width: 1; }
      .svg-1-4 .bh-arrow-5 { fill: none; stroke: #4c9be8; stroke-width: 1; }
      .svg-1-4 .bh-arrow-warn-5 { fill: none; stroke: rgba(220, 53, 69, 0.25); stroke-width: 1; }
    </style>
    <marker id="bh-arrow-5" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
      <path d="M 0 0 L 6 3 L 0 6 z" fill="#4c9be8"/>
    </marker>
    <marker id="bh-arrow-warn-5" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
      <path d="M 0 0 L 6 3 L 0 6 z" fill="rgba(220, 53, 69, 0.25)"/>
    </marker>
  </defs>
  <rect class="bh-box-5" x="10" y="10" width="100" height="30" rx="2"/>
  <text class="bh-text-dark-5" x="60" y="20" text-anchor="middle">Block N-1</text>
  <text class="bh-text-dark-5" x="60" y="32" text-anchor="middle">Hash: 0x7a3f...</text>
  <path class="bh-arrow-5" d="M 110 25 L 160 25" marker-end="url(#bh-arrow-5)"/>
  <rect class="bh-box-5" x="160" y="10" width="120" height="30" rx="2"/>
  <text class="bh-text-dark-5" x="220" y="20" text-anchor="middle">Block N</text>
  <text class="bh-text-dark-5" x="220" y="32" text-anchor="middle">containsprepieceHash: 0x7a3f...</text>
  <path class="bh-arrow-5" d="M 280 25 L 330 25" marker-end="url(#bh-arrow-5)"/>
  <rect class="bh-box-5" x="330" y="10" width="120" height="30" rx="2"/>
  <text class="bh-text-dark-5" x="390" y="20" text-anchor="middle">Block N+1</text>
  <text class="bh-text-dark-5" x="390" y="32" text-anchor="middle">containsprepieceHash: 0x8b2e...</text>
  <rect class="bh-box-warn-5" x="10" y="70" width="100" height="25" rx="2"/>
  <text class="bh-text-dark-5" x="60" y="85" text-anchor="middle">e.g.resultreviseBlock N</text>
  <path class="bh-arrow-warn-5" d="M 110 82 L 150 82" marker-end="url(#bh-arrow-warn-5)"/>
  <rect class="bh-box-5" x="150" y="70" width="110" height="25" rx="2"/>
  <text class="bh-text-dark-5" x="205" y="85" text-anchor="middle">Block N Hashchangechange</text>
  <path class="bh-arrow-warn-5" d="M 205 95 L 205 120" marker-end="url(#bh-arrow-warn-5)"/>
  <rect class="bh-box-5" x="130" y="120" width="150" height="25" rx="2"/>
  <text class="bh-text-dark-5" x="205" y="135" text-anchor="middle">Block N+1 prepieceHashnomatchmatch</text>
  <path class="bh-arrow-warn-5" d="M 205 145 L 205 170" marker-end="url(#bh-arrow-warn-5)"/>
  <rect class="bh-box-5" x="150" y="170" width="110" height="25" rx="2"/>
  <text class="bh-text-dark-5" x="205" y="185" text-anchor="middle">wholechainlabeldecide裂</text>
  <path class="bh-arrow-warn-5" d="M 260 182 L 330 182" marker-end="url(#bh-arrow-warn-5)"/>
  <rect class="bh-box-warn-5" x="330" y="170" width="100" height="25" rx="2"/>
  <text class="bh-text-dark-5" x="380" y="185" text-anchor="middle">篡changeblanketcheckmeasureto</text>
</svg>
</div>

<div style="background: rgba(52, 81, 178, 0.06); padding: 1.5em; border-radius: 4px; margin: 2em 0;">
<svg class="svg-1-6" viewBox="0 0 450 300" xmlns="http://www.w3.org/2000/svg" style="width: 100%; max-width: 550px; display: block; margin: 0 auto;">
<defs>
<style>
      .svg-1-6 .bs-text-7 { font-family: arial, sans-serif; font-size: 10px; fill: #1f2937; }
      .svg-1-6 .bs-text-dark-7 { font-family: arial, sans-serif; font-size: 10px; fill: #222; }
      .svg-1-6 .bs-title-7 { font-family: arial, sans-serif; font-size: 11px; fill: #1f2937; font-weight: bold; }
      .svg-1-6 .bs-main-7 { fill: #4c9be8; stroke: #ccc; stroke-width: 1; }
      .svg-1-6 .bs-sub-7 { fill: rgba(52, 81, 178, 0.10); stroke: #4c9be8; stroke-width: 1; }
      .svg-1-6 .bs-data-7 { fill: rgba(52, 81, 178, 0.10); stroke: #ccc; stroke-width: 1; }
      .svg-1-6 .bs-line-7 { fill: none; stroke: #4c9be8; stroke-width: 1; }
    </style>
</defs>
  <text class="bs-title-7" x="225" y="20" text-anchor="middle">Block Structure</text>
  <rect class="bs-main-7" x="20" y="40" width="120" height="30" rx="2"/>
  <text class="bs-text-7" x="80" y="60" text-anchor="middle">Block Header Block Header</text>
  <rect class="bs-sub-7" x="160" y="35" width="130" height="20" rx="2"/>
  <text class="bs-text-7" x="225" y="48" text-anchor="middle">versionno. Version</text>
  <rect class="bs-sub-7" x="160" y="60" width="150" height="20" rx="2"/>
  <text class="bs-text-7" x="235" y="73" text-anchor="middle">prepieceHash Previous Hash</text>
  <rect class="bs-sub-7" x="160" y="85" width="140" height="20" rx="2"/>
  <text class="bs-text-7" x="230" y="98" text-anchor="middle">Merkle Root Merkle Root</text>
  <rect class="bs-sub-7" x="160" y="110" width="120" height="20" rx="2"/>
  <text class="bs-text-7" x="220" y="123" text-anchor="middle">Timestamp Timestamp</text>
  <rect class="bs-sub-7" x="160" y="135" width="120" height="20" rx="2"/>
  <text class="bs-text-7" x="220" y="148" text-anchor="middle">DifficultyTarget Difficulty</text>
  <rect class="bs-sub-7" x="160" y="160" width="110" height="20" rx="2"/>
  <text class="bs-text-7" x="215" y="173" text-anchor="middle">Nonce Nonce</text>
  <line class="bs-line-7" x1="140" y1="55" x2="160" y2="45"/>
  <line class="bs-line-7" x1="140" y1="55" x2="160" y2="70"/>
  <line class="bs-line-7" x1="140" y1="55" x2="160" y2="95"/>
  <line class="bs-line-7" x1="140" y1="55" x2="160" y2="120"/>
  <line class="bs-line-7" x1="140" y1="55" x2="160" y2="145"/>
  <line class="bs-line-7" x1="140" y1="55" x2="160" y2="170"/>
  <rect class="bs-main-7" x="20" y="210" width="160" height="30" rx="2"/>
  <text class="bs-text-7" x="100" y="230" text-anchor="middle">TransactionData Transaction Data</text>
  <rect class="bs-data-7" x="200" y="195" width="60" height="20" rx="2"/>
  <text class="bs-text-dark-7" x="230" y="208" text-anchor="middle">Transaction 1</text>
  <rect class="bs-data-7" x="200" y="220" width="60" height="20" rx="2"/>
  <text class="bs-text-dark-7" x="230" y="233" text-anchor="middle">Transaction 2</text>
  <rect class="bs-data-7" x="200" y="245" width="60" height="20" rx="2"/>
  <text class="bs-text-dark-7" x="230" y="258" text-anchor="middle">Transaction 3</text>
  <rect class="bs-data-7" x="200" y="270" width="60" height="20" rx="2"/>
  <text class="bs-text-dark-7" x="230" y="283" text-anchor="middle">...</text>
  <line class="bs-line-7" x1="180" y1="225" x2="200" y2="205"/>
  <line class="bs-line-7" x1="180" y1="225" x2="200" y2="230"/>
  <line class="bs-line-7" x1="180" y1="225" x2="200" y2="255"/>
  <line class="bs-line-7" x1="180" y1="225" x2="200" y2="280"/>
</svg>
</div>

<div style="background: rgba(52, 81, 178, 0.06); padding: 1.5em; border-radius: 4px; margin: 2em 0;">
<svg class="svg-1-7" viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg" style="width: 100%; max-width: 500px; display: block; margin: 0 auto;">
<defs>
<style>
      .svg-1-7 .mt-text-8 { font-family: arial, sans-serif; font-size: 9px; fill: #1f2937; }
      .svg-1-7 .mt-text-dark-8 { font-family: arial, sans-serif; font-size: 9px; fill: #222; }
      .svg-1-7 .mt-root-8 { fill: rgba(245, 194, 66, 0.50); stroke: #333; stroke-width: 1; }
      .svg-1-7 .mt-hash-8 { fill: rgba(223, 105, 25, 0.08); stroke: #ccc; stroke-width: 1; }
      .svg-1-7 .mt-tx-8 { fill: rgba(52, 81, 178, 0.10); stroke: #ccc; stroke-width: 1; }
      .svg-1-7 .mt-line-8 { fill: none; stroke: #4c9be8; stroke-width: 1; }
    </style>
</defs>
  <rect class="mt-root-8" x="150" y="10" width="100" height="30" rx="2"/>
  <text class="mt-text-dark-8" x="200" y="20" text-anchor="middle">Merkle Root</text>
  <text class="mt-text-dark-8" x="200" y="32" text-anchor="middle">0x9a5c...</text>
  <line class="mt-line-8" x1="180" y1="40" x2="100" y2="70"/>
  <line class="mt-line-8" x1="220" y1="40" x2="300" y2="70"/>
  <rect class="mt-hash-8" x="50" y="70" width="100" height="30" rx="2"/>
  <text class="mt-text-dark-8" x="100" y="80" text-anchor="middle">Hash 1-2</text>
  <text class="mt-text-dark-8" x="100" y="92" text-anchor="middle">0x3f2a...</text>
  <rect class="mt-hash-8" x="250" y="70" width="100" height="30" rx="2"/>
  <text class="mt-text-dark-8" x="300" y="80" text-anchor="middle">Hash 3-4</text>
  <text class="mt-text-dark-8" x="300" y="92" text-anchor="middle">0x7b8e...</text>
  <line class="mt-line-8" x1="75" y1="100" x2="40" y2="130"/>
  <line class="mt-line-8" x1="125" y1="100" x2="160" y2="130"/>
  <line class="mt-line-8" x1="275" y1="100" x2="240" y2="130"/>
  <line class="mt-line-8" x1="325" y1="100" x2="360" y2="130"/>
  <rect class="mt-tx-8" x="10" y="130" width="85" height="35" rx="2"/>
  <text class="mt-text-dark-8" x="52" y="143" text-anchor="middle">Transaction 1</text>
  <text class="mt-text-dark-8" x="52" y="155" text-anchor="middle">Hash:</text>
  <text class="mt-text-dark-8" x="52" y="163" text-anchor="middle">0x1a2b...</text>
  <rect class="mt-tx-8" x="110" y="130" width="85" height="35" rx="2"/>
  <text class="mt-text-dark-8" x="152" y="143" text-anchor="middle">Transaction 2</text>
  <text class="mt-text-dark-8" x="152" y="155" text-anchor="middle">Hash:</text>
  <text class="mt-text-dark-8" x="152" y="163" text-anchor="middle">0x3c4d...</text>
  <rect class="mt-tx-8" x="210" y="130" width="85" height="35" rx="2"/>
  <text class="mt-text-dark-8" x="252" y="143" text-anchor="middle">Transaction 3</text>
  <text class="mt-text-dark-8" x="252" y="155" text-anchor="middle">Hash:</text>
  <text class="mt-text-dark-8" x="252" y="163" text-anchor="middle">0x5e6f...</text>
  <rect class="mt-tx-8" x="310" y="130" width="85" height="35" rx="2"/>
  <text class="mt-text-dark-8" x="352" y="143" text-anchor="middle">Transaction 4</text>
  <text class="mt-text-dark-8" x="352" y="155" text-anchor="middle">Hash:</text>
  <text class="mt-text-dark-8" x="352" y="163" text-anchor="middle">0x7g8h...</text>
</svg>
</div>

<div style="background: rgba(52, 81, 178, 0.06); padding: 1.5em; border-radius: 4px; margin: 2em 0;">
<svg class="svg-1-8" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg" style="width: 100%; max-width: 650px; display: block; margin: 0 auto;">
<defs>
<style>
      .svg-1-8 .seq-text-9 { font-family: arial, sans-serif; font-size: 9px; fill: #1f2937; }
      .svg-1-8 .seq-text-dark-9 { font-family: arial, sans-serif; font-size: 9px; fill: #222; }
      .svg-1-8 .seq-actor-9 { fill: #4c9be8; stroke: #ccc; stroke-width: 1; }
      .svg-1-8 .seq-line-9 { fill: none; stroke: #4c9be8; stroke-width: 1; }
      .svg-1-8 .seq-arrow-9 { fill: none; stroke: #4c9be8; stroke-width: 1; }
      .svg-1-8 .seq-note-9 { fill: rgba(52, 81, 178, 0.10); stroke: #4c9be8; stroke-width: 1; }
    </style>
    <marker id="seq-arrow-9" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
      <path d="M 0 0 L 6 3 L 0 6 z" fill="#4c9be8"/>
    </marker>
  </defs>
  <rect class="seq-actor-9" x="10" y="10" width="50" height="25" rx="2"/>
  <text class="seq-text-9" x="35" y="26" text-anchor="middle">User</text>
  <rect class="seq-actor-9" x="150" y="10" width="50" height="25" rx="2"/>
  <text class="seq-text-9" x="175" y="26" text-anchor="middle">Node</text>
  <rect class="seq-actor-9" x="270" y="10" width="80" height="25" rx="2"/>
  <text class="seq-text-9" x="310" y="26" text-anchor="middle">Miner/Validator</text>
  <rect class="seq-actor-9" x="420" y="10" width="60" height="25" rx="2"/>
  <text class="seq-text-9" x="450" y="26" text-anchor="middle">Blockchain</text>
  <line class="seq-line-9" x1="35" y1="35" x2="35" y2="590" stroke-dasharray="2,2"/>
  <line class="seq-line-9" x1="175" y1="35" x2="175" y2="590" stroke-dasharray="2,2"/>
  <line class="seq-line-9" x1="310" y1="35" x2="310" y2="590" stroke-dasharray="2,2"/>
  <line class="seq-line-9" x1="450" y1="35" x2="450" y2="590" stroke-dasharray="2,2"/>
  <path class="seq-arrow-9" d="M 35 50 L 175 50" marker-end="url(#seq-arrow-9)"/>
  <text class="seq-text-9" x="105" y="47" text-anchor="middle">1. emitriseTransaction</text>
  <rect class="seq-note-9" x="60" y="55" width="125" height="26" rx="2"/>
  <text class="seq-text-9" x="122" y="67" text-anchor="middle">Transactioncontains：emitsendplace、</text>
  <text class="seq-text-9" x="122" y="77" text-anchor="middle">receivereceiveplace、Amount、Sign</text>
  <path class="seq-arrow-9" d="M 175 100 L 175 130" marker-end="url(#seq-arrow-9)"/>
  <text class="seq-text-9" x="190" y="115" text-anchor="start">2. VerifyTransaction</text>
  <rect class="seq-note-9" x="140" y="135" width="110" height="22" rx="2"/>
  <text class="seq-text-9" x="195" y="148" text-anchor="middle">checkSign、Balance、celltype</text>
  <path class="seq-arrow-9" d="M 175 175 L 310 175" marker-end="url(#seq-arrow-9)"/>
  <text class="seq-text-9" x="242" y="172" text-anchor="middle">3. Broadcasttomempool</text>
  <rect class="seq-note-9" x="250" y="180" width="90" height="22" rx="2"/>
  <text class="seq-text-9" x="295" y="193" text-anchor="middle">TransactionEnternotConfirmpool</text>
  <path class="seq-arrow-9" d="M 310 220 L 310 250" marker-end="url(#seq-arrow-9)"/>
  <text class="seq-text-9" x="325" y="235" text-anchor="start">4. ChooseTransactionhitpack</text>
  <rect class="seq-note-9" x="250" y="255" width="95" height="22" rx="2"/>
  <text class="seq-text-9" x="297" y="268" text-anchor="middle">rootevidenceFeeexcellentfirstgrade</text>
  <path class="seq-arrow-9" d="M 310 295 L 310 325" marker-end="url(#seq-arrow-9)"/>
  <text class="seq-text-9" x="325" y="310" text-anchor="start">5. CalcProof of Work</text>
  <rect class="seq-note-9" x="245" y="330" width="110" height="22" rx="2"/>
  <text class="seq-text-9" x="300" y="343" text-anchor="middle">searchfindsymbolfitDifficultyNonce</text>
  <path class="seq-arrow-9" d="M 310 370 L 450 370" marker-end="url(#seq-arrow-9)"/>
  <text class="seq-text-9" x="380" y="365" text-anchor="middle">6. BroadcastNewBlock</text>
  <rect class="seq-note-9" x="360" y="372" width="85" height="22" rx="2"/>
  <text class="seq-text-9" x="402" y="387" text-anchor="middle">containshitpackTransaction</text>
  <path class="seq-arrow-9" d="M 450 415 L 450 445" marker-end="url(#seq-arrow-9)"/>
  <text class="seq-text-9" x="465" y="430" text-anchor="start">7. VerifymergeacceptBlock</text>
  <rect class="seq-note-9" x="465" y="440" width="110" height="22" rx="2"/>
  <text class="seq-text-9" x="517" y="453" text-anchor="middle">checkPoW、Transactionvalidnature</text>
  <path class="seq-arrow-9" d="M 450 500 L 35 500" marker-end="url(#seq-arrow-9)"/>
  <text class="seq-text-9" x="242" y="497" text-anchor="middle">8. TransactionConfirm</text>
  <rect class="seq-note-9" x="145" y="502" width="180" height="32" rx="2"/>
  <text class="seq-text-9" x="235" y="514" text-anchor="middle" font-size="9px">perNewBlock=1timesConfirm</text>
  <text class="seq-text-9" x="235" y="526" text-anchor="middle" font-size="9px">suggestsuggestetc.treat6BlockConfirm（约1Smallhour）</text>
</svg>
</div>

<div style="background: rgba(52, 81, 178, 0.06); padding: 1.5em; border-radius: 4px; margin: 2em 0;">
<svg class="svg-1-9" viewBox="0 0 550 200" xmlns="http://www.w3.org/2000/svg" style="width: 100%; max-width: 650px; display: block; margin: 0 auto;">
<defs>
<style>
      .svg-1-9 .hf-text-10 { font-family: arial, sans-serif; font-size: 9px; fill: #1f2937; }
      .svg-1-9 .hf-text-dark-10 { font-family: arial, sans-serif; font-size: 9px; fill: #222; }
      .svg-1-9 .hf-box1-10 { fill: rgba(52, 81, 178, 0.10); stroke: #ccc; stroke-width: 1; }
      .svg-1-9 .hf-box2-10 { fill: #4c9be8; stroke: #ccc; stroke-width: 1; }
      .svg-1-9 .hf-box3-10 { fill: rgba(245, 194, 66, 0.50); stroke: #333; stroke-width: 1; }
      .svg-1-9 .hf-box4-10 { fill: rgba(52, 81, 178, 0.10); stroke: #4c9be8; stroke-width: 1; }
      .svg-1-9 .hf-arrow-10 { fill: none; stroke: #4c9be8; stroke-width: 1; }
    </style>
    <marker id="hf-arrow-10" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
      <path d="M 0 0 L 6 3 L 0 6 z" fill="#4c9be8"/>
    </marker>
  </defs>
  <rect class="hf-box1-10" x="10" y="10" width="80" height="30" rx="2"/>
  <text class="hf-text-dark-10" x="50" y="20" text-anchor="middle">Input</text>
  <text class="hf-text-dark-10" x="50" y="32" text-anchor="middle">Any LengthData</text>
  <path class="hf-arrow-10" d="M 90 25 L 140 25" marker-end="url(#hf-arrow-10)"/>
  <rect class="hf-box2-10" x="140" y="10" width="80" height="30" rx="2"/>
  <text class="hf-text-10" x="180" y="20" text-anchor="middle">HashFunction</text>
  <text class="hf-text-10" x="180" y="32" text-anchor="middle">SHA-256</text>
  <path class="hf-arrow-10" d="M 220 25 L 270 25" marker-end="url(#hf-arrow-10)"/>
  <rect class="hf-box3-10" x="270" y="10" width="90" height="30" rx="2"/>
  <text class="hf-text-dark-10" x="315" y="18" text-anchor="middle">Output</text>
  <text class="hf-text-dark-10" x="315" y="27" text-anchor="middle">Fixed LengthHash</text>
  <text class="hf-text-dark-10" x="315" y="36" text-anchor="middle">256 bits</text>
  <rect class="hf-box4-10" x="10" y="70" width="80" height="25" rx="2"/>
  <text class="hf-text-10" x="50" y="78" text-anchor="middle">feature1:</text>
  <text class="hf-text-10" x="50" y="88" text-anchor="middle">Deterministic</text>
  <path class="hf-arrow-10" d="M 90 82 L 140 82" marker-end="url(#hf-arrow-10)"/>
  <rect class="hf-box1-10" x="140" y="70" width="120" height="25" rx="2"/>
  <text class="hf-text-dark-10" x="200" y="85" text-anchor="middle">sameInput→sameOutput</text>
  <rect class="hf-box4-10" x="10" y="105" width="80" height="25" rx="2"/>
  <text class="hf-text-10" x="50" y="113" text-anchor="middle">feature2:</text>
  <text class="hf-text-10" x="50" y="123" text-anchor="middle">oddtowardnature</text>
  <path class="hf-arrow-10" d="M 90 117 L 140 117" marker-end="url(#hf-arrow-10)"/>
  <rect class="hf-box1-10" x="140" y="105" width="130" height="25" rx="2"/>
  <text class="hf-text-dark-10" x="205" y="120" text-anchor="middle">NonelawfromHashopposerecommendInput</text>
  <rect class="hf-box4-10" x="10" y="140" width="80" height="25" rx="2"/>
  <text class="hf-text-10" x="50" y="148" text-anchor="middle">feature3:</text>
  <text class="hf-text-10" x="50" y="158" text-anchor="middle">Avalanche</text>
  <path class="hf-arrow-10" d="M 90 152 L 140 152" marker-end="url(#hf-arrow-10)"/>
  <rect class="hf-box1-10" x="140" y="140" width="150" height="25" rx="2"/>
  <text class="hf-text-dark-10" x="215" y="155" text-anchor="middle">微Smallchangechange→fullydifferentHash</text>
  <rect class="hf-box4-10" x="300" y="70" width="80" height="25" rx="2"/>
  <text class="hf-text-10" x="340" y="78" text-anchor="middle">feature4:</text>
  <text class="hf-text-10" x="340" y="88" text-anchor="middle">Collision-Resistant</text>
  <path class="hf-arrow-10" d="M 380 82 L 400 82" marker-end="url(#hf-arrow-10)"/>
  <rect class="hf-box1-10" x="400" y="60" width="140" height="45" rx="2"/>
  <text class="hf-text-dark-10" x="470" y="78" text-anchor="middle">how many乎nocancanfindto两</text>
  <text class="hf-text-dark-10" x="470" y="95" text-anchor="middle">producelifesameHashInput</text>
</svg>
</div>

<div style="background: rgba(52, 81, 178, 0.06); padding: 1.5em; border-radius: 4px; margin: 2em 0;">
<svg class="svg-1-11" viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg" style="width: 100%; max-width: 500px; display: block; margin: 0 auto;">
<defs>
<style>
      .svg-1-11 .cg-text-12 { font-family: arial, sans-serif; font-size: 9px; fill: #1f2937; }
      .svg-1-11 .cg-text-dark-12 { font-family: arial, sans-serif; font-size: 9px; fill: #222; }
      .svg-1-11 .cg-title-12 { font-family: arial, sans-serif; font-size: 11px; fill: #1f2937; font-weight: bold; }
      .svg-1-11 .cg-node-12 { fill: #4c9be8; stroke: #ccc; stroke-width: 1; }
      .svg-1-11 .cg-user-12 { fill: rgba(52, 81, 178, 0.10); stroke: #ccc; stroke-width: 1; }
      .svg-1-11 .cg-line-12 { fill: none; stroke: #4c9be8; stroke-width: 1; }
    </style>
    <marker id="cg-arrow-12" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
      <path d="M 0 0 L 6 3 L 0 6 z" fill="#4c9be8"/>
    </marker>
  </defs>
  <text class="cg-title-12" x="300" y="20" text-anchor="middle">ConsortiumGovernancestructure</text>
  <circle class="cg-node-12" cx="220" cy="80" r="35"/>
  <text class="cg-text-12" x="220" y="77" text-anchor="middle">EnterpriseA</text>
  <text class="cg-text-12" x="220" y="87" text-anchor="middle">Node</text>
  <circle class="cg-node-12" cx="380" cy="80" r="35"/>
  <text class="cg-text-12" x="380" y="77" text-anchor="middle">EnterpriseB</text>
  <text class="cg-text-12" x="380" y="87" text-anchor="middle">Node</text>
  <circle class="cg-node-12" cx="220" cy="180" r="35"/>
  <text class="cg-text-12" x="220" y="177" text-anchor="middle">EnterpriseC</text>
  <text class="cg-text-12" x="220" y="187" text-anchor="middle">Node</text>
  <circle class="cg-node-12" cx="380" cy="180" r="35"/>
  <text class="cg-text-12" x="380" y="177" text-anchor="middle">EnterpriseD</text>
  <text class="cg-text-12" x="380" y="187" text-anchor="middle">Node</text>
  <line class="cg-line-12" x1="255" y1="80" x2="345" y2="80"/>
  <line class="cg-line-12" x1="220" y1="115" x2="220" y2="145"/>
  <line class="cg-line-12" x1="255" y1="180" x2="345" y2="180"/>
  <line class="cg-line-12" x1="380" y1="115" x2="380" y2="145"/>
  <line class="cg-line-12" x1="245" y1="100" x2="355" y2="160"/>
  <line class="cg-line-12" x1="245" y1="160" x2="355" y2="100"/>
  <rect class="cg-user-12" x="60" y="65" width="80" height="30" rx="2"/>
  <text class="cg-text-dark-12" x="100" y="75" text-anchor="middle">readtakePermission</text>
  <text class="cg-text-dark-12" x="100" y="87" text-anchor="middle">User</text>
  <path class="cg-line-12" d="M 184 80 L 140 80" marker-end="url(#cg-arrow-12)"/>
  <rect class="cg-user-12" x="470" y="65" width="80" height="30" rx="2"/>
  <text class="cg-text-dark-12" x="510" y="75" text-anchor="middle">readtakePermission</text>
  <text class="cg-text-dark-12" x="510" y="87" text-anchor="middle">User</text>
  <path class="cg-line-12" d="M 415 80 L 470 80" marker-end="url(#cg-arrow-12)"/>
</svg>
</div>

<div style="background: rgba(52, 81, 178, 0.06); padding: 1.5em; border-radius: 4px; margin: 2em 0;">
<svg class="svg-1-12" viewBox="0 0 450 200" xmlns="http://www.w3.org/2000/svg" style="width: 100%; max-width: 550px; display: block; margin: 0 auto;">
<defs>
<style>
      .svg-1-12 .ha-text-13 { font-family: arial, sans-serif; font-size: 9px; fill: #1f2937; }
      .svg-1-12 .ha-text-dark-13 { font-family: arial, sans-serif; font-size: 9px; fill: #222; }
      .svg-1-12 .ha-title-13 { font-family: arial, sans-serif; font-size: 11px; fill: #1f2937; font-weight: bold; }
      .svg-1-12 .ha-pri-13 { fill: rgba(220, 53, 69, 0.10); stroke: #ccc; stroke-width: 1; }
      .svg-1-12 .ha-pub-13 { fill: rgba(52, 81, 178, 0.10); stroke: #ccc; stroke-width: 1; }
      .svg-1-12 .ha-data-13 { fill: rgba(223, 105, 25, 0.08); stroke: #ccc; stroke-width: 1; }
      .svg-1-12 .ha-line-13 { fill: none; stroke: #4c9be8; stroke-width: 1; }
    </style>
    <marker id="ha-arrow-13" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
      <path d="M 0 0 L 6 3 L 0 6 z" fill="#4c9be8"/>
    </marker>
  </defs>
  <text class="ha-title-13" x="225" y="20" text-anchor="middle">Hybridarchitecture</text>
  <rect class="ha-pri-13" x="150" y="50" width="100" height="35" rx="2"/>
  <text class="ha-text-dark-13" x="200" y="63" text-anchor="middle">Privatelayer</text>
  <text class="ha-text-dark-13" x="200" y="75" text-anchor="middle">Private Layer</text>
  <rect class="ha-pub-13" x="150" y="130" width="100" height="35" rx="2"/>
  <text class="ha-text-dark-13" x="200" y="143" text-anchor="middle">publiclayer</text>
  <text class="ha-text-dark-13" x="200" y="155" text-anchor="middle">Public Layer</text>
  <path class="ha-line-13" d="M 200 85 L 200 130" marker-end="url(#ha-arrow-13)"/>
  <text class="ha-text-13" x="215" y="110" text-anchor="start">decideexpect锚decide</text>
  <rect class="ha-data-13" x="10" y="40" width="70" height="25" rx="2"/>
  <text class="ha-text-dark-13" x="45" y="56" text-anchor="middle">sensitiveData</text>
  <path class="ha-line-13" d="M 80 52 L 150 67" marker-end="url(#ha-arrow-13)"/>
  <rect class="ha-data-13" x="10" y="140" width="70" height="25" rx="2"/>
  <text class="ha-text-dark-13" x="45" y="156" text-anchor="middle">PublicData</text>
  <path class="ha-line-13" d="M 80 152 L 150 147" marker-end="url(#ha-arrow-13)"/>
  <rect class="ha-data-13" x="290" y="40" width="70" height="25" rx="2"/>
  <text class="ha-text-dark-13" x="325" y="56" text-anchor="middle">insideVerify</text>
  <path class="ha-line-13" d="M 290 52 L 250 67" marker-end="url(#ha-arrow-13)"/>
  <rect class="ha-data-13" x="290" y="140" width="70" height="25" rx="2"/>
  <text class="ha-text-dark-13" x="325" y="156" text-anchor="middle">PublicVerify</text>
  <path class="ha-line-13" d="M 290 152 L 250 147" marker-end="url(#ha-arrow-13)"/>
</svg>
</div>

<div style="background: rgba(52, 81, 178, 0.06); padding: 1.5em; border-radius: 4px; margin: 2em 0;">
<svg class="svg-1-13" viewBox="0 0 520 200" xmlns="http://www.w3.org/2000/svg" style="width: 100%; max-width: 620px; display: block; margin: 0 auto;">
<defs>
<style>
      .svg-1-13 .db-text-14 { font-family: arial, sans-serif; font-size: 9px; fill: #1f2937; }
      .svg-1-13 .db-text-dark-14 { font-family: arial, sans-serif; font-size: 9px; fill: #222; }
      .svg-1-13 .db-title-14 { font-family: arial, sans-serif; font-size: 11px; fill: #1f2937; font-weight: bold; }
      .svg-1-13 .db-center-14 { fill: rgba(220, 53, 69, 0.25); stroke: #ccc; stroke-width: 1; }
      .svg-1-13 .db-user-14 { fill: rgba(223, 105, 25, 0.08); stroke: #ccc; stroke-width: 1; }
      .svg-1-13 .db-admin-14 { fill: rgba(220, 53, 69, 0.10); stroke: #ccc; stroke-width: 1; }
      .svg-1-13 .db-node-14 { fill: rgba(52, 81, 178, 0.10); stroke: #ccc; stroke-width: 1; }
      .svg-1-13 .db-line-14 { fill: none; stroke: #4c9be8; stroke-width: 1; }
      .svg-1-13 .db-dash-14 { fill: none; stroke: rgba(220, 53, 69, 0.25); stroke-width: 1; stroke-dasharray: 3,2; }
    </style>
</defs>
  <text class="db-title-14" x="100" y="15" text-anchor="middle">tradDatalib</text>
  <rect class="db-center-14" x="60" y="90" width="80" height="30" rx="2"/>
  <text class="db-text-14" x="100" y="100" text-anchor="middle">Mediumcenter</text>
  <text class="db-text-14" x="100" y="112" text-anchor="middle">Datalib</text>
  <rect class="db-user-14" x="10" y="35" width="50" height="20" rx="2"/>
  <text class="db-text-dark-14" x="35" y="48" text-anchor="middle">User1</text>
  <line class="db-line-14" x1="40" y1="55" x2="80" y2="90"/>
  <rect class="db-user-14" x="75" y="35" width="50" height="20" rx="2"/>
  <text class="db-text-dark-14" x="100" y="48" text-anchor="middle">User2</text>
  <line class="db-line-14" x1="100" y1="55" x2="100" y2="90"/>
  <rect class="db-user-14" x="140" y="35" width="50" height="20" rx="2"/>
  <text class="db-text-dark-14" x="165" y="48" text-anchor="middle">User3</text>
  <line class="db-line-14" x1="160" y1="55" x2="120" y2="90"/>
  <rect class="db-admin-14" x="55" y="150" width="90" height="20" rx="2"/>
  <text class="db-text-dark-14" x="100" y="163" text-anchor="middle">admin</text>
  <path class="db-dash-14" d="M 100 150 L 100 120"/>
  <text class="db-text-14" x="110" y="137" text-anchor="start">control</text>
  <text class="db-title-14" x="360" y="15" text-anchor="middle">Blockchain</text>
  <circle class="db-node-14" cx="280" cy="70" r="28"/>
  <text class="db-text-dark-14" x="280" y="67" text-anchor="middle">Node1</text>
  <text class="db-text-dark-14" x="280" y="77" text-anchor="middle">fullLedger</text>
  <circle class="db-node-14" cx="440" cy="70" r="28"/>
  <text class="db-text-dark-14" x="440" y="67" text-anchor="middle">Node2</text>
  <text class="db-text-dark-14" x="440" y="77" text-anchor="middle">fullLedger</text>
  <circle class="db-node-14" cx="280" cy="160" r="28"/>
  <text class="db-text-dark-14" x="280" y="157" text-anchor="middle">Node3</text>
  <text class="db-text-dark-14" x="280" y="167" text-anchor="middle">fullLedger</text>
  <circle class="db-node-14" cx="440" cy="160" r="28"/>
  <text class="db-text-dark-14" x="440" y="157" text-anchor="middle">Node4</text>
  <text class="db-text-dark-14" x="440" y="167" text-anchor="middle">fullLedger</text>
  <line class="db-line-14" x1="308" y1="70" x2="412" y2="70"/>
  <line class="db-line-14" x1="280" y1="98" x2="280" y2="132"/>
  <line class="db-line-14" x1="308" y1="160" x2="412" y2="160"/>
  <line class="db-line-14" x1="440" y1="98" x2="440" y2="132"/>
  <line class="db-line-14" x1="298" y1="85" x2="422" y2="145"/>
  <line class="db-line-14" x1="298" y1="145" x2="422" y2="85"/>
</svg>
</div>

<div style="background: rgba(52, 81, 178, 0.06); padding: 1.5em; border-radius: 4px; margin: 2em 0;">
<svg class="svg-1-14" viewBox="0 0 450 200" xmlns="http://www.w3.org/2000/svg" style="width: 100%; max-width: 550px; display: block; margin: 0 auto;">
<defs>
<style>
      .svg-1-14 .tc-text-15 { font-family: arial, sans-serif; font-size: 9px; fill: #1f2937; }
      .svg-1-14 .tc-actor-15 { fill: #4c9be8; stroke: #ccc; stroke-width: 1; }
      .svg-1-14 .tc-line-15 { fill: none; stroke: #4c9be8; stroke-width: 1; }
      .svg-1-14 .tc-note-15 { fill: rgba(52, 81, 178, 0.10); stroke: #4c9be8; stroke-width: 1; }
    </style>
    <marker id="tc-arrow-15" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
      <path d="M 0 0 L 6 3 L 0 6 z" fill="#4c9be8"/>
    </marker>
  </defs>
  <rect class="tc-actor-15" x="10" y="10" width="50" height="25" rx="2"/>
  <text class="tc-text-15" x="35" y="26" text-anchor="middle">shellplace</text>
  <rect class="tc-actor-15" x="200" y="10" width="60" height="25" rx="2"/>
  <text class="tc-text-15" x="230" y="26" text-anchor="middle">maleproofplace</text>
  <rect class="tc-actor-15" x="390" y="10" width="50" height="25" rx="2"/>
  <text class="tc-text-15" x="415" y="26" text-anchor="middle">乙place</text>
  <line class="tc-line-15" x1="35" y1="35" x2="35" y2="180" stroke-dasharray="2,2"/>
  <line class="tc-line-15" x1="230" y1="35" x2="230" y2="180" stroke-dasharray="2,2"/>
  <line class="tc-line-15" x1="415" y1="35" x2="415" y2="180" stroke-dasharray="2,2"/>
  <path class="tc-line-15" d="M 35 50 L 230 50" marker-end="url(#tc-arrow-15)"/>
  <text class="tc-text-15" x="132" y="47" text-anchor="middle">Commitfile</text>
  <path class="tc-line-15" d="M 415 65 L 230 65" marker-end="url(#tc-arrow-15)"/>
  <text class="tc-text-15" x="322" y="62" text-anchor="middle">Commitfile</text>
  <path class="tc-line-15" d="M 230 80 L 230 100" marker-end="url(#tc-arrow-15)"/>
  <text class="tc-text-15" x="245" y="90" text-anchor="start">Verify、coverarticle</text>
  <path class="tc-line-15" d="M 230 110 L 35 110" marker-end="url(#tc-arrow-15)"/>
  <text class="tc-text-15" x="132" y="107" text-anchor="middle">returnmaleCertificate</text>
  <path class="tc-line-15" d="M 230 125 L 415 125" marker-end="url(#tc-arrow-15)"/>
  <text class="tc-text-15" x="322" y="122" text-anchor="middle">returnmaleCertificate</text>
  <rect class="tc-note-15" x="160" y="145" width="140" height="40" rx="2"/>
  <text class="tc-text-15" x="230" y="158" text-anchor="middle">Trust Requiredmaleproofplace</text>
  <text class="tc-text-15" x="230" y="169" text-anchor="middle">single pointFaultyAt Risk</text>
  <text class="tc-text-15" x="230" y="180" text-anchor="middle">cancanExistsrottenlose</text>
</svg>
</div>

<div style="background: rgba(52, 81, 178, 0.06); padding: 1.5em; border-radius: 4px; margin: 2em 0;">
<svg class="svg-1-15" viewBox="0 0 450 200" xmlns="http://www.w3.org/2000/svg" style="width: 100%; max-width: 550px; display: block; margin: 0 auto;">
<defs>
<style>
      .svg-1-15 .bc-text-16 { font-family: arial, sans-serif; font-size: 9px; fill: #1f2937; }
      .svg-1-15 .bc-actor-16 { fill: #4c9be8; stroke: #ccc; stroke-width: 1; }
      .svg-1-15 .bc-line-16 { fill: none; stroke: #4c9be8; stroke-width: 1; }
      .svg-1-15 .bc-note-16 { fill: rgba(52, 81, 178, 0.10); stroke: #4c9be8; stroke-width: 1; }
    </style>
    <marker id="bc-arrow-16" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
      <path d="M 0 0 L 6 3 L 0 6 z" fill="#4c9be8"/>
    </marker>
  </defs>
  <rect class="bc-actor-16" x="10" y="10" width="50" height="25" rx="2"/>
  <text class="bc-text-16" x="35" y="26" text-anchor="middle">shellplace</text>
  <rect class="bc-actor-16" x="185" y="10" width="90" height="25" rx="2"/>
  <text class="bc-text-16" x="230" y="26" text-anchor="middle">BlockchainNetwork</text>
  <rect class="bc-actor-16" x="390" y="10" width="50" height="25" rx="2"/>
  <text class="bc-text-16" x="415" y="26" text-anchor="middle">乙place</text>
  <line class="bc-line-16" x1="35" y1="35" x2="35" y2="180" stroke-dasharray="2,2"/>
  <line class="bc-line-16" x1="230" y1="35" x2="230" y2="180" stroke-dasharray="2,2"/>
  <line class="bc-line-16" x1="415" y1="35" x2="415" y2="180" stroke-dasharray="2,2"/>
  <path class="bc-line-16" d="M 35 50 L 230 50" marker-end="url(#bc-arrow-16)"/>
  <text class="bc-text-16" x="132" y="47" text-anchor="middle">CommitfileHash</text>
  <path class="bc-line-16" d="M 415 65 L 230 65" marker-end="url(#bc-arrow-16)"/>
  <text class="bc-text-16" x="322" y="62" text-anchor="middle">CommitfileHash</text>
  <path class="bc-line-16" d="M 230 80 L 230 100" marker-end="url(#bc-arrow-16)"/>
  <text class="bc-text-16" x="245" y="90" text-anchor="start">wholenetconsensusConfirm</text>
  <path class="bc-line-16" d="M 230 110 L 35 110" marker-end="url(#bc-arrow-16)"/>
  <text class="bc-text-16" x="132" y="107" text-anchor="middle">getTimestampProof</text>
  <path class="bc-line-16" d="M 230 125 L 415 125" marker-end="url(#bc-arrow-16)"/>
  <text class="bc-text-16" x="322" y="122" text-anchor="middle">getTimestampProof</text>
  <rect class="bc-note-16" x="160" y="145" width="140" height="40" rx="2"/>
  <text class="bc-text-16" x="230" y="158" text-anchor="middle">Noneneedtrustsinglerealbody</text>
  <text class="bc-text-16" x="230" y="169" text-anchor="middle">permanentimmutable</text>
  <text class="bc-text-16" x="230" y="180" text-anchor="middle">wholenetVerify</text>
</svg>
</div>

<div style="background: rgba(52, 81, 178, 0.06); padding: 1.5em; border-radius: 4px; margin: 2em 0;">
<svg class="svg-1-16" viewBox="0 0 650 60" xmlns="http://www.w3.org/2000/svg" style="width: 100%; max-width: 750px; display: block; margin: 0 auto;">
<defs>
<style>
      .svg-1-16 .sc-text-17 { font-family: arial, sans-serif; font-size: 9px; fill: #1f2937; }
      .svg-1-16 .sc-text-dark-17 { font-family: arial, sans-serif; font-size: 9px; fill: #222; }
      .svg-1-16 .sc-box1-17 { fill: rgba(52, 81, 178, 0.10); stroke: #ccc; stroke-width: 1; }
      .svg-1-16 .sc-box2-17 { fill: rgba(223, 105, 25, 0.08); stroke: #ccc; stroke-width: 1; }
      .svg-1-16 .sc-box3-17 { fill: rgba(245, 194, 66, 0.50); stroke: #333; stroke-width: 1; }
      .svg-1-16 .sc-arrow-17 { fill: none; stroke: #4c9be8; stroke-width: 1; }
    </style>
    <marker id="sc-arrow-17" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
      <path d="M 0 0 L 6 3 L 0 6 z" fill="#4c9be8"/>
    </marker>
  </defs>
  <rect class="sc-box1-17" x="10" y="10" width="100" height="40" rx="2"/>
  <text class="sc-text-dark-17" x="60" y="23" text-anchor="middle">农site/prodbiz</text>
  <text class="sc-text-dark-17" x="60" y="33" text-anchor="middle">recordtype植/</text>
  <text class="sc-text-dark-17" x="60" y="43" text-anchor="middle">prodinfo</text>
  <path class="sc-arrow-17" d="M 110 30 L 140 30" marker-end="url(#sc-arrow-17)"/>
  <rect class="sc-box2-17" x="140" y="10" width="90" height="40" rx="2"/>
  <text class="sc-text-dark-17" x="185" y="23" text-anchor="middle">addfactory</text>
  <text class="sc-text-dark-17" x="185" y="33" text-anchor="middle">recordaddwork</text>
  <text class="sc-text-dark-17" x="185" y="43" text-anchor="middle">info</text>
  <path class="sc-arrow-17" d="M 230 30 L 260 30" marker-end="url(#sc-arrow-17)"/>
  <rect class="sc-box2-17" x="260" y="10" width="90" height="40" rx="2"/>
  <text class="sc-text-dark-17" x="305" y="23" text-anchor="middle">thingflowmale司</text>
  <text class="sc-text-dark-17" x="305" y="33" text-anchor="middle">recordtransportlose</text>
  <text class="sc-text-dark-17" x="305" y="43" text-anchor="middle">info</text>
  <path class="sc-arrow-17" d="M 350 30 L 380 30" marker-end="url(#sc-arrow-17)"/>
  <rect class="sc-box2-17" x="380" y="10" width="90" height="40" rx="2"/>
  <text class="sc-text-dark-17" x="425" y="23" text-anchor="middle">zero售biz</text>
  <text class="sc-text-dark-17" x="425" y="33" text-anchor="middle">Upshelf</text>
  <text class="sc-text-dark-17" x="425" y="43" text-anchor="middle">销售</text>
  <path class="sc-arrow-17" d="M 470 30 L 500 30" marker-end="url(#sc-arrow-17)"/>
  <rect class="sc-box3-17" x="500" y="10" width="140" height="40" rx="2"/>
  <text class="sc-text-dark-17" x="570" y="23" text-anchor="middle">consumer</text>
  <text class="sc-text-dark-17" x="570" y="33" text-anchor="middle">扫codechecksee</text>
  <text class="sc-text-dark-17" x="570" y="43" text-anchor="middle">fullhistory</text>
</svg>
</div>

<div style="background: rgba(52, 81, 178, 0.06); padding: 1.5em; border-radius: 4px; margin: 2em 0;">
<svg class="svg-1-18" viewBox="0 0 600 350" xmlns="http://www.w3.org/2000/svg" style="width: 100%; max-width: 700px; display: block; margin: 0 auto;">
<defs>
<style>
      .svg-1-18 .mm-text-19 { font-family: arial, sans-serif; font-size: 9px; fill: #1f2937; }
      .svg-1-18 .mm-text-dark-19 { font-family: arial, sans-serif; font-size: 9px; fill: #222; }
      .svg-1-18 .mm-center-19 { fill: rgba(245, 194, 66, 0.50); stroke: #333; stroke-width: 1; }
      .svg-1-18 .mm-main-19 { fill: #4c9be8; stroke: #ccc; stroke-width: 1; }
      .svg-1-18 .mm-sub-19 { fill: rgba(52, 81, 178, 0.10); stroke: #4c9be8; stroke-width: 1; }
      .svg-1-18 .mm-line-19 { fill: none; stroke: #4c9be8; stroke-width: 1; }
    </style>
</defs>
  <circle class="mm-center-19" cx="300" cy="175" r="40"/>
  <text class="mm-text-dark-19" x="300" y="170" text-anchor="middle">Blockchain</text>
  <text class="mm-text-dark-19" x="300" y="182" text-anchor="middle">coresensesense</text>
  <line class="mm-line-19" x1="340" y1="175" x2="400" y2="60"/>
  <rect class="mm-main-19" x="400" y="40" width="60" height="25" rx="2"/>
  <text class="mm-text-19" x="430" y="56" text-anchor="middle">decidemeaning</text>
  <rect class="mm-sub-19" x="470" y="15" width="75" height="18" rx="2"/>
  <text class="mm-text-19" x="507" y="27" text-anchor="middle">DLT</text>
  <rect class="mm-sub-19" x="470" y="38" width="65" height="18" rx="2"/>
  <text class="mm-text-19" x="502" y="50" text-anchor="middle">chaintypestructure</text>
  <rect class="mm-sub-19" x="470" y="61" width="75" height="18" rx="2"/>
  <text class="mm-text-19" x="507" y="73" text-anchor="middle">Cryptographyprotect</text>
  <line class="mm-line-19" x1="340" y1="175" x2="420" y2="115"/>
  <rect class="mm-main-19" x="420" y="100" width="70" height="25" rx="2"/>
  <text class="mm-text-19" x="455" y="116" text-anchor="middle">corefeature</text>
  <rect class="mm-sub-19" x="500" y="85" width="65" height="18" rx="2"/>
  <text class="mm-text-19" x="532" y="97" text-anchor="middle">Decentralization</text>
  <rect class="mm-sub-19" x="500" y="107" width="55" height="18" rx="2"/>
  <text class="mm-text-19" x="527" y="119" text-anchor="middle">transparentnature</text>
  <rect class="mm-sub-19" x="500" y="129" width="70" height="18" rx="2"/>
  <text class="mm-text-19" x="535" y="141" text-anchor="middle">immutable</text>
  <rect class="mm-sub-19" x="500" y="151" width="55" height="18" rx="2"/>
  <text class="mm-text-19" x="527" y="163" text-anchor="middle">Security</text>
  <line class="mm-line-19" x1="300" y1="215" x2="300" y2="270"/>
  <rect class="mm-main-19" x="260" y="270" width="80" height="25" rx="2"/>
  <text class="mm-text-19" x="300" y="286" text-anchor="middle">workMechanism</text>
  <rect class="mm-sub-19" x="180" y="305" width="65" height="18" rx="2"/>
  <text class="mm-text-19" x="212" y="317" text-anchor="middle">Block Structure</text>
  <rect class="mm-sub-19" x="250" y="305" width="65" height="18" rx="2"/>
  <text class="mm-text-19" x="282" y="317" text-anchor="middle">Hashchainreceive</text>
  <rect class="mm-sub-19" x="320" y="305" width="65" height="18" rx="2"/>
  <text class="mm-text-19" x="352" y="317" text-anchor="middle">consensusmechanism</text>
  <rect class="mm-sub-19" x="390" y="305" width="65" height="18" rx="2"/>
  <text class="mm-text-19" x="422" y="317" text-anchor="middle">Merkletree</text>
  <line class="mm-line-19" x1="260" y1="175" x2="190" y2="115"/>
  <rect class="mm-main-19" x="140" y="100" width="80" height="25" rx="2"/>
  <text class="mm-text-19" x="180" y="116" text-anchor="middle">Blockchain Type</text>
  <rect class="mm-sub-19" x="15" y="85" width="55" height="18" rx="2"/>
  <text class="mm-text-19" x="42" y="97" text-anchor="middle">Public</text>
  <rect class="mm-sub-19" x="15" y="107" width="55" height="18" rx="2"/>
  <text class="mm-text-19" x="42" y="119" text-anchor="middle">Private</text>
  <rect class="mm-sub-19" x="75" y="85" width="55" height="18" rx="2"/>
  <text class="mm-text-19" x="102" y="97" text-anchor="middle">Consortium</text>
  <rect class="mm-sub-19" x="75" y="107" width="55" height="18" rx="2"/>
  <text class="mm-text-19" x="102" y="119" text-anchor="middle">Hybrid</text>
  <line class="mm-line-19" x1="260" y1="175" x2="150" y2="60"/>
  <rect class="mm-main-19" x="80" y="40" width="80" height="25" rx="2"/>
  <text class="mm-text-19" x="120" y="56" text-anchor="middle">Use Cases</text>
  <rect class="mm-sub-19" x="10" y="15" width="65" height="18" rx="2"/>
  <text class="mm-text-19" x="42" y="27" text-anchor="middle">digitalcurrencyCoin</text>
  <rect class="mm-sub-19" x="10" y="38" width="55" height="18" rx="2"/>
  <text class="mm-text-19" x="37" y="50" text-anchor="middle">supplychain</text>
  <rect class="mm-sub-19" x="10" y="61" width="45" height="18" rx="2"/>
  <text class="mm-text-19" x="32" y="73" text-anchor="middle">DeFi</text>
  <rect class="mm-sub-19" x="75" y="15" width="65" height="18" rx="2"/>
  <text class="mm-text-19" x="107" y="27" text-anchor="middle">Digital ID</text>
</svg>
</div>

## Chapter Summary

Blockchain technology provides us with a completely new way of storing and transacting data through core features such as decentralization, transparency, and immutability. Understanding the basic principles of blockchain is the crucial first step in learning about cryptocurrency and Web3 technologies.

In the next chapter, we will explore the world of cryptocurrency, understanding Bitcoin, Ethereum, and how to acquire and use cryptocurrencies.

---

**Next Chapter:** [Chapter 2: Introduction to Cryptocurrency](/en/chapter-2)

<div class="ccbus-teacher-credits">
  <div class="ccbus-teacher-credits-avatar">
    <img src="../public/images/avatars/heroes/captain-ccbus.png" alt="Captain CCBus" />
  </div>
  <div class="ccbus-teacher-credits-body">

    Taught by: <strong>Captain CCBus</strong> — The "professor + tour guide + friendly bus" of blockchain<br />
    <span style="font-size: 0.85em; color: var(--vp-c-text-3);">📚 The next chapter [Chapter 2: Cryptography Fundamentals] will be taught by another CCBus guide.</span>
  </div>
</div>
