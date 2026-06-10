---
title: "Chapter 10: DeFi - Decentralized Finance"
---

<div class="ccbus-hero">
  <div class="ccbus-hero-avatar">
    <img src="../public/images/avatars/heroes/defi-navigator.png" alt="DeFi Navigator" />
  </div>
  <div class="ccbus-hero-content">
    <h1>Chapter 10: DeFi - Decentralized Finance</h1>
    <div class="ccbus-teacher-label">🎙️ Taught by: <strong>DeFi Navigator</strong> · The "navigator" of DeFi — primary domain, knows every route</div>
  </div>
</div>


<div class="chapter-intro">

**Difficulty Level:** 🟡 Intermediate
**Estimated Learning Time:** 6-8 hours

**Chapter Objectives:**
- Understand DeFi fundamental principles
- Master DEX mechanisms
- Learn lending protocols
- Explore stablecoins and derivatives

</div>


## 10.0 2025-2026 Perspective: Why Reread This Chapter

DeFi in 2026 is driven by **institutionalization + real yield + intent-centric** — three wheels turning together.

1. **AMM generational evolution**:
   - **Uniswap v4 (2025-Q1 mainnet)**: **Hooks system** reshapes AMM boundaries. Hooks are callbacks inserted into swap lifecycle (afterSwap, beforeSwap, afterAddLiquidity, etc.), enabling dynamic fees, custom oracles, custom curves (e.g., Curve StableSwap)
   - **PancakeSwap Infinity (2024-Q4)**: provides Infusion Hooks based on v4
   - **Curve (2025-Q2 v3)**: StableSwap algorithm upgrade, integrates crvUSD
   - **Velodrome v2 (Optimism)**: ve(3,3) model continues to dominate L2 DEX

2. **Lending protocol modularization**:
   - **Morpho Blue (2024-Q1)**: modular lending layer, anyone can create lending markets
   - **Aave v4 (planned 2025-Q3)**: modular + cross-chain + GHO stablecoin
   - **Euler v2 (2024)**: modular lending, supports any collateral factor
   - **Spark Protocol**: MakerDAO's Sky ecosystem lending protocol

3. **Stablecoin DEX specialization**:
   - **Curve**: still the king of stablecoin DEX
   - **Fluid**: Compound + Aave-style lending + DEX combo
   - **Pendle (2024-Q4 v3)**: YT/PT splitting, interest rate derivative tokenization
   - **Ethena USDe**: Delta-neutral synthetic dollar, TVL $5B

4. **Intent-based DEX (40%+ of 2026 DEX flow)**:
   - **UniswapX**: Dutch auction, MEV protection
   - **1inch Fusion**: solver network
   - **CoW Swap**: batch settlement + Coincidence of Wants
   - **0x Protocol v2**: upgraded from aggregator to intent engine
   - **Across**: intent + cross-chain hybrid

5. **Sources of real yield**:
   - **Base yield**: on-chain asset supply/demand interest rate (e.g., Aave USDC deposit 5%)
   - **RWA yield**: tokenized US Treasuries (Ondo OUSG 5%+)
   - **LRT yield**: EigenLayer restaking yield (base + AVS rewards)
   - **MEV yield**: MEV captured by solvers
   - **2026 trend**: protocol revenue flowing to real users, not just inflationary rewards

6. **LRT and DeFi coupling**:
   - Users deposit stETH on Aave, automatically compound restaking yield
   - Collateralize LRT (e.g., eETH, ezETH) to borrow stablecoins, short ETH risk
   - **EigenLayer-derivative DeFi protocols**: Pendle + EigenLayer creates PT-stETH and other fixed-yield products

### 🖥️ Real-world Example: CCBus DeFi Tool Matrix

CCBus's DeFi toolset is almost a visual catalog of this chapter:

- **LP Reflection tokens**: holders automatically receive LP fee dividends.
- **LP Burn**: send LP tokens to 0xdead for permanent liquidity lock.
- **LP Mine**: hold LP to mine the project's own token.
- **Liquidity Console**: manage LP positions across multiple DEXes.
- **Liquidity Fix**: adjust price range after V2/V3 migration.
- **Pool Analysor**: assess pool health with on-chain data.

![CCBus LP Reflection token config](../public/images/chapters/zh/lp-reflection.png)

![CCBus LP Burn config](../public/images/chapters/zh/lp-burn.png)

![CCBus liquidity console](../public/images/chapters/zh/liquidity-control.png)

*Figures 10-1/2/3: CCBus LP toolset — dividends, burns, liquidity console — perfectly illustrates **Uniswap V2/V3 LP economics**. These three tools cover 90% of real DeFi liquidity-management scenarios.*


<div style="background: rgba(52, 81, 178, 0.06); padding: 1.5em; border-radius: 4px; margin: 2em 0;">
<svg class="svg-10-0" viewBox="0 0 900 500" xmlns="http://www.w3.org/2000/svg" style="width: 100%; max-width: 1000px; display: block; margin: 0 auto;">
<defs>
<style>
.svg-10-0 .defi-title { font-family: arial, sans-serif; font-size: 16px; fill: #1f2937; font-weight: bold; }
.svg-10-0 .defi-subtitle { font-family: arial, sans-serif; font-size: 13px; fill: #1f2937; font-weight: bold; }
.svg-10-0 .defi-text { font-family: arial, sans-serif; font-size: 11px; fill: #1f2937; }
.svg-10-0 .defi-small { font-family: arial, sans-serif; font-size: 9px; fill: #b0a090; }
.svg-10-0 .defi-tradfi { fill: rgba(220, 53, 69, 0.2); stroke: #dc3545; stroke-width: 2; }
.svg-10-0 .defi-box { fill: rgba(92, 184, 92, 0.10); stroke: #5cb85c; stroke-width: 2; }
</style>
</defs>
<text x="450" y="25" text-anchor="middle" class="defi-title">TradFi (Traditional Finance) vs DeFi Compare</text>
<text x="450" y="45" text-anchor="middle" class="defi-small">fromCentralizedtoDecentralizationFinance范typeconvertchange</text>
<rect x="50" y="70" width="380" height="400" class="defi-tradfi" rx="8"/>
<text x="240" y="95" text-anchor="middle" class="defi-subtitle">TradFi (Traditional Finance)</text>
<text x="60" y="120" class="defi-text" font-weight="bold">🔸 Features：</text>
<text x="70" y="138" class="defi-text">• CentralizedInstitutional：silverrow、voucherbiz、Exchange</text>
<text x="70" y="154" class="defi-text">• NeedKYC/AMLAuth</text>
<text x="70" y="170" class="defi-text">• campjobTimelimit（e.g.9:00-17:00）</text>
<text x="70" y="186" class="defi-text">• Cross-bordertransferSlowand昂贵</text>
<text x="70" y="202" class="defi-text">• Highdoorthreshold（mostLowexistfundrequire）</text>
<text x="60" y="227" class="defi-text" font-weight="bold">🔸 Pros：</text>
<text x="70" y="245" class="defi-text">✅ feelRegulation，Userprotect</text>
<text x="70" y="261" class="defi-text">✅ existfundInsurance（e.g.FDIC）</text>
<text x="70" y="277" class="defi-text">✅ clientclothesSupport</text>
<text x="70" y="293" class="defi-text">✅ lawCoininputpocket</text>
<text x="60" y="318" class="defi-text" font-weight="bold">🔸 Cons：</text>
<text x="70" y="336" class="defi-text" fill="#dc3545">❌ single pointFaulty（silverrowinverted闭）</text>
<text x="70" y="352" class="defi-text" fill="#dc3545">❌ auditcheckAt Risk（frozenresultaccount）</text>
<text x="70" y="368" class="defi-text" fill="#dc3545">❌ notransparenttransportworkmethod</text>
<text x="70" y="384" class="defi-text" fill="#dc3545">❌ HighFee（3-5%）</text>
<text x="70" y="400" class="defi-text" fill="#dc3545">❌ rowremoveNonesilverrowaccountpersongroup</text>
<text x="70" y="430" class="defi-small">case：silverrowSupply Rate 0.5%，贷fundInterest Rate 8%</text>
<text x="70" y="450" class="defi-small">Cross-borderaggregatefundfeeuse $25-50，need 3-5 day</text>
<rect x="470" y="70" width="380" height="400" class="defi-box" rx="8"/>
<text x="660" y="95" text-anchor="middle" class="defi-subtitle">DeFi (DeFi)</text>
<text x="480" y="120" class="defi-text" font-weight="bold">🔸 Features：</text>
<text x="490" y="138" class="defi-text">• DecentralizationProtocol：Smart Contract</text>
<text x="490" y="154" class="defi-text">• Permissionless：walleti.e.canuse</text>
<text x="490" y="170" class="defi-text">• 24/7 wholespheretransportwork</text>
<text x="490" y="186" class="defi-text">• instantwholespheretransfer</text>
<text x="490" y="202" class="defi-text">• Lowdoorthreshold（$1 rise）</text>
<text x="480" y="227" class="defi-text" font-weight="bold">🔸 Pros：</text>
<text x="490" y="245" class="defi-text" fill="#5cb85c">✅ noCustodial（Usercontrolasset）</text>
<text x="490" y="261" class="defi-text" fill="#5cb85c">✅ censorship-resistant</text>
<text x="490" y="277" class="defi-text" fill="#5cb85c">✅ transparent（codebeginsource）</text>
<text x="490" y="293" class="defi-text" fill="#5cb85c">✅ LowFee（~0.3%）</text>
<text x="490" y="309" class="defi-text" fill="#5cb85c">✅ composablenature（FinancepleasureHigh）</text>
<text x="480" y="334" class="defi-text" font-weight="bold">🔸 Cons：</text>
<text x="490" y="352" class="defi-text">⚠️  Smart ContractAt Risk（vuln）</text>
<text x="490" y="368" class="defi-text">⚠️  Private KeyloseloseCannot Recover</text>
<text x="490" y="384" class="defi-text">⚠️  Highwavemovenature</text>
<text x="490" y="400" class="defi-text">⚠️  Regulatory Uncertainty</text>
<text x="490" y="430" class="defi-small">case：Aave existfund APY 3-15%，Borrow 5-20%</text>
<text x="490" y="450" class="defi-small">Bridgetransferfeeuse $1-5，need 10-30 min</text>
</svg>
</div>

## 10.1 DeFi Fundamental Principles

**Decentralized Finance** recreates traditional financial services without intermediaries.

### Core Principles
- Permissionless access
- Transparency
- Composability
- Non-custodial

## 10.2 Decentralized Exchanges (DEX)

### Automated Market Makers (AMM)
- **Constant Product Formula**: x * y = k
- Popular AMMs: Uniswap, SushiSwap, PancakeSwap

### Order Book DEX
- Traditional matching engine
- Examples: dYdX, Serum

## 10.3 Lending Protocols

### Over-Collateralized Lending
- **Aave** - Flash loans and variable rates
- **Compound** - Algorithmic interest rates

### Under-Collateralized Lending
- Requires credit scoring or social reputation

## 10.4 Stablecoins

### Types
1. **Fiat-Collateralized** - USDC, USDT
2. **Crypto-Collateralized** - DAI, sUSD  
3. **Algorithmic** - Frax, AMPL

### Mechanisms and Risks
- Collateralization ratios
- Liquidation mechanisms
- De-pegging risks

## 10.5 Liquidity Mining and Yield Farming

Earn rewards by providing liquidity to DeFi protocols.

## 10.6 Derivatives and Options

- Perpetual futures
- Options protocols (Opyn, Hegic)
- Synthetic assets

## 10.7 DeFi Composability and Flash Loans

**Flash Loans** - Borrow without collateral within a single transaction.

## 10.8 DeFi Risks and Security

- Smart contract risks
- Impermanent loss
- Oracle manipulation
- Rug pulls



### Uniswap v4 Hooks: Turning AMM into a "Programmable Liquidity Grid"

Uniswap v4's (2025-Q1 mainnet) biggest innovation isn't gas savings (though it did cut 99% — from 180k to 5k gas), it's the **Hooks system**.

**What are Hooks?**

Hooks are callbacks executed at **key lifecycle points** of swap / add liquidity / remove liquidity, allowing developers to:
- Dynamically adjust fees (based on market volatility)
- Insert custom oracles (TWAP, Chainlink, internal oracle)
- Integrate limit orders, TWAMM (Time-Weighted Average Market Making), custom curves
- Add MEV capture and rebate mechanisms
- Implement (partial) on-chain order books

**8 Hook trigger points**:

| Hook name | Trigger timing | Typical use |
|---|---|---|
| `beforeInitialize` / `afterInitialize` | Before/after pool creation | Initialize params, registration |
| `beforeModifyPosition` / `afterModifyPosition` | Before/after add/remove liquidity | Restrict LP range, fee distribution |
| `beforeSwap` / `afterSwap` | Before/after swap | Dynamic fee, limit, TWAMM |
| `beforeDonate` / `afterDonate` | Before/after donation | Protocol fee reinvestment |

**Production-grade Hook projects (2025-2026)**:

| Project | Hook type | Description |
|---|---|---|
| **Arrakis Finance** | Management Hook | Centrally manage liquidity, optimize LP yield |
| **Swaap Finance** | Oracle Hook | Adaptive oracle, reduce arbitrage loss |
| **Ambient Finance** | All-in-one Hook | Combine AMM + lending + TWAMM |
| **Panoptic** | Options Hook | Turn LP positions into options |
| **Maverick** | Concentrated liquidity + Boosted Position | Dynamic liquidity concentration |
| **Kromatika** | TWAMM + Limit orders | Integrated with Uniswap v4 |
| **Wildcat Protocol** | Lending Hook | LP positions auto-lending |

**Hook code example (Solidity 0.8.25+, transient storage optimization)**:

```solidity
// A simple dynamic fee hook
contract DynamicFeeHook is BaseHook {
    using SafeERC20 for IERC20;

    // Use transient storage to avoid reentrancy and cross-tx state leak
    uint256 private transient _lastSwapTimestamp;
    uint256 private transient _swapCount;

    function getHookPermissions() public pure override returns (Hooks.Permissions memory) {
        return Hooks.Permissions({
            beforeInitialize: false,
            afterInitialize: false,
            beforeModifyPosition: false,
            afterModifyPosition: true,  // collect protocol fee
            beforeSwap: true,            // dynamic fee
            afterSwap: false,
            beforeDonate: false,
            afterDonate: false
        });
    }

    function beforeSwap(address, PoolKey calldata, SwapParams calldata params, bytes calldata)
        external override returns (bytes4, BeforeSwapDelta, uint24)
    {
        _swapCount++;
        _lastSwapTimestamp = block.timestamp;

        // Dynamically adjust fee based on swap frequency
        uint24 baseFee = 3000; // 0.3%
        if (_swapCount > 100) {
            baseFee = 10000; // 1% — high-frequency periods pay more
        }

        return (this.beforeSwap.selector, BeforeSwapDeltaLibrary.ZERO_DELTA, baseFee);
    }
}
```

**Economic significance of Hooks**: v4 turns Uniswap from "generic AMM" to "liquidity grid", any team can build their own DEX on v4 without deploying new contracts. This is the 2025-2026 core pattern of DeFi protocol-layer innovation.

<div class="ccbus-teacher-credits">
  <div class="ccbus-teacher-credits-avatar">
    <img src="../public/images/avatars/heroes/defi-navigator.png" alt="DeFi Navigator" />
  </div>
  <div class="ccbus-teacher-credits-body">

    Taught by: <strong>DeFi Navigator</strong> — The "navigator" of DeFi — primary domain, knows every route<br />
    <span style="font-size: 0.85em; color: var(--vp-c-text-3);">📚 The next chapter [Chapter 11: NFTs and Digital Assets] will be taught by another CCBus guide.</span>
  </div>
</div>

<div class="chapter-footer">

### Key Takeaways
- DeFi enables permissionless financial services
- AMMs revolutionized decentralized trading
- Composability creates innovative financial products
- Security and risk management are critical

</div>

<div style="background: rgba(52, 81, 178, 0.06); padding: 1.5em; border-radius: 4px; margin: 2em 0;">
<svg class="svg-10-1" viewBox="0 0 850 550" xmlns="http://www.w3.org/2000/svg" style="width: 100%; max-width: 950px; display: block; margin: 0 auto;">
<defs>
<style>
.svg-10-1 .amm-title { font-family: arial, sans-serif; font-size: 16px; fill: #1f2937; font-weight: bold; }
.svg-10-1 .amm-text { font-family: arial, sans-serif; font-size: 11px; fill: #1f2937; }
.svg-10-1 .amm-small { font-family: arial, sans-serif; font-size: 9px; fill: #b0a090; }
.svg-10-1 .amm-pool { fill: rgba(52, 81, 178, 0.10); stroke: #4c9be8; stroke-width: 2; }
.svg-10-1 .amm-swap { fill: rgba(223, 105, 25, 0.08); stroke: #df6919; stroke-width: 2; }
.svg-10-1 .amm-curve { stroke: #5cb85c; stroke-width: 3; fill: none; }
.svg-10-1 .amm-point { fill: #df6919; }
.svg-10-1 .amm-arrow { stroke: #1f2937; stroke-width: 2; fill: none; marker-end: url(#arrowAMM); }
</style>
<marker id="arrowAMM" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
<path d="M0,0 L0,6 L9,3 z" fill="#1f2937"/>
</marker>
</defs>
<text x="425" y="25" text-anchor="middle" class="amm-title">AMM infinitydecidemultiply积Market MakerworkMechanism</text>
<text x="425" y="45" text-anchor="middle" class="amm-small">x × y = k maletypeprotectproofLiquidity永no枯竭</text>
<rect x="50" y="70" width="350" height="200" class="amm-pool" rx="8"/>
<text x="225" y="95" text-anchor="middle" class="amm-text" font-weight="bold">Liquidity Pool (Liquidity Pool)</text>
<text x="60" y="120" class="amm-text">beginningbeginState：</text>
<text x="70" y="140" class="amm-text">• ETH reservemeasure：x = 100 ETH</text>
<text x="70" y="156" class="amm-text">• USDC reservemeasure：y = 200,000 USDC</text>
<text x="70" y="172" class="amm-text">• infinitydecidemultiply积：k = 100 × 200,000</text>
<text x="70" y="188" class="amm-text">  k = 20,000,000</text>
<text x="60" y="213" class="amm-text">currentPrice：</text>
<text x="70" y="233" class="amm-text">1 ETH = 200,000/100 = 2,000 USDC</text>
<text x="70" y="253" class="amm-small">Price = y / x</text>
<rect x="450" y="70" width="350" height="200" class="amm-swap" rx="8"/>
<text x="625" y="95" text-anchor="middle" class="amm-text" font-weight="bold">TransactionExample：buyinput 10 ETH</text>
<text x="460" y="120" class="amm-text">UserInput：20,000 USDC</text>
<text x="460" y="145" class="amm-text">Calcflow：</text>
<text x="470" y="163" class="amm-text">1️⃣ New USDC reserve：y' = 200,000 + 20,000</text>
<text x="485" y="178" class="amm-text">y' = 220,000 USDC</text>
<text x="470" y="196" class="amm-text">2️⃣ rootevidence x' × y' = k CalcNew ETH reserve：</text>
<text x="485" y="211" class="amm-text">x' = k / y' = 20,000,000 / 220,000</text>
<text x="485" y="226" class="amm-text">x' = 90.91 ETH</text>
<text x="470" y="244" class="amm-text">3️⃣ Userget ETH：</text>
<text x="485" y="259" class="amm-text">Δx = 100 - 90.91 = 9.09 ETH</text>
<line x1="225" y1="270" x2="625" y2="85" class="amm-arrow"/>
<rect x="50" y="290" width="750" height="240" fill="rgba(92, 184, 92, 0.07)" stroke="#5cb85c" stroke-width="2" stroke-dasharray="5,5" rx="8"/>
<text x="425" y="315" text-anchor="middle" class="amm-text" font-weight="bold">infinitydecidemultiply积songlinecanvisionify</text>
<line x1="70" y1="500" x2="770" y2="500" stroke="#4c9be8" stroke-width="2" fill="none"/>
<text x="770" y="520" text-anchor="end" class="amm-small">ETH (x)</text>
<line x1="70" y1="500" x2="70" y2="330" stroke="#4c9be8" stroke-width="2" fill="none"/>
<text x="50" y="340" class="amm-small">USDC (y)</text>
<path d="M 80,340 Q 200,360 350,400 Q 500,440 700,490" class="amm-curve"/>
<circle cx="350" cy="400" r="6" class="amm-point"/>
<text x="360" y="395" class="amm-text" fill="#df6919">beginningbeginpoint (100, 200k)</text>
<circle cx="420" cy="425" r="6" class="amm-point"/>
<text x="430" y="420" class="amm-text" fill="#df6919">After trade (90.91, 220k)</text>
<text x="80" y="515" class="amm-small">0</text>
<text x="345" y="515" class="amm-small">100</text>
<text x="50" y="405" class="amm-small">200k</text>
<text x="50" y="430" class="amm-small">220k</text>
<rect x="460" y="330" width="330" height="90" fill="rgba(223, 105, 25, 0.08)" stroke="#df6919" stroke-width="1" rx="4"/>
<text x="625" y="350" text-anchor="middle" class="amm-text" font-weight="bold">Priceslipperypoint</text>
<text x="470" y="370" class="amm-text">• expectationPrice：2,000 USDC/ETH</text>
<text x="470" y="386" class="amm-text">• physicalPrice：20,000 / 9.09 = 2,200 USDC/ETH</text>
<text x="470" y="402" class="amm-text">• slipperypoint：(2,200 - 2,000) / 2,000 = 10%</text>
<text x="470" y="415" class="amm-small">LargeplaqueTransactionguide致Highslipperypoint！</text>
</svg>
</div>

<div style="background: rgba(52, 81, 178, 0.06); padding: 1.5em; border-radius: 4px; margin: 2em 0;">
<svg class="svg-10-2" viewBox="0 0 850 600" xmlns="http://www.w3.org/2000/svg" style="width: 100%; max-width: 950px; display: block; margin: 0 auto;">
<defs>
<style>
.svg-10-2 .lend-title { font-family: arial, sans-serif; font-size: 16px; fill: #1f2937; font-weight: bold; }
.svg-10-2 .lend-subtitle { font-family: arial, sans-serif; font-size: 13px; fill: #1f2937; font-weight: bold; }
.svg-10-2 .lend-text { font-family: arial, sans-serif; font-size: 11px; fill: #1f2937; }
.svg-10-2 .lend-small { font-family: arial, sans-serif; font-size: 9px; fill: #b0a090; }
.svg-10-2 .lend-step { fill: rgba(52, 81, 178, 0.10); stroke: #4c9be8; stroke-width: 2; }
.svg-10-2 .lend-risk { fill: rgba(220, 53, 69, 0.2); stroke: #dc3545; stroke-width: 2; }
.svg-10-2 .lend-arrow { stroke: #1f2937; stroke-width: 2; fill: none; marker-end: url(#arrowLend); }
</style>
<marker id="arrowLend" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
<path d="M0,0 L0,6 L9,3 z" fill="#1f2937"/>
</marker>
</defs>
<text x="425" y="25" text-anchor="middle" class="lend-title">DeFi Lendingworkflowjourney (Aave / Compound)</text>
<text x="425" y="45" text-anchor="middle" class="lend-small">Over-collateralizedpattern - past ETH Collateral借 USDC forcase</text>
<rect x="50" y="70" width="220" height="120" class="lend-step" rx="8"/>
<text x="160" y="95" text-anchor="middle" class="lend-subtitle">1️⃣ existinputCollateralitem</text>
<text x="60" y="120" class="lend-text">User Alice：</text>
<text x="70" y="138" class="lend-text">• existinput 10 ETH</text>
<text x="70" y="154" class="lend-text">• ETH Price：$2,000</text>
<text x="70" y="170" class="lend-text">• Collateralitemvalue：$20,000</text>
<text x="70" y="185" class="lend-small">get aETH (planrestToken)</text>
<line x1="270" y1="130" x2="330" y2="130" class="lend-arrow"/>
<rect x="330" y="70" width="220" height="120" class="lend-step" rx="8"/>
<text x="440" y="95" text-anchor="middle" class="lend-subtitle">2️⃣ Borrow</text>
<text x="340" y="120" class="lend-text">CalcBorrowcanstrength：</text>
<text x="350" y="138" class="lend-text">• LTV (贷fundvalueratio)：75%</text>
<text x="350" y="154" class="lend-text">• mostLargeBorrow：$20k × 75%</text>
<text x="350" y="170" class="lend-text">  = $15,000 USDC</text>
<text x="350" y="185" class="lend-small">physicalLend $12,000 USDC</text>
<line x1="550" y1="130" x2="610" y2="130" class="lend-arrow"/>
<rect x="610" y="70" width="190" height="120" class="lend-step" rx="8"/>
<text x="705" y="95" text-anchor="middle" class="lend-subtitle">3️⃣ usefunds</text>
<text x="620" y="120" class="lend-text">Alice canpast：</text>
<text x="630" y="138" class="lend-text">• useinTransaction</text>
<text x="630" y="154" class="lend-text">• againinvest</text>
<text x="630" y="170" class="lend-text">• 杠poleop</text>
<text x="630" y="185" class="lend-small">paymentBorrowinterest</text>
<rect x="50" y="210" width="750" height="140" fill="rgba(223, 105, 25, 0.06)" stroke="#df6919" stroke-width="2" stroke-dasharray="5,5" rx="8"/>
<text x="425" y="235" text-anchor="middle" class="lend-subtitle">Health Factor (Health Factor) Monitor</text>
<text x="60" y="260" class="lend-text">Health Factor = (Collateralitemvalue × LiquidationThreshold) / Borrowvalue</text>
<text x="60" y="285" class="lend-text">beginningbeginState：</text>
<text x="70" y="303" class="lend-text">Health Factor = ($20,000 × 0.80) / $12,000 = 1.33 ✅</text>
<text x="450" y="285" class="lend-text">ETH fallto $1,600：</text>
<text x="460" y="303" class="lend-text">Health Factor = ($16,000 × 0.80) / $12,000 = 1.07 ⚠️</text>
<text x="60" y="328" class="lend-text" fill="#5cb85c">✅ HF > 1：safe</text>
<text x="300" y="328" class="lend-text" fill="#df6919">⚠️  HF ≈ 1：closeLiquidation</text>
<text x="540" y="328" class="lend-text" fill="#dc3545">❌ HF < 1：触发清算</text>
<rect x="50" y="370" width="360" height="210" class="lend-step" rx="8"/>
<text x="230" y="395" text-anchor="middle" class="lend-subtitle">4️⃣ repay&takereturn</text>
<text x="60" y="420" class="lend-text">positiveoftenthingcondition：</text>
<text x="70" y="438" class="lend-text">1. Alice returnreturn $12,000 USDC + interest</text>
<text x="70" y="454" class="lend-text">2. takereturn 10 ETH Collateralitem</text>
<text x="70" y="470" class="lend-text">3. 赎return aETH，getexistfundinterest</text>
<text x="60" y="495" class="lend-text">interestExample (2025yeartypicalAPY)：</text>
<text x="70" y="513" class="lend-text">• existfundinterest：3% APY</text>
<text x="70" y="529" class="lend-text">• Borrowinterest：5% APY</text>
<text x="70" y="545" class="lend-text">• cleanCost：2% APY</text>
<text x="70" y="565" class="lend-small">Interest RaterootevidencefundsUtilizationmovestatetunewhole</text>
<rect x="440" y="370" width="360" height="210" class="lend-risk" rx="8"/>
<text x="620" y="395" text-anchor="middle" class="lend-subtitle">5️⃣ Liquidationmechanism</text>
<text x="450" y="420" class="lend-text">触发条件：Health Factor < 1</text>
<text x="450" y="445" class="lend-text">Liquidationflow：</text>
<text x="460" y="463" class="lend-text">1. LiquidationpersonrepayreturnpartialDebt</text>
<text x="460" y="479" class="lend-text">2. get折buttonpriceCollateralitem（e.g. 95 折）</text>
<text x="460" y="495" class="lend-text">3. UserlossCollateralitem</text>
<text x="450" y="520" class="lend-text">LiquidationPenalty：</text>
<text x="460" y="538" class="lend-text">• Aave：5-10% Liquidation罚gold</text>
<text x="460" y="554" class="lend-text">• Compound：8% Liquidation罚gold</text>
<text x="460" y="570" class="lend-small">avoidexemptLiquidation：andhoursupplementCollateralitemorrepay</text>
</svg>
</div>

<div style="background: rgba(52, 81, 178, 0.06); padding: 1.5em; border-radius: 4px; margin: 2em 0;">
<svg class="svg-10-3" viewBox="0 0 900 550" xmlns="http://www.w3.org/2000/svg" style="width: 100%; max-width: 1000px; display: block; margin: 0 auto;">
<defs>
<style>
.svg-10-3 .stable-title { font-family: arial, sans-serif; font-size: 16px; fill: #1f2937; font-weight: bold; }
.svg-10-3 .stable-subtitle { font-family: arial, sans-serif; font-size: 13px; fill: #1f2937; font-weight: bold; }
.svg-10-3 .stable-text { font-family: arial, sans-serif; font-size: 10px; fill: #1f2937; }
.svg-10-3 .stable-small { font-family: arial, sans-serif; font-size: 8px; fill: #b0a090; }
.svg-10-3 .stable-fiat { fill: rgba(52, 81, 178, 0.10); stroke: #4c9be8; stroke-width: 2; }
.svg-10-3 .stable-crypto { fill: rgba(223, 105, 25, 0.08); stroke: #df6919; stroke-width: 2; }
.svg-10-3 .stable-algo { fill: rgba(92, 184, 92, 0.10); stroke: #5cb85c; stroke-width: 2; }
</style>
</defs>
<text x="450" y="25" text-anchor="middle" class="stable-title">Stablecoindesign patternCompare</text>
<text x="450" y="45" text-anchor="middle" class="stable-small">threetypePrimaryflowStablecoinmechanism&Examples</text>
<rect x="50" y="70" width="250" height="450" class="stable-fiat" rx="8"/>
<text x="175" y="95" text-anchor="middle" class="stable-subtitle">1️⃣ lawCoinCollateraltype</text>
<text x="175" y="115" text-anchor="middle" class="stable-small">Fiat-Collateralized</text>
<text x="60" y="140" class="stable-text" font-weight="bold">mechanism：</text>
<text x="70" y="158" class="stable-text">• 1:1 lawCoinreserve</text>
<text x="70" y="173" class="stable-text">• CentralizedCustodial</text>
<text x="70" y="188" class="stable-text">• decideexpectaudit</text>
<text x="60" y="213" class="stable-text" font-weight="bold">Examples：</text>
<text x="70" y="231" class="stable-text">• USDT (Tether)</text>
<text x="70" y="246" class="stable-text">• USDC (Circle)</text>
<text x="70" y="261" class="stable-text">• BUSD (Binance)</text>
<text x="60" y="286" class="stable-text" font-weight="bold">Market Cap (2025)：</text>
<text x="70" y="304" class="stable-text">USDT: $100B</text>
<text x="70" y="319" class="stable-text">USDC: $35B</text>
<text x="60" y="344" class="stable-text" font-weight="bold">Pros：</text>
<text x="70" y="362" class="stable-text" fill="#5cb85c">✅ stabledecidenaturemostHigh</text>
<text x="70" y="377" class="stable-text" fill="#5cb85c">✅ simpleeasyunderstand</text>
<text x="70" y="392" class="stable-text" fill="#5cb85c">✅ Liquiditygood</text>
<text x="60" y="417" class="stable-text" font-weight="bold">Cons：</text>
<text x="70" y="435" class="stable-text" fill="#dc3545">❌ Centralization</text>
<text x="70" y="450" class="stable-text" fill="#dc3545">❌ Trust Required</text>
<text x="70" y="465" class="stable-text" fill="#dc3545">❌ RegulationAt Risk</text>
<text x="70" y="495" class="stable-small">Custodialsilverrowsupportyesperfectera，1:1 castmakeToken</text>
<rect x="325" y="70" width="250" height="450" class="stable-crypto" rx="8"/>
<text x="450" y="95" text-anchor="middle" class="stable-subtitle">2️⃣ EncryptcurrencyCoinCollateraltype</text>
<text x="450" y="115" text-anchor="middle" class="stable-small">Crypto-Collateralized</text>
<text x="335" y="140" class="stable-text" font-weight="bold">mechanism：</text>
<text x="345" y="158" class="stable-text">• Over-collateralized (>150%)</text>
<text x="345" y="173" class="stable-text">• Smart ContractCustodial</text>
<text x="345" y="188" class="stable-text">• autoLiquidation</text>
<text x="335" y="213" class="stable-text" font-weight="bold">Examples：</text>
<text x="345" y="231" class="stable-text">• DAI (MakerDAO)</text>
<text x="345" y="246" class="stable-text">• sUSD (Synthetix)</text>
<text x="345" y="261" class="stable-text">• LUSD (Liquity)</text>
<text x="335" y="286" class="stable-text" font-weight="bold">LTV：</text>
<text x="345" y="304" class="stable-text">DAI: 150-175%</text>
<text x="345" y="319" class="stable-text">LUSD: 110%</text>
<text x="335" y="344" class="stable-text" font-weight="bold">Pros：</text>
<text x="345" y="362" class="stable-text" fill="#5cb85c">✅ Decentralization</text>
<text x="345" y="377" class="stable-text" fill="#5cb85c">✅ transparent</text>
<text x="345" y="392" class="stable-text" fill="#5cb85c">✅ censorship-resistant</text>
<text x="335" y="417" class="stable-text" font-weight="bold">Cons：</text>
<text x="345" y="435" class="stable-text" fill="#dc3545">❌ assetoriginefficiencyLow</text>
<text x="345" y="450" class="stable-text" fill="#dc3545">❌ LiquidationAt Risk</text>
<text x="345" y="465" class="stable-text" fill="#dc3545">❌ Pricewavemovehour承press</text>
<text x="345" y="495" class="stable-small">case：Collateral $150 ETH generate $100 DAI</text>
<rect x="600" y="70" width="250" height="450" class="stable-algo" rx="8"/>
<text x="725" y="95" text-anchor="middle" class="stable-subtitle">3️⃣ Algorithmic Stablecoin</text>
<text x="725" y="115" text-anchor="middle" class="stable-small">Algorithmic</text>
<text x="610" y="140" class="stable-text" font-weight="bold">mechanism：</text>
<text x="620" y="158" class="stable-text">• calclawtunecontrolsupply</text>
<text x="620" y="173" class="stable-text">• NoneCollateralorpartialCollateral</text>
<text x="620" y="188" class="stable-text">• castCoin税minred</text>
<text x="610" y="213" class="stable-text" font-weight="bold">Examples：</text>
<text x="620" y="231" class="stable-text">• FRAX (partialCollateral)</text>
<text x="620" y="246" class="stable-text">• crvUSD (LLAMMA)</text>
<text x="620" y="261" class="stable-text" fill="#dc3545">• UST (alreadyFail)</text>
<text x="610" y="286" class="stable-text" font-weight="bold">tunesectionmechanism：</text>
<text x="620" y="304" class="stable-text">Price > $1：mint</text>
<text x="620" y="319" class="stable-text">价格 < $1：回购销毁</text>
<text x="610" y="344" class="stable-text" font-weight="bold">Pros：</text>
<text x="620" y="362" class="stable-text" fill="#5cb85c">✅ assetoriginefficiencyHigh</text>
<text x="620" y="377" class="stable-text" fill="#5cb85c">✅ Scalabilitystrong</text>
<text x="620" y="392" class="stable-text" fill="#5cb85c">✅ Decentralization</text>
<text x="610" y="417" class="stable-text" font-weight="bold">Cons：</text>
<text x="620" y="435" class="stable-text" fill="#dc3545">❌ deathdead螺spinAt Risk</text>
<text x="620" y="450" class="stable-text" fill="#dc3545">❌ complexnatureHigh</text>
<text x="620" y="465" class="stable-text" fill="#dc3545">❌ trustnofoot</text>
<text x="620" y="495" class="stable-small">UST 崩disclesson：NeedstrongLarge锚decidemechanism</text>
<rect x="50" y="530" width="800" height="15" fill="rgba(52, 81, 178, 0.15)" stroke="#4c9be8" stroke-width="1" rx="4"/>
<text x="60" y="542" class="stable-text">💡 trend：Hybridpattern（e.g. FRAX）resultlegalCoinreserve + calclawtunecontrol，flatmeasurestabledecidenature&assetoriginefficiency</text>
</svg>
</div>
