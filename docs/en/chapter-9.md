---
title: "Chapter 9: Advanced Cryptography"
---

<div class="ccbus-hero">
  <div class="ccbus-hero-avatar">
    <img src="../public/images/avatars/heroes/ether-engineer.png" alt="Ether Engineer" />
  </div>
  <div class="ccbus-hero-content">
    <h1>Chapter 9: Advanced Cryptography</h1>
    <div class="ccbus-teacher-label">🎙️ 本章讲师:<strong>Ether Engineer</strong> · The "systems engineer" of advanced cryptography</div>
  </div>
</div>

<div class="chapter-intro">

**Difficulty Level:** 🔴 Advanced
**Estimated Learning Time:** 6-7 hours

**Chapter Objectives:**
- Explore cutting-edge cryptographic technologies
- Understand zero-knowledge proofs
- Learn multi-party computation
- Master post-quantum cryptography

</div>


## 9.0 2025-2026 Perspective: Why Reread This Chapter

Frontier cryptography in 2025-2026 achieved three big things: ZK performance breakthroughs, FHE practical use, and MPC wallets at scale.

1. **ZK performance breakthrough (2024-2025 industrial landing)**:
   - **Plonky2** (2022): ~100ms proofs
   - **Plonky3** (2024-09): sub-second proofs, O(1) recursive verification
   - **SP1 (2024)**: zkVM with Rust, VM-friendly, dramatically lower developer bar
   - **RISC Zero zkVM**: general-purpose zkVM, can prove arbitrary Rust/C++ programs
   - **2026 reality**: ZKP proof time approaches L1 block time (within 12s), user doesn't perceive it

2. **FHE (Fully Homomorphic Encryption) practical use**:
   - **Zama fhEVM** (2024): Solidity contracts can operate directly on encrypted data
   - **Fhenix**: Zama fhEVM-based privacy public chain
   - **Inco Network**: EVM-compatible FHE chain
   - **2026 applications**: on-chain voting (ballots always encrypted), on-chain auction (bids hidden), private DeFi (balance/tx invisible)

3. **MPC wallet large-scale landing**:
   - **Fireblocks** (institutional): serves 1800+ institutions, $10T+ assets
   - **Safe** (retail/team): ERC-4337 + MPC, 2-of-3 multi-sig EOA
   - **Lit Protocol**: PKP (Programmable Key Pairs), key split to distributed nodes
   - **Privy** (consumer): keyless onboarding, Web2 users create wallet in one click
   - **Turnkey**: developer-friendly MPC infrastructure

4. **Post-Quantum (PQC) enters blockchain**:
   - NIST FIPS 203/204/205 (released 2024-08)
   - Major L1s evaluating integration (Ethereum EIP roadmap, EOS early migration, Litecoin testing)
   - Main algorithms: **ML-KEM** (key encapsulation), **ML-DSA** (Dilithium, signature), **SLH-DSA** (SPHINCS+, hash signature)

5. **BLS aggregation meets zk-SNARK hybrid**:
   - Validator signature aggregation (BLS12-381), Ethereum beacon chain one aggregated signature per epoch
   - **Zcash Halo2**: recursive SNARK, no trusted setup
   - **Aleo**: zkPass for on-chain identity protection

### 🖥️ Real-world Example: CCBus Batch Wallet Cryptography

CCBus's batch wallet generation is essentially MPC-friendly key derivation — each wallet's mnemonic is derived from a single entropy source via BIP-32/BIP-39/BIP-44 standards, with cryptographic-grade entropy separation.

![CCBus batch wallet generation](../public/images/chapters/zh/batch-generate-wallet.png)

*Figure 9-1: CCBus batch wallet generation. Behind the scenes: BIP-39 mnemonic standard (2048-word list) and BIP-32 HD-wallet derivation tree. This **Hierarchical Deterministic Wallet** model is the de facto standard for 2026 crypto wallets.*

## 9.1 Zero-Knowledge Proofs

Prove knowledge of information without revealing the information itself.

### zk-SNARKs
**Zero-Knowledge Succinct Non-Interactive Arguments of Knowledge**
- Used in Zcash for private transactions
- Requires trusted setup

### zk-STARKs
**Zero-Knowledge Scalable Transparent Arguments of Knowledge**
- No trusted setup required
- Larger proof sizes

## 9.2 Secure Multi-Party Computation (MPC)

Multiple parties jointly compute a function while keeping inputs private.

## 9.3 Threshold Signatures

Distribute signing power across multiple parties (m-of-n).

## 9.4 Homomorphic Encryption

Perform computations on encrypted data without decrypting.

## 9.5 Verifiable Random Functions (VRF)

Generate provably random and verifiable outputs.



### 9.7 Fully Homomorphic Encryption (FHE): From Theory to Production

![CCBus batch wallet — demonstrates MPC multi-party key derivation](../public/images/chapters/zh/batch-generate-wallet.png)

*图: CCBus batch wallet — demonstrates MPC multi-party key derivation*


**What is FHE?**
Fully Homomorphic Encryption (FHE) allows computation directly on ciphertext without decryption.

**Difficulties of FHE**:
- **Low efficiency**: traditional FHE is 100-1000x slower than plaintext computation
- **Ciphertext expansion**: 1KB plaintext may become 100KB after encryption
- **Noise accumulation**: each computation increases noise, requiring expensive "bootstrapping"

**2024-2026 breakthroughs**:

- **Zama fhEVM (2024)**: uses TFHE scheme, enables Solidity contracts to operate on encrypted data
- **Fhenix (2024)**: Zama fhEVM-based privacy public chain
- **Inco Network (2024)**: EVM-compatible FHE chain
- **Sunscreen (2024)**: FHE library, Rust implementation
- **Privasea (2025)**: FHE + machine learning

**FHE killer applications in blockchain**:

1. **On-chain private voting**
   - Votes always encrypted, anyone can verify tally but can't see individual votes
   - Use ZKP to prove tally correctness
   - **2026 real projects**: Snapshot v3 (private voting), Aragon (private DAO voting)

2. **On-chain private auction**
   - Bid prices always encrypted, avoid sniping
   - Settlement uses FHE + ZK to jointly verify winner
   - **2026 real projects**: Paradigm, Fhenix

3. **Private DeFi**
   - User balances, transaction amounts always encrypted
   - AMM computes on encrypted data, output decrypted for user
   - **2026 real projects**: Fhenix Helix, Penumbra

4. **On-chain identity verification**
   - User submits "age > 18" encrypted proof
   - Contract verifies with FHE, no need to know exact age
   - **2026 real projects**: Worldcoin (based on ZK + FHE hybrid)

**FHE + ZK hybrid architecture**:

Most common design:
- User encrypts data with FHE
- On-chain contract verifies with FHE
- Use ZKP to prove "I did the right operation on encrypted data"
- User locally decrypts result with private key

**FHE engineering challenges**:
- **Computation overhead**: an ERC-20 transfer under FHE needs 1000x gas
- **Precompile contracts**: need hardware acceleration (FHE ASIC)
- **State management**: FHE state cannot be indexed by existing EVM
- **Developer barrier**: Solidity contracts need to redesign data structures

**FHE future (2026-2030 prediction)**:
- 2026: FHE mainly on privacy L1 (Fhenix, Inco), regular EVM chains can't bear
- 2027-2028: FHE-dedicated hardware (FHE ASIC) matures, 10-100x efficiency improvement
- 2028-2030: FHE precompile contracts enter mainstream EVM chains
- 2030+: FHE becomes "default option for private DeFi"

## 9.6 Post-Quantum Cryptography

Cryptography resistant to quantum computer attacks.

<div class="ccbus-teacher-credits">
  <div class="ccbus-teacher-credits-avatar">
    <img src="../public/images/avatars/heroes/ether-engineer.png" alt="Ether Engineer" />
  </div>
  <div class="ccbus-teacher-credits-body">
    Taught by: <strong>Ether Engineer</strong> — The "systems engineer" of advanced cryptography<br />
    <span style="font-size: 0.85em; color: var(--vp-c-text-3);">📚 The next chapter [Chapter 10: DeFi — Decentralized Finance] will be taught by another CCBus guide.</span>
  </div>
</div>

<div class="chapter-footer">

### Key Takeaways
- ZK proofs enable privacy without sacrificing verification
- MPC enables collaborative computation without trust
- Quantum-resistant cryptography is essential for long-term security

</div>
