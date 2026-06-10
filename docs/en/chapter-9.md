---
title: "Chapter 9: Advanced Cryptography"
---

<div class="ccbus-hero">
  <div class="ccbus-hero-avatar">
    <img src="../public/images/avatars/heroes/ether-engineer.png" alt="Ether Engineer" />
  </div>
  <div class="ccbus-hero-content">
    <h1>Chapter 9: Advanced Cryptography</h1>
    <div class="ccbus-teacher-label">🎙️ Taught by:<strong>Ether Engineer</strong> · The "systems engineer" of advanced cryptography</div>
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


<div style="background: rgba(52, 81, 178, 0.06); padding: 1.5em; border-radius: 4px; margin: 2em 0;">
<svg class="svg-9-0" viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg" style="width: 100%; max-width: 900px; display: block; margin: 0 auto;">
<defs>
<style>
.svg-9-0 .zkp-title { font-family: arial, sans-serif; font-size: 16px; fill: #1f2937; font-weight: bold; }
.svg-9-0 .zkp-text { font-family: arial, sans-serif; font-size: 11px; fill: #1f2937; }
.svg-9-0 .zkp-small { font-family: arial, sans-serif; font-size: 9px; fill: #b0a090; }
.svg-9-0 .zkp-cave { fill: rgba(78, 93, 108, 0.3); stroke: #4e5d6c; stroke-width: 2; }
.svg-9-0 .zkp-path { fill: none; stroke: #4c9be8; stroke-width: 2; }
.svg-9-0 .zkp-door { fill: rgba(220, 53, 69, 0.5); stroke: #dc3545; stroke-width: 2; }
.svg-9-0 .zkp-person { fill: #df6919; }
.svg-9-0 .zkp-arrow { stroke: #5cb85c; stroke-width: 2; fill: none; marker-end: url(#arrowZKP); }
</style>
<marker id="arrowZKP" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
<path d="M0,0 L0,6 L9,3 z" fill="#5cb85c"/>
</marker>
</defs>
<text x="400" y="25" text-anchor="middle" class="zkp-title">ZKPvia典caseson：Alibaba巴巴openinghole</text>
<text x="400" y="45" text-anchor="middle" class="zkp-small">Proverknowpassword，butnotransparentrevealpasswordin容</text>
<ellipse cx="400" cy="250" rx="250" ry="180" class="zkp-cave"/>
<path d="M 400,70 L 400,150" class="zkp-path" stroke-width="30"/>
<text x="400" y="95" text-anchor="middle" class="zkp-text">inputpocket</text>
<path d="M 400,150 Q 300,200 250,300" class="zkp-path" stroke-width="20"/>
<path d="M 400,150 Q 500,200 550,300" class="zkp-path" stroke-width="20"/>
<text x="200" y="280" class="zkp-text">path A</text>
<text x="600" y="280" class="zkp-text">path B</text>
<path d="M 250,300 Q 300,380 400,400" class="zkp-path" stroke-width="20"/>
<path d="M 550,300 Q 500,380 400,400" class="zkp-path" stroke-width="20"/>
<rect x="385" y="390" width="30" height="40" class="zkp-door" rx="3"/>
<text x="400" y="415" text-anchor="middle" class="zkp-text" font-size="10" fill="#1f2937">🔒</text>
<text x="400" y="450" text-anchor="middle" class="zkp-text">魔lawdoor（Needpassword）</text>
<circle cx="400" cy="120" r="15" class="zkp-person"/>
<text x="400" y="125" text-anchor="middle" class="zkp-text" font-size="12" fill="#1f2937">P</text>
<text x="465" y="125" class="zkp-text">Prover (Prover)</text>
<circle cx="400" cy="40" r="15" fill="#4c9be8"/>
<text x="400" y="45" text-anchor="middle" class="zkp-text" font-size="12" fill="#1f2937">V</text>
<text x="465" y="45" class="zkp-text">Validator (Verifier)</text>
<rect x="20" y="70" width="320" height="160" fill="rgba(52, 81, 178, 0.10)" stroke="#4c9be8" stroke-width="2" rx="6"/>
<text x="180" y="90" text-anchor="middle" class="zkp-text" font-weight="bold">🔄 Protocolflow：</text>
<text x="30" y="110" class="zkp-text">1️⃣ P Enteropeninghole，V atinputpocketetc.treat</text>
<text x="30" y="130" class="zkp-text">2️⃣ P Random Sel.path A or B Enter</text>
<text x="30" y="150" class="zkp-text">3️⃣ V withmachinerequire P frompath A or B outputincoming</text>
<text x="30" y="170" class="zkp-text">4️⃣ e.g.result P knowpassword，totalcanfromindicatedecidepathoutputincoming</text>
<text x="30" y="190" class="zkp-text">5️⃣ e.g.result P noknowpassword，onlyyes 50% ProbabilisticSuccess</text>
<text x="30" y="210" class="zkp-text">6️⃣ heavyreply n times，work弊Probabilisticdropto (1/2)^n</text>
<rect x="460" y="70" width="320" height="160" fill="rgba(92, 184, 92, 0.10)" stroke="#5cb85c" stroke-width="2" rx="6"/>
<text x="620" y="90" text-anchor="middle" class="zkp-text" font-weight="bold">✅ Zero-Knowledgenaturequality：</text>
<text x="470" y="110" class="zkp-text">• <tspan font-weight="bold">完备性</tspan>：知道密码的人总能证明</text>
<text x="470" y="130" class="zkp-text">• <tspan font-weight="bold">可靠性</tspan>：不知道密码的人无法伪造</text>
<text x="470" y="150" class="zkp-text">• <tspan font-weight="bold">零知识</tspan>：V 不知道密码是什么</text>
<text x="470" y="180" class="zkp-small">V onlyknow：P exactrealknowpassword</text>
<text x="470" y="200" class="zkp-small">V noknow：passwordconcreteyes什么</text>
<text x="470" y="220" class="zkp-small">V NonelawtowardotherpersonProof：没yesschoolto任whatinfo</text>
<rect x="20" y="460" width="760" height="30" fill="rgba(223, 105, 25, 0.08)" stroke="#df6919" stroke-width="1" rx="4"/>
<text x="30" y="480" class="zkp-text">💡 BlockchainApp：ProofTransactionvalid（Balancefoot够、Signpositiveexact）butnotransparentrevealconcreteBalance、receivereceiveagentetc.privateinfo</text>
</svg>
</div>

<div style="background: rgba(52, 81, 178, 0.06); padding: 1.5em; border-radius: 4px; margin: 2em 0;">
<svg class="svg-9-1" viewBox="0 0 900 550" xmlns="http://www.w3.org/2000/svg" style="width: 100%; max-width: 1000px; display: block; margin: 0 auto;">
<defs>
<style>
.svg-9-1 .snark-title { font-family: arial, sans-serif; font-size: 16px; fill: #1f2937; font-weight: bold; }
.svg-9-1 .snark-subtitle { font-family: arial, sans-serif; font-size: 13px; fill: #1f2937; font-weight: bold; }
.svg-9-1 .snark-text { font-family: arial, sans-serif; font-size: 11px; fill: #1f2937; }
.svg-9-1 .snark-small { font-family: arial, sans-serif; font-size: 9px; fill: #b0a090; }
.svg-9-1 .snark-box { fill: rgba(52, 81, 178, 0.10); stroke: #4c9be8; stroke-width: 2; }
.svg-9-1 .snark-setup { fill: rgba(223, 105, 25, 0.08); stroke: #df6919; stroke-width: 2; }
.svg-9-1 .snark-prove { fill: rgba(92, 184, 92, 0.10); stroke: #5cb85c; stroke-width: 2; }
.svg-9-1 .snark-arrow { stroke: #1f2937; stroke-width: 2; fill: none; marker-end: url(#arrowSnark); }
</style>
<marker id="arrowSnark" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
<path d="M0,0 L0,6 L9,3 z" fill="#1f2937"/>
</marker>
</defs>
<text x="450" y="25" text-anchor="middle" class="snark-title">zk-SNARK vs zk-STARK Compare</text>
<text x="450" y="45" text-anchor="middle" class="snark-small">两typePrimaryflowZKPSystem</text>
<rect x="50" y="70" width="380" height="430" class="snark-box" rx="8"/>
<text x="240" y="95" text-anchor="middle" class="snark-subtitle">zk-SNARK</text>
<text x="240" y="115" text-anchor="middle" class="snark-small">Succinct Non-interactive ARgument of Knowledge</text>
<rect x="60" y="130" width="360" height="100" class="snark-setup" rx="6"/>
<text x="240" y="150" text-anchor="middle" class="snark-text" font-weight="bold">🔧 Trusted Setup (Trusted Setup)</text>
<text x="70" y="170" class="snark-text">• Need CRS (Common Reference String)</text>
<text x="70" y="186" class="snark-text">• generateProofKey (pk) &VerifyKey (vk)</text>
<text x="70" y="202" class="snark-text">• mustwhiskerburn"yes毒废ingredient" (toxic waste)</text>
<text x="70" y="218" class="snark-text">• At Risk：e.g.resultleakrevealcanfakemakeProof</text>
<rect x="60" y="245" width="360" height="110" class="snark-prove" rx="6"/>
<text x="240" y="265" text-anchor="middle" class="snark-text" font-weight="bold">✅ Pros</text>
<text x="70" y="285" class="snark-text">• Proof尺寸Small：~200 Bytes</text>
<text x="70" y="301" class="snark-text">• VerifyspeedFast：~5-10 ms</text>
<text x="70" y="317" class="snark-text">• Gas CostLow：EthereumUp ~240k gas</text>
<text x="70" y="333" class="snark-text">• Techmature：Zcash、Tornado Cash</text>
<text x="70" y="349" class="snark-text">• SupportgeneralCalc</text>
<rect x="60" y="370" width="360" height="120" fill="rgba(220, 53, 69, 0.2)" stroke="#dc3545" stroke-width="2" rx="6"/>
<text x="240" y="390" text-anchor="middle" class="snark-text" font-weight="bold">⚠️  Cons</text>
<text x="70" y="410" class="snark-text">• NeedTrusted Setup（perCircuitindependent）</text>
<text x="70" y="426" class="snark-text">• noQuantum-Resistantattack（based onElliptic Curve）</text>
<text x="70" y="442" class="snark-text">• settingsleakrevealAt Risk</text>
<text x="70" y="458" class="snark-text">• ProofgenerateSlow：how manysectohow manymin</text>
<text x="70" y="474" class="snark-text">• Groth16: mostFastbutperCircuitneedNewsettings</text>
<rect x="470" y="70" width="380" height="430" class="snark-box" rx="8"/>
<text x="660" y="95" text-anchor="middle" class="snark-subtitle">zk-STARK</text>
<text x="660" y="115" text-anchor="middle" class="snark-small">Scalable Transparent ARgument of Knowledge</text>
<rect x="480" y="130" width="360" height="100" fill="rgba(92, 184, 92, 0.15)" stroke="#5cb85c" stroke-width="2" rx="6"/>
<text x="660" y="150" text-anchor="middle" class="snark-text" font-weight="bold">🔓 NoneneedTrusted Setup (Transparent)</text>
<text x="490" y="170" class="snark-text">• usePublicwithmachinenature</text>
<text x="490" y="186" class="snark-text">• based onHashFunction（e.g. Rescue）</text>
<text x="490" y="202" class="snark-text">• None"yes毒废ingredient"At Risk</text>
<text x="490" y="218" class="snark-text">• moreDecentralization&safe</text>
<rect x="480" y="245" width="360" height="110" class="snark-prove" rx="6"/>
<text x="660" y="265" text-anchor="middle" class="snark-text" font-weight="bold">✅ Pros</text>
<text x="490" y="285" class="snark-text">• NoneneedTrusted Setup</text>
<text x="490" y="301" class="snark-text">• Quantum-Resistantattack（based onHash）</text>
<text x="490" y="317" class="snark-text">• ProofgenerateFast：Heightparallelify</text>
<text x="490" y="333" class="snark-text">• Scalabilitygood：processLargeCalc</text>
<text x="490" y="349" class="snark-text">• project：StarkNet、StarkEx</text>
<rect x="480" y="370" width="360" height="120" fill="rgba(220, 53, 69, 0.2)" stroke="#dc3545" stroke-width="2" rx="6"/>
<text x="660" y="390" text-anchor="middle" class="snark-text" font-weight="bold">⚠️  Cons</text>
<text x="490" y="410" class="snark-text">• Proof尺寸Large：~100-200 KB</text>
<text x="490" y="426" class="snark-text">• VerifyTimelong：~50-100 ms</text>
<text x="490" y="442" class="snark-text">• Gas CostHigh：EthereumUp ~1-5M gas</text>
<text x="490" y="458" class="snark-text">• TechmoreNew，ecoGrowthMedium</text>
<text x="490" y="474" class="snark-text">• chainUpVerifyCost昂贵</text>
<rect x="50" y="515" width="400" height="25" fill="rgba(52, 81, 178, 0.15)" stroke="#4c9be8" stroke-width="1" rx="4"/>
<text x="60" y="533" class="snark-text">📊 zk-SNARK App：Zcash, Tornado Cash, Polygon zkEVM</text>
<rect x="500" y="515" width="350" height="25" fill="rgba(92, 184, 92, 0.15)" stroke="#5cb85c" stroke-width="1" rx="4"/>
<text x="510" y="533" class="snark-text">📊 zk-STARK App：StarkNet, StarkEx (dYdX, Sorare)</text>
</svg>
</div>

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


<div style="background: rgba(52, 81, 178, 0.06); padding: 1.5em; border-radius: 4px; margin: 2em 0;">
<svg class="svg-9-4" viewBox="0 0 800 490" xmlns="http://www.w3.org/2000/svg" style="width: 100%; max-width: 900px; display: block; margin: 0 auto;">
<defs>
<style>
.svg-9-4 .tss-title { font-family: arial, sans-serif; font-size: 16px; fill: #1f2937; font-weight: bold; }
.svg-9-4 .tss-text { font-family: arial, sans-serif; font-size: 11px; fill: #1f2937; }
.svg-9-4 .tss-small { font-family: arial, sans-serif; font-size: 9px; fill: #b0a090; }
.svg-9-4 .tss-party { fill: rgba(52, 81, 178, 0.15); stroke: #4c9be8; stroke-width: 2; }
.svg-9-4 .tss-active { fill: rgba(92, 184, 92, 0.15); stroke: #5cb85c; stroke-width: 3; }
.svg-9-4 .tss-inactive { fill: rgba(78, 93, 108, 0.2); stroke: #4e5d6c; stroke-width: 2; stroke-dasharray: 5,5; }
.svg-9-4 .tss-sig { fill: rgba(223, 105, 25, 0.12); stroke: #df6919; stroke-width: 2; }
</style>
</defs>
<text x="400" y="25" text-anchor="middle" class="tss-title">Threshold Sig (Threshold Signature) - 3-of-5 Example</text>
<text x="400" y="45" text-anchor="middle" class="tss-small">5 param&placesharedPrivate Key，Any 3 placegenerableSign</text>
<rect x="50" y="70" width="700" height="130" fill="rgba(52, 81, 178, 0.07)" stroke="#4c9be8" stroke-width="2" stroke-dasharray="5,5" rx="8"/>
<text x="400" y="95" text-anchor="middle" class="tss-text" font-weight="bold">Phase 1️⃣：Distributed Keygenerate (DKG)</text>
<circle cx="150" cy="150" r="30" class="tss-party"/>
<text x="150" y="155" text-anchor="middle" class="tss-text">P₁</text>
<circle cx="280" cy="150" r="30" class="tss-party"/>
<text x="280" y="155" text-anchor="middle" class="tss-text">P₂</text>
<circle cx="410" cy="150" r="30" class="tss-party"/>
<text x="410" y="155" text-anchor="middle" class="tss-text">P₃</text>
<circle cx="540" cy="150" r="30" class="tss-party"/>
<text x="540" y="155" text-anchor="middle" class="tss-text">P₄</text>
<circle cx="670" cy="150" r="30" class="tss-party"/>
<text x="670" y="155" text-anchor="middle" class="tss-text">P₅</text>
<text x="150" y="195" text-anchor="middle" class="tss-small">sk_share₁</text>
<text x="280" y="195" text-anchor="middle" class="tss-small">sk_share₂</text>
<text x="410" y="195" text-anchor="middle" class="tss-small">sk_share₃</text>
<text x="540" y="195" text-anchor="middle" class="tss-small">sk_share₄</text>
<text x="670" y="195" text-anchor="middle" class="tss-small">sk_share₅</text>
<rect x="250" y="115" width="300" height="20" fill="rgba(223, 105, 25, 0.12)" stroke="#df6919" stroke-width="1" rx="4"/>
<text x="400" y="128" text-anchor="middle" class="tss-small" fill="#df6919">Public Key pk（allpersonsharedagreeunitePublic Key）</text>
<rect x="50" y="220" width="700" height="220" fill="rgba(92, 184, 92, 0.07)" stroke="#5cb85c" stroke-width="2" stroke-dasharray="5,5" rx="8"/>
<text x="400" y="245" text-anchor="middle" class="tss-text" font-weight="bold">Phase 2️⃣：Threshold Siggenerate（3 placeparam&：P₁, P₃, P₅）</text>
<circle cx="200" cy="310" r="30" class="tss-active"/>
<text x="200" y="315" text-anchor="middle" class="tss-text">P₁</text>
<text x="200" y="350" text-anchor="middle" class="tss-small" fill="#5cb85c">✓ param&</text>
<circle cx="340" cy="310" r="30" class="tss-inactive"/>
<text x="340" y="315" text-anchor="middle" class="tss-text">P₂</text>
<text x="340" y="350" text-anchor="middle" class="tss-small" fill="#4e5d6c">✗ offline</text>
<circle cx="480" cy="310" r="30" class="tss-active"/>
<text x="480" y="315" text-anchor="middle" class="tss-text">P₃</text>
<text x="480" y="350" text-anchor="middle" class="tss-small" fill="#5cb85c">✓ param&</text>
<circle cx="620" cy="310" r="30" class="tss-inactive"/>
<text x="620" y="315" text-anchor="middle" class="tss-text">P₄</text>
<text x="620" y="350" text-anchor="middle" class="tss-small" fill="#4e5d6c">✗ reject</text>
<circle cx="200" cy="390" r="30" class="tss-active"/>
<text x="200" y="395" text-anchor="middle" class="tss-text">P₅</text>
<text x="200" y="430" text-anchor="middle" class="tss-small" fill="#5cb85c">✓ param&</text>
<rect x="320" y="370" width="260" height="60" class="tss-sig" rx="8"/>
<text x="450" y="395" text-anchor="middle" class="tss-text" font-weight="bold">🔏 finalSign</text>
<text x="450" y="415" text-anchor="middle" class="tss-text">σ = Sign(msg, {sk₁, sk₃, sk₅})</text>
<line x1="230" y1="310" x2="320" y2="390" stroke="#5cb85c" stroke-width="2" fill="none"/>
<line x1="480" y1="340" x2="450" y2="370" stroke="#5cb85c" stroke-width="2" fill="none"/>
<line x1="230" y1="390" x2="320" y2="400" stroke="#5cb85c" stroke-width="2" fill="none"/>
<rect x="50" y="445" width="700" height="35" fill="rgba(223, 105, 25, 0.08)" stroke="#df6919" stroke-width="1" rx="4"/>
<text x="60" y="465" class="tss-text">💡 criticalfeature：NoneneedrefactorfullPrivate Key sk，param&placecollabgenerateSignshare，aggregatepostgettovalidSign</text>
</svg>
</div>

## 9.4 Homomorphic Encryption

Perform computations on encrypted data without decrypting.


<div style="background: rgba(52, 81, 178, 0.06); padding: 1.5em; border-radius: 4px; margin: 2em 0;">
<svg class="svg-9-3" viewBox="0 0 850 450" xmlns="http://www.w3.org/2000/svg" style="width: 100%; max-width: 950px; display: block; margin: 0 auto;">
<defs>
<style>
.svg-9-3 .he-title { font-family: arial, sans-serif; font-size: 16px; fill: #1f2937; font-weight: bold; }
.svg-9-3 .he-text { font-family: arial, sans-serif; font-size: 11px; fill: #1f2937; }
.svg-9-3 .he-small { font-family: arial, sans-serif; font-size: 9px; fill: #b0a090; }
.svg-9-3 .he-box { fill: rgba(52, 81, 178, 0.10); stroke: #4c9be8; stroke-width: 2; }
.svg-9-3 .he-encrypt { fill: rgba(223, 105, 25, 0.08); stroke: #df6919; stroke-width: 2; }
.svg-9-3 .he-compute { fill: rgba(92, 184, 92, 0.10); stroke: #5cb85c; stroke-width: 2; }
.svg-9-3 .he-arrow { stroke: #1f2937; stroke-width: 2; fill: none; marker-end: url(#arrowHE); }
</style>
<marker id="arrowHE" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
<path d="M0,0 L0,6 L9,3 z" fill="#1f2937"/>
</marker>
</defs>
<text x="425" y="25" text-anchor="middle" class="he-title">Homomorphic Enc. (Homomorphic Encryption) workMechanism</text>
<text x="425" y="45" text-anchor="middle" class="he-small">atEncryptDataUpCalc，Decryptpostgettopositiveexactresult</text>
<rect x="50" y="80" width="180" height="100" class="he-encrypt" rx="8"/>
<text x="140" y="105" text-anchor="middle" class="he-text" font-weight="bold">🔢 PlaintextData</text>
<text x="140" y="130" text-anchor="middle" class="he-text" font-size="14">a = 5</text>
<text x="140" y="150" text-anchor="middle" class="he-text" font-size="14">b = 3</text>
<text x="140" y="170" text-anchor="middle" class="he-small">Clientsupportyes</text>
<line x1="230" y1="130" x2="290" y2="130" class="he-arrow"/>
<text x="260" y="120" text-anchor="middle" class="he-small">Encrypt(pk)</text>
<rect x="290" y="80" width="180" height="100" class="he-box" rx="8"/>
<text x="380" y="105" text-anchor="middle" class="he-text" font-weight="bold">🔒 CiphertextData</text>
<text x="380" y="130" text-anchor="middle" class="he-text" font-size="14">E(5) = 0x7a3f...</text>
<text x="380" y="150" text-anchor="middle" class="he-text" font-size="14">E(3) = 0x9b2c...</text>
<text x="380" y="170" text-anchor="middle" class="he-small">emitsendtoserviceer</text>
<line x1="380" y1="180" x2="380" y2="230" class="he-arrow"/>
<rect x="290" y="230" width="180" height="100" class="he-compute" rx="8"/>
<text x="380" y="255" text-anchor="middle" class="he-text" font-weight="bold">⚙️ CiphertextCalc</text>
<text x="380" y="280" text-anchor="middle" class="he-text">E(5) ⊕ E(3)</text>
<text x="380" y="300" text-anchor="middle" class="he-text">= E(5 + 3)</text>
<text x="380" y="320" text-anchor="middle" class="he-small">serviceernoknowPlaintext</text>
<line x1="290" y1="280" x2="230" y2="280" class="he-arrow"/>
<text x="260" y="270" text-anchor="middle" class="he-small">returnCiphertextresult</text>
<rect x="50" y="230" width="180" height="100" class="he-encrypt" rx="8"/>
<text x="140" y="255" text-anchor="middle" class="he-text" font-weight="bold">🔓 Decryptresult</text>
<text x="140" y="280" text-anchor="middle" class="he-text">Decrypt(sk, E(8))</text>
<text x="140" y="300" text-anchor="middle" class="he-text" font-size="14">= 8 ✓</text>
<text x="140" y="320" text-anchor="middle" class="he-small">ClientDecryptVerify</text>
<rect x="520" y="80" width="280" height="250" fill="rgba(52, 81, 178, 0.07)" stroke="#4c9be8" stroke-width="2" stroke-dasharray="5,5" rx="8"/>
<text x="660" y="105" text-anchor="middle" class="he-text" font-weight="bold">agreestatenaturequality</text>
<text x="530" y="130" class="he-text">• <tspan font-weight="bold">加法同态</tspan>：</text>
<text x="540" y="150" class="he-text">E(a) ⊕ E(b) = E(a + b)</text>
<text x="530" y="175" class="he-text">• <tspan font-weight="bold">乘法同态</tspan>：</text>
<text x="540" y="195" class="he-text">E(a) ⊗ E(b) = E(a × b)</text>
<text x="530" y="220" class="he-text">• <tspan font-weight="bold">全同态</tspan> (FHE)：</text>
<text x="540" y="240" class="he-text">SupportAnyCalcCircuit</text>
<text x="540" y="260" class="he-text">f(E(a), E(b)) = E(f(a, b))</text>
<text x="530" y="285" class="he-small">calclaw：Paillier (addlaw), RSA (multiplylaw),</text>
<text x="530" y="305" class="he-small">CKKS, TFHE (Fully)</text>
<rect x="50" y="360" width="750" height="70" fill="rgba(92, 184, 92, 0.10)" stroke="#5cb85c" stroke-width="2" rx="8"/>
<text x="425" y="385" text-anchor="middle" class="he-text" font-weight="bold">🌐 BlockchainUse Cases</text>
<text x="60" y="405" class="he-text">• <tspan font-weight="bold">隐私投票</tspan>：加密选票，同态计数，公开结果</text>
<text x="60" y="420" class="he-text">• <tspan font-weight="bold">私密竞价</tspan>：加密竞价，同态比较，找出最高价</text>
</svg>
</div>

## 9.5 Verifiable Random Functions (VRF)

Generate provably random and verifiable outputs.



### 9.7 Fully Homomorphic Encryption (FHE): From Theory to Production

![CCBus batch wallet — demonstrates MPC multi-party key derivation](../public/images/chapters/zh/batch-generate-wallet.png)

*Figure: CCBus batch wallet — demonstrates MPC multi-party key derivation*


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

<div style="background: rgba(52, 81, 178, 0.06); padding: 1.5em; border-radius: 4px; margin: 2em 0;">
<svg class="svg-9-2" viewBox="0 0 850 520" xmlns="http://www.w3.org/2000/svg" style="width: 100%; max-width: 950px; display: block; margin: 0 auto;">
<defs>
<style>
.svg-9-2 .mpc-title { font-family: arial, sans-serif; font-size: 16px; fill: #1f2937; font-weight: bold; }
.svg-9-2 .mpc-text { font-family: arial, sans-serif; font-size: 11px; fill: #1f2937; }
.svg-9-2 .mpc-small { font-family: arial, sans-serif; font-size: 9px; fill: #b0a090; }
.svg-9-2 .mpc-party { fill: rgba(52, 81, 178, 0.15); stroke: #4c9be8; stroke-width: 2; }
.svg-9-2 .mpc-secret { fill: rgba(220, 53, 69, 0.3); stroke: #dc3545; stroke-width: 2; }
.svg-9-2 .mpc-result { fill: rgba(92, 184, 92, 0.15); stroke: #5cb85c; stroke-width: 2; }
.svg-9-2 .mpc-line { stroke: #1f2937; stroke-width: 1.5; stroke-dasharray: 5,5; fill: none; }
</style>
</defs>
<text x="425" y="25" text-anchor="middle" class="mpc-title">MPC (MPC) Example：percent10Krich翁issue</text>
<text x="425" y="45" text-anchor="middle" class="mpc-small">Alice & Bob thoughtknowwhomorerichyes，butnothoughttransparentrevealeachfromfinancerichvalue</text>
<circle cx="200" cy="150" r="60" class="mpc-party"/>
<text x="200" y="145" text-anchor="middle" class="mpc-text" font-size="14" fill="#1f2937">👨 Alice</text>
<text x="200" y="165" text-anchor="middle" class="mpc-text">financerich：$2M</text>
<rect x="140" y="180" width="120" height="30" class="mpc-secret" rx="4"/>
<text x="200" y="200" text-anchor="middle" class="mpc-text" fill="#dc3545">🔒 私denseInput</text>
<circle cx="650" cy="150" r="60" class="mpc-party"/>
<text x="650" y="145" text-anchor="middle" class="mpc-text" font-size="14" fill="#1f2937">👩 Bob</text>
<text x="650" y="165" text-anchor="middle" class="mpc-text">financerich：$3M</text>
<rect x="590" y="180" width="120" height="30" class="mpc-secret" rx="4"/>
<text x="650" y="200" text-anchor="middle" class="mpc-text" fill="#dc3545">🔒 私denseInput</text>
<rect x="325" y="100" width="200" height="100" fill="rgba(223, 105, 25, 0.08)" stroke="#df6919" stroke-width="2" rx="8"/>
<text x="425" y="125" text-anchor="middle" class="mpc-text" font-weight="bold">MPC Protocol</text>
<text x="335" y="145" class="mpc-text">safeCalcFunction：</text>
<text x="335" y="165" class="mpc-text">f(x₁, x₂) = (x₁ > x₂)</text>
<text x="335" y="185" class="mpc-text">Output：Bob morerichyes</text>
<line x1="260" y1="150" x2="325" y2="150" class="mpc-line"/>
<line x1="525" y1="150" x2="590" y2="150" class="mpc-line"/>
<rect x="100" y="250" width="650" height="100" fill="rgba(52, 81, 178, 0.10)" stroke="#4c9be8" stroke-width="2" rx="8"/>
<text x="425" y="275" text-anchor="middle" class="mpc-text" font-weight="bold">🔄 MPC Protocolstep</text>
<text x="110" y="295" class="mpc-text">1️⃣ Alice willfinancerich $2M Secret SharingcompleteManyshare：s₁, s₂, s₃</text>
<text x="110" y="315" class="mpc-text">2️⃣ Bob willfinancerich $3M Secret SharingcompleteManyshare：t₁, t₂, t₃</text>
<text x="110" y="335" class="mpc-text">3️⃣ evenplace交swappartialshare，共agreeCalcCompareCircuit</text>
<rect x="100" y="370" width="300" height="130" class="mpc-result" rx="8"/>
<text x="250" y="395" text-anchor="middle" class="mpc-text" font-weight="bold">✅ Alice schoolto：</text>
<text x="110" y="415" class="mpc-text">• Bob morerichyes ✓</text>
<text x="110" y="435" class="mpc-text">• noknow Bob yesManyFewmoney ✓</text>
<text x="110" y="455" class="mpc-text">• noknowpoordistanceyesManyFew ✓</text>
<text x="110" y="475" class="mpc-small">onlyknowCalcresult，noknowvsplaceInput</text>
<rect x="450" y="370" width="300" height="130" class="mpc-result" rx="8"/>
<text x="600" y="395" text-anchor="middle" class="mpc-text" font-weight="bold">✅ Bob schoolto：</text>
<text x="460" y="415" class="mpc-text">• Bob morerichyes ✓</text>
<text x="460" y="435" class="mpc-text">• noknow Alice yesManyFewmoney ✓</text>
<text x="460" y="455" class="mpc-text">• noknowpoordistanceyesManyFew ✓</text>
<text x="460" y="475" class="mpc-small">evenplacegetsameresult，butprivatefeelprotect</text>
</svg>
</div>

<div style="background: rgba(52, 81, 178, 0.06); padding: 1.5em; border-radius: 4px; margin: 2em 0;">
<svg class="svg-9-5" viewBox="0 0 900 600" xmlns="http://www.w3.org/2000/svg" style="width: 100%; max-width: 1000px; display: block; margin: 0 auto;">
<defs>
<style>
.svg-9-5 .priv-title { font-family: arial, sans-serif; font-size: 16px; fill: #1f2937; font-weight: bold; }
.svg-9-5 .priv-header { font-family: arial, sans-serif; font-size: 12px; fill: #1f2937; font-weight: bold; }
.svg-9-5 .priv-text { font-family: arial, sans-serif; font-size: 10px; fill: #1f2937; }
.svg-9-5 .priv-small { font-family: arial, sans-serif; font-size: 8px; fill: #b0a090; }
.svg-9-5 .priv-cell { fill: rgba(52, 81, 178, 0.07); stroke: #4c9be8; stroke-width: 1; }
.svg-9-5 .priv-header-cell { fill: rgba(223, 105, 25, 0.12); stroke: #df6919; stroke-width: 2; }
</style>
</defs>
<text x="450" y="25" text-anchor="middle" class="priv-title">BlockchainPrivacyTechCompare</text>
<text x="450" y="45" text-anchor="middle" class="priv-small">eachtypeCryptographyTechFeatures、Performance&Use Cases</text>
<rect x="50" y="60" width="160" height="40" class="priv-header-cell" rx="4"/>
<text x="130" y="85" text-anchor="middle" class="priv-header">Tech</text>
<rect x="210" y="60" width="140" height="40" class="priv-header-cell" rx="4"/>
<text x="280" y="85" text-anchor="middle" class="priv-header">Privacy</text>
<rect x="350" y="60" width="140" height="40" class="priv-header-cell" rx="4"/>
<text x="420" y="85" text-anchor="middle" class="priv-header">Performance</text>
<rect x="490" y="60" width="140" height="40" class="priv-header-cell" rx="4"/>
<text x="560" y="85" text-anchor="middle" class="priv-header">ProofLargeSmall</text>
<rect x="630" y="60" width="220" height="40" class="priv-header-cell" rx="4"/>
<text x="740" y="85" text-anchor="middle" class="priv-header">typicalApp</text>
<rect x="50" y="100" width="160" height="60" class="priv-cell" rx="4"/>
<text x="130" y="125" text-anchor="middle" class="priv-text" font-weight="bold">zk-SNARK</text>
<text x="130" y="145" text-anchor="middle" class="priv-small">(Groth16)</text>
<rect x="210" y="100" width="140" height="60" class="priv-cell" rx="4"/>
<text x="280" y="125" text-anchor="middle" class="priv-text">fullyhidden</text>
<text x="280" y="145" text-anchor="middle" class="priv-small">Zero-Knowledge</text>
<rect x="350" y="100" width="140" height="60" class="priv-cell" rx="4"/>
<text x="420" y="120" text-anchor="middle" class="priv-text">VerifyFast ⚡⚡⚡</text>
<text x="420" y="135" text-anchor="middle" class="priv-small">~5-10 ms</text>
<text x="420" y="150" text-anchor="middle" class="priv-small">ProofSlow ⏱️⏱️</text>
<rect x="490" y="100" width="140" height="60" class="priv-cell" rx="4"/>
<text x="560" y="125" text-anchor="middle" class="priv-text">extremeSmall</text>
<text x="560" y="145" text-anchor="middle" class="priv-small">~200 bytes</text>
<rect x="630" y="100" width="220" height="60" class="priv-cell" rx="4"/>
<text x="740" y="120" text-anchor="middle" class="priv-text">Zcash, Tornado</text>
<text x="740" y="135" text-anchor="middle" class="priv-text">Polygon zkEVM</text>
<text x="740" y="150" text-anchor="middle" class="priv-small">zkSync, Aztec</text>
<rect x="50" y="160" width="160" height="60" class="priv-cell" rx="4"/>
<text x="130" y="185" text-anchor="middle" class="priv-text" font-weight="bold">zk-STARK</text>
<rect x="210" y="160" width="140" height="60" class="priv-cell" rx="4"/>
<text x="280" y="185" text-anchor="middle" class="priv-text">fullyhidden</text>
<text x="280" y="205" text-anchor="middle" class="priv-small">Zero-Knowledge</text>
<rect x="350" y="160" width="140" height="60" class="priv-cell" rx="4"/>
<text x="420" y="180" text-anchor="middle" class="priv-text">VerifyMedium ⚡⚡</text>
<text x="420" y="195" text-anchor="middle" class="priv-small">~50-100 ms</text>
<text x="420" y="210" text-anchor="middle" class="priv-small">ProofFast ⏱️</text>
<rect x="490" y="160" width="140" height="60" class="priv-cell" rx="4"/>
<text x="560" y="185" text-anchor="middle" class="priv-text">Large</text>
<text x="560" y="205" text-anchor="middle" class="priv-small">~100-200 KB</text>
<rect x="630" y="160" width="220" height="60" class="priv-cell" rx="4"/>
<text x="740" y="180" text-anchor="middle" class="priv-text">StarkNet</text>
<text x="740" y="195" text-anchor="middle" class="priv-text">StarkEx (dYdX)</text>
<text x="740" y="210" text-anchor="middle" class="priv-small">Mina Protocol</text>
<rect x="50" y="220" width="160" height="60" class="priv-cell" rx="4"/>
<text x="130" y="245" text-anchor="middle" class="priv-text" font-weight="bold">MPC</text>
<text x="130" y="265" text-anchor="middle" class="priv-small">(Threshold Sig)</text>
<rect x="210" y="220" width="140" height="60" class="priv-cell" rx="4"/>
<text x="280" y="245" text-anchor="middle" class="priv-text">Inputhidden</text>
<text x="280" y="265" text-anchor="middle" class="priv-small">collabCalc</text>
<rect x="350" y="220" width="140" height="60" class="priv-cell" rx="4"/>
<text x="420" y="245" text-anchor="middle" class="priv-text">Medium ⚡⚡</text>
<text x="420" y="265" text-anchor="middle" class="priv-small">needManyRoundinteract</text>
<rect x="490" y="220" width="140" height="60" class="priv-cell" rx="4"/>
<text x="560" y="245" text-anchor="middle" class="priv-text">Small</text>
<text x="560" y="265" text-anchor="middle" class="priv-small">Sign ~64 bytes</text>
<rect x="630" y="220" width="220" height="60" class="priv-cell" rx="4"/>
<text x="740" y="240" text-anchor="middle" class="priv-text">Fireblocks, ZenGo</text>
<text x="740" y="255" text-anchor="middle" class="priv-text">MultiSigwallet</text>
<text x="740" y="270" text-anchor="middle" class="priv-small">Custodialservice</text>
<rect x="50" y="280" width="160" height="60" class="priv-cell" rx="4"/>
<text x="130" y="305" text-anchor="middle" class="priv-text" font-weight="bold">Homomorphic Enc.</text>
<text x="130" y="325" text-anchor="middle" class="priv-small">(FHE)</text>
<rect x="210" y="280" width="140" height="60" class="priv-cell" rx="4"/>
<text x="280" y="305" text-anchor="middle" class="priv-text">fullyhidden</text>
<text x="280" y="325" text-anchor="middle" class="priv-small">CiphertextCalc</text>
<rect x="350" y="280" width="140" height="60" class="priv-cell" rx="4"/>
<text x="420" y="305" text-anchor="middle" class="priv-text">Slow ⚡</text>
<text x="420" y="325" text-anchor="middle" class="priv-small">1000-10000x</text>
<rect x="490" y="280" width="140" height="60" class="priv-cell" rx="4"/>
<text x="560" y="305" text-anchor="middle" class="priv-text">extremeLarge</text>
<text x="560" y="325" text-anchor="middle" class="priv-small">膨胀 100-1000x</text>
<rect x="630" y="280" width="220" height="60" class="priv-cell" rx="4"/>
<text x="740" y="300" text-anchor="middle" class="priv-text">Zama (fhEVM)</text>
<text x="740" y="315" text-anchor="middle" class="priv-text">Secret Network</text>
<text x="740" y="330" text-anchor="middle" class="priv-small">privateVote</text>
<rect x="50" y="340" width="160" height="60" class="priv-cell" rx="4"/>
<text x="130" y="365" text-anchor="middle" class="priv-text" font-weight="bold">VRF</text>
<text x="130" y="385" text-anchor="middle" class="priv-small">(canVerifywithmachine)</text>
<rect x="210" y="340" width="140" height="60" class="priv-cell" rx="4"/>
<text x="280" y="365" text-anchor="middle" class="priv-text">nocanForecast</text>
<text x="280" y="385" text-anchor="middle" class="priv-small">withmachinenatureprotectproof</text>
<rect x="350" y="340" width="140" height="60" class="priv-cell" rx="4"/>
<text x="420" y="365" text-anchor="middle" class="priv-text">Fast ⚡⚡⚡</text>
<text x="420" y="385" text-anchor="middle" class="priv-small">~1-5 ms</text>
<rect x="490" y="340" width="140" height="60" class="priv-cell" rx="4"/>
<text x="560" y="365" text-anchor="middle" class="priv-text">Small</text>
<text x="560" y="385" text-anchor="middle" class="priv-small">~200 bytes</text>
<rect x="630" y="340" width="220" height="60" class="priv-cell" rx="4"/>
<text x="740" y="360" text-anchor="middle" class="priv-text">Chainlink VRF</text>
<text x="740" y="375" text-anchor="middle" class="priv-text">Algorand</text>
<text x="740" y="390" text-anchor="middle" class="priv-small">withmachinedraw奖、Gaming</text>
<rect x="50" y="400" width="160" height="60" class="priv-cell" rx="4"/>
<text x="130" y="425" text-anchor="middle" class="priv-text" font-weight="bold">混Coiner</text>
<text x="130" y="445" text-anchor="middle" class="priv-small">(Mixer)</text>
<rect x="210" y="400" width="140" height="60" class="priv-cell" rx="4"/>
<text x="280" y="425" text-anchor="middle" class="priv-text">outgoingcloselink</text>
<text x="280" y="445" text-anchor="middle" class="priv-small">Addressanonymous</text>
<rect x="350" y="400" width="140" height="60" class="priv-cell" rx="4"/>
<text x="420" y="425" text-anchor="middle" class="priv-text">Fast ⚡⚡⚡</text>
<text x="420" y="445" text-anchor="middle" class="priv-small">chainUpop</text>
<rect x="490" y="400" width="140" height="60" class="priv-cell" rx="4"/>
<text x="560" y="425" text-anchor="middle" class="priv-text">standardTransaction</text>
<text x="560" y="445" text-anchor="middle" class="priv-small">~200 bytes</text>
<rect x="630" y="400" width="220" height="60" class="priv-cell" rx="4"/>
<text x="740" y="420" text-anchor="middle" class="priv-text">Tornado Cash</text>
<text x="740" y="435" text-anchor="middle" class="priv-text">Railgun</text>
<text x="740" y="450" text-anchor="middle" class="priv-small">privatetransfer</text>
<rect x="50" y="480" width="800" height="100" fill="rgba(92, 184, 92, 0.10)" stroke="#5cb85c" stroke-width="2" rx="8"/>
<text x="450" y="505" text-anchor="middle" class="priv-header">TechChoosesuggestsuggest</text>
<text x="60" y="525" class="priv-text">• <tspan font-weight="bold">隐私转账</tspan>：zk-SNARK (Tornado Cash 模式) - 小证明、低成本</text>
<text x="60" y="543" class="priv-text">• <tspan font-weight="bold">扩容 + 隐私</tspan>：zk-STARK (StarkNet) - 无需可信设置、抗量子</text>
<text x="60" y="561" class="priv-text">• <tspan font-weight="bold">密钥管理</tspan>：MPC 门限签名 - 去中心化托管、无单点故障</text>
<text x="60" y="579" class="priv-text">• <tspan font-weight="bold">密文计算</tspan>：同态加密 - 隐私投票、竞价（性能慢但完全隐私）</text>
</svg>
</div>
