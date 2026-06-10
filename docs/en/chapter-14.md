---
title: "Chapter 14: Enterprise Blockchain"
---

<div class="ccbus-hero">
  <div class="ccbus-hero-avatar">
    <img src="../public/images/avatars/heroes/guardian-node.png" alt="Guardian Node" />
  </div>
  <div class="ccbus-hero-content">
    <h1>Chapter 14: Enterprise Blockchain</h1>
    <div class="ccbus-teacher-label">🎙️ 本章讲师:<strong>Guardian Node</strong> · The "security consultant" of enterprise blockchain</div>
  </div>
</div>

<div class="chapter-intro">

**Difficulty Level:** 🟡 Intermediate
**Estimated Learning Time:** 5-6 hours

**Chapter Objectives:**
- Understand enterprise blockchain requirements
- Learn permissioned blockchain platforms
- Explore industry-specific applications
- Master implementation strategies

</div>


## 14.0 2025-2026 Perspective: Why Reread This Chapter

Enterprise blockchain in 2026 has entered the '**permissioned consortium + RWA on-chain + regulatory sandbox**' phase.

1. **Permissioned (consortium) chain progress**:
   - **Hyperledger Fabric 3.x (2024-12)**: fully modular, supports BFT consensus switching
   - **Hyperledger Besu (2024-Q4)**: EVM-compatible permissioned chain, on-chain privacy
   - **Quorum (maintained by Consensys)**: privacy L1 for banking scenarios
   - **R3 Corda Enterprise 5.x**: dedicated for financial institutions
   - **2026 real deployments**: SWIFT pilots CBDC with Besu; JPMorgan Onyx based on Quorum

2. **RWA (Real World Asset) tokenization**:
   - **Money market**: Ondo OUSG ($5B), Maple Finance ($3B), Mountain Protocol
   - **Private funds**: Securitize tokenized KKR, Apollo, BCG private funds
   - **Real estate**: RealT, Propy, Blocksquare, Tangible (still small scale)
   - **Credit**: Centrifuge, Tinlake tokenize supply chain finance
   - **2026 stats**: $30B+ RWA on-chain (vs $15B in 2024)

3. **CBDC (Central Bank Digital Currencies)**:
   - **Digital RMB (eCNY)**: $5B+ in circulation, cross-border pilot mBridge
   - **Digital Euro (planned 2027)**: ECB preparation phase
   - **FedNow (launched 2023)**: US CBDC alternative
   - **mBridge (2024)**: multi-lateral central bank digital currency bridge, connects UAE, Thailand, HK, China
   - **2026 trend**: CBDCs won't replace stablecoins, but will **coexist**

4. **On-chain compliance (RegTech)**:
   - **Post Tornado Cash sanctions**: on-chain compliance is mandatory
   - **TRM Labs, Chainalysis, Elliptic**: on-chain KYT (Know Your Transaction)
   - **Solidity compliance libraries**: OpenZeppelin Defender + Chainalysis Oracle + TRM API
   - **Composable compliance tokens**: USDC's "blacklist" function, Tether's freeze function

5. **Enterprise-grade RWA compliance templates**:
   - **KYC-on-chain**: institutional client KYC data via ZKP on-chain
   - **Accredited Investor NFT**: SBT verifies accredited investor status
   - **On-chain audit**: Chainlink CRE integrates audit data
   - **2026 real projects**: KKR, Apollo, BlackRock all in production

## 14.1 Enterprise vs Public Blockchain

| Feature | Public Blockchain | Enterprise Blockchain |
|---------|-------------------|----------------------|
| Participants | Open to anyone | Permissioned |
| Consensus | PoW/PoS | BFT/PoA |
| Privacy | Pseudonymous | Confidential |
| Performance | Limited | Optimized |
| Governance | Decentralized | Controlled |


<div style="text-align: center; margin: 2em 0;">
<svg class="svg-14-4" viewBox="0 0 800 520" xmlns="http://www.w3.org/2000/svg" style="width: 100%; max-width: 900px; display: block; margin: 0 auto;">
<defs>
<style>
.svg-14-4 .privacy-text-title { font-family: arial, sans-serif; font-size: 16px; fill: #1f2937; font-weight: bold; }
.svg-14-4 .privacy-text { font-family: arial, sans-serif; font-size: 10px; fill: #1f2937; }
.svg-14-4 .privacy-text-small { font-family: arial, sans-serif; font-size: 8.5px; fill: #1f2937; }
.svg-14-4 .privacy-box { fill: rgba(52, 81, 178, 0.10); stroke: #4c9be8; stroke-width: 1.5; }
.svg-14-4 .privacy-arrow { stroke: #df6919; stroke-width: 2; fill: none; marker-end: url(#arrowhead-privacy); }
</style>
<marker id="arrowhead-privacy" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
<polygon points="0 0, 10 3, 0 6" fill="#df6919" />
</marker>
</defs>
<text class="privacy-text-title" x="400" y="25" text-anchor="middle">Enterprise BlockchainPrivacyTech</text>
<rect class="privacy-box" x="30" y="50" width="230" height="210" rx="4"/>
<text class="privacy-text" x="145" y="70" text-anchor="middle" font-weight="bold">Channel (Fabric)</text>
<text class="privacy-text-small" x="40" y="95">workMechanism:</text>
<text class="privacy-text-small" x="45" y="110">• createsuggestindependent Channel</text>
<text class="privacy-text-small" x="45" y="125">• onlycomplete员organization Peer addinput</text>
<text class="privacy-text-small" x="45" y="140">• independentLedger&chaincode</text>
<text class="privacy-text-small" x="45" y="155">• otherorganizationfullynocansee</text>
<text class="privacy-text-small" x="40" y="180" font-weight="bold">Use Case:</text>
<text class="privacy-text-small" x="45" y="195">• A, B silverrowlinkfitput贷</text>
<text class="privacy-text-small" x="45" y="210">• supplychaincoreEnterprise&supplybiz</text>
<text class="privacy-text-small" x="40" y="235" font-weight="bold">pros: strongisolate，configflexible</text>
<text class="privacy-text-small" x="40" y="250" font-weight="bold">Drawbacks: Channel faultManymgmtcomplex</text>
<rect class="privacy-box" x="285" y="50" width="230" height="210" rx="4"/>
<text class="privacy-text" x="400" y="70" text-anchor="middle" font-weight="bold">PDC</text>
<text class="privacy-text-small" x="295" y="95">workMechanism:</text>
<text class="privacy-text-small" x="300" y="110">• agreeunite Channel infinegranularmeasureisolate</text>
<text class="privacy-text-small" x="300" y="125">• Private Dataonlyauthorizedorganizationcansee</text>
<text class="privacy-text-small" x="300" y="140">• HashOn-chainprotectprooffullnature</text>
<text class="privacy-text-small" x="300" y="155">• GossipDistributePrivate Data</text>
<text class="privacy-text-small" x="295" y="180" font-weight="bold">Use Case:</text>
<text class="privacy-text-small" x="300" y="195">• supplychainMediumPricesensitiveinfo</text>
<text class="privacy-text-small" x="300" y="210">• 医疗Datapartialfieldprivate</text>
<text class="privacy-text-small" x="295" y="235" font-weight="bold">pros: flexible，subtractFew Channel</text>
<text class="privacy-text-small" x="295" y="250" font-weight="bold">Drawbacks: Hashcanseeleakrevealerainfo</text>
<rect class="privacy-box" x="540" y="50" width="230" height="210" rx="4"/>
<text class="privacy-text" x="655" y="70" text-anchor="middle" font-weight="bold">Zero-Knowledge Proof</text>
<text class="privacy-text-small" x="550" y="95">workMechanism:</text>
<text class="privacy-text-small" x="555" y="110">• ProofDatavalidnaturebutnotransparentrevealin容</text>
<text class="privacy-text-small" x="555" y="125">• zk-SNARKs / zk-STARKs</text>
<text class="privacy-text-small" x="555" y="140">• VerifyplaceNoneneedknowprairiebeginData</text>
<text class="privacy-text-small" x="555" y="155">• CalcCostmoreHigh</text>
<text class="privacy-text-small" x="550" y="180" font-weight="bold">Use Case:</text>
<text class="privacy-text-small" x="555" y="195">• FinanceTransactionAmounthidden</text>
<text class="privacy-text-small" x="555" y="210">• Authbutnoleakrevealinfo</text>
<text class="privacy-text-small" x="550" y="235" font-weight="bold">pros: moststrongPrivacy</text>
<text class="privacy-text-small" x="550" y="250" font-weight="bold">Drawbacks: Performancebegin销Large</text>
<rect class="privacy-box" x="30" y="280" width="360" height="220" rx="4"/>
<text class="privacy-text" x="210" y="300" text-anchor="middle" font-weight="bold">MPC (MPC)</text>
<text class="privacy-text-small" x="40" y="325">workMechanism:</text>
<text class="privacy-text-small" x="45" y="340">• ManyplacelinkfitCalc，eachplaceInputprotectdense</text>
<text class="privacy-text-small" x="45" y="355">• 秘denseshared (Secret Sharing)</text>
<text class="privacy-text-small" x="45" y="370">• Homomorphic Enc. (Homomorphic Encryption)</text>
<text class="privacy-text-small" x="45" y="385">• onlyCalcresultPublic</text>
<text class="privacy-text-small" x="40" y="410" font-weight="bold">Use Case:</text>
<text class="privacy-text-small" x="45" y="425">• ManyInstitutionallinkfitwindcontrol (eachplaceDatanooutputregion)</text>
<text class="privacy-text-small" x="45" y="440">• linkfitstatanalyze</text>
<text class="privacy-text-small" x="45" y="455">• Privacy ML</text>
<text class="privacy-text-small" x="40" y="480" font-weight="bold">Examples: 微multitude WeDPR, Enigma</text>
<rect class="privacy-box" x="410" y="280" width="360" height="220" rx="4"/>
<text class="privacy-text" x="590" y="300" text-anchor="middle" font-weight="bold">TEE (TEE)</text>
<text class="privacy-text-small" x="420" y="325">workMechanism:</text>
<text class="privacy-text-small" x="425" y="340">• HardwareisolatedistinguishregionExecutesensitiveCalc</text>
<text class="privacy-text-small" x="425" y="355">• Intel SGX / ARM TrustZone</text>
<text class="privacy-text-small" x="425" y="370">• DataEncryptprocess，memisolate</text>
<text class="privacy-text-small" x="425" y="385">• Remote Attestation</text>
<text class="privacy-text-small" x="420" y="410" font-weight="bold">Use Case:</text>
<text class="privacy-text-small" x="425" y="425">• privateSmart ContractExecute</text>
<text class="privacy-text-small" x="425" y="440">• Private Keysafemgmt</text>
<text class="privacy-text-small" x="425" y="455">• Cross-chainprivateBridge</text>
<text class="privacy-text-small" x="420" y="480" font-weight="bold">Examples: Hyperledger Avalon, Oasis</text>
</svg>
</div>
## 14.2 Hyperledger Suite


<div style="text-align: center; margin: 2em 0;">
<svg class="svg-14-1" viewBox="0 0 850 550" xmlns="http://www.w3.org/2000/svg" style="width: 100%; max-width: 950px; display: block; margin: 0 auto;">
<defs>
<style>
.svg-14-1 .fabric-text-title { font-family: arial, sans-serif; font-size: 16px; fill: #1f2937; font-weight: bold; }
.svg-14-1 .fabric-text { font-family: arial, sans-serif; font-size: 10px; fill: #1f2937; }
.svg-14-1 .fabric-text-small { font-family: arial, sans-serif; font-size: 8px; fill: #1f2937; }
.svg-14-1 .fabric-box { fill: rgba(52, 81, 178, 0.10); stroke: #4c9be8; stroke-width: 1.5; }
.svg-14-1 .fabric-box-component { fill: rgba(92, 184, 92, 0.10); stroke: #5cb85c; stroke-width: 1; }
.svg-14-1 .fabric-arrow { stroke: #df6919; stroke-width: 2; fill: none; marker-end: url(#arrowhead-fabric); }
.svg-14-1 .fabric-flow-text { font-family: arial, sans-serif; font-size: 9px; fill: #df6919; font-weight: bold; }
</style>
<marker id="arrowhead-fabric" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
<polygon points="0 0, 10 3, 0 6" fill="#df6919" />
</marker>
</defs>
<text class="fabric-text-title" x="425" y="25" text-anchor="middle">Hyperledger Fabric architecture&Tx Flow</text>
<rect class="fabric-box" x="30" y="50" width="790" height="480" rx="6"/>
<text class="fabric-text" x="425" y="70" text-anchor="middle" font-weight="bold">Fabric Networkarchitecture</text>
<rect class="fabric-box-component" x="50" y="90" width="150" height="110" rx="4"/>
<text class="fabric-text" x="125" y="107" text-anchor="middle" font-weight="bold">App (Client SDK)</text>
<text class="fabric-text-small" x="60" y="125">• Node.js / Java / Go SDK</text>
<text class="fabric-text-small" x="60" y="138">• Submit Proposal</text>
<text class="fabric-text-small" x="60" y="151">• QueryLedgerState</text>
<text class="fabric-text-small" x="60" y="164">• listenEvent</text>
<text class="fabric-text-small" x="60" y="185" font-weight="bold">User：Enterprise</text>
<rect class="fabric-box-component" x="240" y="90" width="150" height="110" rx="4"/>
<text class="fabric-text" x="315" y="107" text-anchor="middle" font-weight="bold">Peer</text>
<text class="fabric-text-small" x="250" y="125">• Endorsing Peer (Endorse)</text>
<text class="fabric-text-small" x="250" y="138">  Exec chaincode, gen RW set</text>
<text class="fabric-text-small" x="250" y="151">• Committing Peer (Commit)</text>
<text class="fabric-text-small" x="250" y="164">  Verify & CommitBlock</text>
<text class="fabric-text-small" x="250" y="177">• Anchor Peer (锚point)</text>
<text class="fabric-text-small" x="250" y="190">  steporganizationtranslatetrust</text>
<rect class="fabric-box-component" x="430" y="90" width="150" height="110" rx="4"/>
<text class="fabric-text" x="505" y="107" text-anchor="middle" font-weight="bold">Orderer Ordering Service</text>
<text class="fabric-text-small" x="440" y="125">• Raft (default)</text>
<text class="fabric-text-small" x="440" y="138">• TransactionOrder&hitpack</text>
<text class="fabric-text-small" x="440" y="151">• generateBlock</text>
<text class="fabric-text-small" x="440" y="164">• Distributetoeach Peer</text>
<text class="fabric-text-small" x="440" y="185" font-weight="bold">Fault tol: 3 nodes, 1 fail</text>
<rect class="fabric-box-component" x="620" y="90" width="180" height="110" rx="4"/>
<text class="fabric-text" x="710" y="107" text-anchor="middle" font-weight="bold">CA Certificateservice</text>
<text class="fabric-text-small" x="630" y="125">• Fabric-CA issueemitCertificate</text>
<text class="fabric-text-small" x="630" y="138">• MSP (MSPprovider)</text>
<text class="fabric-text-small" x="630" y="151">• based on X.509 Certificate</text>
<text class="fabric-text-small" x="630" y="164">• Auth&authorized</text>
<text class="fabric-text-small" x="630" y="185" font-weight="bold">Support：LDAP, HSM collectcomplete</text>
<line x1="50" y1="230" x2="800" y2="230" stroke="#4c9be8" stroke-width="1" stroke-dasharray="5,5" fill="none"/>
<text class="fabric-text" x="425" y="250" text-anchor="middle" font-weight="bold">Fabric Tx Flow (Execute-Order-Validate)</text>
<ellipse cx="100" cy="290" rx="50" ry="30" fill="rgba(52, 81, 178, 0.15)" stroke="#4c9be8" stroke-width="1.5"/>
<text class="fabric-flow-text" x="100" y="293" text-anchor="middle">1. Propose</text>
<text class="fabric-text-small" x="100" y="305" text-anchor="middle">(Proposal)</text>
<path class="fabric-arrow" d="M 150 290 L 210 290"/>
<ellipse cx="270" cy="290" rx="50" ry="30" fill="rgba(92, 184, 92, 0.15)" stroke="#5cb85c" stroke-width="1.5"/>
<text class="fabric-flow-text" x="270" y="293" text-anchor="middle">2. Simulate</text>
<text class="fabric-text-small" x="270" y="305" text-anchor="middle">(Simulate)</text>
<path class="fabric-arrow" d="M 320 290 L 380 290"/>
<ellipse cx="440" cy="290" rx="50" ry="30" fill="rgba(223, 105, 25, 0.12)" stroke="#df6919" stroke-width="1.5"/>
<text class="fabric-flow-text" x="440" y="293" text-anchor="middle">3. Endorse</text>
<text class="fabric-text-small" x="440" y="305" text-anchor="middle">(Endorse)</text>
<path class="fabric-arrow" d="M 490 290 L 550 290"/>
<ellipse cx="610" cy="290" rx="50" ry="30" fill="rgba(52, 81, 178, 0.15)" stroke="#4c9be8" stroke-width="1.5"/>
<text class="fabric-flow-text" x="610" y="293" text-anchor="middle">4. Order</text>
<text class="fabric-text-small" x="610" y="305" text-anchor="middle">(Order)</text>
<path class="fabric-arrow" d="M 660 290 L 720 290"/>
<ellipse cx="760" cy="290" rx="35" ry="30" fill="rgba(92, 184, 92, 0.15)" stroke="#5cb85c" stroke-width="1.5"/>
<text class="fabric-flow-text" x="760" y="290" text-anchor="middle">5. Verify</text>
<text class="fabric-text-small" x="760" y="302" text-anchor="middle">(Validate)</text>
<text class="fabric-text-small" x="100" y="340" text-anchor="middle">Clientemitrise</text>
<text class="fabric-text-small" x="100" y="353" text-anchor="middle">Tx Proposal</text>
<text class="fabric-text-small" x="270" y="340" text-anchor="middle">Endorsing Peer</text>
<text class="fabric-text-small" x="270" y="353" text-anchor="middle">Executechaincode</text>
<text class="fabric-text-small" x="270" y="366" text-anchor="middle">generateRW Set</text>
<text class="fabric-text-small" x="440" y="340" text-anchor="middle">Collectfoot够</text>
<text class="fabric-text-small" x="440" y="353" text-anchor="middle">Endorse Sig</text>
<text class="fabric-text-small" x="440" y="366" text-anchor="middle">(strategyVerify)</text>
<text class="fabric-text-small" x="610" y="340" text-anchor="middle">Ordererhitpack</text>
<text class="fabric-text-small" x="610" y="353" text-anchor="middle">TransactioncompleteBlock</text>
<text class="fabric-text-small" x="760" y="335" text-anchor="middle">PeerVerify</text>
<text class="fabric-text-small" x="760" y="348" text-anchor="middle">CommitLedger</text>
<rect class="fabric-box-component" x="50" y="390" width="230" height="130" rx="4"/>
<text class="fabric-text" x="165" y="407" text-anchor="middle" font-weight="bold">corefeature</text>
<text class="fabric-text-small" x="60" y="425">✓ moduleifyarchitecture：pluggableconsensus</text>
<text class="fabric-text-small" x="60" y="440">✓ Channel：Many租householdSupport</text>
<text class="fabric-text-small" x="60" y="455">✓ PDC</text>
<text class="fabric-text-small" x="60" y="470">✓ chaincode：Go/Java/JavaScript</text>
<text class="fabric-text-small" x="60" y="485">✓ CouchDB/LevelDB state DB</text>
<text class="fabric-text-small" x="60" y="500">✓ TPS: 3000-20000 (config dependent)</text>
<rect class="fabric-box-component" x="300" y="390" width="230" height="130" rx="4"/>
<text class="fabric-text" x="415" y="407" text-anchor="middle" font-weight="bold">typicalUse Cases</text>
<text class="fabric-text-small" x="310" y="425">• Supply Chain Finance (Walmart Food Traceability)</text>
<text class="fabric-text-small" x="310" y="440">• Trade Finance (we.trade consortium)</text>
<text class="fabric-text-small" x="310" y="455">• electricitysonexistproof (Judicial Evidencechain)</text>
<text class="fabric-text-small" x="310" y="470">• 医疗Sharing</text>
<text class="fabric-text-small" x="310" y="485">• Cross-border Paymentresultcalc</text>
<text class="fabric-text-small" x="310" y="500">• assetdigitalifyPlatform</text>
<rect class="fabric-box-component" x="550" y="390" width="250" height="130" rx="4"/>
<text class="fabric-text" x="675" y="407" text-anchor="middle" font-weight="bold">2025 yearecoData</text>
<text class="fabric-text-small" x="560" y="425">• ultrafault 500+ EnterpriseDeploy (IBMstat)</text>
<text class="fabric-text-small" x="560" y="440">• 100+ prodNetworkrunMedium</text>
<text class="fabric-text-small" x="560" y="455">• Supportorganization: IBM, Oracle, SAP</text>
<text class="fabric-text-small" x="560" y="470">• v2.5 LTS longexpectSupportversion</text>
<text class="fabric-text-small" x="560" y="485">• Fabric Gateway simpleifydev</text>
<text class="fabric-text-small" x="560" y="500">• SmartBFT consensusSupportbow占庭Fault Tol.</text>
</svg>
</div>
### Hyperledger Fabric
- Modular architecture
- Private channels
- Pluggable consensus

### Hyperledger Besu
- Enterprise Ethereum client
- Privacy features

## 14.3 R3 Corda

- Designed for financial services
- Direct peer-to-peer transactions
- No global broadcast


<div style="text-align: center; margin: 2em 0;">
<svg class="svg-14-2" viewBox="0 0 800 480" xmlns="http://www.w3.org/2000/svg" style="width: 100%; max-width: 900px; display: block; margin: 0 auto;">
<defs>
<style>
.svg-14-2 .corda-text-title { font-family: arial, sans-serif; font-size: 16px; fill: #1f2937; font-weight: bold; }
.svg-14-2 .corda-text { font-family: arial, sans-serif; font-size: 10px; fill: #1f2937; }
.svg-14-2 .corda-text-small { font-family: arial, sans-serif; font-size: 8.5px; fill: #1f2937; }
.svg-14-2 .corda-box { fill: rgba(52, 81, 178, 0.10); stroke: #4c9be8; stroke-width: 2; }
.svg-14-2 .corda-box-feature { fill: rgba(92, 184, 92, 0.10); stroke: #5cb85c; stroke-width: 1.5; }
.svg-14-2 .corda-vs-line { stroke: #df6919; fill: none; stroke-width: 2; stroke-dasharray: 5,5; }
</style>
</defs>
<text class="corda-text-title" x="400" y="25" text-anchor="middle">R3 Corda architecture&corefeature</text>
<rect class="corda-box" x="30" y="50" width="740" height="410" rx="6"/>
<text class="corda-text" x="400" y="72" text-anchor="middle" font-weight="bold" font-size="13px">Corda alone特designreasonthought</text>
<rect class="corda-box-feature" x="50" y="90" width="220" height="160" rx="4"/>
<text class="corda-text" x="160" y="108" text-anchor="middle" font-weight="bold">P2PTransaction</text>
<text class="corda-text-small" x="60" y="125">• NonewholebureauLedger</text>
<text class="corda-text-small" x="60" y="140">• onlyTransactionparam&placecanseeData</text>
<text class="corda-text-small" x="60" y="155">• UTXO model (classBitcoin)</text>
<text class="corda-text-small" x="60" y="170">• dropLowprivateleakrevealAt Risk</text>
<text class="corda-text-small" x="60" y="195" font-weight="bold">Use Case:</text>
<text class="corda-text-small" x="60" y="210">• FinanceInstitutionalbetweenresultcalc</text>
<text class="corda-text-small" x="60" y="225">• Trade Finance (onlybuysellevenplacesense悉)</text>
<text class="corda-text-small" x="60" y="240">• proofvoucheremitrow&convertyield</text>
<rect class="corda-box-feature" x="290" y="90" width="220" height="160" rx="4"/>
<text class="corda-text" x="400" y="108" text-anchor="middle" font-weight="bold">Notary maleproofservice</text>
<text class="corda-text-small" x="300" y="125">• preventDouble Spend (Double Spend)</text>
<text class="corda-text-small" x="300" y="140">• noVerifyTransactionin容</text>
<text class="corda-text-small" x="300" y="155">• onlycheckStateUniqueness</text>
<text class="corda-text-small" x="300" y="170">• pluggableconsensus (Raft/BFT)</text>
<text class="corda-text-small" x="300" y="195" font-weight="bold">Notary Type:</text>
<text class="corda-text-small" x="300" y="210">• Validating: VerifyTransactionlegalnature</text>
<text class="corda-text-small" x="300" y="225">• Non-Validating: onlyAnti-double-spend</text>
<text class="corda-text-small" x="300" y="240">• SupportMany Notary cluster</text>
<rect class="corda-box-feature" x="530" y="90" width="220" height="160" rx="4"/>
<text class="corda-text" x="640" y="108" text-anchor="middle" font-weight="bold">CorDapp (Smart Contract)</text>
<text class="corda-text-small" x="540" y="125">• Kotlin/Java encodewrite</text>
<text class="corda-text-small" x="540" y="140">• Contract: VerifyTransactionlegalnature</text>
<text class="corda-text-small" x="540" y="155">• Flow: orchestrationTx Flow</text>
<text class="corda-text-small" x="540" y="170">• State: decidemeaningassetState</text>
<text class="corda-text-small" x="540" y="195" font-weight="bold">Pros:</text>
<text class="corda-text-small" x="540" y="210">• Typesafe (JVM eco)</text>
<text class="corda-text-small" x="540" y="225">• 丰rich Java libSupport</text>
<text class="corda-text-small" x="540" y="240">• IDE tunetrySupport</text>
<line x1="50" y1="270" x2="750" y2="270" class="corda-vs-line"/>
<text class="corda-text" x="400" y="290" text-anchor="middle" font-weight="bold" font-size="13px">Corda vs Fabric coredifference</text>
<rect class="corda-box-feature" x="50" y="305" width="340" height="145" rx="4"/>
<text class="corda-text" x="220" y="322" text-anchor="middle" font-weight="bold">Corda</text>
<text class="corda-text-small" x="60" y="340">✓ P2Parchitecture，NonewholebureauBroadcast</text>
<text class="corda-text-small" x="60" y="355">✓ onlyparam&placesharedData (privateexcellentfirst)</text>
<text class="corda-text-small" x="60" y="370">✓ UTXO model，classBitcoin</text>
<text class="corda-text-small" x="60" y="385">✓ legalContractin嵌 (Legal Prose)</text>
<text class="corda-text-small" x="60" y="400">✓ Financeoptimize (proofvoucher、Trade Finance)</text>
<text class="corda-text-small" x="60" y="415">✓ TPS: 1000-5000</text>
<text class="corda-text-small" x="60" y="430">✓ typicalUser: High盛、瑞silver、SBI</text>
<rect class="corda-box-feature" x="410" y="305" width="340" height="145" rx="4"/>
<text class="corda-text" x="580" y="322" text-anchor="middle" font-weight="bold">Hyperledger Fabric</text>
<text class="corda-text-small" x="420" y="340">✓ Channel Many租householdarchitecture</text>
<text class="corda-text-small" x="420" y="355">✓ PDC finegranularmeasureprivate</text>
<text class="corda-text-small" x="420" y="370">✓ accountmodel (classEthereum)</text>
<text class="corda-text-small" x="420" y="385">✓ flexiblechaincode (Go/Java/JS)</text>
<text class="corda-text-small" x="420" y="400">✓ generalEnterprisescenario (supplychain、existproof)</text>
<text class="corda-text-small" x="420" y="415">✓ TPS: 3000-20000</text>
<text class="corda-text-small" x="420" y="430">✓ typicalUser: 沃尔玛、IBM、Oracle</text>
</svg>
</div>
## 14.4 Enterprise Ethereum

Private Ethereum networks with enhanced features.

## 14.5 Supply Chain Management

- Provenance tracking
- Anti-counterfeiting
- Logistics optimization
- Examples: VeChain, IBM Food Trust



### 14.7 2025-2026 Financial Institution RWA Landing Cases

**1. BlackRock BUIDL (2024-03 onwards)**

- **Scale**: $500M+ (2026-Q1)
- **Underlying assets**: short-term US Treasuries + cash equivalents
- **Tech**: with Securitize, ERC-20 on EVM chain
- **Investors**: institutional accredited investors (KYC required)
- **2026 data**: monthly dividend $3M+, stable 4.8% APY

**BlackRock BUIDL innovations**:
- Tokenize traditional "institutional-only" US Treasury fund
- 24/7 on-chain transfer
- Can be used as DeFi collateral

**2. Ondo Finance (2023-onwards)**

- **OUSG** (2023): US Treasury tokenization, TVL $1B
- **USDY** (2023): stablecoin + US Treasury yield, TVL $500M
- **OMMF** (2024): money market fund
- **2026 data**: total TVL $1.5B, 20% RWA share

**3. Maple Finance (2021-onwards)**

- **syrupUSDC** (2023): stablecoin yield, TVL $3B
- **Cash Management** (2024): institutional cash management
- **BTC Yield** (2024): BTC lending
- **2026 data**: total TVL $3B

**4. Securitize (2017-onwards)**

- Only SEC-approved "tokenization" institution
- Tokenized KKR, Apollo, BCG private funds
- **2026 real data**: tokenized 50+ traditional funds

**5. Centrifuge (2018-onwards)**

- **Tinlake** (2018-): tokenize supply chain finance
- **Centrifuge Prime** (2024): compliant RWA platform
- **2026 real data**: TVL $500M

**6. Real estate tokenization (2024-2026 growth)**

- **RealT** (2018-): single-family home tokenization, 2026 covers 1000+ properties
- **Propy**: real estate transaction tokenization
- **Blocksquare**: European real estate tokenization
- **Tangible**: physical gold/wine/art tokenization
- **2026 data**: real estate RWA total scale $2B+

**RWA regulatory framework**:

| Region | Regulatory stance | 2026 real status |
|---|---|---|
| US | Strict (SEC) | BUIDL, Ondo have compliance paths |
| EU | MiCA implemented | Full compliance |
| Switzerland | Friendly | Many RWA projects based |
| Singapore | Friendly | Project Guardian (JPMorgan) |
| Hong Kong | Friendly | Virtual asset ETF + RWA pilot |
| UAE | Friendly | VARA regulatory framework |

**RWA real yield comparison (2026-Q1)**:

| Project | APY | Underlying |
|---|---|---|
| BlackRock BUIDL | 4.8% | Short-term US Treasury |
| Ondo OUSG | 5.1% | Short-term US Treasury |
| Maple syrupUSDC | 7.2% | Institutional credit |
| Centrifuge Tinlake | 9.5% | Supply chain finance |
| Aave USDC lending | 4.3% | DeFi lending |
| Aave stETH lending | 3.5% | ETH staking |


![CCBus standardized token issuance (enterprise RWA template)](../public/images/chapters/zh/standard-token-create.png)

*图: CCBus standardized token issuance (enterprise RWA template)*

## 14.6 Healthcare Applications

- Medical records management
- Clinical trials
- Drug traceability

## 14.7 Financial Services

- Trade finance
- Cross-border payments
- Securities settlement
- Digital identity (KYC/AML)

## 14.8 Government and Public Sector

- Digital identity systems
- Land registries
- Voting systems
- Public records

## 14.9 Implementation Strategies

1. **Identify Use Case** - Find suitable applications
2. **Choose Platform** - Select appropriate technology
3. **Proof of Concept** - Validate approach
4. **Pilot Program** - Test in production
5. **Scale Deployment** - Expand across organization

<div class="ccbus-teacher-credits">
  <div class="ccbus-teacher-credits-avatar">
    <img src="../public/images/avatars/heroes/guardian-node.png" alt="Guardian Node" />
  </div>
  <div class="ccbus-teacher-credits-body">
    Taught by: <strong>Guardian Node</strong> — The "security consultant" of enterprise blockchain<br />
    <span style="font-size: 0.85em; color: var(--vp-c-text-3);">📚 The next chapter [Chapter 15: Security and Best Practices] will be taught by another CCBus guide.</span>
  </div>
</div>

<div class="chapter-footer">

### Key Takeaways
- Enterprise blockchains prioritize privacy and performance
- Different industries have unique requirements
- Implementation requires careful planning
- Hybrid public-private solutions emerging

</div>

<div style="text-align: center; margin: 2em 0;">
<svg class="svg-14-0" viewBox="0 0 800 520" xmlns="http://www.w3.org/2000/svg" style="width: 100%; max-width: 900px; display: block; margin: 0 auto;">
<defs>
<style>
.svg-14-0 .eb-text-title { font-family: arial, sans-serif; font-size: 16px; fill: #1f2937; font-weight: bold; }
.svg-14-0 .eb-text { font-family: arial, sans-serif; font-size: 11px; fill: #1f2937; }
.svg-14-0 .eb-text-small { font-family: arial, sans-serif; font-size: 9px; fill: #1f2937; }
.svg-14-0 .eb-box-public { fill: rgba(52, 81, 178, 0.10); stroke: #4c9be8; stroke-width: 2; }
.svg-14-0 .eb-box-enterprise { fill: rgba(92, 184, 92, 0.10); stroke: #5cb85c; stroke-width: 2; }
.svg-14-0 .eb-header { fill: rgba(223, 105, 25, 0.12); }
</style>
</defs>
<text class="eb-text-title" x="400" y="25" text-anchor="middle">Enterprise Blockchain vs PublicCompare</text>
<rect class="eb-box-public" x="30" y="50" width="340" height="450" rx="6"/>
<text class="eb-text" x="200" y="75" text-anchor="middle" font-weight="bold" font-size="14px">Public Blockchain</text>
<rect class="eb-header" x="40" y="90" width="320" height="25"/>
<text class="eb-text-small" x="50" y="107" font-weight="bold">Access Control</text>
<text class="eb-text-small" x="50" y="125">• Permissionless (Permissionless)</text>
<text class="eb-text-small" x="50" y="138">• Anyone</text>
<text class="eb-text-small" x="50" y="151">• anonymousorPseudonymousIdentity</text>
<rect class="eb-header" x="40" y="165" width="320" height="25"/>
<text class="eb-text-small" x="50" y="182" font-weight="bold">consensusmechanism</text>
<text class="eb-text-small" x="50" y="200">• PoW / PoS (outgoingtrust)</text>
<text class="eb-text-small" x="50" y="213">• HighEnergyorHighStakingCost</text>
<text class="eb-text-small" x="50" y="226">• TPS: 15-5000</text>
<rect class="eb-header" x="40" y="240" width="320" height="25"/>
<text class="eb-text-small" x="50" y="257" font-weight="bold">privatenature</text>
<text class="eb-text-small" x="50" y="275">• TransactionPublictransparent</text>
<text class="eb-text-small" x="50" y="288">• AddressPseudonymousbuttraceable</text>
<text class="eb-text-small" x="50" y="301">• needZKetc.Techincreasestrongprivate</text>
<rect class="eb-header" x="40" y="315" width="320" height="25"/>
<text class="eb-text-small" x="50" y="332" font-weight="bold">Alliance-based</text>
<text class="eb-text-small" x="50" y="350">• communitydrivemove</text>
<text class="eb-text-small" x="50" y="363">• TokenVote</text>
<text class="eb-text-small" x="50" y="376">• hardpastFastfastdecision</text>
<rect class="eb-header" x="40" y="390" width="320" height="25"/>
<text class="eb-text-small" x="50" y="407" font-weight="bold">typicalApp</text>
<text class="eb-text-small" x="50" y="425">• DeFi, NFT, EncryptcurrencyCoin</text>
<text class="eb-text-small" x="50" y="438">• Web3 App</text>
<text class="eb-text-small" x="50" y="451">• Cross-border Payment</text>
<text class="eb-text-small" x="50" y="475" font-weight="bold">Examples: Ethereum, Bitcoin, Solana</text>
<rect class="eb-box-enterprise" x="430" y="50" width="340" height="450" rx="6"/>
<text class="eb-text" x="600" y="75" text-anchor="middle" font-weight="bold" font-size="14px">Enterprise Blockchain (Enterprise Blockchain)</text>
<rect class="eb-header" x="440" y="90" width="320" height="25"/>
<text class="eb-text-small" x="450" y="107" font-weight="bold">Access Control</text>
<text class="eb-text-small" x="450" y="125">• Permissioned (Permissioned)</text>
<text class="eb-text-small" x="450" y="138">• real-nameauthenticated (KYC/KYB)</text>
<text class="eb-text-small" x="450" y="151">• Role-basedAccess Control (RBAC)</text>
<rect class="eb-header" x="440" y="165" width="320" height="25"/>
<text class="eb-text-small" x="450" y="182" font-weight="bold">consensusmechanism</text>
<text class="eb-text-small" x="450" y="200">• PBFT / Raft (Higheffect)</text>
<text class="eb-text-small" x="450" y="213">• Low Latency，Energy Eff.</text>
<text class="eb-text-small" x="450" y="226">• TPS: 1000-100000+</text>
<rect class="eb-header" x="440" y="240" width="320" height="25"/>
<text class="eb-text-small" x="450" y="257" font-weight="bold">privatenature</text>
<text class="eb-text-small" x="450" y="275">• Dataisolate (Channel/Private Data)</text>
<text class="eb-text-small" x="450" y="288">• finegranularmeasurePermissioncontrol</text>
<text class="eb-text-small" x="450" y="301">• symbolfitGDPRetc.regulation</text>
<rect class="eb-header" x="440" y="315" width="320" height="25"/>
<text class="eb-text-small" x="450" y="332" font-weight="bold">Alliance-based</text>
<text class="eb-text-small" x="450" y="350">• Alliance Gov.</text>
<text class="eb-text-small" x="450" y="363">• chainDownProtocol</text>
<text class="eb-text-small" x="450" y="376">• FastfastResponsebusinessrequirement</text>
<rect class="eb-header" x="440" y="390" width="320" height="25"/>
<text class="eb-text-small" x="450" y="407" font-weight="bold">typicalApp</text>
<text class="eb-text-small" x="450" y="425">• Supply Chain Finance, Trade Finance</text>
<text class="eb-text-small" x="450" y="438">• assetdigitalify, existprooftrace</text>
<text class="eb-text-small" x="450" y="451">• Cross-OrgSharing</text>
<text class="eb-text-small" x="450" y="475" font-weight="bold">Examples: Hyperledger Fabric, R3 Corda, FISCO BCOS</text>
</svg>
</div>

<div style="text-align: center; margin: 2em 0;">
<svg class="svg-14-3" viewBox="0 0 750 450" xmlns="http://www.w3.org/2000/svg" style="width: 100%; max-width: 850px; display: block; margin: 0 auto;">
<defs>
<style>
.svg-14-3 .fisco-text-title { font-family: arial, sans-serif; font-size: 16px; fill: #1f2937; font-weight: bold; }
.svg-14-3 .fisco-text { font-family: arial, sans-serif; font-size: 10px; fill: #1f2937; }
.svg-14-3 .fisco-text-small { font-family: arial, sans-serif; font-size: 8.5px; fill: #1f2937; }
.svg-14-3 .fisco-box { fill: rgba(52, 81, 178, 0.10); stroke: #4c9be8; stroke-width: 2; }
.svg-14-3 .fisco-box-feature { fill: rgba(223, 105, 25, 0.08); stroke: #df6919; stroke-width: 1.5; }
</style>
</defs>
<text class="fisco-text-title" x="375" y="25" text-anchor="middle">FISCO BCOS Architecture&feature</text>
<rect class="fisco-box" x="30" y="50" width="690" height="380" rx="6"/>
<text class="fisco-text" x="375" y="72" text-anchor="middle" font-weight="bold" font-size="13px">FISCO BCOS 3.x microservicearchitecture</text>
<rect class="fisco-box-feature" x="50" y="90" width="200" height="130" rx="4"/>
<text class="fisco-text" x="150" y="107" text-anchor="middle" font-weight="bold">ManyGroup Arch</text>
<text class="fisco-text-small" x="60" y="125">• Group isolate (class Fabric Channel)</text>
<text class="fisco-text-small" x="60" y="140">• differentGroupindependentconsensus</text>
<text class="fisco-text-small" x="60" y="155">• SupportstepGroupTransaction</text>
<text class="fisco-text-small" x="60" y="170">• movestateGroupmgmt</text>
<text class="fisco-text-small" x="60" y="195" font-weight="bold">Pros:</text>
<text class="fisco-text-small" x="60" y="210">Performanceisolate，flexiblescale</text>
<rect class="fisco-box-feature" x="270" y="90" width="200" height="130" rx="4"/>
<text class="fisco-text" x="370" y="107" text-anchor="middle" font-weight="bold">High Perf.consensus</text>
<text class="fisco-text-small" x="280" y="125">• PBFT (bow占庭Fault Tol.)</text>
<text class="fisco-text-small" x="280" y="140">• rPBFT (parallel PBFT)</text>
<text class="fisco-text-small" x="280" y="155">• Raft (crashFault Tol.)</text>
<text class="fisco-text-small" x="280" y="170">• TPS: 10000-100000+</text>
<text class="fisco-text-small" x="280" y="195" font-weight="bold">Performancerealmeasure:</text>
<text class="fisco-text-small" x="280" y="210">20Node PBFT understand 100K TPS</text>
<rect class="fisco-box-feature" x="490" y="90" width="210" height="130" rx="4"/>
<text class="fisco-text" x="595" y="107" text-anchor="middle" font-weight="bold">China CryptocalclawSupport</text>
<text class="fisco-text-small" x="500" y="125">• SM2 (Elliptic CurveSign)</text>
<text class="fisco-text-small" x="500" y="140">• SM3 (Hash Algorithm)</text>
<text class="fisco-text-small" x="500" y="155">• SM4 (Symmetric)</text>
<text class="fisco-text-small" x="500" y="170">• symbolfitChina Reg.require</text>
<text class="fisco-text-small" x="500" y="195" font-weight="bold">App:</text>
<text class="fisco-text-small" x="500" y="210">政business、Financeetc.Compliancescenario</text>
<rect class="fisco-box-feature" x="50" y="235" width="200" height="180" rx="4"/>
<text class="fisco-text" x="150" y="252" text-anchor="middle" font-weight="bold">WeBASE Mediumbetweenware</text>
<text class="fisco-text-small" x="60" y="270">• canvisionifymgmtPlatform</text>
<text class="fisco-text-small" x="60" y="285">• Contract IDE</text>
<text class="fisco-text-small" x="60" y="300">• Blockchain浏viewer</text>
<text class="fisco-text-small" x="60" y="315">• Private Keymgmtservice</text>
<text class="fisco-text-small" x="60" y="330">• dropLowdevdoorthreshold</text>
<text class="fisco-text-small" x="60" y="355" font-weight="bold">SDK Support:</text>
<text class="fisco-text-small" x="60" y="370">• Java SDK</text>
<text class="fisco-text-small" x="60" y="385">• Python SDK</text>
<text class="fisco-text-small" x="60" y="400">• Go SDK</text>
<rect class="fisco-box-feature" x="270" y="235" width="200" height="180" rx="4"/>
<text class="fisco-text" x="370" y="252" text-anchor="middle" font-weight="bold">Smart Contract</text>
<text class="fisco-text-small" x="280" y="270">• Solidity (compatEthereum)</text>
<text class="fisco-text-small" x="280" y="285">• 预encodeinterpretContract (C++)</text>
<text class="fisco-text-small" x="280" y="300">• Support EVM</text>
<text class="fisco-text-small" x="280" y="315">• Contractlife命Epochmgmt</text>
<text class="fisco-text-small" x="280" y="330">• Permissioncontrol</text>
<text class="fisco-text-small" x="280" y="355" font-weight="bold">Storage:</text>
<text class="fisco-text-small" x="280" y="370">• RocksDB (default)</text>
<text class="fisco-text-small" x="280" y="385">• MySQL (Enterpriseedition)</text>
<text class="fisco-text-small" x="280" y="400">• disttypeStorageSupport</text>
<rect class="fisco-box-feature" x="490" y="235" width="210" height="180" rx="4"/>
<text class="fisco-text" x="595" y="252" text-anchor="middle" font-weight="bold">eco&App</text>
<text class="fisco-text-small" x="500" y="270">• ultrafault 3000+ EnterpriseUser</text>
<text class="fisco-text-small" x="500" y="285">• 200+ labelpoleApp</text>
<text class="fisco-text-small" x="500" y="300">• Finance: WeBank, CMB</text>
<text class="fisco-text-small" x="500" y="315">• 政business: Beijing、Shenzhen政businesschain</text>
<text class="fisco-text-small" x="500" y="330">• 司law: mutuallinknetlawcourtyardexistproof</text>
<text class="fisco-text-small" x="500" y="345">• copyright: personpeoplenetcopyrightchain</text>
<text class="fisco-text-small" x="500" y="370" font-weight="bold">2025 mostNewinput展:</text>
<text class="fisco-text-small" x="500" y="385">• v3.8 SupportCross-chainInterop</text>
<text class="fisco-text-small" x="500" y="400">• Privacy Computecomponentcollectcomplete</text>
</svg>
</div>

<div style="text-align: center; margin: 2em 0;">
<svg class="svg-14-5" viewBox="0 0 850 450" xmlns="http://www.w3.org/2000/svg" style="width: 100%; max-width: 950px; display: block; margin: 0 auto;">
<defs>
<style>
.svg-14-5 .scf-text-title { font-family: arial, sans-serif; font-size: 16px; fill: #1f2937; font-weight: bold; }
.svg-14-5 .scf-text { font-family: arial, sans-serif; font-size: 10px; fill: #1f2937; }
.svg-14-5 .scf-text-small { font-family: arial, sans-serif; font-size: 8.5px; fill: #1f2937; }
.svg-14-5 .scf-box-core { fill: rgba(223, 105, 25, 0.12); stroke: #df6919; stroke-width: 2; }
.svg-14-5 .scf-box-tier1 { fill: rgba(52, 81, 178, 0.10); stroke: #4c9be8; stroke-width: 1.5; }
.svg-14-5 .scf-box-tier2 { fill: rgba(92, 184, 92, 0.10); stroke: #5cb85c; stroke-width: 1.5; }
.svg-14-5 .scf-arrow { stroke: #1f2937; stroke-width: 1.5; fill: none; marker-end: url(#arrowhead-scf); }
</style>
<marker id="arrowhead-scf" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
<polygon points="0 0, 8 3, 0 6" fill="#1f2937" />
</marker>
</defs>
<text class="scf-text-title" x="425" y="25" text-anchor="middle">antantchainevenchaintranslate - Supply Chain Financesolvesolution</text>
<text class="scf-text" x="425" y="50" text-anchor="middle" font-weight="bold">tradSupply Chain Financepainpoint → Blockchainsolvesolution</text>
<rect class="scf-box-core" x="350" y="80" width="150" height="80" rx="4"/>
<text class="scf-text" x="425" y="100" text-anchor="middle" font-weight="bold">coreEnterprise</text>
<text class="scf-text-small" x="425" y="118" text-anchor="middle">(e.g.Huawei、ratio亚迪)</text>
<text class="scf-text-small" x="425" y="135" text-anchor="middle">Payables: ¥10hundred million</text>
<text class="scf-text-small" x="425" y="150" text-anchor="middle">trustusereviewgrade: AAA</text>
<rect class="scf-box-tier1" x="150" y="80" width="140" height="80" rx="4"/>
<text class="scf-text" x="220" y="100" text-anchor="middle" font-weight="bold">unitegradesupplybiz</text>
<text class="scf-text-small" x="220" y="118" text-anchor="middle">(straightreceivesupplycurrency)</text>
<text class="scf-text-small" x="220" y="135" text-anchor="middle">Receivables: ¥500010K</text>
<text class="scf-text-small" x="220" y="150" text-anchor="middle">canobtainfinance</text>
<rect class="scf-box-tier2" x="30" y="80" width="90" height="80" rx="4"/>
<text class="scf-text" x="75" y="100" text-anchor="middle" font-weight="bold">Ngradesupplybiz</text>
<text class="scf-text-small" x="75" y="118" text-anchor="middle">(MediumSmallEnterprise)</text>
<text class="scf-text-small" x="75" y="135" text-anchor="middle">responsereceive: ¥10010K</text>
<text class="scf-text-small" x="75" y="150" text-anchor="middle">❌ Nonelawfinance</text>
<rect class="scf-box-tier1" x="560" y="80" width="120" height="80" rx="4"/>
<text class="scf-text" x="620" y="100" text-anchor="middle" font-weight="bold">FinanceInstitutional</text>
<text class="scf-text-small" x="620" y="118" text-anchor="middle">(silverrow、protectreason)</text>
<text class="scf-text-small" x="620" y="135" text-anchor="middle">onlytrustcoreEnterprise</text>
<text class="scf-text-small" x="620" y="150" text-anchor="middle">trustuseNonelawtransmitdeliver</text>
<path class="scf-arrow" d="M 120 120 L 150 120"/>
<text class="scf-text-small" x="135" y="113" text-anchor="middle" fill="#df6919">supplycurrency</text>
<path class="scf-arrow" d="M 290 120 L 350 120"/>
<text class="scf-text-small" x="320" y="113" text-anchor="middle" fill="#df6919">supplycurrency</text>
<path class="scf-arrow" d="M 500 120 L 560 120"/>
<text class="scf-text-small" x="530" y="113" text-anchor="middle" fill="#df6919">finance</text>
<line x1="30" y1="190" x2="820" y2="190" stroke="#4c9be8" stroke-width="2" stroke-dasharray="5,5" fill="none"/>
<text class="scf-text-title" x="425" y="215" text-anchor="middle" font-size="14px">antantchainevenchaintranslatesolution</text>
<rect class="scf-box-core" x="350" y="240" width="150" height="90" rx="4"/>
<text class="scf-text" x="425" y="258" text-anchor="middle" font-weight="bold">coreEnterprise</text>
<text class="scf-text-small" x="360" y="278">1. labelemitresponsereceiveVC</text>
<text class="scf-text-small" x="360" y="293">2. VCcanremoveminflowconvert</text>
<text class="scf-text-small" x="360" y="308">3. toexpect兑pay承诺</text>
<text class="scf-text-small" x="360" y="323">On-chainTime: real-time</text>
<rect class="scf-box-tier1" x="150" y="240" width="140" height="90" rx="4"/>
<text class="scf-text" x="220" y="258" text-anchor="middle" font-weight="bold">unitegradesupplybiz</text>
<text class="scf-text-small" x="160" y="278">receivetoVC ¥500010K</text>
<text class="scf-text-small" x="160" y="293">removemin ¥10010K</text>
<text class="scf-text-small" x="160" y="308">transmitdelivergiveDownswim</text>
<text class="scf-text-small" x="160" y="323">✓ chainUpcanVerify</text>
<rect class="scf-box-tier2" x="30" y="240" width="90" height="90" rx="4"/>
<text class="scf-text" x="75" y="258" text-anchor="middle" font-weight="bold">Ngradesupplybiz</text>
<text class="scf-text-small" x="40" y="278">receivetoVC</text>
<text class="scf-text-small" x="40" y="293">¥10010K</text>
<text class="scf-text-small" x="40" y="308">✅ canfinance</text>
<text class="scf-text-small" x="40" y="323">Interest Rate: 4-6%</text>
<rect class="scf-box-tier1" x="560" y="240" width="120" height="90" rx="4"/>
<text class="scf-text" x="620" y="258" text-anchor="middle" font-weight="bold">FinanceInstitutional</text>
<text class="scf-text-small" x="570" y="278">chainUpVerifyVC</text>
<text class="scf-text-small" x="570" y="293">trustcoreEnterprise</text>
<text class="scf-text-small" x="570" y="308">Fastfastputfund</text>
<text class="scf-text-small" x="570" y="323">At Riskcancontrol</text>
<path class="scf-arrow" d="M 120 285 L 150 285"/>
<text class="scf-text-small" x="135" y="278" text-anchor="middle" fill="#5cb85c" font-weight="bold">VC</text>
<path class="scf-arrow" d="M 290 285 L 350 285"/>
<text class="scf-text-small" x="320" y="278" text-anchor="middle" fill="#5cb85c" font-weight="bold">VC</text>
<path class="scf-arrow" d="M 120 285 L 560 285" stroke-dasharray="3,3"/>
<text class="scf-text-small" x="340" y="278" text-anchor="middle" fill="#df6919" font-weight="bold">canstraightreceivefinance</text>
<rect x="30" y="350" width="790" height="80" fill="rgba(52, 81, 178, 0.05)" stroke="#4c9be8" stroke-width="1" rx="4"/>
<text class="scf-text" x="425" y="370" text-anchor="middle" font-weight="bold">solutioneffect (2024 yearData)</text>
<text class="scf-text-small" x="50" y="390">✓ flipcover: 50+ coreEnterprise，20000+ supplychainUpDownswimEnterprise</text>
<text class="scf-text-small" x="50" y="405">✓ finance规模: cum 2000 hundred million+</text>
<text class="scf-text-small" x="50" y="420">✓ MediumSmallEnterprisefinanceCostdropLow 2-3 percentminpoint</text>
<text class="scf-text-small" x="450" y="390">✓ avgputfundTime: from 7 daydropto 1 day</text>
<text class="scf-text-small" x="450" y="405">✓ VCflowconvertefficiency: real-timeOn-chain，SecondsConfirm</text>
<text class="scf-text-small" x="450" y="420">✓ 违约lead: LowintradSupply Chain Finance 50%</text>
</svg>
</div>

<div style="text-align: center; margin: 2em 0;">
<svg class="svg-14-6" viewBox="0 0 800 480" xmlns="http://www.w3.org/2000/svg" style="width: 100%; max-width: 900px; display: block; margin: 0 auto;">
<defs>
<style>
.svg-14-6 .deploy-text-title { font-family: arial, sans-serif; font-size: 16px; fill: #1f2937; font-weight: bold; }
.svg-14-6 .deploy-text { font-family: arial, sans-serif; font-size: 10px; fill: #1f2937; }
.svg-14-6 .deploy-text-small { font-family: arial, sans-serif; font-size: 8.5px; fill: #1f2937; }
.svg-14-6 .deploy-box { fill: rgba(52, 81, 178, 0.10); stroke: #4c9be8; stroke-width: 1.5; }
.svg-14-6 .deploy-step { fill: rgba(223, 105, 25, 0.12); stroke: #df6919; stroke-width: 2; }
</style>
</defs>
<text class="deploy-text-title" x="400" y="25" text-anchor="middle">Hyperledger Fabric prodDeploy Flow</text>
<ellipse cx="100" cy="80" rx="70" ry="35" class="deploy-step"/>
<text class="deploy-text" x="100" y="78" text-anchor="middle" font-weight="bold">1. Network规plan</text>
<text class="deploy-text-small" x="100" y="92" text-anchor="middle">architecturedesign</text>
<ellipse cx="280" cy="80" rx="70" ry="35" class="deploy-step"/>
<text class="deploy-text" x="280" y="78" text-anchor="middle" font-weight="bold">2. CA Deploy</text>
<text class="deploy-text-small" x="280" y="92" text-anchor="middle">Certificatemgmt</text>
<ellipse cx="460" cy="80" rx="70" ry="35" class="deploy-step"/>
<text class="deploy-text" x="460" y="78" text-anchor="middle" font-weight="bold">3. Orderer</text>
<text class="deploy-text-small" x="460" y="92" text-anchor="middle">Ordering Service</text>
<ellipse cx="640" cy="80" rx="70" ry="35" class="deploy-step"/>
<text class="deploy-text" x="640" y="78" text-anchor="middle" font-weight="bold">4. Peer</text>
<text class="deploy-text-small" x="640" y="92" text-anchor="middle">organizationNode</text>
<ellipse cx="190" cy="180" rx="70" ry="35" class="deploy-step"/>
<text class="deploy-text" x="190" y="178" text-anchor="middle" font-weight="bold">5. Channel</text>
<text class="deploy-text-small" x="190" y="192" text-anchor="middle">createsuggesttranslateroad</text>
<ellipse cx="370" cy="180" rx="70" ry="35" class="deploy-step"/>
<text class="deploy-text" x="370" y="178" text-anchor="middle" font-weight="bold">6. chaincodeDeploy</text>
<text class="deploy-text-small" x="370" y="192" text-anchor="middle">Smart Contract</text>
<ellipse cx="550" cy="180" rx="70" ry="35" class="deploy-step"/>
<text class="deploy-text" x="550" y="178" text-anchor="middle" font-weight="bold">7. Monitortransportdimension</text>
<text class="deploy-text-small" x="550" y="192" text-anchor="middle">supportcontmgmt</text>
<rect class="deploy-box" x="30" y="240" width="230" height="220" rx="4"/>
<text class="deploy-text" x="145" y="260" text-anchor="middle" font-weight="bold">criticalconfigparam</text>
<text class="deploy-text-small" x="40" y="280" font-weight="bold">Orderer (Raft):</text>
<text class="deploy-text-small" x="45" y="295">• Nodes: 3/5/7 (oddeven)</text>
<text class="deploy-text-small" x="45" y="310">• Batch Timeout: 2s</text>
<text class="deploy-text-small" x="45" y="325">• Batch Size: 500 tx</text>
<text class="deploy-text-small" x="45" y="340">• Max Message Count: 10</text>
<text class="deploy-text-small" x="40" y="360" font-weight="bold">Peer:</text>
<text class="deploy-text-small" x="45" y="375">• Gossip heartjump: 5s</text>
<text class="deploy-text-small" x="45" y="390">• State DB: CouchDB</text>
<text class="deploy-text-small" x="45" y="405">• Endorsement Policy:</text>
<text class="deploy-text-small" x="50" y="420">  AND('Org1.peer', 'Org2.peer')</text>
<text class="deploy-text-small" x="45" y="440">• chaincodelanguage: Go/Java/Node.js</text>
<rect class="deploy-box" x="280" y="240" width="240" height="220" rx="4"/>
<text class="deploy-text" x="400" y="260" text-anchor="middle" font-weight="bold">prodenvarchitecture</text>
<text class="deploy-text-small" x="290" y="280" font-weight="bold">Kubernetes Deploy (Recommended):</text>
<text class="deploy-text-small" x="295" y="295">• Helm Charts Deploy</text>
<text class="deploy-text-small" x="295" y="310">• StatefulSet (Orderer/Peer)</text>
<text class="deploy-text-small" x="295" y="325">• PersistentVolume (Ledger Storage)</text>
<text class="deploy-text-small" x="295" y="340">• Service Mesh (Istio)</text>
<text class="deploy-text-small" x="290" y="360" font-weight="bold">High Availability:</text>
<text class="deploy-text-small" x="295" y="375">• Orderer: 3 Nodestep AZ</text>
<text class="deploy-text-small" x="295" y="390">• Peer: 2+ Node/organization</text>
<text class="deploy-text-small" x="295" y="405">• CA: Primaryfromhotprepare</text>
<text class="deploy-text-small" x="290" y="425" font-weight="bold">Monitor:</text>
<text class="deploy-text-small" x="295" y="440">Prometheus + Grafana</text>
<rect class="deploy-box" x="540" y="240" width="230" height="220" rx="4"/>
<text class="deploy-text" x="655" y="260" text-anchor="middle" font-weight="bold">Perf Optsuggestsuggest</text>
<text class="deploy-text-small" x="550" y="280" font-weight="bold">Blockparam:</text>
<text class="deploy-text-small" x="555" y="295">• BlockLargeSmall: 20-100 tx</text>
<text class="deploy-text-small" x="555" y="310">• Block Time: 1-3s</text>
<text class="deploy-text-small" x="555" y="325">• flatmeasureThroughput&latency</text>
<text class="deploy-text-small" x="550" y="345" font-weight="bold">Datalib:</text>
<text class="deploy-text-small" x="555" y="360">• CouchDB Indexoptimize</text>
<text class="deploy-text-small" x="555" y="375">• Periodic CleanuphistoryData</text>
<text class="deploy-text-small" x="555" y="390">• R/W split</text>
<text class="deploy-text-small" x="550" y="410" font-weight="bold">Network:</text>
<text class="deploy-text-small" x="555" y="425">• dedicatedlineconnect (VPN/dedicatednet)</text>
<text class="deploy-text-small" x="555" y="440">• bandwidth: 100Mbps+</text>
<text class="deploy-text-small" x="555" y="455">• 延迟: <50ms</text>
</svg>
</div>

<div style="text-align: center; margin: 2em 0;">
<svg class="svg-14-7" viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" style="width: 100%; max-width: 900px; display: block; margin: 0 auto;">
<defs>
<style>
.svg-14-7 .future-text-title { font-family: arial, sans-serif; font-size: 16px; fill: #1f2937; font-weight: bold; }
.svg-14-7 .future-text { font-family: arial, sans-serif; font-size: 10px; fill: #1f2937; }
.svg-14-7 .future-text-small { font-family: arial, sans-serif; font-size: 8.5px; fill: #1f2937; }
.svg-14-7 .future-box { fill: rgba(52, 81, 178, 0.10); stroke: #4c9be8; stroke-width: 1.5; }
</style>
</defs>
<text class="future-text-title" x="400" y="25" text-anchor="middle">EnterpriseFuturetrend</text>
<rect class="future-box" x="30" y="50" width="230" height="160" rx="4"/>
<text class="future-text" x="145" y="70" text-anchor="middle" font-weight="bold">moduleifyarchitecture</text>
<text class="future-text-small" x="40" y="90">• pluggableconsensusguideengine</text>
<text class="future-text-small" x="40" y="105">• ManytypeVMSupport (EVM/WASM)</text>
<text class="future-text-small" x="40" y="120">• flexibleStorageBackend</text>
<text class="future-text-small" x="40" y="135">• hotinsert拔componentUpgrade</text>
<text class="future-text-small" x="40" y="160" font-weight="bold">Examples: Substrate, Cosmos SDK</text>
<text class="future-text-small" x="40" y="180">yieldEnterprisepressneeddecidemakeBlockchain</text>
<text class="future-text-small" x="40" y="195">2025 yeartrend: Lowcode搭chain</text>
<rect class="future-box" x="285" y="50" width="230" height="160" rx="4"/>
<text class="future-text" x="400" y="70" text-anchor="middle" font-weight="bold">Cross-chainInterop</text>
<text class="future-text-small" x="295" y="90">• Hyperledger Cactus</text>
<text class="future-text-small" x="295" y="105">• Polkadot Bridge</text>
<text class="future-text-small" x="295" y="120">• Cosmos IBC</text>
<text class="future-text-small" x="295" y="135">• Enterprisechain&Publicmutualtranslate</text>
<text class="future-text-small" x="295" y="160" font-weight="bold">scenario: </text>
<text class="future-text-small" x="295" y="180">• Fabric ↔ Ethereum Bridge</text>
<text class="future-text-small" x="295" y="195">• ManychainDataaggregateQuery</text>
<rect class="future-box" x="540" y="50" width="230" height="160" rx="4"/>
<text class="future-text" x="655" y="70" text-anchor="middle" font-weight="bold">Privacy Computeblendfit</text>
<text class="future-text-small" x="550" y="90">• Blockchain + Federated Learning</text>
<text class="future-text-small" x="550" y="105">• Homomorphic Enc.Smart Contract</text>
<text class="future-text-small" x="550" y="120">• Differential PrivacyData Analysis</text>
<text class="future-text-small" x="550" y="135">• canVerifyCalc (zkVM)</text>
<text class="future-text-small" x="550" y="160" font-weight="bold">App:</text>
<text class="future-text-small" x="550" y="180">• ManyplacelinkfitwindcontrolnoleakrevealData</text>
<text class="future-text-small" x="550" y="195">• Privacysupplychainanalyze</text>
<rect class="future-box" x="30" y="230" width="360" height="170" rx="4"/>
<text class="future-text" x="210" y="250" text-anchor="middle" font-weight="bold">BaaS Platformmatureify</text>
<text class="future-text-small" x="40" y="270">• unitekeyDeployBlockchainNetwork</text>
<text class="future-text-small" x="40" y="285">• canvisionifychaincodedev (Lowcode)</text>
<text class="future-text-small" x="40" y="300">• autoifytransportdimension (AIOps)</text>
<text class="future-text-small" x="40" y="315">• pressneedpayfee，elasticScaling</text>
<text class="future-text-small" x="40" y="340" font-weight="bold">Primaryflow BaaS Platform (2025):</text>
<text class="future-text-small" x="40" y="355">• Azure Blockchain Service (微soft)</text>
<text class="future-text-small" x="40" y="370">• Amazon Managed Blockchain (AWS)</text>
<text class="future-text-small" x="40" y="385">• Alibaba BaaS (Alibabacloud)</text>
<rect class="future-box" x="410" y="230" width="360" height="170" rx="4"/>
<text class="future-text" x="590" y="250" text-anchor="middle" font-weight="bold">RegTech (RegTech) wholefit</text>
<text class="future-text-small" x="420" y="270">• 嵌inputtypeComplianceguideengine</text>
<text class="future-text-small" x="420" y="285">• autoify KYC/AML Verify</text>
<text class="future-text-small" x="420" y="300">• real-timeRegulationresulttellgenerate</text>
<text class="future-text-small" x="420" y="315">• auditablePrivacy</text>
<text class="future-text-small" x="420" y="340" font-weight="bold">trend:</text>
<text class="future-text-small" x="420" y="355">• EU MiCA regulationrecommendmove</text>
<text class="future-text-small" x="420" y="370">• CBDC wholefit</text>
<text class="future-text-small" x="420" y="385">• chainUpIdentity (DID) Standard</text>
</svg>
</div>
