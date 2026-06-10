---
title: "Chapter 15: Security and Best Practices"
---

<div class="ccbus-hero">
  <div class="ccbus-hero-avatar">
    <img src="../public/images/avatars/heroes/guardian-node.png" alt="Guardian Node" />
  </div>
  <div class="ccbus-hero-content">
    <h1>Chapter 15: Security and Best Practices</h1>
    <div class="ccbus-teacher-label">🎙️ Taught by:<strong>Guardian Node</strong> · The "chief instructor" of security and best practices</div>
  </div>
</div>

<div class="chapter-intro">

**Difficulty Level:** 🔴 Advanced
**Estimated Learning Time:** 6-7 hours

**Chapter Objectives:**
- Establish comprehensive security awareness
- Master wallet security practices
- Understand attack vectors
- Learn incident response procedures

</div>


## 15.0 2025-2026 Perspective: Why Reread This Chapter

Blockchain security in 2026 faces three new attack waves: **private-key phishing, contract upgrade traps, AI-driven contract vulnerability mining**. This chapter updates your security defense checklist.

1. **Three new attack surfaces in 2025-2026**:
   - **EIP-7702 phishing**: user signs `AUTH` message temporarily binding EOA to attacker's contract
   - **Permit2 abuse**: Uniswap's universal approve protocol exploited by phishing
   - **ERC-4337 signature replay**: UserOperation's signature doesn't include sender, can be replayed

2. **Evolution of traditional attacks**:
   - **Reentrancy**: rare after OZ 5.1+ popularization
   - **Front-running + MEV**: now industrialized (Across, UniswapX, CoW all have MEV protection)
   - **Flash loan attacks**: still main attack vector, but with Forta real-time monitoring

3. **Required 2026 toolchain**:
   - **Foundry** + **Slither** + **Echidna** + **Certora**: CI-enforced four-piece
   - **Forta** + **Tenderly**: post-launch real-time monitoring
   - **OpenZeppelin Defender** + **Safe{Wallet}**: operations management
   - **Code Arena (Cantina)**: 2025 newcomer, crowdsourced audit at 3x speed

4. **CCBus's contract security toolchain**:
   - **Contract Verifier**: decompile + source match
   - **Contract Inspector**: Slither-style static analysis
   - **Combining the two is the 2026 DeFi security standard workflow**

## 15.1 Wallet Security


<div style="text-align: center; margin: 2em 0;">
<svg class="svg-15-0" viewBox="0 0 900 580" xmlns="http://www.w3.org/2000/svg" style="width: 100%; max-width: 1000px; display: block; margin: 0 auto;">
<defs>
<style>
.svg-15-0 .sec-text-title { font-family: arial, sans-serif; font-size: 16px; fill: #1f2937; font-weight: bold; }
.svg-15-0 .sec-text { font-family: arial, sans-serif; font-size: 10px; fill: #1f2937; }
.svg-15-0 .sec-text-small { font-family: arial, sans-serif; font-size: 8.5px; fill: #1f2937; }
.svg-15-0 .sec-box-critical { fill: rgba(220, 53, 69, 0.2); stroke: #dc3545; stroke-width: 2; }
.svg-15-0 .sec-box-high { fill: rgba(223, 105, 25, 0.08); stroke: #df6919; stroke-width: 1.5; }
.svg-15-0 .sec-box-medium { fill: rgba(255, 193, 7, 0.2); stroke: rgba(245, 194, 66, 0.20); stroke-width: 1.5; }
.svg-15-0 .sec-box-low { fill: rgba(92, 184, 92, 0.10); stroke: #5cb85c; stroke-width: 1.5; }
</style>
</defs>
<text class="sec-text-title" x="450" y="25" text-anchor="middle">Blockchainsafethreatwhole景graph</text>
<text class="sec-text" x="450" y="50" text-anchor="middle" font-weight="bold">2024 yearBlockchainsafeloss: $2B+，Smart Contractvuln占 60%+</text>
<rect class="sec-box-critical" x="30" y="70" width="200" height="240" rx="4"/>
<text class="sec-text" x="130" y="90" text-anchor="middle" font-weight="bold" fill="#dc3545">🔴 severethreat</text>
<text class="sec-text-small" x="40" y="110" font-weight="bold">Smart Contractvuln:</text>
<text class="sec-text-small" x="45" y="125">• Reentrancy (Reentrancy)</text>
<text class="sec-text-small" x="45" y="140">• Integer Overflow/Down溢</text>
<text class="sec-text-small" x="45" y="155">• notcheckoutsideCall</text>
<text class="sec-text-small" x="45" y="170">• Access Controllack陷</text>
<text class="sec-text-small" x="40" y="195" font-weight="bold">Private Key Leak:</text>
<text class="sec-text-small" x="45" y="210">• PlaintextStoragePrivate Key</text>
<text class="sec-text-small" x="45" y="225">• weakNoncegenerate</text>
<text class="sec-text-small" x="45" y="240">• Phishing</text>
<text class="sec-text-small" x="40" y="265" font-weight="bold">case: DAO blackclient (2016)</text>
<text class="sec-text-small" x="40" y="280">loss: $60M ETH</text>
<text class="sec-text-small" x="40" y="295">guide致EthereumHard Fork</text>
<rect class="sec-box-high" x="250" y="70" width="200" height="240" rx="4"/>
<text class="sec-text" x="350" y="90" text-anchor="middle" font-weight="bold" fill="#df6919">🟠 High危threat</text>
<text class="sec-text-small" x="260" y="110" font-weight="bold">Frontendrun (MEV):</text>
<text class="sec-text-small" x="265" y="125">• Sandwich Attack</text>
<text class="sec-text-small" x="265" y="140">• 抢firstTransaction</text>
<text class="sec-text-small" x="265" y="155">• postrunattack</text>
<text class="sec-text-small" x="260" y="180" font-weight="bold">Flash Loan Attack:</text>
<text class="sec-text-small" x="265" y="195">• Price操纵</text>
<text class="sec-text-small" x="265" y="210">• Arbitrageattack</text>
<text class="sec-text-small" x="265" y="225">• Governance Attack</text>
<text class="sec-text-small" x="260" y="250" font-weight="bold">Case: Poly Network (2021)</text>
<text class="sec-text-small" x="260" y="265">loss: $611M</text>
<text class="sec-text-small" x="260" y="280">Bridgevuln</text>
<text class="sec-text-small" x="260" y="295">postblanketblackclientreturnreturn</text>
<rect class="sec-box-high" x="470" y="70" width="200" height="240" rx="4"/>
<text class="sec-text" x="570" y="90" text-anchor="middle" font-weight="bold" fill="#df6919">🟠 High危threat</text>
<text class="sec-text-small" x="480" y="110" font-weight="bold">Bridgesafe:</text>
<text class="sec-text-small" x="485" y="125">• Verifyer妥proto</text>
<text class="sec-text-small" x="485" y="140">• Message篡change</text>
<text class="sec-text-small" x="485" y="155">• Double Spendattack</text>
<text class="sec-text-small" x="480" y="180" font-weight="bold">Oracle 操纵:</text>
<text class="sec-text-small" x="485" y="195">• Price Oracleattack</text>
<text class="sec-text-small" x="485" y="210">• Datasourcedirtydye</text>
<text class="sec-text-small" x="485" y="225">• latencyattack</text>
<text class="sec-text-small" x="480" y="250" font-weight="bold">Case: Ronin Bridge (2022)</text>
<text class="sec-text-small" x="480" y="265">loss: $625M</text>
<text class="sec-text-small" x="480" y="280">5/9 Verifyerblanketattackbreak</text>
<text class="sec-text-small" x="480" y="295">史UpmostLarge盗窃case之unite</text>
<rect class="sec-box-medium" x="690" y="70" width="180" height="240" rx="4"/>
<text class="sec-text" x="780" y="90" text-anchor="middle" font-weight="bold" fill="rgba(245, 194, 66, 0.20)">🟡 Medium危threat</text>
<text class="sec-text-small" x="700" y="110" font-weight="bold">Frontendsafe:</text>
<text class="sec-text-small" x="705" y="125">• XSS attack</text>
<text class="sec-text-small" x="705" y="140">• DNS 劫support</text>
<text class="sec-text-small" x="705" y="155">• false冒netstop</text>
<text class="sec-text-small" x="700" y="180" font-weight="bold">dependvuln:</text>
<text class="sec-text-small" x="705" y="195">• libvuln</text>
<text class="sec-text-small" x="705" y="210">• Supply Chain Attack</text>
<text class="sec-text-small" x="700" y="235" font-weight="bold">Governance Attack:</text>
<text class="sec-text-small" x="705" y="250">• Manyevenattack</text>
<text class="sec-text-small" x="705" y="265">• Propose操纵</text>
<text class="sec-text-small" x="705" y="280">• Vote贿赂</text>
<rect class="sec-box-critical" x="30" y="330" width="410" height="230" rx="4"/>
<text class="sec-text" x="235" y="350" text-anchor="middle" font-weight="bold" fill="#dc3545">Smart Contractvuln Top 10 (2024)</text>
<text class="sec-text-small" x="40" y="375">1. Reentrancy (Reentrancy) - ratio 18%</text>
<text class="sec-text-small" x="50" y="390">TheDAO, Uniswap V1, Cream Finance</text>
<text class="sec-text-small" x="40" y="410">2. Access Controllack陷 - ratio 15%</text>
<text class="sec-text-small" x="50" y="425">Parity MultiSigwalletfrozenresultEvent</text>
<text class="sec-text-small" x="40" y="445">3. Integer Overflow/Down溢 - ratio 12%</text>
<text class="sec-text-small" x="50" y="460">BeautyChain (BEC) Tokenmint</text>
<text class="sec-text-small" x="40" y="480">4. notcheckoutsideCall - ratio 10%</text>
<text class="sec-text-small" x="40" y="500">5. Frontendrun (Front-Running) - ratio 9%</text>
<text class="sec-text-small" x="40" y="520">6. Timestampdepend - ratio 8%</text>
<text class="sec-text-small" x="40" y="540">7. other (logicalerror, Gas limitetc.) - 28%</text>
<rect class="sec-box-low" x="460" y="330" width="410" height="230" rx="4"/>
<text class="sec-text" x="665" y="350" text-anchor="middle" font-weight="bold" fill="#5cb85c">prevent御措施excellentfirstgrade</text>
<text class="sec-text-small" x="470" y="375" font-weight="bold">mustwhisker做 (P0):</text>
<text class="sec-text-small" x="475" y="390">✓ Code Audit (toFew 2 familyindependentaudit)</text>
<text class="sec-text-small" x="475" y="405">✓ Formal VerifycriticalContract</text>
<text class="sec-text-small" x="475" y="420">✓ bug Bounty plan</text>
<text class="sec-text-small" x="475" y="435">✓ MultiSigwalletmgmtPermission</text>
<text class="sec-text-small" x="470" y="455" font-weight="bold">Recommended做 (P1):</text>
<text class="sec-text-small" x="475" y="470">✓ Timelock (Timelock) Upgrade</text>
<text class="sec-text-small" x="475" y="485">✓ urgentPausemechanism</text>
<text class="sec-text-small" x="475" y="500">✓ chainUpMonitor&result警</text>
<text class="sec-text-small" x="470" y="520" font-weight="bold">optional做 (P2):</text>
<text class="sec-text-small" x="475" y="535">✓ Insuranceflipcover</text>
<text class="sec-text-small" x="475" y="550">✓ DecentralizationFrontendCustodial (IPFS)</text>
</svg>
</div>

<div style="text-align: center; margin: 2em 0;">
<svg class="svg-15-5" viewBox="0 0 850 500" xmlns="http://www.w3.org/2000/svg" style="width: 100%; max-width: 950px; display: block; margin: 0 auto;">
<defs>
<style>
.svg-15-5 .fe-text-title { font-family: arial, sans-serif; font-size: 16px; fill: #1f2937; font-weight: bold; }
.svg-15-5 .fe-text { font-family: arial, sans-serif; font-size: 10px; fill: #1f2937; }
.svg-15-5 .fe-text-small { font-family: arial, sans-serif; font-size: 8.5px; fill: #1f2937; }
.svg-15-5 .fe-box-threat { fill: rgba(223, 105, 25, 0.08); stroke: #df6919; stroke-width: 1.5; }
.svg-15-5 .fe-box-defense { fill: rgba(92, 184, 92, 0.10); stroke: #5cb85c; stroke-width: 1.5; }
</style>
</defs>
<text class="fe-text-title" x="425" y="25" text-anchor="middle">DApp Frontendsafethreat&prevent御</text>
<rect class="fe-box-threat" x="30" y="50" width="380" height="200" rx="4"/>
<text class="fe-text" x="220" y="70" text-anchor="middle" font-weight="bold" fill="#df6919">oftenseethreat</text>
<text class="fe-text-small" x="40" y="95" font-weight="bold">1. 钓fishnetstop (Phishing):</text>
<text class="fe-text-small" x="45" y="110">• false冒officialDomain (typosquatting)</text>
<text class="fe-text-small" x="45" y="125">• uniswap.com vs uni5wap.com</text>
<text class="fe-text-small" x="40" y="150" font-weight="bold">2. DNS 劫support:</text>
<text class="fe-text-small" x="45" y="165">• Domainsolution析blanket篡change</text>
<text class="fe-text-small" x="45" y="180">• indicatetowardMalicious IP</text>
<text class="fe-text-small" x="40" y="205" font-weight="bold">3. MaliciousTx Signature:</text>
<text class="fe-text-small" x="45" y="220">• displaydemo "Claim Airdrop"</text>
<text class="fe-text-small" x="45" y="235">• physicalauthorizedallToken</text>
<rect class="fe-box-defense" x="440" y="50" width="380" height="200" rx="4"/>
<text class="fe-text" x="630" y="70" text-anchor="middle" font-weight="bold" fill="#5cb85c">prevent御措施</text>
<text class="fe-text-small" x="450" y="95" font-weight="bold">1. HTTPS + HSTS:</text>
<text class="fe-text-small" x="455" y="110">✓ strongmake HTTPS</text>
<text class="fe-text-small" x="455" y="125">✓ HSTS Preload list</text>
<text class="fe-text-small" x="450" y="150" font-weight="bold">2. in容safestrategy (CSP):</text>
<text class="fe-text-small" x="455" y="165">✓ forbidstopinlinkfootorigin</text>
<text class="fe-text-small" x="455" y="180">✓ Whitelistoutsideassetsource</text>
<text class="fe-text-small" x="450" y="205" font-weight="bold">3. Transaction模拟 (Simulation):</text>
<text class="fe-text-small" x="455" y="220">✓ Tenderly / Blocknative</text>
<text class="fe-text-small" x="455" y="235">✓ previewTransactionresult</text>
<line x1="30" y1="270" x2="820" y2="270" stroke="#4c9be8" stroke-width="1" stroke-dasharray="5,5" fill="none"/>
<text class="fe-text" x="425" y="290" text-anchor="middle" font-weight="bold">FrontendsafeBest Practice</text>
<rect class="fe-box-defense" x="50" y="305" width="360" height="180" rx="4"/>
<text class="fe-text" x="230" y="325" text-anchor="middle" font-weight="bold">TransactionConfirm UI</text>
<text class="fe-text-small" x="60" y="345" font-weight="bold">mustwhiskerdisplaydemo:</text>
<text class="fe-text-small" x="65" y="360">✓ ContractAddress (canVerify)</text>
<text class="fe-text-small" x="65" y="375">✓ Functionnametitle (easyread)</text>
<text class="fe-text-small" x="65" y="390">✓ paramvalue (solutioncodepost)</text>
<text class="fe-text-small" x="65" y="405">✓ Gas Feeuseestimatecalc</text>
<text class="fe-text-small" x="65" y="420">✓ expectationassetchange</text>
<text class="fe-text-small" x="60" y="445" font-weight="bold">Example: Uniswap TransactionConfirm</text>
<text class="fe-text-small" x="65" y="460">"Swap 1.5 ETH for ≥ 3000 USDC"</text>
<text class="fe-text-small" x="65" y="475">"Price Impact: 0.12%"</text>
<rect class="fe-box-defense" x="430" y="305" width="390" height="180" rx="4"/>
<text class="fe-text" x="625" y="325" text-anchor="middle" font-weight="bold">codeExample (React + ethers.js)</text>
<text class="fe-text-small" x="440" y="345" font-family="monospace">// ✅ Transaction模拟</text>
<text class="fe-text-small" x="440" y="360" font-family="monospace">const simulateTx = async (tx) => {</text>
<text class="fe-text-small" x="450" y="375" font-family="monospace">const result = await provider.call({</text>
<text class="fe-text-small" x="460" y="390" font-family="monospace">to: tx.to,</text>
<text class="fe-text-small" x="460" y="405" font-family="monospace">data: tx.data,</text>
<text class="fe-text-small" x="460" y="420" font-family="monospace">value: tx.value</text>
<text class="fe-text-small" x="450" y="435" font-family="monospace">});</text>
<text class="fe-text-small" x="450" y="450" font-family="monospace">// solutioncoderesultmerge展demogiveUser</text>
<text class="fe-text-small" x="450" y="465" font-family="monospace">return decodeResult(result);</text>
<text class="fe-text-small" x="440" y="480" font-family="monospace">};</text>
</svg>
</div>
### Hardware Wallets
- **Ledger** - Secure Element chip
- **Trezor** - Open source
- **Coldcard** - Bitcoin-only

### Software Wallets
- Hot wallets for daily use
- Cold storage for long-term holdings

### Multi-Signature Wallets
- Require multiple signatures for transactions
- Reduces single point of failure

## 15.2 Private Key Management

**Critical Rule**: Never share your private keys or seed phrases.

### Best Practices
- ✅ Use hardware wallets for large amounts
- ✅ Store seed phrases offline
- ✅ Use metal backup devices
- ✅ Test recovery process
- ❌ Never store keys digitally
- ❌ Never share with anyone

## 15.3 Smart Contract Security Audits

### Audit Process
1. Code review
2. Automated analysis tools
3. Manual testing
4. Formal verification
5. Report generation

### Top Audit Firms
- CertiK
- Trail of Bits
- OpenZeppelin
- Consensys Diligence

## 15.4 Common Attack Vectors

### Smart Contract Attacks
- **Reentrancy** - Recursive external calls
- **Front-running** - Transaction order manipulation
- **Oracle Manipulation** - Price feed attacks
- **Flash Loan Attacks** - Exploit price oracles

### Network Attacks
- **51% Attack** - Control majority hash power
- **Eclipse Attack** - Isolate nodes
- **Sybil Attack** - Create multiple identities

## 15.5 Social Engineering and Phishing

Common scams:
- Fake airdrops
- Impersonation
- Phishing websites
- Fake support

### Protection
- Verify URLs carefully
- Use bookmarks
- Enable 2FA
- Be skeptical of unsolicited messages

## 15.6 Compliance (KYC/AML)

- Know Your Customer (KYC)
- Anti-Money Laundering (AML)
- Regulatory requirements vary by jurisdiction

## 15.7 Incident Response and Recovery

### Response Plan
1. Identify the breach
2. Contain the damage
3. Assess impact
4. Notify affected parties
5. Remediate vulnerabilities
6. Review and improve

## 15.8 Security Tools and Resources

- **Slither** - Static analysis for Solidity
- **MythX** - Security analysis platform
- **Etherscan** - Contract verification
- **Tenderly** - Transaction debugging

<div class="ccbus-teacher-credits">
  <div class="ccbus-teacher-credits-avatar">
    <img src="../public/images/avatars/heroes/guardian-node.png" alt="Guardian Node" />
  </div>
  <div class="ccbus-teacher-credits-body">
    Taught by: <strong>Guardian Node</strong> — The "chief instructor" of security and best practices<br />
    <span style="font-size: 0.85em; color: var(--vp-c-text-3);">📚 The next chapter [Chapter 16: The Future of Blockchain] will be taught by another CCBus guide.</span>
  </div>
</div>

<div class="chapter-footer">

### Key Takeaways
- Security is paramount in blockchain
- Hardware wallets are essential for significant holdings
- Smart contract audits are not optional
- Social engineering is a major threat
- Always have an incident response plan

</div>

<div style="text-align: center; margin: 2em 0;">
<svg class="svg-15-1" viewBox="0 0 850 520" xmlns="http://www.w3.org/2000/svg" style="width: 100%; max-width: 950px; display: block; margin: 0 auto;">
<defs>
<style>
.svg-15-1 .reen-text-title { font-family: arial, sans-serif; font-size: 16px; fill: #1f2937; font-weight: bold; }
.svg-15-1 .reen-text { font-family: arial, sans-serif; font-size: 10px; fill: #1f2937; }
.svg-15-1 .reen-text-small { font-family: arial, sans-serif; font-size: 8.5px; fill: #1f2937; }
.svg-15-1 .reen-box-vuln { fill: rgba(220, 53, 69, 0.2); stroke: #dc3545; stroke-width: 2; }
.svg-15-1 .reen-box-safe { fill: rgba(92, 184, 92, 0.10); stroke: #5cb85c; stroke-width: 2; }
.svg-15-1 .reen-arrow { stroke: #df6919; stroke-width: 2; fill: none; marker-end: url(#arrowhead-reen); }
</style>
<marker id="arrowhead-reen" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
<polygon points="0 0, 10 3, 0 6" fill="#df6919" />
</marker>
</defs>
<text class="reen-text-title" x="425" y="25" text-anchor="middle">ReentrancyMechanism&prevent御</text>
<rect class="reen-box-vuln" x="30" y="50" width="380" height="220" rx="4"/>
<text class="reen-text" x="220" y="70" text-anchor="middle" font-weight="bold" fill="#dc3545">❌ yesvulncode</text>
<text class="reen-text-small" x="40" y="90" font-family="monospace" fill="rgba(220, 53, 69, 0.25)">function withdraw(uint amount) public {</text>
<text class="reen-text-small" x="50" y="105" font-family="monospace" fill="rgba(220, 53, 69, 0.25)">require(balances[msg.sender] >= amount);</text>
<text class="reen-text-small" x="50" y="120" font-family="monospace" fill="rgba(220, 53, 69, 0.25)">// ❌ firsttransfer，postmoreNewState</text>
<text class="reen-text-small" x="50" y="135" font-family="monospace" fill="rgba(220, 53, 69, 0.25)">(bool success, ) = msg.sender.svg-15-1 .call{value: amount}("");</text>
<text class="reen-text-small" x="50" y="150" font-family="monospace" fill="rgba(220, 53, 69, 0.25)">require(success);</text>
<text class="reen-text-small" x="50" y="165" font-family="monospace" fill="rgba(220, 53, 69, 0.25)">// ❌ State UpdateatoutsideCallafter</text>
<text class="reen-text-small" x="50" y="180" font-family="monospace" fill="rgba(220, 53, 69, 0.25)">balances[msg.sender] -= amount;</text>
<text class="reen-text-small" x="40" y="195" font-family="monospace" fill="rgba(220, 53, 69, 0.25)">}</text>
<text class="reen-text-small" x="40" y="220" font-weight="bold">attackflow:</text>
<text class="reen-text-small" x="45" y="235">1. attackagentCall withdraw()</text>
<text class="reen-text-small" x="45" y="250">2. Contractemitsend ETH toattackagentContract</text>
<text class="reen-text-small" x="45" y="265">3. attackagent fallback() againtimesCall withdraw()</text>
<rect class="reen-box-safe" x="440" y="50" width="380" height="220" rx="4"/>
<text class="reen-text" x="630" y="70" text-anchor="middle" font-weight="bold" fill="#5cb85c">✅ safecode</text>
<text class="reen-text-small" x="450" y="90" font-family="monospace" fill="#51cf66">function withdraw(uint amount) public {</text>
<text class="reen-text-small" x="460" y="105" font-family="monospace" fill="#51cf66">require(balances[msg.sender] >= amount);</text>
<text class="reen-text-small" x="460" y="120" font-family="monospace" fill="#51cf66">// ✅ Update state first (CEI)</text>
<text class="reen-text-small" x="460" y="135" font-family="monospace" fill="#51cf66">balances[msg.sender] -= amount;</text>
<text class="reen-text-small" x="460" y="150" font-family="monospace" fill="#51cf66">// ✅ postExecuteoutsideCall</text>
<text class="reen-text-small" x="460" y="165" font-family="monospace" fill="#51cf66">(bool success, ) = msg.sender.svg-15-1 .call{value: amount}("");</text>
<text class="reen-text-small" x="460" y="180" font-family="monospace" fill="#51cf66">require(success);</text>
<text class="reen-text-small" x="450" y="195" font-family="monospace" fill="#51cf66">}</text>
<text class="reen-text-small" x="450" y="220" font-weight="bold">prevent御措施:</text>
<text class="reen-text-small" x="455" y="235">✓ CEI pattern</text>
<text class="reen-text-small" x="455" y="250">✓ ReentrancyGuard fix饰er</text>
<text class="reen-text-small" x="455" y="265">✓ pullpattern (Pull over Push)</text>
<line x1="30" y1="290" x2="820" y2="290" stroke="#4c9be8" stroke-width="1" stroke-dasharray="5,5" fill="none"/>
<text class="reen-text" x="425" y="310" text-anchor="middle" font-weight="bold">OpenZeppelin ReentrancyGuard implement</text>
<rect class="reen-box-safe" x="50" y="325" width="750" height="180" rx="4"/>
<text class="reen-text-small" x="60" y="345" font-family="monospace">contract ReentrancyGuard {</text>
<text class="reen-text-small" x="70" y="360" font-family="monospace">uint256 private constant _NOT_ENTERED = 1;</text>
<text class="reen-text-small" x="70" y="375" font-family="monospace">uint256 private constant _ENTERED = 2;</text>
<text class="reen-text-small" x="70" y="390" font-family="monospace">uint256 private _status;</text>
<text class="reen-text-small" x="70" y="415" font-family="monospace">modifier nonReentrant() {</text>
<text class="reen-text-small" x="80" y="430" font-family="monospace">require(_status != _ENTERED, "ReentrancyGuard: reentrant call");</text>
<text class="reen-text-small" x="80" y="445" font-family="monospace">_status = _ENTERED;  // settingslock</text>
<text class="reen-text-small" x="80" y="460" font-family="monospace">_;                     // ExecuteFunction</text>
<text class="reen-text-small" x="80" y="475" font-family="monospace">_status = _NOT_ENTERED;  // releaselock</text>
<text class="reen-text-small" x="70" y="490" font-family="monospace">}</text>
<text class="reen-text-small" x="60" y="505" font-family="monospace">}</text>
</svg>
</div>

<div style="text-align: center; margin: 2em 0;">
<svg class="svg-15-2" viewBox="0 0 850 500" xmlns="http://www.w3.org/2000/svg" style="width: 100%; max-width: 950px; display: block; margin: 0 auto;">
<defs>
<style>
.svg-15-2 .ac-text-title { font-family: arial, sans-serif; font-size: 16px; fill: #1f2937; font-weight: bold; }
.svg-15-2 .ac-text { font-family: arial, sans-serif; font-size: 10px; fill: #1f2937; }
.svg-15-2 .ac-text-small { font-family: arial, sans-serif; font-size: 8.5px; fill: #1f2937; }
.svg-15-2 .ac-box { fill: rgba(52, 81, 178, 0.10); stroke: #4c9be8; stroke-width: 1.5; }
.svg-15-2 .ac-box-pattern { fill: rgba(92, 184, 92, 0.10); stroke: #5cb85c; stroke-width: 1.5; }
</style>
</defs>
<text class="ac-text-title" x="425" y="25" text-anchor="middle">Access ControlpatternCompare</text>
<rect class="ac-box" x="30" y="50" width="250" height="210" rx="4"/>
<text class="ac-text" x="155" y="70" text-anchor="middle" font-weight="bold">Ownable pattern</text>
<text class="ac-text-small" x="40" y="95">Use Case:</text>
<text class="ac-text-small" x="45" y="110">• singleadmin</text>
<text class="ac-text-small" x="45" y="125">• simplePermissioncontrol</text>
<text class="ac-text-small" x="40" y="150" font-weight="bold">pros:</text>
<text class="ac-text-small" x="45" y="165">✓ simpleeasyuse</text>
<text class="ac-text-small" x="45" y="180">✓ Gas CostLow</text>
<text class="ac-text-small" x="40" y="205" font-weight="bold">Drawbacks:</text>
<text class="ac-text-small" x="45" y="220">✗ Centralization</text>
<text class="ac-text-small" x="45" y="235">✗ single pointFaulty</text>
<text class="ac-text-small" x="45" y="250">✗ Nonefinegranularmeasurecontrol</text>
<rect class="ac-box" x="300" y="50" width="250" height="210" rx="4"/>
<text class="ac-text" x="425" y="70" text-anchor="middle" font-weight="bold">AccessControl pattern</text>
<text class="ac-text-small" x="310" y="95">Use Case:</text>
<text class="ac-text-small" x="315" y="110">• ManyRolemgmt</text>
<text class="ac-text-small" x="315" y="125">• complexPermissionSystem</text>
<text class="ac-text-small" x="310" y="150" font-weight="bold">pros:</text>
<text class="ac-text-small" x="315" y="165">✓ finegranularmeasurecontrol</text>
<text class="ac-text-small" x="315" y="180">✓ RoleInheritance</text>
<text class="ac-text-small" x="315" y="195">✓ auditable</text>
<text class="ac-text-small" x="310" y="220" font-weight="bold">Drawbacks:</text>
<text class="ac-text-small" x="315" y="235">✗ complexmeasureHigh</text>
<text class="ac-text-small" x="315" y="250">✗ Gas Cost稍High</text>
<rect class="ac-box" x="570" y="50" width="250" height="210" rx="4"/>
<text class="ac-text" x="695" y="70" text-anchor="middle" font-weight="bold">MultiSigwalletpattern</text>
<text class="ac-text-small" x="580" y="95">Use Case:</text>
<text class="ac-text-small" x="585" y="110">• Highvalueassetmgmt</text>
<text class="ac-text-small" x="585" y="125">• DAO goldlib</text>
<text class="ac-text-small" x="580" y="150" font-weight="bold">pros:</text>
<text class="ac-text-small" x="585" y="165">✓ Decentralization</text>
<text class="ac-text-small" x="585" y="180">✓ SecurityHigh</text>
<text class="ac-text-small" x="585" y="195">✓ preventsingle pointFaulty</text>
<text class="ac-text-small" x="580" y="220" font-weight="bold">Drawbacks:</text>
<text class="ac-text-small" x="585" y="235">✗ opcomplex</text>
<text class="ac-text-small" x="585" y="250">✗ Responselatency</text>
<line x1="30" y1="280" x2="820" y2="280" stroke="#4c9be8" stroke-width="1" stroke-dasharray="5,5" fill="none"/>
<text class="ac-text" x="425" y="300" text-anchor="middle" font-weight="bold">Recommendedreal践: minlayerPermission</text>
<rect class="ac-box-pattern" x="50" y="315" width="750" height="170" rx="4"/>
<text class="ac-text-small" x="60" y="335">contract SecureProtocol is AccessControl {</text>
<text class="ac-text-small" x="70" y="350">bytes32 public constant ADMIN_ROLE = keccak256("ADMIN_ROLE");      // ultragradeadmin</text>
<text class="ac-text-small" x="70" y="365">bytes32 public constant OPERATOR_ROLE = keccak256("OPERATOR_ROLE");  // Operationsagent</text>
<text class="ac-text-small" x="70" y="380">bytes32 public constant PAUSER_ROLE = keccak256("PAUSER_ROLE");      // PausePermission</text>
<text class="ac-text-small" x="70" y="405">function emergencyPause() public onlyRole(PAUSER_ROLE) {</text>
<text class="ac-text-small" x="80" y="420">_pause();  // 任what PAUSER cantrigger</text>
<text class="ac-text-small" x="70" y="435">}</text>
<text class="ac-text-small" x="70" y="460">function updateCriticalParameter(uint256 newValue) public onlyRole(ADMIN_ROLE) {</text>
<text class="ac-text-small" x="80" y="475">// only ADMIN canrevisecriticalparam</text>
<text class="ac-text-small" x="70" y="485">}</text>
</svg>
</div>

<div style="text-align: center; margin: 2em 0;">
<svg class="svg-15-3" viewBox="0 0 900 520" xmlns="http://www.w3.org/2000/svg" style="width: 100%; max-width: 1000px; display: block; margin: 0 auto;">
<defs>
<style>
.svg-15-3 .audit-text-title { font-family: arial, sans-serif; font-size: 16px; fill: #1f2937; font-weight: bold; }
.svg-15-3 .audit-text { font-family: arial, sans-serif; font-size: 10px; fill: #1f2937; }
.svg-15-3 .audit-text-small { font-family: arial, sans-serif; font-size: 8.5px; fill: #1f2937; }
.svg-15-3 .audit-step { fill: rgba(52, 81, 178, 0.15); stroke: #4c9be8; stroke-width: 2; }
.svg-15-3 .audit-arrow { stroke: #5cb85c; stroke-width: 2; fill: none; marker-end: url(#arrowhead-audit); }
</style>
<marker id="arrowhead-audit" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
<polygon points="0 0, 10 3, 0 6" fill="#5cb85c" />
</marker>
</defs>
<text class="audit-text-title" x="450" y="25" text-anchor="middle">Smart ContractAudit Process</text>
<ellipse cx="120" cy="80" rx="90" ry="35" class="audit-step"/>
<text class="audit-text" x="120" y="78" text-anchor="middle" font-weight="bold">1. Prepare Phase</text>
<text class="audit-text-small" x="120" y="92" text-anchor="middle">Collectrequirementdoc</text>
<path class="audit-arrow" d="M 210 80 L 280 80"/>
<ellipse cx="370" cy="80" rx="90" ry="35" class="audit-step"/>
<text class="audit-text" x="370" y="78" text-anchor="middle" font-weight="bold">2. autoify扫describe</text>
<text class="audit-text-small" x="370" y="92" text-anchor="middle">toolbeginningfilter</text>
<path class="audit-arrow" d="M 460 80 L 530 80"/>
<ellipse cx="620" cy="80" rx="90" ry="35" class="audit-step"/>
<text class="audit-text" x="620" y="78" text-anchor="middle" font-weight="bold">3. handmoveauditcheck</text>
<text class="audit-text-small" x="620" y="92" text-anchor="middle">depthanalyze</text>
<path class="audit-arrow" d="M 710 80 L 780 80"/>
<ellipse cx="820" cy="80" rx="70" ry="35" class="audit-step"/>
<text class="audit-text" x="820" y="78" text-anchor="middle" font-weight="bold">4. resulttell</text>
<text class="audit-text-small" x="820" y="92" text-anchor="middle">fixVerify</text>
<rect fill="rgba(52, 81, 178, 0.05)" stroke="#4c9be8" stroke-width="1" x="30" y="140" width="200" height="160" rx="4"/>
<text class="audit-text" x="130" y="160" text-anchor="middle" font-weight="bold">Prepare Phase</text>
<text class="audit-text-small" x="40" y="180">docCollect:</text>
<text class="audit-text-small" x="45" y="195">• whitepaper</text>
<text class="audit-text-small" x="45" y="210">• architecturedesign</text>
<text class="audit-text-small" x="45" y="225">• codewarehouselib</text>
<text class="audit-text-small" x="45" y="240">• Testingusecase</text>
<text class="audit-text-small" x="40" y="265">duration: 1-2 day</text>
<text class="audit-text-small" x="40" y="280">Cost: $2K-5K</text>
<rect fill="rgba(52, 81, 178, 0.05)" stroke="#4c9be8" stroke-width="1" x="250" y="140" width="200" height="160" rx="4"/>
<text class="audit-text" x="350" y="160" text-anchor="middle" font-weight="bold">autoify扫describe</text>
<text class="audit-text-small" x="260" y="180">tool:</text>
<text class="audit-text-small" x="265" y="195">• Slither (Static Analysis)</text>
<text class="audit-text-small" x="265" y="210">• Mythril (Symbolic Exec)</text>
<text class="audit-text-small" x="265" y="225">• Echidna (Fuzzing)</text>
<text class="audit-text-small" x="265" y="240">• Certora (shapetypeify)</text>
<text class="audit-text-small" x="260" y="265">duration: 2-3 day</text>
<text class="audit-text-small" x="260" y="280">flipcoverlead: 40-60%</text>
<rect fill="rgba(52, 81, 178, 0.05)" stroke="#4c9be8" stroke-width="1" x="470" y="140" width="200" height="160" rx="4"/>
<text class="audit-text" x="570" y="160" text-anchor="middle" font-weight="bold">handmoveauditcheck</text>
<text class="audit-text-small" x="480" y="180">heavypointcheck:</text>
<text class="audit-text-small" x="485" y="195">• businesslogicalvuln</text>
<text class="audit-text-small" x="485" y="210">• Permission</text>
<text class="audit-text-small" x="485" y="225">• viaeconmodellack陷</text>
<text class="audit-text-small" x="485" y="240">• Gas Opt</text>
<text class="audit-text-small" x="480" y="265">duration: 5-10 day</text>
<text class="audit-text-small" x="480" y="280">corevalueplaceat</text>
<rect fill="rgba(52, 81, 178, 0.05)" stroke="#4c9be8" stroke-width="1" x="690" y="140" width="180" height="160" rx="4"/>
<text class="audit-text" x="780" y="160" text-anchor="middle" font-weight="bold">resulttell&fix</text>
<text class="audit-text-small" x="700" y="180">vulnmingrade:</text>
<text class="audit-text-small" x="705" y="195">🔴 Critical (severe)</text>
<text class="audit-text-small" x="705" y="210">🟠 High (High危)</text>
<text class="audit-text-small" x="705" y="225">🟡 Medium (Medium危)</text>
<text class="audit-text-small" x="705" y="240">🟢 Low (Low危)</text>
<text class="audit-text-small" x="700" y="265">duration: 3-5 day</text>
<text class="audit-text-small" x="700" y="280">fixVerify</text>
<line x1="30" y1="320" x2="870" y2="320" stroke="#4c9be8" stroke-width="1" stroke-dasharray="5,5" fill="none"/>
<text class="audit-text" x="450" y="340" text-anchor="middle" font-weight="bold">PrimaryflowAudit FirmsCompare (2024)</text>
<rect fill="rgba(92, 184, 92, 0.1)" stroke="#5cb85c" stroke-width="1" x="50" y="355" width="190" height="150" rx="4"/>
<text class="audit-text" x="145" y="375" text-anchor="middle" font-weight="bold">Trail of Bits</text>
<text class="audit-text-small" x="60" y="395">completestand: 2012 year</text>
<text class="audit-text-small" x="60" y="410">auditproject: 500+</text>
<text class="audit-text-small" x="60" y="425">Tools: Slither, Echidna</text>
<text class="audit-text-small" x="60" y="440">Price: $30K-200K+</text>
<text class="audit-text-small" x="60" y="455">Epoch: 2-6 week</text>
<text class="audit-text-small" x="60" y="475" font-weight="bold">Clients: MakerDAO, Compound</text>
<text class="audit-text-small" x="60" y="490">DeFi Llama, Uniswap</text>
<rect fill="rgba(92, 184, 92, 0.1)" stroke="#5cb85c" stroke-width="1" x="260" y="355" width="190" height="150" rx="4"/>
<text class="audit-text" x="355" y="375" text-anchor="middle" font-weight="bold">OpenZeppelin</text>
<text class="audit-text-small" x="270" y="395">completestand: 2015 year</text>
<text class="audit-text-small" x="270" y="410">auditproject: 300+</text>
<text class="audit-text-small" x="270" y="425">特long: standardlibdimensionprotect</text>
<text class="audit-text-small" x="270" y="440">Price: $25K-150K+</text>
<text class="audit-text-small" x="270" y="455">Epoch: 2-4 week</text>
<text class="audit-text-small" x="270" y="475" font-weight="bold">customer: Aave, Coinbase</text>
<text class="audit-text-small" x="270" y="490">TheGraph, 1inch</text>
<rect fill="rgba(92, 184, 92, 0.1)" stroke="#5cb85c" stroke-width="1" x="470" y="355" width="190" height="150" rx="4"/>
<text class="audit-text" x="565" y="375" text-anchor="middle" font-weight="bold">Certora</text>
<text class="audit-text-small" x="480" y="395">completestand: 2018 year</text>
<text class="audit-text-small" x="480" y="410">特long: Formal Verify</text>
<text class="audit-text-small" x="480" y="425">tool: Certora Prover</text>
<text class="audit-text-small" x="480" y="440">Price: $40K-250K+</text>
<text class="audit-text-small" x="480" y="455">Epoch: 3-8 week</text>
<text class="audit-text-small" x="480" y="475" font-weight="bold">customer: Balancer, Curve</text>
<text class="audit-text-small" x="480" y="490">SushiSwap, Lido</text>
<rect fill="rgba(92, 184, 92, 0.1)" stroke="#5cb85c" stroke-width="1" x="680" y="355" width="190" height="150" rx="4"/>
<text class="audit-text" x="775" y="375" text-anchor="middle" font-weight="bold">Code4rena (multitudepack)</text>
<text class="audit-text-small" x="690" y="395">completestand: 2021 year</text>
<text class="audit-text-small" x="690" y="410">pattern: 竞赛typeaudit</text>
<text class="audit-text-small" x="690" y="425">Auditors: 1000+ researchers</text>
<text class="audit-text-small" x="690" y="440">Price: $50K-500K</text>
<text class="audit-text-small" x="690" y="455">Epoch: 1-2 week</text>
<text class="audit-text-small" x="690" y="475" font-weight="bold">Pros: Manyvisionangle</text>
<text class="audit-text-small" x="690" y="490">Highflipcoverlead</text>
</svg>
</div>

<div style="text-align: center; margin: 2em 0;">
<svg class="svg-15-4" viewBox="0 0 850 480" xmlns="http://www.w3.org/2000/svg" style="width: 100%; max-width: 950px; display: block; margin: 0 auto;">
<defs>
<style>
.svg-15-4 .key-text-title { font-family: arial, sans-serif; font-size: 16px; fill: #1f2937; font-weight: bold; }
.svg-15-4 .key-text { font-family: arial, sans-serif; font-size: 10px; fill: #1f2937; }
.svg-15-4 .key-text-small { font-family: arial, sans-serif; font-size: 8.5px; fill: #1f2937; }
.svg-15-4 .key-box-bad { fill: rgba(220, 53, 69, 0.2); stroke: #dc3545; stroke-width: 2; }
.svg-15-4 .key-box-good { fill: rgba(92, 184, 92, 0.10); stroke: #5cb85c; stroke-width: 2; }
.svg-15-4 .key-box-best { fill: rgba(52, 81, 178, 0.10); stroke: #4c9be8; stroke-width: 2; }
</style>
</defs>
<text class="key-text-title" x="425" y="25" text-anchor="middle">Private KeymgmtsolutionCompare</text>
<rect class="key-box-bad" x="30" y="50" width="250" height="190" rx="4"/>
<text class="key-text" x="155" y="70" text-anchor="middle" font-weight="bold" fill="#dc3545">❌ unsafesolution</text>
<text class="key-text-small" x="40" y="95" font-weight="bold">PlaintextStorage:</text>
<text class="key-text-small" x="45" y="110">• codehardencodecodePrivate Key</text>
<text class="key-text-small" x="45" y="125">• configfilePlaintext</text>
<text class="key-text-small" x="45" y="140">• DatalibPlaintextStorage</text>
<text class="key-text-small" x="40" y="165" font-weight="bold">At Risk:</text>
<text class="key-text-small" x="45" y="180">🔴 codeleakreveal = assetwholelose</text>
<text class="key-text-small" x="45" y="195">🔴 Datalibblanketattackbreak = 灾hard</text>
<text class="key-text-small" x="45" y="210">🔴 Git historyrecordleakreveal</text>
<text class="key-text-small" x="40" y="230" font-weight="bold" fill="#dc3545">refusevsforbidstop!</text>
<rect class="key-box-good" x="300" y="50" width="250" height="190" rx="4"/>
<text class="key-text" x="425" y="70" text-anchor="middle" font-weight="bold" fill="#5cb85c">✅ Encrypted Storagesolution</text>
<text class="key-text-small" x="310" y="95" font-weight="bold">envchangemeasure + KMS:</text>
<text class="key-text-small" x="315" y="110">• AWS KMS / Azure Key Vault</text>
<text class="key-text-small" x="315" y="125">• Google Cloud KMS</text>
<text class="key-text-small" x="315" y="140">• HashiCorp Vault</text>
<text class="key-text-small" x="310" y="165" font-weight="bold">Pros:</text>
<text class="key-text-small" x="315" y="180">✓ Encrypted Storage</text>
<text class="key-text-small" x="315" y="195">✓ 访askLog</text>
<text class="key-text-small" x="315" y="210">✓ Permissioncontrol</text>
<text class="key-text-small" x="310" y="230" font-weight="bold">fituse: prodenvBackend</text>
<rect class="key-box-best" x="570" y="50" width="250" height="190" rx="4"/>
<text class="key-text" x="695" y="70" text-anchor="middle" font-weight="bold" fill="#4c9be8">🏆 Hardwaresolution</text>
<text class="key-text-small" x="580" y="95" font-weight="bold">setprepare:</text>
<text class="key-text-small" x="585" y="110">• Ledger Nano X</text>
<text class="key-text-small" x="585" y="125">• Trezor Model T</text>
<text class="key-text-small" x="585" y="140">• GridPlus Lattice1</text>
<text class="key-text-small" x="580" y="165" font-weight="bold">Pros:</text>
<text class="key-text-small" x="585" y="180">✓ Private Key永noleavebeginsetprepare</text>
<text class="key-text-small" x="585" y="195">✓ physicalisolate</text>
<text class="key-text-small" x="585" y="210">✓ PIN codeprotect</text>
<text class="key-text-small" x="580" y="230" font-weight="bold">fituse: Highvalueasset</text>
<line x1="30" y1="260" x2="820" y2="260" stroke="#4c9be8" stroke-width="1" stroke-dasharray="5,5" fill="none"/>
<text class="key-text" x="425" y="280" text-anchor="middle" font-weight="bold">Recommendedreal践: minlayerKey Mgmt</text>
<rect class="key-box-best" x="50" y="295" width="380" height="170" rx="4"/>
<text class="key-text" x="240" y="315" text-anchor="middle" font-weight="bold">Hot (Hot Wallet)</text>
<text class="key-text-small" x="60" y="335">useway: dayoftenOperations，Smallplaquefunds</text>
<text class="key-text-small" x="60" y="355">solution:</text>
<text class="key-text-small" x="65" y="370">• envchangemeasure + KMS Encrypt</text>
<text class="key-text-small" x="65" y="385">• autoifyfootoriginuse</text>
<text class="key-text-small" x="65" y="400">• perdaytransferlimitplaque</text>
<text class="key-text-small" x="65" y="415">• Real-time MonitorexceptionTransaction</text>
<text class="key-text-small" x="60" y="440" font-weight="bold">fundsratio: 5-10%</text>
<text class="key-text-small" x="60" y="455" font-weight="bold">safeetc.grade: ⭐⭐⭐</text>
<rect class="key-box-best" x="450" y="295" width="380" height="170" rx="4"/>
<text class="key-text" x="640" y="315" text-anchor="middle" font-weight="bold">Cold (Cold Wallet)</text>
<text class="key-text-small" x="460" y="335">useway: goldlib，Largeplaquefunds</text>
<text class="key-text-small" x="460" y="355">solution:</text>
<text class="key-text-small" x="465" y="370">• Hardware (Ledger/Trezor)</text>
<text class="key-text-small" x="465" y="385">• MultiSigwallet (Gnosis Safe)</text>
<text class="key-text-small" x="465" y="400">• 3/5 or 4/7 Signrequire</text>
<text class="key-text-small" x="465" y="415">• Offline Sign，onlineBroadcast</text>
<text class="key-text-small" x="460" y="440" font-weight="bold">fundsratio: 90-95%</text>
<text class="key-text-small" x="460" y="455" font-weight="bold">safeetc.grade: ⭐⭐⭐⭐⭐</text>
</svg>
</div>

<div style="text-align: center; margin: 2em 0;">
<svg class="svg-15-6" viewBox="0 0 850 480" xmlns="http://www.w3.org/2000/svg" style="width: 100%; max-width: 950px; display: block; margin: 0 auto;">
<defs>
<style>
.svg-15-6 .ir-text-title { font-family: arial, sans-serif; font-size: 16px; fill: #1f2937; font-weight: bold; }
.svg-15-6 .ir-text { font-family: arial, sans-serif; font-size: 10px; fill: #1f2937; }
.svg-15-6 .ir-text-small { font-family: arial, sans-serif; font-size: 8.5px; fill: #1f2937; }
.svg-15-6 .ir-phase { fill: rgba(220, 53, 69, 0.3); stroke: #dc3545; stroke-width: 2; }
.svg-15-6 .ir-arrow { stroke: #1f2937; stroke-width: 2; fill: none; marker-end: url(#arrowhead-ir); }
</style>
<marker id="arrowhead-ir" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
<polygon points="0 0, 10 3, 0 6" fill="#1f2937" />
</marker>
</defs>
<text class="ir-text-title" x="425" y="25" text-anchor="middle">safeEventIncident Responseflow</text>
<rect class="ir-phase" x="50" y="60" width="180" height="120" rx="4"/>
<text class="ir-text" x="140" y="80" text-anchor="middle" font-weight="bold">🚨 Phase 1: Discovery</text>
<text class="ir-text-small" x="60" y="100">(0-5 min)</text>
<text class="ir-text-small" x="60" y="120">• Monitorresult警trigger</text>
<text class="ir-text-small" x="60" y="135">• Userresulttellexception</text>
<text class="ir-text-small" x="60" y="150">• chainUpMonitorDiscovery</text>
<text class="ir-text-small" x="60" y="170" font-weight="bold">criticalindicatelabel:</text>
<text class="ir-text-small" x="60" y="185">exceptionVolume ↑300%</text>
<path class="ir-arrow" d="M 230 120 L 280 120"/>
<rect class="ir-phase" x="280" y="60" width="180" height="120" rx="4"/>
<text class="ir-text" x="370" y="80" text-anchor="middle" font-weight="bold">⏸️ Phase 2: Pause</text>
<text class="ir-text-small" x="290" y="100">(5-15 min)</text>
<text class="ir-text-small" x="290" y="120">• triggerurgentPause</text>
<text class="ir-text-small" x="290" y="135">• Notificationteam</text>
<text class="ir-text-small" x="290" y="150">• frozenresultcandoubtaccount</text>
<text class="ir-text-small" x="290" y="170" font-weight="bold">Execute:</text>
<text class="ir-text-small" x="290" y="185">pause() Function</text>
<path class="ir-arrow" d="M 460 120 L 510 120"/>
<rect class="ir-phase" x="510" y="60" width="180" height="120" rx="4"/>
<text class="ir-text" x="600" y="80" text-anchor="middle" font-weight="bold">🔍 Phase 3: tunecheck</text>
<text class="ir-text-small" x="520" y="100">(15 min-2 Smallhour)</text>
<text class="ir-text-small" x="520" y="120">• analyzeattackvector</text>
<text class="ir-text-small" x="520" y="135">• evalloss规模</text>
<text class="ir-text-small" x="520" y="150">• sensedistinguishrootoriginprairiecause</text>
<text class="ir-text-small" x="520" y="170" font-weight="bold">tool:</text>
<text class="ir-text-small" x="520" y="185">Etherscan, Tenderly</text>
<rect class="ir-phase" x="50" y="220" width="180" height="120" rx="4"/>
<text class="ir-text" x="140" y="240" text-anchor="middle" font-weight="bold">🛠️ Phase 4: fix</text>
<text class="ir-text-small" x="60" y="260">(2-24 Smallhour)</text>
<text class="ir-text-small" x="60" y="280">• fixvuln</text>
<text class="ir-text-small" x="60" y="295">• urgentaudit</text>
<text class="ir-text-small" x="60" y="310">• Deploypatch</text>
<text class="ir-text-small" x="60" y="330" font-weight="bold">Verify:</text>
<text class="ir-text-small" x="60" y="345">TestnetVerify</text>
<path class="ir-arrow" d="M 230 280 L 280 280"/>
<rect class="ir-phase" x="280" y="220" width="180" height="120" rx="4"/>
<text class="ir-text" x="370" y="240" text-anchor="middle" font-weight="bold">💬 Phase 5: octilliontranslate</text>
<text class="ir-text-small" x="290" y="260">(supportcont)</text>
<text class="ir-text-small" x="290" y="280">• PublicEventinstruction</text>
<text class="ir-text-small" x="290" y="295">• Twitter/Discord</text>
<text class="ir-text-small" x="290" y="310">• compensaterepaysolution</text>
<text class="ir-text-small" x="290" y="330" font-weight="bold">principle:</text>
<text class="ir-text-small" x="290" y="345">transparent、andhour</text>
<path class="ir-arrow" d="M 460 280 L 510 280"/>
<rect class="ir-phase" x="510" y="220" width="180" height="120" rx="4"/>
<text class="ir-text" x="600" y="240" text-anchor="middle" font-weight="bold">🔄 Phase 6: recover</text>
<text class="ir-text-small" x="520" y="260">(1-7 day)</text>
<text class="ir-text-small" x="520" y="280">• solutionremovePause</text>
<text class="ir-text-small" x="520" y="295">• recoverservice</text>
<text class="ir-text-small" x="520" y="310">• Monitorexception</text>
<text class="ir-text-small" x="520" y="330" font-weight="bold">postcont:</text>
<text class="ir-text-small" x="520" y="345">matterpostreplydisc</text>
<line x1="30" y1="360" x2="820" y2="360" stroke="#4c9be8" stroke-width="1" stroke-dasharray="5,5" fill="none"/>
<text class="ir-text" x="425" y="380" text-anchor="middle" font-weight="bold">urgentPausemechanismcodeExample</text>
<rect fill="rgba(52, 81, 178, 0.05)" stroke="#4c9be8" stroke-width="1" x="50" y="395" width="750" height="80" rx="4"/>
<text class="ir-text-small" x="60" y="415" font-family="monospace">contract EmergencyPausable is Pausable, AccessControl {</text>
<text class="ir-text-small" x="70" y="430" font-family="monospace">bytes32 public constant PAUSER_ROLE = keccak256("PAUSER_ROLE");</text>
<text class="ir-text-small" x="70" y="450" font-family="monospace">function emergencyPause() external onlyRole(PAUSER_ROLE) {</text>
<text class="ir-text-small" x="80" y="465" font-family="monospace">_pause();  emit EmergencyPaused(msg.sender, block.timestamp);</text>
<text class="ir-text-small" x="70" y="475" font-family="monospace">}</text>
</svg>
</div>
