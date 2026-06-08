---
title: "Chapter 2: Cryptography Fundamentals"
---

<div class="ccbus-hero">
  <div class="ccbus-hero-avatar">
    <img src="../public/images/avatars/heroes/satoshi-driver.png" alt="Satoshi Driver" />
  </div>
  <div class="ccbus-hero-content">
    <h1>Chapter 2: Cryptography Fundamentals</h1>
    <div class="ccbus-teacher-label">🎙️ 本章讲师:<strong>Satoshi Driver</strong> · The "veteran driver" of cryptography — knows the route</div>
  </div>
</div>

<div class="chapter-intro">

Cryptography is the cornerstone of blockchain technology. This chapter delves deep into the core cryptographic concepts that underpin blockchain security, including hash functions, public key cryptography, digital signatures, and other key technologies.

**Chapter Objectives:**
- Understand the core role of cryptography in blockchain
- Master the characteristics and applications of hash functions
- Learn public/private key encryption mechanisms
- Understand how digital signatures work
- Explore advanced cryptographic structures like Merkle trees

</div>


## 2.0 2025-2026 Perspective: Why Reread This Chapter

The cryptography stack is one of the **most rapidly evolving areas** of blockchain technology in 2026. Classical crypto (SHA-2, ECDSA, Keccak256) remains the de facto L1 standard, but **frontier crypto has evolved from "theoretically viable" to "production-ready"**:

1. **Industrial-grade maturity of zero-knowledge proofs (ZK)**:
   - **Proof time**: Plonky2 (2022) first pushed STARK proofs to ~100ms; **Plonky3 (2024-09) + SP1 (2024)** pushed general-purpose zkVM proofs to sub-second
   - **Recursive proofs**: Plonky3 proofs can be verified by Plonky3 itself (recursion), enabling O(1) on-chain verification
   - **Post-quantum signatures**: NIST FIPS 204 (ML-DSA / Dilithium) and FIPS 205 (SLH-DSA / SPHINCS+) formally released 2024-08; major L1s began integrating PQC signatures in 2026
   - **Dedicated zkEVM**: Polygon zkEVM, zkSync Era, Linea, Scroll, Starknet zkEVM bytecode can now carry complex dApps like Uniswap, Aave, Compound

2. **BLS signature aggregation's killer use case**:
   - Ethereum Beacon Chain uses BLS12-381 to aggregate 1M validator signatures; one aggregated signature verifies an entire epoch (~6.4 minutes)
   - EigenLayer's AVS (Actively Validated Services) similarly relies on BLS aggregation; 2026 EigenLayer TVL broke $20B
   - New trend: **BLS + ZK hybrid** — solvers generate ZK proofs, signers use BLS aggregation, dramatically reducing cross-chain bridge cost

3. **MPC wallets from "institutional-only" to "retail-ready"**:
   - **Fireblocks** serves 1800+ institutions, custody $10T+ in assets
   - **Safe** via ERC-4337 + MPC gives EOAs 2-of-3 multi-sig capability
   - **Lit Protocol** combines MPC with cross-chain via PKP (Programmable Key Pairs)
   - **Privy** via Turnkey + ZeroDev enabled 200+ major dApps to integrate keyless onboarding

4. **Post-quantum (PQC) migration roadmap**:
   - 2024-2025: NIST standardization phase
   - 2025-2026: major L1s (Litecoin already testing Quantum-Resistant Sig) begin PQC integration
   - 2027-2028: Ethereum EIP roadmap may include SPHINCS+/Dilithium integration (awaiting community decision)

### 🖥️ Real-world Example: CCBus Toolset

CCBus ships a complete cryptography-tool visualization layer. Use it to experience the core concepts from this chapter hands-on:

- **Vanity Address Generator**: brute-force search for an Ethereum address matching a given prefix/suffix — essentially repeatedly keccak256-hashing private keys until one matches the criteria.
- **Batch Wallet Generation**: generate 100 EVM wallets in one shot, demonstrating the ECDSA private-key → public-key → address derivation pipeline.
- **Wallet Manager**: unified encrypted (AES-256) storage of multiple private keys.

![CCBus Vanity Address Generator](../public/images/chapters/zh/vanity-address-empty.png)

*Figure 2-1: CCBus's vanity address generator. The user enters a desired prefix/suffix, the system multithreads ECDSA + keccak256 to find a matching Ethereum address. This process perfectly illustrates the **irreversibility of asymmetric encryption** — you can never derive a private key from a target address, only brute-force forward.*

## 2.1 Introduction to Cryptography

**Cryptography** is the science of secure communication in adversarial environments. In blockchain, cryptography provides the following key functions:

### Core Goals of Cryptography

1. **Confidentiality**
   - Ensures information can only be read by authorized parties
   - Prevents unauthorized access

2. **Integrity**
   - Detects whether data has been tampered with
   - Ensures data has not been modified

3. **Authentication**
   - Verifies the identity of communicating parties
   - Confirms message origin

4. **Non-repudiation**
   - Sender cannot deny having sent a message
   - Provides evidence of actions

### Cryptographic Applications in Blockchain

<div style="background: rgba(52, 81, 178, 0.06); padding: 1.5em; border-radius: 8px; margin: 2em 0;">
<svg class="svg-2-0" viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg" style="width: 100%; max-width: 700px; display: block; margin: 0 auto;">
<defs>
<style>
      .svg-2-0 .svg-2-0 .crypto-text { font-family: arial, sans-serif; font-size: 11px; fill: #1f2937; }
      .svg-2-0 .svg-2-0 .crypto-text-dark { font-family: arial, sans-serif; font-size: 11px; fill: #222; }
      .svg-2-0 .svg-2-0 .crypto-box-main { fill: rgba(52, 81, 178, 0.10); stroke: #ccc; stroke-width: 0.5; }
      .svg-2-0 .svg-2-0 .crypto-box-sub { fill: rgba(52, 81, 178, 0.10); stroke: #4c9be8; stroke-width: 0.5; }
      .svg-2-0 .svg-2-0 .crypto-arrow { fill: none; stroke: #4c9be8; stroke-width: 0.5; }
    </style>
    <marker id="crypto-arrow-1" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
      <path d="M 0 0 L 6 3 L 0 6 z" fill="#4c9be8"/>
    </marker>
  </defs>
  <rect class="crypto-box-main" x="10" y="10" width="70" height="25" rx="2"/>
  <text class="crypto-text-dark" x="45" y="26" text-anchor="middle">Hash Function</text>
  <path class="crypto-arrow" d="M 80 22 L 130 22" marker-end="url(#crypto-arrow-1)"/>
  <rect class="crypto-box-sub" x="130" y="10" width="70" height="25" rx="2"/>
  <text class="crypto-text" x="165" y="26" text-anchor="middle">Block Linking</text>
  <path class="crypto-arrow" d="M 80 22 L 105 22 Q 115 22 115 40 L 115 58 Q 115 68 125 68 L 130 68" marker-end="url(#crypto-arrow-1)"/>
  <rect class="crypto-box-sub" x="130" y="55" width="80" height="25" rx="2"/>
  <text class="crypto-text" x="170" y="71" text-anchor="middle">Proof of Work</text>
  <path class="crypto-arrow" d="M 80 22 L 100 22 Q 115 22 115 50 Q 115 100 125 113 L 130 113" marker-end="url(#crypto-arrow-1)"/>
  <rect class="crypto-box-sub" x="130" y="100" width="70" height="25" rx="2"/>
  <text class="crypto-text" x="165" y="116" text-anchor="middle">Address Gen</text>
  <rect class="crypto-box-main" x="230" y="10" width="80" height="25" rx="2"/>
  <text class="crypto-text-dark" x="270" y="26" text-anchor="middle">Asymmetric</text>
  <path class="crypto-arrow" d="M 310 22 L 360 22" marker-end="url(#crypto-arrow-1)"/>
  <rect class="crypto-box-sub" x="360" y="10" width="70" height="25" rx="2"/>
  <text class="crypto-text" x="395" y="26" text-anchor="middle">Account System</text>
  <path class="crypto-arrow" d="M 310 22 L 335 22 Q 345 22 345 40 L 345 58 Q 345 68 355 68 L 360 68" marker-end="url(#crypto-arrow-1)"/>
  <rect class="crypto-box-sub" x="360" y="55" width="70" height="25" rx="2"/>
  <text class="crypto-text" x="395" y="71" text-anchor="middle">Tx Signing</text>
  <path class="crypto-arrow" d="M 310 22 L 330 22 Q 345 22 345 50 Q 345 100 355 113 L 360 113" marker-end="url(#crypto-arrow-1)"/>
  <rect class="crypto-box-sub" x="360" y="100" width="70" height="25" rx="2"/>
  <text class="crypto-text" x="395" y="116" text-anchor="middle">Identity</text>
  <rect class="crypto-box-main" x="10" y="145" width="70" height="25" rx="2"/>
  <text class="crypto-text-dark" x="45" y="161" text-anchor="middle">Digital Sig</text>
  <path class="crypto-arrow" d="M 80 157 L 130 157" marker-end="url(#crypto-arrow-1)"/>
  <rect class="crypto-box-sub" x="130" y="145" width="70" height="25" rx="2"/>
  <text class="crypto-text" x="165" y="161" text-anchor="middle">Tx Authorization</text>
  <path class="crypto-arrow" d="M 80 157 L 105 157 Q 115 157 115 165 L 115 173 Q 115 180 125 180 L 230 180" marker-end="url(#crypto-arrow-1)"/>
  <rect class="crypto-box-sub" x="230" y="168" width="70" height="25" rx="2"/>
  <text class="crypto-text" x="265" y="184" text-anchor="middle">MultiSig</text>
  <path class="crypto-arrow" d="M 200 157 L 360 157" marker-end="url(#crypto-arrow-1)"/>
  <rect class="crypto-box-sub" x="360" y="145" width="80" height="25" rx="2"/>
  <text class="crypto-text" x="400" y="161" text-anchor="middle">Message Auth</text>
  <rect class="crypto-box-main" x="460" y="145" width="80" height="25" rx="2"/>
  <text class="crypto-text-dark" x="500" y="161" text-anchor="middle">Merkle Tree</text>
  <path class="crypto-arrow" d="M 460 157 Q 450 157 450 165 L 450 55 L 440 55" marker-end="url(#crypto-arrow-1)"/>
  <rect class="crypto-box-sub" x="370" y="42" width="70" height="25" rx="2"/>
  <text class="crypto-text" x="405" y="58" text-anchor="middle">Data Verify</text>
  <path class="crypto-arrow" d="M 540 157 Q 560 157 560 135 L 560 90" marker-end="url(#crypto-arrow-1)"/>
  <rect class="crypto-box-sub" x="490" y="77" width="70" height="25" rx="2"/>
  <text class="crypto-text" x="525" y="93" text-anchor="middle">Light Node</text>
  <path class="crypto-arrow" d="M 540 157 Q 565 157 565 125 L 565 23" marker-end="url(#crypto-arrow-1)"/>
  <rect class="crypto-box-sub" x="490" y="10" width="75" height="25" rx="2"/>
  <text class="crypto-text" x="527" y="26" text-anchor="middle">State Proof</text>
</svg>
</div>

## 2.2 Hash Functions

### What is a Hash Function?

A **Hash Function** is a one-way function that maps input data of arbitrary length to fixed-length output.

#### Key Properties of Hash Functions

1. **Deterministic**
   - Same input always produces same output
   - Reproducible and verifiable

2. **Fast Computation**
   - Can quickly compute hash values
   - Efficient verification process

3. **One-way**
   - Cannot reverse engineer original data from hash
   - Pre-image resistance

4. **Avalanche Effect**
   - Small input changes cause massive output changes
   - Enhances security

5. **Collision Resistance**
   - Extremely difficult to find two different inputs producing same output
   - Prevents forgery attacks

### SHA-256 Algorithm

**SHA-256** (Secure Hash Algorithm 256-bit) is the primary hash algorithm used by Bitcoin.

#### SHA-256 Characteristics

- Output length: 256 bits (32 bytes)
- Typically represented as 64 hexadecimal characters
- Fast computation, high security

#### Example

```javascript
// SHA-256 hash example
const crypto = require('crypto');

function sha256(data) {
    return crypto.createHash('sha256')
        .update(data)
        .digest('hex');
}

// Example 1: Plain text
console.log(sha256('Hello, Blockchain!'));
// Output: 7f83b1657ff1fc53b92dc18148a1d65dfc2d4b1fa3d677284addd200126d9069

// Example 2: Small change leads to completely different hash
console.log(sha256('Hello, blockchain!'));  // Note lowercase b
// Output: 93a0f1d4f8e8e8c4... (completely different)
```

### Hash Applications in Blockchain

#### 1. Block Linking

<div style="background: rgba(52, 81, 178, 0.06); padding: 1.5em; border-radius: 8px; margin: 2em 0;">
<svg class="svg-2-1" viewBox="0 0 350 45" xmlns="http://www.w3.org/2000/svg" style="width: 100%; max-width: 450px; display: block; margin: 0 auto;">
<defs>
<style>
      .svg-2-1 .chain-text { font-family: arial, sans-serif; font-size: 11px; fill: #1f2937; }
      .svg-2-1 .chain-text-dark { font-family: arial, sans-serif; font-size: 11px; fill: #222; }
      .svg-2-1 .chain-box1 { fill: rgba(52, 81, 178, 0.10); stroke: #ccc; stroke-width: 0.5; }
      .svg-2-1 .chain-box2 { fill: rgba(223, 105, 25, 0.08); stroke: #ccc; stroke-width: 0.5; }
      .svg-2-1 .chain-box3 { fill: rgba(245, 194, 66, 0.30); stroke: #333; stroke-width: 0.5; }
      .svg-2-1 .chain-arrow { fill: none; stroke: #4c9be8; stroke-width: 0.5; }
    </style>
    <marker id="chain-arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
      <path d="M 0 0 L 6 3 L 0 6 z" fill="#4c9be8"/>
    </marker>
  </defs>
  <rect class="chain-box1" x="10" y="10" width="85" height="25" rx="2"/>
  <text class="chain-text-dark" x="52" y="26" text-anchor="middle">Block N-1</text>
  <path class="chain-arrow" d="M 95 22 L 130 22" marker-end="url(#chain-arrow)"/>
  <rect class="chain-box2" x="130" y="10" width="75" height="25" rx="2"/>
  <text class="chain-text-dark" x="167" y="26" text-anchor="middle">Block N</text>
  <path class="chain-arrow" d="M 205 22 L 240 22" marker-end="url(#chain-arrow)"/>
  <rect class="chain-box3" x="240" y="10" width="95" height="25" rx="2"/>
  <text class="chain-text-dark" x="287" y="26" text-anchor="middle">Block N+1</text>
</svg>
</div>

#### 2. Proof of Work (PoW)

```javascript
// Simplified PoW example
function proofOfWork(blockData, difficulty) {
    let nonce = 0;
    const target = '0'.repeat(difficulty);

    while (true) {
        const hash = sha256(blockData + nonce);

        if (hash.startsWith(target)) {
            return { nonce, hash };
        }

        nonce++;
    }
}

// Find hash starting with 4 zeros
const result = proofOfWork('Block Data', 4);
console.log(`Found: ${result.hash} with nonce ${result.nonce}`);
// Output: Found: 0000a3f2... with nonce 157392
```

#### 3. Address Generation

<div style="background: rgba(52, 81, 178, 0.06); padding: 1.5em; border-radius: 8px; margin: 2em 0;">
<svg class="svg-2-2" viewBox="0 0 480 60" xmlns="http://www.w3.org/2000/svg" style="width: 100%; max-width: 550px; display: block; margin: 0 auto;">
<defs>
<style>
      .svg-2-2 .addr-text { font-family: arial, sans-serif; font-size: 11px; fill: #1f2937; }
      .svg-2-2 .addr-text-sm { font-family: arial, sans-serif; font-size: 9px; fill: #1f2937; }
      .svg-2-2 .addr-text-dark { font-family: arial, sans-serif; font-size: 11px; fill: #222; }
      .svg-2-2 .addr-box-start { fill: rgba(52, 81, 178, 0.10); stroke: #ccc; stroke-width: 0.5; }
      .svg-2-2 .addr-box-mid { fill: rgba(223, 105, 25, 0.08); stroke: #ccc; stroke-width: 0.5; }
      .svg-2-2 .addr-box-end { fill: rgba(245, 194, 66, 0.30); stroke: #333; stroke-width: 0.5; }
      .svg-2-2 .addr-arrow { fill: none; stroke: #4c9be8; stroke-width: 0.5; }
    </style>
    <marker id="addr-arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
      <path d="M 0 0 L 6 3 L 0 6 z" fill="#4c9be8"/>
    </marker>
  </defs>
  <rect class="addr-box-start" x="10" y="18" width="50" height="25" rx="2"/>
  <text class="addr-text-dark" x="35" y="34" text-anchor="middle">Public Key</text>
  <path class="addr-arrow" d="M 60 30 L 95 30" marker-end="url(#addr-arrow)"/>
  <rect class="addr-box-mid" x="95" y="18" width="70" height="25" rx="2"/>
  <text class="addr-text-dark" x="130" y="34" text-anchor="middle">SHA-256</text>
  <path class="addr-arrow" d="M 165 30 L 200 30" marker-end="url(#addr-arrow)"/>
  <rect class="addr-box-mid" x="200" y="10" width="70" height="40" rx="2"/>
  <text class="addr-text-dark" x="235" y="27" text-anchor="middle">RIPEMD</text>
  <text class="addr-text-dark" x="235" y="40" text-anchor="middle">-160</text>
  <path class="addr-arrow" d="M 270 30 L 305 30" marker-end="url(#addr-arrow)"/>
  <rect class="addr-box-mid" x="305" y="10" width="70" height="40" rx="2"/>
  <text class="addr-text-dark" x="340" y="27" text-anchor="middle">Base58</text>
  <text class="addr-text-dark" x="340" y="40" text-anchor="middle">Check</text>
  <path class="addr-arrow" d="M 375 30 L 410 30" marker-end="url(#addr-arrow)"/>
  <rect class="addr-box-end" x="410" y="18" width="60" height="25" rx="2"/>
  <text class="addr-text-dark" x="440" y="34" text-anchor="middle">Address</text>
</svg>
</div>

### Other Important Hash Algorithms

#### RIPEMD-160

- Output: 160 bits (20 bytes)
- Use: Bitcoin address generation
- Feature: Shorter output, saves space

#### Keccak-256

- Used in: Ethereum
- Output: 256 bits
- Feature: SHA-3 variant

#### Blake2

- Used in: Some emerging blockchains
- Feature: Faster than SHA-256
- Security: Comparable to SHA-3

## 2.3 Symmetric and Asymmetric Encryption

### Symmetric Encryption

Uses the **same key** for encryption and decryption.

#### How It Works

<div style="background: rgba(52, 81, 178, 0.06); padding: 1.5em; border-radius: 8px; margin: 2em 0;">
<svg class="svg-2-3" viewBox="0 0 320 195" xmlns="http://www.w3.org/2000/svg" style="width: 100%; max-width: 400px; display: block; margin: 0 auto;">
<defs>
<style>
      .svg-2-3 .seq-text { font-family: arial, sans-serif; font-size: 11px; fill: #1f2937; }
      .svg-2-3 .seq-label { font-size: 10px; fill: #ccc; }
      .svg-2-3 .seq-box { fill: rgba(52, 81, 178, 0.05); stroke: #ccc; stroke-width: 0.5; }
      .svg-2-3 .seq-line { stroke: #999; stroke-width: 0.5; }
      .svg-2-3 .seq-arrow { fill: #4c9be8; stroke: #4c9be8; stroke-width: 0.5; }
      .svg-2-3 .seq-note { fill: #4e5d6c; stroke: #666; stroke-width: 0.5; }
    </style>
    <marker id="arrowhead-compact" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
      <path d="M 0 0 L 6 3 L 0 6 z" class="seq-arrow"/>
    </marker>
  </defs>
  <rect class="seq-box" x="10" y="3" width="50" height="20" rx="2"/>
  <text class="seq-text" x="35" y="17" text-anchor="middle">Sender</text>
  <rect class="seq-box" x="260" y="3" width="50" height="20" rx="2"/>
  <text class="seq-text" x="285" y="17" text-anchor="middle">Receiver</text>
  <line class="seq-line" x1="35" y1="25" x2="35" y2="175"/>
  <line class="seq-line" x1="285" y1="25" x2="285" y2="175"/>
  <rect class="seq-note" x="80" y="35" width="160" height="18" rx="2"/>
  <text class="seq-label" x="160" y="47" text-anchor="middle" fill="#1f2937">Shared Key K</text>
  <text class="seq-label" x="35" y="73" text-anchor="middle">Encrypt(M, K)</text>
  <path class="seq-line" d="M 35 78 Q 60 78 60 88 Q 60 98 35 98" fill="none" marker-end="url(#arrowhead-compact)"/>
  <text class="seq-label" x="160" y="118" text-anchor="middle">Ciphertext C</text>
  <line class="seq-line" x1="35" y1="123" x2="285" y2="123" marker-end="url(#arrowhead-compact)"/>
  <text class="seq-label" x="285" y="143" text-anchor="middle">Decrypt(C, K)</text>
  <path class="seq-line" d="M 285 148 Q 310 148 310 158 Q 310 168 285 168" fill="none" marker-end="url(#arrowhead-compact)"/>
  <rect class="seq-box" x="10" y="173" width="50" height="20" rx="2"/>
  <text class="seq-text" x="35" y="187" text-anchor="middle">Sender</text>
  <rect class="seq-box" x="260" y="173" width="50" height="20" rx="2"/>
  <text class="seq-text" x="285" y="187" text-anchor="middle">Receiver</text>
</svg>
</div>

#### Common Symmetric Encryption Algorithms

- **AES (Advanced Encryption Standard)**
  - Most widely used
  - Supports 128, 192, 256-bit keys

- **DES/3DES**
  - Older standard
  - No longer recommended

#### Pros and Cons

**Pros:**
- Fast encryption speed
- Suitable for large data volumes
- Low computational resource consumption

**Cons:**
- Difficult key distribution
- Complex key management
- Not suitable for public networks

### Asymmetric Encryption

Uses a **key pair**: Public Key and Private Key.

#### Core Concept

<div style="background: rgba(52, 81, 178, 0.06); padding: 1.5em; border-radius: 8px; margin: 2em 0;">
<svg class="svg-2-4" viewBox="0 0 380 110" xmlns="http://www.w3.org/2000/svg" style="width: 100%; max-width: 450px; display: block; margin: 0 auto;">
<defs>
<style>
      .svg-2-4 .key-text { font-family: arial, sans-serif; font-size: 11px; fill: #1f2937; }
      .svg-2-4 .key-text-sm { font-family: arial, sans-serif; font-size: 9px; fill: #1f2937; }
      .svg-2-4 .key-text-dark { font-family: arial, sans-serif; font-size: 11px; fill: #222; }
      .svg-2-4 .key-box-gen { fill: #4c9be8; stroke: #ccc; stroke-width: 0.5; }
      .svg-2-4 .key-box-pk { fill: rgba(52, 81, 178, 0.10); stroke: #ccc; stroke-width: 0.5; }
      .svg-2-4 .key-box-sk { fill: rgba(245, 194, 66, 0.30); stroke: #333; stroke-width: 0.5; }
      .svg-2-4 .key-box-rel { fill: rgba(223, 105, 25, 0.08); stroke: #ccc; stroke-width: 0.5; }
      .svg-2-4 .key-arrow { fill: none; stroke: #4c9be8; stroke-width: 0.5; }
      .svg-2-4 .key-dash { fill: none; stroke: #999; stroke-width: 0.5; stroke-dasharray: 3,2; }
    </style>
    <marker id="key-arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
      <path d="M 0 0 L 6 3 L 0 6 z" fill="#4c9be8"/>
    </marker>
  </defs>
  <rect class="key-box-gen" x="10" y="40" width="90" height="30" rx="2"/>
  <text class="key-text" x="55" y="59" text-anchor="middle">Key Pair Gen</text>
  <path class="key-arrow" d="M 100 55 L 150 25" marker-end="url(#key-arrow)"/>
  <rect class="key-box-pk" x="150" y="10" width="100" height="30" rx="2"/>
  <text class="key-text-dark" x="200" y="29" text-anchor="middle">Public Key</text>
  <path class="key-arrow" d="M 100 55 L 150 80" marker-end="url(#key-arrow)"/>
  <rect class="key-box-sk" x="150" y="65" width="90" height="30" rx="2"/>
  <text class="key-text-dark" x="195" y="84" text-anchor="middle">Private Key</text>
  <path class="key-dash" d="M 250 25 L 280 25 Q 290 25 290 35 L 290 45 Q 290 55 300 55 L 310 55"/>
  <rect class="key-box-rel" x="270" y="40" width="100" height="30" rx="2"/>
  <text class="key-text-dark" x="320" y="52" text-anchor="middle">Mathematical</text>
  <text class="key-text-dark" x="320" y="65" text-anchor="middle">One-way Link</text>
  <path class="key-dash" d="M 240 80 L 280 80 Q 290 80 290 70 L 290 60 Q 290 55 300 55 L 310 55"/>
</svg>
</div>

#### Encrypted Communication Flow

<div style="background: rgba(52, 81, 178, 0.06); padding: 1.5em; border-radius: 8px; margin: 2em 0;">
<svg class="svg-2-5" viewBox="0 0 280 160" xmlns="http://www.w3.org/2000/svg" style="width: 100%; max-width: 350px; display: block; margin: 0 auto;">
<defs>
<style>
      .svg-2-5 .enc-text { font-family: arial, sans-serif; font-size: 11px; fill: #1f2937; }
      .svg-2-5 .enc-label { font-size: 10px; fill: #ccc; }
      .svg-2-5 .enc-box { fill: rgba(52, 81, 178, 0.05); stroke: #ccc; stroke-width: 0.5; }
      .svg-2-5 .enc-line { stroke: #999; stroke-width: 0.5; }
      .svg-2-5 .enc-arrow { fill: #4c9be8; stroke: #4c9be8; stroke-width: 0.5; }
    </style>
    <marker id="enc-arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
      <path d="M 0 0 L 6 3 L 0 6 z" class="enc-arrow"/>
    </marker>
  </defs>
  <rect class="enc-box" x="10" y="3" width="50" height="20" rx="2"/>
  <text class="enc-text" x="35" y="17" text-anchor="middle">Alice</text>
  <rect class="enc-box" x="220" y="3" width="50" height="20" rx="2"/>
  <text class="enc-text" x="245" y="17" text-anchor="middle">Bob</text>
  <line class="enc-line" x1="35" y1="25" x2="35" y2="140"/>
  <line class="enc-line" x1="245" y1="25" x2="245" y2="140"/>
  <text class="enc-label" x="140" y="43" text-anchor="middle">Public Key pk_Bob</text>
  <line class="enc-arrow" x1="245" y1="48" x2="35" y2="48" marker-end="url(#enc-arrow)"/>
  <text class="enc-label" x="35" y="68" text-anchor="middle">Encrypt(M, pk_Bob)</text>
  <path class="enc-line" d="M 35 73 Q 60 73 60 83 Q 60 93 35 93" fill="none" marker-end="url(#enc-arrow)"/>
  <text class="enc-label" x="140" y="113" text-anchor="middle">Ciphertext C</text>
  <line class="enc-arrow" x1="35" y1="118" x2="245" y2="118" marker-end="url(#enc-arrow)"/>
  <text class="enc-label" x="245" y="133" text-anchor="middle">Decrypt(C, sk_Bob)</text>
  <path class="enc-line" d="M 245 138 Q 270 138 270 148 Q 270 158 245 158" fill="none" marker-end="url(#enc-arrow)"/>
  <rect class="enc-box" x="10" y="138" width="50" height="20" rx="2"/>
  <text class="enc-text" x="35" y="152" text-anchor="middle">Alice</text>
  <rect class="enc-box" x="220" y="138" width="50" height="20" rx="2"/>
  <text class="enc-text" x="245" y="152" text-anchor="middle">Bob</text>
</svg>
</div>

#### Common Asymmetric Encryption Algorithms

**1. RSA**
- Based on integer factorization problem
- Key length: 2048-4096 bits
- Use: TLS/SSL, digital signatures

```javascript
// RSA concept example (simplified)
// Key generation
const { publicKey, privateKey } = generateRSAKeyPair();

// Encryption
const encrypted = rsaEncrypt(message, publicKey);

// Decryption
const decrypted = rsaDecrypt(encrypted, privateKey);
```

**2. ECC (Elliptic Curve Cryptography)**
- Based on elliptic curve discrete logarithm problem
- Key length: 256 bits (equivalent to RSA 3072-bit security)
- Advantage: Shorter keys, more efficient

**Common Curves in Blockchain:**
- **secp256k1**: Used by Bitcoin, Ethereum
- **Ed25519**: Used by Solana, Polkadot
- **secp256r1**: Some enterprise blockchains

#### How ECC Works

<div style="background: rgba(52, 81, 178, 0.06); padding: 1.5em; border-radius: 8px; margin: 2em 0;">
<svg class="svg-2-6" viewBox="0 0 520 60" xmlns="http://www.w3.org/2000/svg" style="width: 100%; max-width: 600px; display: block; margin: 0 auto;">
<defs>
<style>
      .svg-2-6 .ecc-text { font-family: arial, sans-serif; font-size: 10px; fill: #1f2937; }
      .svg-2-6 .ecc-text-dark { font-family: arial, sans-serif; font-size: 10px; fill: #222; }
      .svg-2-6 .ecc-box1 { fill: #4c9be8; stroke: #ccc; stroke-width: 0.5; }
      .svg-2-6 .ecc-box2 { fill: rgba(223, 105, 25, 0.08); stroke: #ccc; stroke-width: 0.5; }
      .svg-2-6 .ecc-box3 { fill: rgba(52, 81, 178, 0.10); stroke: #ccc; stroke-width: 0.5; }
      .svg-2-6 .ecc-box4 { fill: rgba(245, 194, 66, 0.30); stroke: #333; stroke-width: 0.5; }
      .svg-2-6 .ecc-arrow { fill: none; stroke: #4c9be8; stroke-width: 0.5; }
    </style>
    <marker id="ecc-arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
      <path d="M 0 0 L 6 3 L 0 6 z" fill="#4c9be8"/>
    </marker>
  </defs>
  <rect class="ecc-box1" x="10" y="10" width="70" height="40" rx="2"/>
  <text class="ecc-text" x="45" y="26" text-anchor="middle">Elliptic Curve</text>
  <text class="ecc-text" x="45" y="40" text-anchor="middle">y²=x³+ax+b</text>
  <path class="ecc-arrow" d="M 80 30 L 110 30" marker-end="url(#ecc-arrow)"/>
  <rect class="ecc-box2" x="110" y="10" width="75" height="40" rx="2"/>
  <text class="ecc-text-dark" x="147" y="26" text-anchor="middle">secp256k1</text>
  <text class="ecc-text-dark" x="147" y="40" text-anchor="middle">y²=x³+7</text>
  <path class="ecc-arrow" d="M 185 30 L 215 30" marker-end="url(#ecc-arrow)"/>
  <rect class="ecc-box3" x="215" y="10" width="60" height="40" rx="2"/>
  <text class="ecc-text-dark" x="245" y="26" text-anchor="middle">Point Add</text>
  <text class="ecc-text-dark" x="245" y="40" text-anchor="middle">P+Q=R</text>
  <path class="ecc-arrow" d="M 275 30 L 305 30" marker-end="url(#ecc-arrow)"/>
  <rect class="ecc-box4" x="305" y="10" width="70" height="40" rx="2"/>
  <text class="ecc-text-dark" x="340" y="26" text-anchor="middle">Private Key</text>
  <text class="ecc-text-dark" x="340" y="40" text-anchor="middle">Random 256bit</text>
  <path class="ecc-arrow" d="M 375 30 L 405 30" marker-end="url(#ecc-arrow)"/>
  <rect class="ecc-box4" x="405" y="10" width="65" height="40" rx="2"/>
  <text class="ecc-text-dark" x="437" y="26" text-anchor="middle">Public Key</text>
  <text class="ecc-text-dark" x="437" y="40" text-anchor="middle">pk=sk×G</text>
</svg>
</div>

#### Example: Ethereum Key Pair

```javascript
// Ethereum key pair generation example
const { randomBytes } = require('crypto');
const secp256k1 = require('secp256k1');

// 1. Generate private key (256-bit random number)
let privateKey;
do {
    privateKey = randomBytes(32);
} while (!secp256k1.privateKeyVerify(privateKey));

console.log('Private Key:', privateKey.toString('hex'));
// Output: 7c4e8... (64 hex chars = 32 bytes = 256 bits)

// 2. Derive public key from private key
const publicKey = secp256k1.publicKeyCreate(privateKey, false);
console.log('Public Key:', publicKey.toString('hex'));
// Output: 04b8a... (130 hex chars = 65 bytes, uncompressed format)

// 3. Generate Ethereum address (last 20 bytes of Keccak-256 hash of public key)
const keccak256 = require('keccak256');
const address = keccak256(publicKey.slice(1)).slice(-20).toString('hex');
console.log('Address: 0x' + address);
// Output: 0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb0
```

### Symmetric vs Asymmetric Encryption Comparison

| Feature | Symmetric | Asymmetric |
|---------|-----------|------------|
| Keys | Single key | Public + Private |
| Speed | Fast | Slow (10-1000x) |
| Key Distribution | Difficult | Easy |
| Use Case | Large data encryption | Key exchange, signatures |
| Examples | AES, DES | RSA, ECC |
| Blockchain App | Wallet encryption | Transaction signing |

## 2.4 Digital Signatures

**Digital Signatures** use a private key to sign data, and anyone can verify the signature's authenticity using the corresponding public key.

### Purpose of Digital Signatures

1. **Authentication**: Proves message truly comes from private key holder
2. **Data Integrity**: Proves message hasn't been tampered with
3. **Non-repudiation**: Signer cannot deny having signed

### Digital Signature Workflow

<div style="background: rgba(52, 81, 178, 0.06); padding: 1.5em; border-radius: 8px; margin: 2em 0;">
<svg class="svg-2-7" viewBox="0 0 580 90" xmlns="http://www.w3.org/2000/svg" style="width: 100%; max-width: 650px; display: block; margin: 0 auto;">
<defs>
<style>
      .svg-2-7 .digsig-text { font-family: arial, sans-serif; font-size: 11px; fill: #1f2937; }
      .svg-2-7 .digsig-text-dark { font-family: arial, sans-serif; font-size: 11px; fill: #222; }
      .svg-2-7 .digsig-box-msg { fill: rgba(52, 81, 178, 0.10); stroke: #ccc; stroke-width: 0.5; }
      .svg-2-7 .digsig-box-hash { fill: rgba(52, 81, 178, 0.10); stroke: #4c9be8; stroke-width: 0.5; }
      .svg-2-7 .digsig-box-sign { fill: rgba(52, 81, 178, 0.10); stroke: #4c9be8; stroke-width: 0.5; }
      .svg-2-7 .digsig-box-sig { fill: rgba(245, 194, 66, 0.30); stroke: #333; stroke-width: 0.5; }
      .svg-2-7 .digsig-box-verify { fill: rgba(52, 81, 178, 0.10); stroke: #4c9be8; stroke-width: 0.5; }
      .svg-2-7 .digsig-box-valid { fill: rgba(52, 81, 178, 0.10); stroke: #ccc; stroke-width: 0.5; }
      .svg-2-7 .digsig-box-invalid { fill: rgba(220, 53, 69, 0.25); stroke: #333; stroke-width: 0.5; }
      .svg-2-7 .digsig-arrow { fill: none; stroke: #4c9be8; stroke-width: 0.5; }
      .svg-2-7 .digsig-arrow-dash { fill: none; stroke: #4c9be8; stroke-width: 0.5; stroke-dasharray: 3,2; }
    </style>
    <marker id="digsig-arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
      <path d="M 0 0 L 6 3 L 0 6 z" fill="#4c9be8"/>
    </marker>
  </defs>
  <rect class="digsig-box-msg" x="10" y="10" width="60" height="25" rx="2"/>
  <text class="digsig-text-dark" x="40" y="26" text-anchor="middle">Message M</text>
  <path class="digsig-arrow" d="M 70 22 L 100 22" marker-end="url(#digsig-arrow)"/>
  <rect class="digsig-box-hash" x="100" y="10" width="50" height="25" rx="2"/>
  <text class="digsig-text" x="125" y="26" text-anchor="middle">Hash</text>
  <path class="digsig-arrow" d="M 150 22 L 180 22" marker-end="url(#digsig-arrow)"/>
  <rect class="digsig-box-sign" x="180" y="10" width="60" height="25" rx="2"/>
  <text class="digsig-text" x="210" y="26" text-anchor="middle">Sign sk</text>
  <path class="digsig-arrow" d="M 240 22 L 270 22" marker-end="url(#digsig-arrow)"/>
  <rect class="digsig-box-sig" x="270" y="10" width="60" height="25" rx="2"/>
  <text class="digsig-text-dark" x="300" y="26" text-anchor="middle">Signature σ</text>
  <path class="digsig-arrow" d="M 330 22 L 360 22" marker-end="url(#digsig-arrow)"/>
  <rect class="digsig-box-verify" x="360" y="10" width="60" height="25" rx="2"/>
  <text class="digsig-text" x="390" y="26" text-anchor="middle">Verify pk</text>
  <path class="digsig-arrow-dash" d="M 40 35 Q 40 55 225 55 Q 390 55 390 35" marker-end="url(#digsig-arrow)"/>
  <path class="digsig-arrow" d="M 390 35 L 390 55 L 450 55" marker-end="url(#digsig-arrow)"/>
  <rect class="digsig-box-valid" x="450" y="42" width="60" height="25" rx="2"/>
  <text class="digsig-text-dark" x="480" y="58" text-anchor="middle">Valid</text>
  <rect class="digsig-box-invalid" x="450" y="10" width="60" height="25" rx="2"/>
  <text class="digsig-text" x="480" y="26" text-anchor="middle">Invalid</text>
  <path class="digsig-arrow" d="M 420 22 L 450 22" marker-end="url(#digsig-arrow)"/>
</svg>
</div>

### ECDSA (Elliptic Curve Digital Signature Algorithm)

The signature algorithm used by Bitcoin and Ethereum.

#### Signature Generation

```javascript
// Ethereum transaction signing example
const secp256k1 = require('secp256k1');
const keccak256 = require('keccak256');

// Transaction data
const txData = {
    nonce: 0,
    gasPrice: '20000000000',
    gasLimit: '21000',
    to: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb0',
    value: '1000000000000000000',  // 1 ETH
    data: '0x'
};

// 1. Serialize transaction data (RLP encoding)
const serialized = rlpEncode(txData);

// 2. Calculate hash
const txHash = keccak256(serialized);

// 3. Sign with private key
const { signature, recid } = secp256k1.ecdsaSign(txHash, privateKey);

// 4. Signature result
const r = signature.slice(0, 32);
const s = signature.slice(32, 64);
const v = recid + 27;  // Ethereum's v value

console.log('Signature - r:', r.toString('hex'));
console.log('Signature - s:', s.toString('hex'));
console.log('Signature - v:', v);
```

#### Signature Verification

```javascript
// Verify signature
function verifySignature(txHash, signature, publicKey) {
    return secp256k1.ecdsaVerify(signature, txHash, publicKey);
}

// Usage
const isValid = verifySignature(txHash, signature, publicKey);
console.log('Signature valid:', isValid);  // true
```

### Bitcoin Transaction Signing

<div style="background: rgba(52, 81, 178, 0.06); padding: 1.5em; border-radius: 8px; margin: 2em 0;">
<svg class="svg-2-8" viewBox="0 0 480 45" xmlns="http://www.w3.org/2000/svg" style="width: 100%; max-width: 550px; display: block; margin: 0 auto;">
<defs>
<style>
      .svg-2-8 .btc-sig-text { font-family: arial, sans-serif; font-size: 11px; fill: #1f2937; }
      .svg-2-8 .btc-sig-text-dark { font-family: arial, sans-serif; font-size: 11px; fill: #222; }
      .svg-2-8 .btc-sig-box1 { fill: rgba(52, 81, 178, 0.10); stroke: #ccc; stroke-width: 0.5; }
      .svg-2-8 .btc-sig-box2 { fill: rgba(52, 81, 178, 0.05); stroke: #ccc; stroke-width: 0.5; }
      .svg-2-8 .btc-sig-box3 { fill: rgba(223, 105, 25, 0.08); stroke: #ccc; stroke-width: 0.5; }
      .svg-2-8 .btc-sig-box4 { fill: rgba(245, 194, 66, 0.30); stroke: #333; stroke-width: 0.5; }
      .svg-2-8 .btc-sig-box5 { fill: #4c9be8; stroke: #ccc; stroke-width: 0.5; }
      .svg-2-8 .btc-sig-arrow { fill: none; stroke: #4c9be8; stroke-width: 0.5; }
    </style>
    <marker id="btc-sig-arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
      <path d="M 0 0 L 6 3 L 0 6 z" fill="#4c9be8"/>
    </marker>
  </defs>
  <rect class="btc-sig-box1" x="10" y="10" width="70" height="25" rx="2"/>
  <text class="btc-sig-text-dark" x="45" y="26" text-anchor="middle">Build Tx</text>
  <path class="btc-sig-arrow" d="M 80 22 L 110 22" marker-end="url(#btc-sig-arrow)"/>
  <rect class="btc-sig-box2" x="110" y="10" width="60" height="25" rx="2"/>
  <text class="btc-sig-text" x="140" y="26" text-anchor="middle">Serialize</text>
  <path class="btc-sig-arrow" d="M 170 22 L 200 22" marker-end="url(#btc-sig-arrow)"/>
  <rect class="btc-sig-box3" x="200" y="10" width="80" height="25" rx="2"/>
  <text class="btc-sig-text-dark" x="240" y="26" text-anchor="middle">Double SHA-256</text>
  <path class="btc-sig-arrow" d="M 280 22 L 310 22" marker-end="url(#btc-sig-arrow)"/>
  <rect class="btc-sig-box4" x="310" y="10" width="75" height="25" rx="2"/>
  <text class="btc-sig-text-dark" x="347" y="26" text-anchor="middle">ECDSA Sign</text>
  <path class="btc-sig-arrow" d="M 385 22 L 415 22" marker-end="url(#btc-sig-arrow)"/>
  <rect class="btc-sig-box5" x="415" y="10" width="65" height="25" rx="2"/>
  <text class="btc-sig-text" x="447" y="26" text-anchor="middle">Complete Tx</text>
</svg>
</div>

### Multi-Signature (MultiSig)

Requires multiple private keys to sign together to complete a transaction.

#### M-of-N MultiSig

<div style="background: rgba(52, 81, 178, 0.06); padding: 1.5em; border-radius: 8px; margin: 2em 0;">
<svg class="svg-2-9" viewBox="0 0 470 140" xmlns="http://www.w3.org/2000/svg" style="width: 100%; max-width: 500px; display: block; margin: 0 auto;">
<defs>
<style>
      .svg-2-9 .multisig-text { font-family: arial, sans-serif; font-size: 11px; fill: #1f2937; }
      .svg-2-9 .multisig-text-sm { font-family: arial, sans-serif; font-size: 10px; fill: #1f2937; }
      .svg-2-9 .multisig-text-dark { font-family: arial, sans-serif; font-size: 11px; fill: #222; }
      .svg-2-9 .multisig-text-sm-dark { font-family: arial, sans-serif; font-size: 10px; fill: #222; }
      .svg-2-9 .multisig-box-main { fill: #4c9be8; stroke: #ccc; stroke-width: 0.5; }
      .svg-2-9 .multisig-box-user { fill: rgba(52, 81, 178, 0.10); stroke: #ccc; stroke-width: 0.5; }
      .svg-2-9 .multisig-box-tx { fill: rgba(52, 81, 178, 0.05); stroke: #ccc; stroke-width: 0.5; }
      .svg-2-9 .multisig-box-sign { fill: rgba(223, 105, 25, 0.08); stroke: #ccc; stroke-width: 0.5; }
      .svg-2-9 .multisig-box-valid { fill: rgba(245, 194, 66, 0.30); stroke: #333; stroke-width: 0.5; }
      .svg-2-9 .multisig-arrow { fill: none; stroke: #4c9be8; stroke-width: 0.5; }
    </style>
    <marker id="multisig-arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
      <path d="M 0 0 L 6 3 L 0 6 z" fill="#4c9be8"/>
    </marker>
  </defs>
  <rect class="multisig-box-main" x="10" y="50" width="85" height="30" rx="2"/>
  <text class="multisig-text" x="52" y="69" text-anchor="middle">2-of-3 MultiSig</text>
  <path class="multisig-arrow" d="M 95 65 L 150 20" marker-end="url(#multisig-arrow)"/>
  <rect class="multisig-box-user" x="150" y="5" width="50" height="30" rx="2"/>
  <text class="multisig-text-dark" x="175" y="24" text-anchor="middle">Alice</text>
  <path class="multisig-arrow" d="M 95 65 L 150 65" marker-end="url(#multisig-arrow)"/>
  <rect class="multisig-box-user" x="150" y="50" width="50" height="30" rx="2"/>
  <text class="multisig-text-dark" x="175" y="69" text-anchor="middle">Bob</text>
  <path class="multisig-arrow" d="M 95 65 L 150 110" marker-end="url(#multisig-arrow)"/>
  <rect class="multisig-box-user" x="150" y="95" width="55" height="30" rx="2"/>
  <text class="multisig-text-dark" x="177" y="114" text-anchor="middle">Charlie</text>
  <rect class="multisig-box-tx" x="240" y="50" width="45" height="30" rx="2"/>
  <text class="multisig-text" x="262" y="69" text-anchor="middle">Tx</text>
  <path class="multisig-arrow" d="M 285 65 L 315 65" marker-end="url(#multisig-arrow)"/>
  <rect class="multisig-box-sign" x="315" y="50" width="55" height="30" rx="2"/>
  <text class="multisig-text-sm-dark" x="342" y="69" text-anchor="middle">Sig A</text>
  <path class="multisig-arrow" d="M 370 65 L 400 65" marker-end="url(#multisig-arrow)"/>
  <rect class="multisig-box-sign" x="400" y="50" width="55" height="30" rx="2"/>
  <text class="multisig-text-sm-dark" x="427" y="69" text-anchor="middle">Sig B</text>
  <rect class="multisig-box-valid" x="320" y="100" width="70" height="30" rx="2"/>
  <text class="multisig-text-dark" x="355" y="119" text-anchor="middle">Valid</text>
  <path class="multisig-arrow" d="M 427 80 Q 427 90 420 90 L 390 90 Q 380 90 370 95 Q 355 100 355 100" marker-end="url(#multisig-arrow)"/>
</svg>
</div>

#### Bitcoin P2SH MultiSig Script

```
# 2-of-3 multisig script
OP_2
<Public Key A> <Public Key B> <Public Key C>
OP_3
OP_CHECKMULTISIG
```

## 2.5 Merkle Trees

A **Merkle Tree**, also known as a hash tree, is a tree data structure used to efficiently verify the integrity of large datasets.

### Merkle Tree Structure

<div style="background: rgba(52, 81, 178, 0.06); padding: 1.5em; border-radius: 8px; margin: 2em 0;">
<svg class="svg-2-10" viewBox="0 0 380 180" xmlns="http://www.w3.org/2000/svg" style="width: 100%; max-width: 450px; display: block; margin: 0 auto;">
<defs>
<style>
      .svg-2-10 .merkle-text { font-family: arial, sans-serif; font-size: 10px; fill: #1f2937; }
      .svg-2-10 .merkle-text-sm { font-family: arial, sans-serif; font-size: 9px; fill: #1f2937; }
      .svg-2-10 .merkle-text-dark { font-family: arial, sans-serif; font-size: 10px; fill: #222; }
      .svg-2-10 .merkle-text-sm-dark { font-family: arial, sans-serif; font-size: 9px; fill: #222; }
      .svg-2-10 .merkle-box-root { fill: rgba(245, 194, 66, 0.30); stroke: #333; stroke-width: 0.5; }
      .svg-2-10 .merkle-box-mid { fill: rgba(223, 105, 25, 0.08); stroke: #ccc; stroke-width: 0.5; }
      .svg-2-10 .merkle-box-leaf { fill: rgba(52, 81, 178, 0.10); stroke: #ccc; stroke-width: 0.5; }
      .svg-2-10 .merkle-box-tx { fill: rgba(52, 81, 178, 0.10); stroke: #4c9be8; stroke-width: 0.5; }
      .svg-2-10 .merkle-line { stroke: #4c9be8; stroke-width: 0.5; }
    </style>
</defs>
  <rect class="merkle-box-root" x="145" y="5" width="90" height="25" rx="2"/>
  <text class="merkle-text-dark" x="190" y="21" text-anchor="middle">Merkle Root</text>
  <line class="merkle-line" x1="190" y1="30" x2="100" y2="50"/>
  <line class="merkle-line" x1="190" y1="30" x2="280" y2="50"/>
  <rect class="merkle-box-mid" x="55" y="50" width="90" height="25" rx="2"/>
  <text class="merkle-text-dark" x="100" y="66" text-anchor="middle">Hash 0-1</text>
  <rect class="merkle-box-mid" x="235" y="50" width="90" height="25" rx="2"/>
  <text class="merkle-text-dark" x="280" y="66" text-anchor="middle">Hash 2-3</text>
  <line class="merkle-line" x1="100" y1="75" x2="55" y2="95"/>
  <line class="merkle-line" x1="100" y1="75" x2="145" y2="95"/>
  <line class="merkle-line" x1="280" y1="75" x2="235" y2="95"/>
  <line class="merkle-line" x1="280" y1="75" x2="325" y2="95"/>
  <rect class="merkle-box-leaf" x="10" y="95" width="60" height="25" rx="2"/>
  <text class="merkle-text-sm-dark" x="40" y="111" text-anchor="middle">Hash 0</text>
  <rect class="merkle-box-leaf" x="115" y="95" width="60" height="25" rx="2"/>
  <text class="merkle-text-sm-dark" x="145" y="111" text-anchor="middle">Hash 1</text>
  <rect class="merkle-box-leaf" x="205" y="95" width="60" height="25" rx="2"/>
  <text class="merkle-text-sm-dark" x="235" y="111" text-anchor="middle">Hash 2</text>
  <rect class="merkle-box-leaf" x="310" y="95" width="60" height="25" rx="2"/>
  <text class="merkle-text-sm-dark" x="340" y="111" text-anchor="middle">Hash 3</text>
  <line class="merkle-line" x1="40" y1="120" x2="40" y2="140"/>
  <line class="merkle-line" x1="145" y1="120" x2="145" y2="140"/>
  <line class="merkle-line" x1="235" y1="120" x2="235" y2="140"/>
  <line class="merkle-line" x1="340" y1="120" x2="340" y2="140"/>
  <rect class="merkle-box-tx" x="15" y="140" width="50" height="25" rx="2"/>
  <text class="merkle-text-sm" x="40" y="156" text-anchor="middle">Tx 0</text>
  <rect class="merkle-box-tx" x="120" y="140" width="50" height="25" rx="2"/>
  <text class="merkle-text-sm" x="145" y="156" text-anchor="middle">Tx 1</text>
  <rect class="merkle-box-tx" x="210" y="140" width="50" height="25" rx="2"/>
  <text class="merkle-text-sm" x="235" y="156" text-anchor="middle">Tx 2</text>
  <rect class="merkle-box-tx" x="315" y="140" width="50" height="25" rx="2"/>
  <text class="merkle-text-sm" x="340" y="156" text-anchor="middle">Tx 3</text>
</svg>
</div>

### Building a Merkle Tree

```javascript
// Merkle tree implementation example
const crypto = require('crypto');

class MerkleTree {
    constructor(leaves) {
        this.leaves = leaves.map(l => this.hash(l));
        this.root = this.buildTree(this.leaves);
    }

    hash(data) {
        return crypto.createHash('sha256')
            .update(data)
            .digest('hex');
    }

    buildTree(nodes) {
        if (nodes.length === 1) {
            return nodes[0];
        }

        const parents = [];

        for (let i = 0; i < nodes.length; i += 2) {
            const left = nodes[i];
            const right = nodes[i + 1] || nodes[i];  // Duplicate last node if odd count

            const parent = this.hash(left + right);
            parents.push(parent);
        }

        return this.buildTree(parents);
    }

    getRoot() {
        return this.root;
    }
}

// Usage example
const transactions = ['tx1', 'tx2', 'tx3', 'tx4'];
const tree = new MerkleTree(transactions);
console.log('Merkle Root:', tree.getRoot());
```

### Merkle Proof

Lightweight verification without downloading all data.

<div style="background: rgba(52, 81, 178, 0.06); padding: 1.5em; border-radius: 8px; margin: 2em 0;">
<svg class="svg-2-11" viewBox="0 0 550 100" xmlns="http://www.w3.org/2000/svg" style="width: 100%; max-width: 600px; display: block; margin: 0 auto;">
<defs>
<style>
      .svg-2-11 .merkle-proof-text { font-family: arial, sans-serif; font-size: 10px; fill: #1f2937; }
      .svg-2-11 .merkle-proof-text-sm { font-family: arial, sans-serif; font-size: 9px; fill: #1f2937; }
      .svg-2-11 .merkle-proof-text-dark { font-family: arial, sans-serif; font-size: 10px; fill: #222; }
      .svg-2-11 .merkle-proof-text-sm-dark { font-family: arial, sans-serif; font-size: 9px; fill: #222; }
      .svg-2-11 .merkle-proof-box-proof { fill: rgba(223, 105, 25, 0.08); stroke: #ccc; stroke-width: 0.5; }
      .svg-2-11 .merkle-proof-box-proc { fill: rgba(52, 81, 178, 0.10); stroke: #4c9be8; stroke-width: 0.5; }
      .svg-2-11 .merkle-proof-box-cmp { fill: #4c9be8; stroke: #ccc; stroke-width: 0.5; }
      .svg-2-11 .merkle-proof-box-valid { fill: rgba(52, 81, 178, 0.10); stroke: #ccc; stroke-width: 0.5; }
      .svg-2-11 .merkle-proof-box-invalid { fill: rgba(220, 53, 69, 0.25); stroke: #333; stroke-width: 0.5; }
      .svg-2-11 .merkle-proof-arrow { fill: none; stroke: #4c9be8; stroke-width: 0.5; }
    </style>
    <marker id="merkle-proof-arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
      <path d="M 0 0 L 6 3 L 0 6 z" fill="#4c9be8"/>
    </marker>
  </defs>
  <rect class="merkle-proof-box-proof" x="10" y="10" width="60" height="25" rx="2"/>
  <text class="merkle-proof-text-dark" x="40" y="26" text-anchor="middle">Hash 3</text>
  <path class="merkle-proof-arrow" d="M 70 22 L 100 47" marker-end="url(#merkle-proof-arrow)"/>
  <rect class="merkle-proof-box-proof" x="10" y="47" width="70" height="25" rx="2"/>
  <text class="merkle-proof-text-dark" x="45" y="63" text-anchor="middle">Hash 0-1</text>
  <path class="merkle-proof-arrow" d="M 80 59 L 100 59" marker-end="url(#merkle-proof-arrow)"/>
  <rect class="merkle-proof-box-proc" x="100" y="47" width="75" height="25" rx="2"/>
  <text class="merkle-proof-text" x="137" y="63" text-anchor="middle">Hash Tx 2</text>
  <path class="merkle-proof-arrow" d="M 175 59 L 205 59" marker-end="url(#merkle-proof-arrow)"/>
  <rect class="merkle-proof-box-proc" x="205" y="47" width="75" height="25" rx="2"/>
  <text class="merkle-proof-text" x="242" y="63" text-anchor="middle">Hash 2-3</text>
  <path class="merkle-proof-arrow" d="M 280 59 L 310 59" marker-end="url(#merkle-proof-arrow)"/>
  <rect class="merkle-proof-box-proc" x="310" y="47" width="70" height="25" rx="2"/>
  <text class="merkle-proof-text-sm" x="345" y="63" text-anchor="middle">Calc Root</text>
  <path class="merkle-proof-arrow" d="M 380 59 L 410 59" marker-end="url(#merkle-proof-arrow)"/>
  <rect class="merkle-proof-box-cmp" x="410" y="47" width="50" height="25" rx="2"/>
  <text class="merkle-proof-text" x="435" y="63" text-anchor="middle">Compare</text>
  <path class="merkle-proof-arrow" d="M 435 47 L 435 30 L 460 30 L 470 30" marker-end="url(#merkle-proof-arrow)"/>
  <rect class="merkle-proof-box-valid" x="470" y="10" width="75" height="25" rx="2"/>
  <text class="merkle-proof-text-sm-dark" x="508" y="26" text-anchor="middle">Exists</text>
  <path class="merkle-proof-arrow" d="M 435 72 L 435 85 L 440 85" marker-end="url(#merkle-proof-arrow)"/>
  <rect class="merkle-proof-box-invalid" x="440" y="72" width="95" height="25" rx="2"/>
  <text class="merkle-proof-text-sm" x="487" y="88" text-anchor="middle">Not Found</text>
</svg>
</div>

### Merkle Proof Code Implementation

```javascript
class MerkleTree {
    // ... previous code ...

    // Generate Merkle proof
    getProof(leaf) {
        let index = this.leaves.indexOf(this.hash(leaf));
        if (index === -1) return null;

        const proof = [];
        let nodes = this.leaves;

        while (nodes.length > 1) {
            const parents = [];

            for (let i = 0; i < nodes.length; i += 2) {
                const left = nodes[i];
                const right = nodes[i + 1] || nodes[i];

                if (i === index || i === index - 1) {
                    // Record sibling node
                    const sibling = (i === index) ? right : left;
                    const position = (i === index) ? 'right' : 'left';
                    proof.push({ hash: sibling, position });
                    index = Math.floor(index / 2);
                }

                parents.push(this.hash(left + right));
            }

            nodes = parents;
        }

        return proof;
    }

    // Verify Merkle proof
    verifyProof(leaf, proof, root) {
        let hash = this.hash(leaf);

        for (const { hash: siblingHash, position } of proof) {
            if (position === 'left') {
                hash = this.hash(siblingHash + hash);
            } else {
                hash = this.hash(hash + siblingHash);
            }
        }

        return hash === root;
    }
}

// Usage example
const tree = new MerkleTree(['tx1', 'tx2', 'tx3', 'tx4']);
const proof = tree.getProof('tx2');
const isValid = tree.verifyProof('tx2', proof, tree.getRoot());

console.log('Merkle Proof:', proof);
console.log('Verification Result:', isValid);  // true
```

### Applications of Merkle Trees

#### 1. Bitcoin Block Structure

<div style="background: rgba(52, 81, 178, 0.06); padding: 1.5em; border-radius: 8px; margin: 2em 0;">
<svg class="svg-2-12" viewBox="0 0 550 100" xmlns="http://www.w3.org/2000/svg" style="width: 100%; max-width: 600px; display: block; margin: 0 auto;">
<defs>
<style>
      .svg-2-12 .btc-block-text { font-family: arial, sans-serif; font-size: 10px; fill: #1f2937; }
      .svg-2-12 .btc-block-text-sm { font-family: arial, sans-serif; font-size: 9px; fill: #1f2937; }
      .svg-2-12 .btc-block-text-dark { font-family: arial, sans-serif; font-size: 10px; fill: #222; }
      .svg-2-12 .btc-block-text-sm-dark { font-family: arial, sans-serif; font-size: 9px; fill: #222; }
      .svg-2-12 .btc-block-box-std { fill: rgba(223, 105, 25, 0.08); stroke: #ccc; stroke-width: 0.5; }
      .svg-2-12 .btc-block-box-mr { fill: rgba(245, 194, 66, 0.30); stroke: #333; stroke-width: 0.5; }
      .svg-2-12 .btc-block-box-tx { fill: rgba(52, 81, 178, 0.10); stroke: #ccc; stroke-width: 0.5; }
      .svg-2-12 .btc-block-arrow { fill: none; stroke: #4c9be8; stroke-width: 0.5; }
      .svg-2-12 .btc-block-dash { fill: none; stroke: #999; stroke-width: 0.5; stroke-dasharray: 3,2; }
    </style>
    <marker id="btc-block-arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
      <path d="M 0 0 L 6 3 L 0 6 z" fill="#4c9be8"/>
    </marker>
  </defs>
  <rect class="btc-block-box-std" x="10" y="10" width="60" height="25" rx="2"/>
  <text class="btc-block-text-dark" x="40" y="26" text-anchor="middle">Version</text>
  <path class="btc-block-arrow" d="M 70 22 L 95 22" marker-end="url(#btc-block-arrow)"/>
  <rect class="btc-block-box-std" x="95" y="10" width="90" height="25" rx="2"/>
  <text class="btc-block-text-sm-dark" x="140" y="26" text-anchor="middle">Previous Hash</text>
  <path class="btc-block-arrow" d="M 185 22 L 210 22" marker-end="url(#btc-block-arrow)"/>
  <rect class="btc-block-box-mr" x="210" y="10" width="80" height="25" rx="2"/>
  <text class="btc-block-text-sm-dark" x="250" y="26" text-anchor="middle">Merkle Root</text>
  <path class="btc-block-arrow" d="M 290 22 L 315 22" marker-end="url(#btc-block-arrow)"/>
  <rect class="btc-block-box-std" x="315" y="10" width="75" height="25" rx="2"/>
  <text class="btc-block-text-sm-dark" x="352" y="26" text-anchor="middle">Timestamp</text>
  <path class="btc-block-arrow" d="M 390 22 L 415 22" marker-end="url(#btc-block-arrow)"/>
  <rect class="btc-block-box-std" x="415" y="10" width="60" height="25" rx="2"/>
  <text class="btc-block-text-sm-dark" x="445" y="26" text-anchor="middle">Difficulty</text>
  <path class="btc-block-arrow" d="M 445 35 L 445 50 L 485 50" marker-end="url(#btc-block-arrow)"/>
  <rect class="btc-block-box-std" x="485" y="37" width="50" height="25" rx="2"/>
  <text class="btc-block-text-dark" x="510" y="53" text-anchor="middle">Nonce</text>
  <path class="btc-block-dash" d="M 250 35 L 250 70"/>
  <rect class="btc-block-box-tx" x="200" y="70" width="100" height="25" rx="2"/>
  <text class="btc-block-text-sm-dark" x="250" y="86" text-anchor="middle">Transactions</text>
</svg>
</div>

#### 2. SPV Light Nodes

**SPV (Simplified Payment Verification)** nodes only download block headers, not all transactions.

<div style="background: rgba(52, 81, 178, 0.06); padding: 1.5em; border-radius: 8px; margin: 2em 0;">
<svg class="svg-2-13" viewBox="0 0 320 100" xmlns="http://www.w3.org/2000/svg" style="width: 100%; max-width: 400px; display: block; margin: 0 auto;">
<defs>
<style>
      .svg-2-13 .spv-text { font-family: arial, sans-serif; font-size: 10px; fill: #1f2937; }
      .svg-2-13 .spv-text-sm { font-family: arial, sans-serif; font-size: 9px; fill: #1f2937; }
      .svg-2-13 .spv-text-dark { font-family: arial, sans-serif; font-size: 10px; fill: #222; }
      .svg-2-13 .spv-text-sm-dark { font-family: arial, sans-serif; font-size: 9px; fill: #222; }
      .svg-2-13 .spv-box-full { fill: rgba(223, 105, 25, 0.08); stroke: #ccc; stroke-width: 0.5; }
      .svg-2-13 .spv-box-full-verify { fill: #4c9be8; stroke: #ccc; stroke-width: 0.5; }
      .svg-2-13 .spv-box-light { fill: rgba(52, 81, 178, 0.10); stroke: #ccc; stroke-width: 0.5; }
      .svg-2-13 .spv-box-light-verify { fill: rgba(245, 194, 66, 0.30); stroke: #333; stroke-width: 0.5; }
      .svg-2-13 .spv-arrow { fill: none; stroke: #4c9be8; stroke-width: 0.5; }
    </style>
    <marker id="spv-arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
      <path d="M 0 0 L 6 3 L 0 6 z" fill="#4c9be8"/>
    </marker>
  </defs>
  <rect class="spv-box-full" x="10" y="10" width="70" height="40" rx="2"/>
  <text class="spv-text-dark" x="45" y="26" text-anchor="middle">Full Node</text>
  <text class="spv-text-sm-dark" x="45" y="40" text-anchor="middle">~500GB</text>
  <path class="spv-arrow" d="M 80 30 L 120 30" marker-end="url(#spv-arrow)"/>
  <rect class="spv-box-full-verify" x="120" y="10" width="70" height="40" rx="2"/>
  <text class="spv-text" x="155" y="34" text-anchor="middle">Full Verify</text>
  <rect class="spv-box-light" x="10" y="60" width="70" height="40" rx="2"/>
  <text class="spv-text-dark" x="45" y="76" text-anchor="middle">Light Node</text>
  <text class="spv-text-sm-dark" x="45" y="90" text-anchor="middle">~100MB</text>
  <path class="spv-arrow" d="M 80 80 L 120 80" marker-end="url(#spv-arrow)"/>
  <rect class="spv-box-light-verify" x="120" y="60" width="90" height="40" rx="2"/>
  <text class="spv-text-dark" x="165" y="84" text-anchor="middle">Merkle Proof</text>
</svg>
</div>

#### 3. State Tree

Ethereum uses **Merkle Patricia Trie** to store account state.

<div style="background: rgba(52, 81, 178, 0.06); padding: 1.5em; border-radius: 8px; margin: 2em 0;">
<svg class="svg-2-14" viewBox="0 0 360 70" xmlns="http://www.w3.org/2000/svg" style="width: 100%; max-width: 450px; display: block; margin: 0 auto;">
<defs>
<style>
      .svg-2-14 .state-tree-text { font-family: arial, sans-serif; font-size: 10px; fill: #1f2937; }
      .svg-2-14 .state-tree-text-sm { font-family: arial, sans-serif; font-size: 9px; fill: #1f2937; }
      .svg-2-14 .state-tree-text-dark { font-family: arial, sans-serif; font-size: 10px; fill: #222; }
      .svg-2-14 .state-tree-text-sm-dark { font-family: arial, sans-serif; font-size: 9px; fill: #222; }
      .svg-2-14 .state-tree-box1 { fill: rgba(52, 81, 178, 0.10); stroke: #ccc; stroke-width: 0.5; }
      .svg-2-14 .state-tree-box2 { fill: rgba(223, 105, 25, 0.08); stroke: #ccc; stroke-width: 0.5; }
      .svg-2-14 .state-tree-box3 { fill: rgba(245, 194, 66, 0.30); stroke: #333; stroke-width: 0.5; }
    </style>
</defs>
  <rect class="state-tree-box1" x="10" y="10" width="80" height="40" rx="2"/>
  <text class="state-tree-text-dark" x="50" y="26" text-anchor="middle">State Tree</text>
  <text class="state-tree-text-sm-dark" x="50" y="40" text-anchor="middle">Account State</text>
  <rect class="state-tree-box2" x="140" y="10" width="80" height="40" rx="2"/>
  <text class="state-tree-text-dark" x="180" y="26" text-anchor="middle">Tx Tree</text>
  <text class="state-tree-text-sm-dark" x="180" y="40" text-anchor="middle">Tx Data</text>
  <rect class="state-tree-box3" x="270" y="10" width="80" height="40" rx="2"/>
  <text class="state-tree-text-dark" x="310" y="26" text-anchor="middle">Receipt Tree</text>
  <text class="state-tree-text-sm-dark" x="310" y="40" text-anchor="middle">Tx Receipts</text>
</svg>
</div>



### 2.7 Post-Quantum Cryptography (PQC): Blockchain Must Migrate by 2030

![CCBus wallet manager — encrypted private key storage (AES-256 + MPC compatible)](../public/images/chapters/zh/wallet-manager.png)

*图: CCBus wallet manager — encrypted private key storage (AES-256 + MPC compatible)*


Quantum computers in the 2030s will have the capability to break existing public-key cryptography. NIST formally released three PQC standards in 2024-08:

**NIST FIPS 203/204/205 (released 2024-08)**:

| Standard | Algorithm | Type | Use | Public key | Signature |
|---|---|---|---|---|---|
| **FIPS 203** | ML-KEM (Kyber) | Key encapsulation | Encryption | 800B | — |
| **FIPS 204** | ML-DSA (Dilithium) | Lattice signature | General signatures | 1.3KB | 2.4KB |
| **FIPS 205** | SLH-DSA (SPHINCS+) | Hash-based signature | Long-term signatures | 32B | 8KB |

**Why does blockchain need PQC?**
- Current ECDSA (secp256k1, Bitcoin/Ethereum) 256-bit private key is ~8-bit password against quantum computer
- Shor's algorithm can break ECDSA in polynomial time
- Once quantum computers reach 4000+ qubits, all existing wallet private keys are at risk
- **Grover's algorithm** reduces SHA-256 security from 128 bits to 85 bits

**Blockchain PQC migration roadmap**:
- **2024-08**: NIST standardization published
- **2025-2026**: Litecoin enables Quantum-Resistant Sig pilot, Algorand tests state proof
- **2026-2028**: Ethereum EIP roadmap (TBD), may include PQC integration
- **2028-2030**: BTC upgrade discussion (Bitcoin Core 0.21 Q1-2025 has PQC discussions)
- **2030+**: Full industry PQC migration (predicted)

**PQC challenges for blockchain**:
- **Signature size explosion**: ECDSA signature 64 bytes, ML-DSA 2.4KB (38x)
- **Verification cost increase**: PQC signature verification 10-100x slower than ECDSA
- **Storage bloat**: 100M transactions × 2.4KB = 240GB
- **Backward compatibility**: how to migrate existing addresses? (may need PQC + existing dual-sig transition period)

**PQC + ZK combination**:
- Some L1s are exploring "ZK-friendly" + "PQC-friendly" dual signature schemes
- e.g. **Falcon** signature (NTRU lattice-based) is smaller than Dilithium
- **2026 real projects**: Zcash Halo2 plans to integrate PQC, QRL chain is fully PQC

**Developer recommendations**:
- New contracts prefer ML-DSA (Dilithium) signature
- Migration path: `ECDSA.verify → MLDSA.verify` dual-sig transition
- Monitor NIST follow-up standards (second-round PQC standardization ongoing, 2026 will see more algorithms)
- Watch **NIST candidates: FAEST, MAYO, SLH-DSA-SHAKE**

## 2.6 Advanced Cryptographic Concepts

### Zero-Knowledge Proof (ZKP)

**Zero-Knowledge Proof** allows a prover to convince a verifier that a statement is true without revealing any additional information.

#### Classic Example: Ali Baba's Cave

<div style="background: rgba(52, 81, 178, 0.06); padding: 1.5em; border-radius: 8px; margin: 2em 0;">
<svg class="svg-2-15" viewBox="0 0 480 100" xmlns="http://www.w3.org/2000/svg" style="width: 100%; max-width: 550px; display: block; margin: 0 auto;">
<defs>
<style>
      .svg-2-15 .zkp-cave-text { font-family: arial, sans-serif; font-size: 10px; fill: #1f2937; }
      .svg-2-15 .zkp-cave-text-sm { font-family: arial, sans-serif; font-size: 9px; fill: #1f2937; }
      .svg-2-15 .zkp-cave-text-dark { font-family: arial, sans-serif; font-size: 10px; fill: #222; }
      .svg-2-15 .zkp-cave-text-sm-dark { font-family: arial, sans-serif; font-size: 9px; fill: #222; }
      .svg-2-15 .zkp-cave-box1 { fill: rgba(52, 81, 178, 0.10); stroke: #ccc; stroke-width: 0.5; }
      .svg-2-15 .zkp-cave-box2 { fill: rgba(223, 105, 25, 0.08); stroke: #ccc; stroke-width: 0.5; }
      .svg-2-15 .zkp-cave-box3 { fill: rgba(52, 81, 178, 0.10); stroke: #4c9be8; stroke-width: 0.5; }
      .svg-2-15 .zkp-cave-box-know { fill: rgba(245, 194, 66, 0.30); stroke: #333; stroke-width: 0.5; }
      .svg-2-15 .zkp-cave-box-unkn { fill: rgba(220, 53, 69, 0.25); stroke: #333; stroke-width: 0.5; }
      .svg-2-15 .zkp-cave-arrow { fill: none; stroke: #4c9be8; stroke-width: 0.5; }
    </style>
    <marker id="zkp-cave-arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
      <path d="M 0 0 L 6 3 L 0 6 z" fill="#4c9be8"/>
    </marker>
  </defs>
  <rect class="zkp-cave-box1" x="10" y="37" width="90" height="25" rx="2"/>
  <text class="zkp-cave-text-sm-dark" x="55" y="53" text-anchor="middle">Alice enters</text>
  <path class="zkp-cave-arrow" d="M 100 49 L 130 49" marker-end="url(#zkp-cave-arrow)"/>
  <rect class="zkp-cave-box2" x="130" y="37" width="90" height="25" rx="2"/>
  <text class="zkp-cave-text-sm-dark" x="175" y="53" text-anchor="middle">Bob requests</text>
  <path class="zkp-cave-arrow" d="M 220 49 L 250 49" marker-end="url(#zkp-cave-arrow)"/>
  <rect class="zkp-cave-box3" x="250" y="30" width="110" height="40" rx="2"/>
  <text class="zkp-cave-text-sm" x="305" y="46" text-anchor="middle">Alice exits</text>
  <text class="zkp-cave-text-sm" x="305" y="60" text-anchor="middle">from requested side</text>
  <path class="zkp-cave-arrow" d="M 360 50 L 390 25" marker-end="url(#zkp-cave-arrow)"/>
  <rect class="zkp-cave-box-know" x="390" y="5" width="80" height="40" rx="2"/>
  <text class="zkp-cave-text-sm-dark" x="430" y="21" text-anchor="middle">Knows secret</text>
  <text class="zkp-cave-text-sm-dark" x="430" y="35" text-anchor="middle">100% success</text>
  <path class="zkp-cave-arrow" d="M 360 50 L 390 75" marker-end="url(#zkp-cave-arrow)"/>
  <rect class="zkp-cave-box-unkn" x="390" y="55" width="80" height="40" rx="2"/>
  <text class="zkp-cave-text-sm" x="430" y="71" text-anchor="middle">Doesn't know</text>
  <text class="zkp-cave-text-sm" x="430" y="85" text-anchor="middle">Prob 1/2^N</text>
</svg>
</div>

#### zk-SNARKs

**zk-SNARKs** (Zero-Knowledge Succinct Non-Interactive Argument of Knowledge)

**Applications:**
- **Zcash**: Privacy transactions
- **Tornado Cash**: Ethereum mixer
- **zkSync**: Layer 2 scaling

<div style="background: rgba(52, 81, 178, 0.06); padding: 1.5em; border-radius: 8px; margin: 2em 0;">
<svg class="svg-2-16" viewBox="0 0 420 110" xmlns="http://www.w3.org/2000/svg" style="width: 100%; max-width: 500px; display: block; margin: 0 auto;">
<defs>
<style>
      .svg-2-16 .zksnark-text { font-family: arial, sans-serif; font-size: 10px; fill: #1f2937; }
      .svg-2-16 .zksnark-text-sm { font-family: arial, sans-serif; font-size: 9px; fill: #1f2937; }
      .svg-2-16 .zksnark-text-dark { font-family: arial, sans-serif; font-size: 10px; fill: #222; }
      .svg-2-16 .zksnark-text-sm-dark { font-family: arial, sans-serif; font-size: 9px; fill: #222; }
      .svg-2-16 .zksnark-box-feat { fill: rgba(52, 81, 178, 0.10); stroke: #ccc; stroke-width: 0.5; }
      .svg-2-16 .zksnark-box-proc { fill: rgba(52, 81, 178, 0.10); stroke: #4c9be8; stroke-width: 0.5; }
      .svg-2-16 .zksnark-box-verify { fill: rgba(245, 194, 66, 0.30); stroke: #333; stroke-width: 0.5; }
      .svg-2-16 .zksnark-arrow { fill: none; stroke: #4c9be8; stroke-width: 0.5; }
    </style>
    <marker id="zksnark-arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
      <path d="M 0 0 L 6 3 L 0 6 z" fill="#4c9be8"/>
    </marker>
  </defs>
  <rect class="zksnark-box-feat" x="10" y="10" width="70" height="40" rx="2"/>
  <text class="zksnark-text-dark" x="45" y="26" text-anchor="middle">Succinct</text>
  <text class="zksnark-text-sm-dark" x="45" y="40" text-anchor="middle">~200 bytes</text>
  <path class="zksnark-arrow" d="M 80 30 L 140 55" marker-end="url(#zksnark-arrow)"/>
  <rect class="zksnark-box-feat" x="10" y="60" width="70" height="40" rx="2"/>
  <text class="zksnark-text-dark" x="45" y="84" text-anchor="middle">Non-Interactive</text>
  <path class="zksnark-arrow" d="M 80 80 L 140 65" marker-end="url(#zksnark-arrow)"/>
  <rect class="zksnark-box-proc" x="140" y="40" width="70" height="40" rx="2"/>
  <text class="zksnark-text" x="175" y="64" text-anchor="middle">Setup</text>
  <path class="zksnark-arrow" d="M 210 60 L 240 60" marker-end="url(#zksnark-arrow)"/>
  <rect class="zksnark-box-proc" x="240" y="40" width="70" height="40" rx="2"/>
  <text class="zksnark-text" x="275" y="64" text-anchor="middle">Prove</text>
  <path class="zksnark-arrow" d="M 310 60 L 340 60" marker-end="url(#zksnark-arrow)"/>
  <rect class="zksnark-box-verify" x="340" y="40" width="70" height="40" rx="2"/>
  <text class="zksnark-text-dark" x="375" y="64" text-anchor="middle">Verify</text>
</svg>
</div>

### Homomorphic Encryption

**Homomorphic Encryption** allows computation directly on ciphertext, with decryption yielding the result of operations on plaintext.

<div style="background: rgba(52, 81, 178, 0.06); padding: 1.5em; border-radius: 8px; margin: 2em 0;">
<svg class="svg-2-17" viewBox="0 0 420 80" xmlns="http://www.w3.org/2000/svg" style="width: 100%; max-width: 500px; display: block; margin: 0 auto;">
<defs>
<style>
      .svg-2-17 .homo-text { font-family: arial, sans-serif; font-size: 10px; fill: #1f2937; }
      .svg-2-17 .homo-text-sm { font-family: arial, sans-serif; font-size: 9px; fill: #1f2937; }
      .svg-2-17 .homo-text-dark { font-family: arial, sans-serif; font-size: 10px; fill: #222; }
      .svg-2-17 .homo-text-sm-dark { font-family: arial, sans-serif; font-size: 9px; fill: #222; }
      .svg-2-17 .homo-box-trad { fill: rgba(220, 53, 69, 0.25); stroke: #333; stroke-width: 0.5; }
      .svg-2-17 .homo-box-homo { fill: rgba(52, 81, 178, 0.10); stroke: #ccc; stroke-width: 0.5; }
      .svg-2-17 .homo-box-app { fill: rgba(223, 105, 25, 0.08); stroke: #ccc; stroke-width: 0.5; }
      .svg-2-17 .homo-arrow { fill: none; stroke: #4c9be8; stroke-width: 0.5; }
    </style>
    <marker id="homo-arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
      <path d="M 0 0 L 6 3 L 0 6 z" fill="#4c9be8"/>
    </marker>
  </defs>
  <rect class="homo-box-trad" x="10" y="20" width="140" height="40" rx="2"/>
  <text class="homo-text-sm" x="80" y="36" text-anchor="middle">Traditional:</text>
  <text class="homo-text-sm" x="80" y="50" text-anchor="middle">E(a)+E(b)≠E(a+b)</text>
  <path class="homo-arrow" d="M 150 40 L 180 40" marker-end="url(#homo-arrow)"/>
  <rect class="homo-box-homo" x="180" y="20" width="140" height="40" rx="2"/>
  <text class="homo-text-sm-dark" x="250" y="36" text-anchor="middle">Homomorphic:</text>
  <text class="homo-text-sm-dark" x="250" y="50" text-anchor="middle">E(a)⊕E(b)=E(a+b)</text>
  <path class="homo-arrow" d="M 320 40 L 350 40" marker-end="url(#homo-arrow)"/>
  <rect class="homo-box-app" x="350" y="20" width="70" height="40" rx="2"/>
  <text class="homo-text-dark" x="385" y="44" text-anchor="middle">Private Comp</text>
</svg>
</div>

### Threshold Signature

Multiple parties jointly hold fragments of a private key, requiring t-of-n fragments to generate a valid signature.

<div style="background: rgba(52, 81, 178, 0.06); padding: 1.5em; border-radius: 8px; margin: 2em 0;">
<svg class="svg-2-18" viewBox="0 0 380 160" xmlns="http://www.w3.org/2000/svg" style="width: 100%; max-width: 450px; display: block; margin: 0 auto;">
<defs>
<style>
      .svg-2-18 .thresh-text { font-family: arial, sans-serif; font-size: 10px; fill: #1f2937; }
      .svg-2-18 .thresh-text-sm { font-family: arial, sans-serif; font-size: 9px; fill: #1f2937; }
      .svg-2-18 .thresh-text-dark { font-family: arial, sans-serif; font-size: 10px; fill: #222; }
      .svg-2-18 .thresh-text-sm-dark { font-family: arial, sans-serif; font-size: 9px; fill: #222; }
      .svg-2-18 .thresh-box-shard { fill: rgba(52, 81, 178, 0.10); stroke: #ccc; stroke-width: 0.5; }
      .svg-2-18 .thresh-box-success { fill: rgba(245, 194, 66, 0.30); stroke: #333; stroke-width: 0.5; }
      .svg-2-18 .thresh-box-fail { fill: rgba(220, 53, 69, 0.25); stroke: #333; stroke-width: 0.5; }
      .svg-2-18 .thresh-arrow { fill: none; stroke: #4c9be8; stroke-width: 0.5; }
    </style>
    <marker id="thresh-arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
      <path d="M 0 0 L 6 3 L 0 6 z" fill="#4c9be8"/>
    </marker>
  </defs>
  <rect class="thresh-box-shard" x="10" y="10" width="60" height="25" rx="2"/>
  <text class="thresh-text-dark" x="40" y="26" text-anchor="middle">Shard 1</text>
  <path class="thresh-arrow" d="M 70 22 L 130 37" marker-end="url(#thresh-arrow)"/>
  <rect class="thresh-box-shard" x="10" y="45" width="60" height="25" rx="2"/>
  <text class="thresh-text-dark" x="40" y="61" text-anchor="middle">Shard 2</text>
  <path class="thresh-arrow" d="M 70 57 L 130 57" marker-end="url(#thresh-arrow)"/>
  <rect class="thresh-box-shard" x="10" y="80" width="60" height="25" rx="2"/>
  <text class="thresh-text-dark" x="40" y="96" text-anchor="middle">Shard 3</text>
  <path class="thresh-arrow" d="M 70 92 L 130 77" marker-end="url(#thresh-arrow)"/>
  <rect class="thresh-box-success" x="130" y="40" width="80" height="40" rx="2"/>
  <text class="thresh-text-dark" x="170" y="56" text-anchor="middle">Any 3</text>
  <text class="thresh-text-dark" x="170" y="70" text-anchor="middle">Combine Sig</text>
  <rect class="thresh-box-shard" x="10" y="115" width="60" height="25" rx="2"/>
  <text class="thresh-text-dark" x="40" y="131" text-anchor="middle">Shard 4</text>
  <path class="thresh-arrow" d="M 70 127 L 130 117" marker-end="url(#thresh-arrow)"/>
  <rect class="thresh-box-shard" x="10" y="150" width="60" height="25" rx="2"/>
  <text class="thresh-text-dark" x="40" y="166" text-anchor="middle">Shard 5</text>
  <path class="thresh-arrow" d="M 70 162 L 130 137" marker-end="url(#thresh-arrow)"/>
  <rect class="thresh-box-fail" x="130" y="100" width="80" height="40" rx="2"/>
  <text class="thresh-text-sm" x="170" y="116" text-anchor="middle">≤2</text>
  <text class="thresh-text-sm" x="170" y="130" text-anchor="middle">Cannot sign</text>
</svg>
</div>

## Chapter Summary

<div class="ccbus-teacher-credits">
  <div class="ccbus-teacher-credits-avatar">
    <img src="../public/images/avatars/heroes/satoshi-driver.png" alt="Satoshi Driver" />
  </div>
  <div class="ccbus-teacher-credits-body">
    Taught by: <strong>Satoshi Driver</strong> — The "veteran driver" of cryptography — knows the route<br />
    <span style="font-size: 0.85em; color: var(--vp-c-text-3);">📚 The next chapter [Chapter 3: Cryptocurrency Fundamentals] will be taught by another CCBus guide.</span>
  </div>
</div>

<div class="chapter-footer">

Cryptography is the foundation of blockchain security. In this chapter, we learned about:

1. **Hash Functions**: One-way, deterministic, collision-resistant core security components
2. **Asymmetric Encryption**: Public/private key system, foundation of account systems
3. **Digital Signatures**: Key technology for transaction authorization and identity verification
4. **Merkle Trees**: Efficient data verification, supporting light nodes and SPV
5. **Advanced Concepts**: Zero-knowledge proofs, homomorphic encryption, and other cutting-edge technologies

These cryptographic technologies together build the trust foundation of blockchain, enabling decentralized systems to operate securely without centralized authorities.

**Next Chapter Preview:**
In Chapter 3, we will learn about cryptocurrency fundamentals, understanding the operation mechanisms of mainstream cryptocurrencies like Bitcoin and Ethereum, and how to securely acquire and store cryptocurrencies.

</div>

**Navigation:**
- **Previous Chapter:** [Chapter 1: Blockchain Fundamentals](/en/chapter-1)
- **Next Chapter:** [Chapter 3: Cryptocurrency Fundamentals](/en/chapter-3)
- **Back to Contents:** [CCBook Contents](/en/)
