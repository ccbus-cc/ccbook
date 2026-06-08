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


## 9.0 2025-2026 视角:为什么这一章要重新读

Frontier cryptography in 2025-2026 achieved three big things: **ZK performance breakthroughs (proof times from minutes to sub-second), FHE practical use (Zama fhEVM), MPC wallets at scale (Fireblocks, Safe, Lit Protocol)**. This chapter covers both the math and the real product forms.

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
