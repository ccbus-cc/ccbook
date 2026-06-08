---
title: "Chapter 9: Advanced Cryptography"
---

# Chapter 9: Advanced Cryptography

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

## 9.6 Post-Quantum Cryptography

Cryptography resistant to quantum computer attacks.

<div class="chapter-footer">

### Key Takeaways
- ZK proofs enable privacy without sacrificing verification
- MPC enables collaborative computation without trust
- Quantum-resistant cryptography is essential for long-term security

</div>
