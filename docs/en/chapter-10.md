---
title: "Chapter 10: DeFi - Decentralized Finance"
---

# Chapter 10: DeFi - Decentralized Finance

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

<div class="chapter-footer">

### Key Takeaways
- DeFi enables permissionless financial services
- AMMs revolutionized decentralized trading
- Composability creates innovative financial products
- Security and risk management are critical

</div>
