---
title: "Chapter 1: Blockchain Fundamentals"
---


# Chapter 1: Blockchain Fundamentals

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

## Chapter Summary

Blockchain technology provides us with a completely new way of storing and transacting data through core features such as decentralization, transparency, and immutability. Understanding the basic principles of blockchain is the crucial first step in learning about cryptocurrency and Web3 technologies.

In the next chapter, we will explore the world of cryptocurrency, understanding Bitcoin, Ethereum, and how to acquire and use cryptocurrencies.

---

**Next Chapter:** [Chapter 2: Introduction to Cryptocurrency](/en/chapter-2)
