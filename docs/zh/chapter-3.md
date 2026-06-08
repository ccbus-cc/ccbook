---
title: "第三章：加密货币基础"
---

<div class="ccbus-hero">
  <div class="ccbus-hero-avatar">
    <img src="../public/images/avatars/heroes/satoshi-driver.png" alt="Satoshi Driver" />
  </div>
  <div class="ccbus-hero-content">
    <h1>第三章：加密货币基础</h1>
    <div class="ccbus-teacher-label">🎙️ 本章讲师:<strong>Satoshi Driver</strong> · 比特币诞生的"见证人" — 领你走第一条链</div>
  </div>
</div>

<div class="chapter-intro">
  <p><strong>本章导读</strong></p>
  <p>加密货币是区块链技术最成功的应用之一。本章将深入探讨加密货币的核心概念、工作原理、主要类型以及实际应用。我们将从比特币的诞生开始,了解加密货币如何重塑全球金融系统。</p>
  <p><strong>学习目标：</strong></p>
  <ul>
    <li>理解加密货币的定义和核心特征</li>
    <li>掌握比特币的工作原理和关键机制</li>
    <li>了解以太坊和智能合约平台</li>
    <li>学会如何安全地获取和存储加密货币</li>
    <li>认识主流加密货币及其应用场景</li>
  </ul>
</div>


## 3.0 2025-2026 视角:为什么这一章要重新读

加密货币在 2025-2026 年已经远远超越了"币"的概念,演化为一个**多资产类别的可编程金融原语体系**:

1. **稳定币正在重塑支付与跨境结算**:
   - **传统法币稳定币**:USDT($135B)、USDC($60B)、FDUSD($3B)、PYUSD($1B+ PayPal 发行)
   - **加密原生稳定币**:Ethena 的 USDe(Delta-neutral 策略, $5B+);MakerDAO 的 USDS;Curve 的 crvUSD
   - **2026 大趋势**:稳定币立法(美国 GENIUS Act、欧盟 MiCA)为合规化打开通路;Stripe、PayPal、Visa、Mastercard 全面接入;稳定币月结算量超过 Mastercard 卡组织

2. **LST / LRT 改变了 staking 经济**:
   - **LST(Liquid Staking Token)**:Lido 的 stETH 占 L1 staking 的 30%;Rocket Pool 的 rETH 提供 8 ETH 起步的去中心化方案
   - **LRT(Liquid Restaking Token)**:EigenLayer 衍生的 stETH + restake 收益凭证;Puffer、Renzo、Kelp、EtherFi 都提供 LRT 流动性
   - **2026 数据**:EigenLayer TVL $20B+,LRT 锁仓总规模 $15B+

3. **BTC 不再是"数字黄金"的静态叙事**:
   - **Bitcoin L2 生态**:Stacks(POX)、Babylon(比特币质押)、BitVM(任意合约验证)、Lightning Network(支付)、Liquid(侧链)
   - **BTCFi**:Babylon 允许把 BTC 质押到 Cosmos 链,获取 PoS 收益;Solv Protocol 推出 BTC+ 收益凭证
   - **2026 预测**:BTC 链上 30% 的 BTC 将被用于非支付用途(质押、流动性、桥接)

4. **Meme 币经济学(memeconomics)成为新学科**:
   - Pump.fun(2024-01)单平台首发代币超 500 万个
   - 2025 年 meme 币交易量占 DEX 总量的 35%+
   - 出现了 **Meta-Meme 协议** —— 通过 Pump + Burn + Lock + Reward 创造可持续 meme 经济

5. **RWA 真实世界资产代币化**:
   - **货币市场基金**:Ondo Finance 的 OUSG(美债)、Maple Finance 的 syrupUSDC(信贷)
   - **私募基金**:Securitize 把 KKR、Apollo 等私募基金代币化
   - **不动产**:RealT、Propy、Blocksquare 把房地产份额代币化(虽然规模仍小)
   - **2026 预测**:RWA 链上总规模 $30B+(2024 年仅 $15B)

### 🖥️ 真实案例:CCBus 发币广场

CCBus 把"发币"这个原本需要 Solidity 工程师才能完成的工作,变成任何普通用户的几次点击。下面这张图是 **CCBus 标准代币创建界面**,你只需要填入代币名称、符号、总供应量、精度、接收地址这五个字段,平台会按照 ERC-20 标准自动部署合约。

![CCBus 标准代币创建界面](../public/images/chapters/zh/standard-token-create.png)

*图 3-1:CCBus 标准代币创建界面。背后实际上是平台调用了 OpenZeppelin 的 ERC-20 + ERC-20Capped + ERC-20Burnable 模板,自动编译并部署到 BNB Chain、Solana、ETH 等多链。费用仅 0.03 BNB,这是 2026 年加密货币发行的真实成本结构。*

## 3.1 什么是加密货币？

**加密货币**（Cryptocurrency）是一种使用密码学技术来保护交易、控制新单位创建和验证资产转移的数字或虚拟货币。与传统法定货币不同,加密货币通常是去中心化的,不由任何政府或中央机构发行和管理。

### 加密货币的核心特征

<div style="background: rgba(52, 81, 178, 0.06); padding: 1.5em; border-radius: 8px; margin: 2em 0;">
<svg viewBox="0 0 640 320" xmlns="http://www.w3.org/2000/svg" style="width: 100%; max-width: 800px; display: block; margin: 0 auto;">
  <defs>
    <style>
      .cc-text { font-family: arial, sans-serif; font-size: 8px; fill: #1f2937; }
      .cc-text-title { font-family: arial, sans-serif; font-size: 14px; fill: #1f2937; font-weight: bold; }
      .cc-text-medium { font-family: arial, sans-serif; font-size: 10px; fill: #1f2937; font-weight: bold; }
      .cc-text-small { font-family: arial, sans-serif; font-size: 8px; fill: #1f2937; }
      .cc-text-dark { font-family: arial, sans-serif; font-size: 10px; fill: #3451b2; font-weight: bold; }
      .cc-text-dark-small { font-family: arial, sans-serif; font-size: 9px; fill: #3451b2; }
      .cc-text-italic { font-family: arial, sans-serif; font-size: 8px; fill: #1f2937; font-style: italic; }
      .cc-circle-center { fill: #4c9be8; stroke: #1f2937; stroke-width: 0.5; }
      .cc-circle-orange { fill: rgba(223, 105, 25, 0.08); stroke: #df6919; stroke-width: 0.5; }
      .cc-circle-blue { fill: rgba(52, 81, 178, 0.10); stroke: #4c9be8; stroke-width: 0.5; }
      .cc-circle-green { fill: rgba(92, 184, 92, 0.10); stroke: #5cb85c; stroke-width: 0.5; }
      .cc-line-orange { stroke: #df6919; stroke-width: 0.5; }
      .cc-line-blue { stroke: #4c9be8; stroke-width: 0.5; }
      .cc-line-green { stroke: #5cb85c; stroke-width: 0.5; }
    </style>
    <marker id="arrow-cc-1" markerWidth="6" markerHeight="6" refX="6" refY="3" orient="auto">
      <polygon points="0 0, 6 3, 0 6" fill="#df6919"/>
    </marker>
    <marker id="arrow-cc-2" markerWidth="6" markerHeight="6" refX="6" refY="3" orient="auto">
      <polygon points="0 0, 6 3, 0 6" fill="#4c9be8"/>
    </marker>
    <marker id="arrow-cc-3" markerWidth="6" markerHeight="6" refX="6" refY="3" orient="auto">
      <polygon points="0 0, 6 3, 0 6" fill="#5cb85c"/>
    </marker>
  </defs>
  <!-- Title -->
  <text class="cc-text-title" x="300" y="25" text-anchor="middle">加密货币的六大核心特征</text>
  <!-- Central circle -->
  <circle class="cc-circle-center" cx="300" cy="170" r="45"/>
  <text class="cc-text-dark" x="300" y="165" text-anchor="middle">加密货币</text>
  <text class="cc-text-dark-small" x="300" y="180" text-anchor="middle">Cryptocurrency</text>
  <!-- Feature 1: 数字化 (top-left) -->
  <circle class="cc-circle-orange" cx="120" cy="80" r="35"/>
  <text class="cc-text-medium" x="120" y="77" text-anchor="middle">数字化</text>
  <text class="cc-text-small" x="120" y="88" text-anchor="middle">Digital</text>
  <line class="cc-line-orange" x1="145" y1="100" x2="270" y2="145" marker-end="url(#arrow-cc-1)"/>
  <text class="cc-text" x="30" y="60">• 完全数字形式</text>
  <text class="cc-text" x="30" y="70">• 无物理载体</text>
  <!-- Feature 2: 去中心化 (top-right) -->
  <circle class="cc-circle-orange" cx="480" cy="80" r="35"/>
  <text class="cc-text-medium" x="480" y="77" text-anchor="middle">去中心化</text>
  <text class="cc-text-small" x="480" y="88" text-anchor="middle">Decentralized</text>
  <line class="cc-line-orange" x1="455" y1="100" x2="330" y2="145" marker-end="url(#arrow-cc-1)"/>
  <text class="cc-text" x="525" y="60">• 无中央机构</text>
  <text class="cc-text" x="525" y="70">• 分布式网络</text>
  <!-- Feature 3: 密码学保护 (middle-left) -->
  <circle class="cc-circle-blue" cx="90" cy="170" r="35"/>
  <text class="cc-text-medium" x="90" y="167" text-anchor="middle">密码学</text>
  <text class="cc-text-small" x="90" y="178" text-anchor="middle">Cryptography</text>
  <line class="cc-line-blue" x1="125" y1="170" x2="255" y2="170" marker-end="url(#arrow-cc-2)"/>
  <text class="cc-text" x="10" y="155">• 公私钥加密</text>
  <text class="cc-text" x="10" y="165">• 数字签名</text>
  <!-- Feature 4: 透明性 (middle-right) -->
  <circle class="cc-circle-blue" cx="510" cy="170" r="35"/>
  <text class="cc-text-medium" x="510" y="167" text-anchor="middle">透明性</text>
  <text class="cc-text-small" x="510" y="178" text-anchor="middle">Transparent</text>
  <line class="cc-line-blue" x1="345" y1="170" x2="475" y2="170" marker-end="url(#arrow-cc-2)"/>
  <text class="cc-text" x="555" y="150">• 交易可追踪</text>
  <text class="cc-text" x="555" y="160">• 账本公开</text>
  <!-- Feature 5: 有限供应 (bottom-left) -->
  <circle class="cc-circle-green" cx="120" cy="260" r="35"/>
  <text class="cc-text-medium" x="120" y="257" text-anchor="middle">有限供应</text>
  <text class="cc-text-small" x="120" y="268" text-anchor="middle">Limited Supply</text>
  <line class="cc-line-green" x1="145" y1="240" x2="270" y2="195" marker-end="url(#arrow-cc-3)"/>
  <text class="cc-text" x="40" y="250">• 固定总量</text>
  <text class="cc-text" x="40" y="260">• 抗通胀</text>
  <!-- Feature 6: 全球流通 (bottom-right) -->
  <circle class="cc-circle-green" cx="480" cy="260" r="35"/>
  <text class="cc-text-medium" x="480" y="257" text-anchor="middle">全球流通</text>
  <text class="cc-text-small" x="480" y="268" text-anchor="middle">Global</text>
  <line class="cc-line-green" x1="455" y1="240" x2="330" y2="195" marker-end="url(#arrow-cc-3)"/>
  <text class="cc-text" x="525" y="250">• 跨境支付</text>
  <text class="cc-text" x="525" y="260">• 7×24交易</text>
  <!-- Legend -->
  <text class="cc-text-italic" x="300" y="310" text-anchor="middle">这些特征共同构成了加密货币的独特价值主张</text>
</svg>
</div>

### 加密货币 vs 传统货币

| 特征 | 加密货币 | 传统货币（法币） |
|-----|---------|--------------|
| **发行方式** | 算法和共识机制 | 中央银行 |
| **供应控制** | 预设算法（如比特币2100万上限） | 政府可调节 |
| **交易验证** | 分布式网络共识 | 银行和支付处理商 |
| **交易速度** | 几分钟到几小时 | 即时到几天 |
| **交易费用** | 通常较低（Gas费） | 银行手续费 |
| **匿名性** | 伪匿名（地址公开） | 实名制 |
| **跨境转账** | 无障碍 | 需要中介,受限制 |
| **通货膨胀** | 大多抗通胀 | 存在通胀 |

## 3.2 比特币：第一个加密货币

### 比特币的诞生

2008年10月31日,一位化名为**中本聪**（Satoshi Nakamoto）的人或团体发布了比特币白皮书《比特币：一种点对点的电子现金系统》。2009年1月3日,比特币网络正式启动,第一个区块（创世区块）被挖出。

#### 创世区块的特殊信息

比特币的创世区块中包含了一条特殊的信息：

```
The Times 03/Jan/2009 Chancellor on brink of second bailout for banks
```

这是当天《泰晤士报》的头版标题,记录了2008年金融危机期间政府救助银行的事件,也暗示了比特币诞生的动机——创建一个不受政府和银行控制的货币系统。

### 比特币的核心机制

<div style="background: rgba(52, 81, 178, 0.06); padding: 1.5em; border-radius: 8px; margin: 2em 0;">
<svg viewBox="0 0 700 450" xmlns="http://www.w3.org/2000/svg" style="width: 100%; max-width: 800px; display: block; margin: 0 auto;">
  <defs>
    <style>
      .btc-text { font-family: arial, sans-serif; font-size: 8px; fill: #1f2937; }
      .btc-text-tiny { font-family: arial, sans-serif; font-size: 7px; fill: #1f2937; }
      .btc-text-tiny-italic { font-family: arial, sans-serif; font-size: 7px; fill: #1f2937; font-style: italic; }
      .btc-text-small { font-family: arial, sans-serif; font-size: 9px; fill: #1f2937; }
      .btc-text-small-bold { font-family: arial, sans-serif; font-size: 9px; fill: #1f2937; font-weight: bold; }
      .btc-text-medium { font-family: arial, sans-serif; font-size: 10px; fill: #1f2937; font-weight: bold; }
      .btc-text-arrow { font-family: arial, sans-serif; font-size: 10px; fill: #1f2937; }
      .btc-text-large { font-family: arial, sans-serif; font-size: 11px; fill: #1f2937; font-weight: bold; }
      .btc-text-huge { font-family: arial, sans-serif; font-size: 16px; fill: #1f2937; font-weight: bold; }
      .btc-text-title { font-family: arial, sans-serif; font-size: 14px; fill: #1f2937; font-weight: bold; }
      .btc-text-subtitle { font-family: arial, sans-serif; font-size: 12px; fill: #1f2937; font-weight: bold; }
      .btc-rect-orange { fill: rgba(223, 105, 25, 0.08); stroke: #df6919; stroke-width: 0.5; }
      .btc-rect-orange-dark { fill: rgba(223, 105, 25, 0.12); stroke: #df6919; stroke-width: 0.5; }
      .btc-rect-blue { fill: rgba(52, 81, 178, 0.10); stroke: #4c9be8; stroke-width: 0.5; }
      .btc-rect-blue-dark { fill: rgba(52, 81, 178, 0.15); stroke: #4c9be8; stroke-width: 0.5; }
      .btc-rect-green { fill: rgba(92, 184, 92, 0.07); stroke: #5cb85c; stroke-width: 0.5; }
      .btc-rect-green-dark { fill: rgba(92, 184, 92, 0.15); stroke: #5cb85c; stroke-width: 0.5; }
      .btc-circle-orange { fill: #df6919; stroke: #1f2937; stroke-width: 0.5; }
      .btc-line-orange { stroke: #df6919; stroke-width: 0.5; }
      .btc-line-blue { stroke: #4c9be8; stroke-width: 0.5; }
      .btc-bar-1 { fill: #df6919; opacity: 1.0; }
      .btc-bar-2 { fill: #df6919; opacity: 0.8; }
      .btc-bar-3 { fill: #df6919; opacity: 0.6; }
      .btc-bar-4 { fill: #df6919; opacity: 0.4; }
      .btc-bar-5 { fill: #df6919; opacity: 0.2; }
    </style>
    <marker id="arrow-btc-1" markerWidth="6" markerHeight="6" refX="6" refY="3" orient="auto">
      <polygon points="0 0, 6 3, 0 6" fill="#df6919"/>
    </marker>
    <marker id="arrow-btc-2" markerWidth="6" markerHeight="6" refX="6" refY="3" orient="auto">
      <polygon points="0 0, 6 3, 0 6" fill="#4c9be8"/>
    </marker>
  </defs>
  <!-- Title -->
  <text class="btc-text-title" x="350" y="25" text-anchor="middle">比特币的四大核心机制</text>
  <!-- Mechanism 1: 有限供应 (21M BTC) -->
  <rect class="btc-rect-orange" x="20" y="50" width="150" height="170" rx="8"/>
  <text class="btc-text-large" x="95" y="75" text-anchor="middle">有限供应</text>
  <text class="btc-text-small" x="95" y="90" text-anchor="middle">Limited Supply</text>
  <!-- Bitcoin icon -->
  <circle class="btc-circle-orange" cx="95" cy="120" r="20"/>
  <text class="btc-text-huge" x="95" y="127" text-anchor="middle">₿</text>
  <text class="btc-text-medium" x="95" y="155" text-anchor="middle">21,000,000</text>
  <text class="btc-text" x="95" y="170" text-anchor="middle">最大供应量</text>
  <text class="btc-text" x="95" y="185" text-anchor="middle">预计2140年达到</text>
  <text class="btc-text" x="95" y="200" text-anchor="middle">✓ 抗通货膨胀</text>
  <!-- Mechanism 2: 减半机制 -->
  <rect class="btc-rect-orange" x="190" y="50" width="160" height="170" rx="8"/>
  <text class="btc-text-large" x="265" y="75" text-anchor="middle">减半机制</text>
  <text class="btc-text-small" x="265" y="90" text-anchor="middle">Halving</text>
  <!-- Halving timeline -->
  <text class="btc-text" x="210" y="110">2009-2012: 50 BTC/区块</text>
  <rect class="btc-bar-1" x="315" y="102" width="30" height="10"/>
  <text class="btc-text" x="210" y="130">2012-2016: 25 BTC/区块</text>
  <rect class="btc-bar-2" x="315" y="122" width="15" height="10"/>
  <text class="btc-text" x="210" y="150">2016-2020: 12.5 BTC/区块</text>
  <rect class="btc-bar-3" x="315" y="142" width="7.5" height="10"/>
  <text class="btc-text" x="210" y="170">2020-2024: 6.25 BTC/区块</text>
  <rect class="btc-bar-4" x="315" y="162" width="3.75" height="10"/>
  <text class="btc-text" x="210" y="190">2024-2028: 3.125 BTC/区块</text>
  <rect class="btc-bar-5" x="315" y="182" width="1.875" height="10"/>
  <text class="btc-text-tiny-italic" x="265" y="205" text-anchor="middle">每21万区块减半（约4年）</text>
  <!-- Mechanism 3: 工作量证明 (PoW) -->
  <rect class="btc-rect-blue" x="360" y="50" width="150" height="170" rx="8"/>
  <text class="btc-text-large" x="435" y="75" text-anchor="middle">工作量证明</text>
  <text class="btc-text-small" x="435" y="90" text-anchor="middle">Proof of Work</text>
  <!-- Mining process -->
  <rect class="btc-rect-blue-dark" x="380" y="105" width="110" height="25" rx="3"/>
  <text class="btc-text" x="435" y="122" text-anchor="middle">计算SHA-256哈希</text>
  <text class="btc-text" x="435" y="145" text-anchor="middle">⬇</text>
  <rect class="btc-rect-blue-dark" x="380" y="155" width="110" height="25" rx="3"/>
  <text class="btc-text" x="435" y="172" text-anchor="middle">找到符合难度的Nonce</text>
  <text class="btc-text" x="435" y="195" text-anchor="middle">⬇</text>
  <text class="btc-text" x="435" y="208" text-anchor="middle">✓ 获得记账权和奖励</text>
  <!-- Mechanism 4: UTXO模型 -->
  <rect class="btc-rect-blue" x="530" y="50" width="150" height="170" rx="8"/>
  <text class="btc-text-large" x="605" y="75" text-anchor="middle">UTXO模型</text>
  <text class="btc-text-small" x="605" y="90" text-anchor="middle">Unspent TX Output</text>
  <!-- UTXO illustration -->
  <text class="btc-text" x="550" y="110">交易输入 (Input):</text>
  <rect class="btc-rect-orange-dark" x="550" y="115" width="50" height="18" rx="2"/>
  <text class="btc-text" x="575" y="127" text-anchor="middle">5 BTC</text>
  <text class="btc-text-arrow" x="605" y="127">→</text>
  <text class="btc-text" x="620" y="110">交易输出:</text>
  <rect class="btc-rect-green-dark" x="620" y="115" width="50" height="18" rx="2"/>
  <text class="btc-text" x="645" y="127" text-anchor="middle">3 BTC</text>
  <rect class="btc-rect-green-dark" x="620" y="137" width="50" height="18" rx="2"/>
  <text class="btc-text" x="645" y="149" text-anchor="middle">1.99 BTC</text>
  <text class="btc-text-tiny" x="550" y="172">• 接收方获得 3 BTC</text>
  <text class="btc-text-tiny" x="550" y="182">• 找零返回 1.99 BTC</text>
  <text class="btc-text-tiny" x="550" y="192">• 矿工费 0.01 BTC</text>
  <text class="btc-text-tiny-italic" x="550" y="205">所有输入必须完全花费</text>
  <!-- Connections and benefits -->
  <line class="btc-line-orange" x1="95" y1="220" x2="95" y2="270" marker-end="url(#arrow-btc-1)"/>
  <line class="btc-line-orange" x1="265" y1="220" x2="265" y2="270" marker-end="url(#arrow-btc-1)"/>
  <line class="btc-line-blue" x1="435" y1="220" x2="435" y2="270" marker-end="url(#arrow-btc-2)"/>
  <line class="btc-line-blue" x1="605" y1="220" x2="605" y2="270" marker-end="url(#arrow-btc-2)"/>
  <!-- Benefits box -->
  <rect class="btc-rect-green" x="50" y="270" width="600" height="160" rx="8"/>
  <text class="btc-text-subtitle" x="350" y="295" text-anchor="middle">这些机制共同实现了比特币的核心价值</text>
  <!-- Benefits in 2 columns -->
  <text class="btc-text-small-bold" x="70" y="320">✓ 去中心化</text>
  <text class="btc-text" x="90" y="335">无需信任中央机构</text>
  <text class="btc-text-small-bold" x="70" y="360">✓ 稀缺性</text>
  <text class="btc-text" x="90" y="375">供应量固定,价值存储</text>
  <text class="btc-text-small-bold" x="70" y="400">✓ 安全性</text>
  <text class="btc-text" x="90" y="415">计算能力保护网络</text>
  <text class="btc-text-small-bold" x="380" y="320">✓ 透明性</text>
  <text class="btc-text" x="400" y="335">所有交易公开可验证</text>
  <text class="btc-text-small-bold" x="380" y="360">✓ 抗审查</text>
  <text class="btc-text" x="400" y="375">无法被单一实体控制</text>
  <text class="btc-text-small-bold" x="380" y="400">✓ 可编程</text>
  <text class="btc-text" x="400" y="415">智能化的货币系统</text>
</svg>
</div>

### 比特币的应用场景

1. **价值存储（数字黄金）**
   - 对冲传统金融风险
   - 抗通货膨胀
   - 长期投资标的

2. **跨境支付**
   - 无需银行中介
   - 低手续费
   - 24/7全天候交易

3. **小额支付（闪电网络）**
   - 即时确认
   - 极低费用
   - 高吞吐量

## 3.3 以太坊和智能合约平台

### 以太坊的创新

**以太坊**（Ethereum）由Vitalik Buterin在2013年提出,2015年正式上线。它不仅是一种加密货币（ETH），更是一个**图灵完备的智能合约平台**。

<div style="background: rgba(52, 81, 178, 0.06); padding: 1.5em; border-radius: 8px; margin: 2em 0;">
<svg viewBox="0 0 650 400" xmlns="http://www.w3.org/2000/svg" style="width: 100%; max-width: 800px; display: block; margin: 0 auto;">
  <defs>
    <style>
      .vs-text { font-family: arial, sans-serif; font-size: 8px; fill: #1f2937; }
      .vs-text-bold { font-family: arial, sans-serif; font-size: 9px; fill: #1f2937; font-weight: bold; }
      .vs-text-title { font-family: arial, sans-serif; font-size: 14px; fill: #1f2937; font-weight: bold; }
      .vs-text-subtitle { font-family: arial, sans-serif; font-size: 12px; fill: #1f2937; font-weight: bold; }
      .vs-text-icon { font-family: arial, sans-serif; font-size: 20px; fill: #1f2937; font-weight: bold; }
      .vs-text-italic { font-family: arial, sans-serif; font-size: 8px; fill: #1f2937; font-style: italic; }
      .vs-rect-orange { fill: rgba(223, 105, 25, 0.06); stroke: #df6919; stroke-width: 0.5; }
      .vs-rect-blue { fill: rgba(52, 81, 178, 0.07); stroke: #4c9be8; stroke-width: 0.5; }
      .vs-circle-orange { fill: #df6919; stroke: #1f2937; stroke-width: 0.5; }
      .vs-circle-blue { fill: #4c9be8; stroke: #1f2937; stroke-width: 0.5; }
      .vs-line-divider { stroke: #1f2937; stroke-width: 0.5; stroke-dasharray: 5,5; }
    </style>
  </defs>
  <!-- Title -->
  <text class="vs-text-title" x="325" y="25" text-anchor="middle">比特币 vs 以太坊</text>
  <!-- Bitcoin side -->
  <rect class="vs-rect-orange" x="20" y="50" width="280" height="320" rx="8"/>
  <text class="vs-text-subtitle" x="160" y="75" text-anchor="middle">比特币 (Bitcoin)</text>
  <circle class="vs-circle-orange" cx="160" cy="115" r="25"/>
  <text class="vs-text-icon" x="160" y="123" text-anchor="middle">₿</text>
  <text class="vs-text-bold" x="40" y="165">定位：</text>
  <text class="vs-text" x="60" y="180">• 数字黄金</text>
  <text class="vs-text" x="60" y="193">• 价值存储</text>
  <text class="vs-text" x="60" y="206">• 支付货币</text>
  <text class="vs-text-bold" x="40" y="230">技术特点：</text>
  <text class="vs-text" x="60" y="245">• 工作量证明 (PoW)</text>
  <text class="vs-text" x="60" y="258">• UTXO模型</text>
  <text class="vs-text" x="60" y="271">• 简单脚本语言</text>
  <text class="vs-text" x="60" y="284">• ~7 TPS</text>
  <text class="vs-text-bold" x="40" y="308">供应：</text>
  <text class="vs-text" x="60" y="323">• 最大 2100万 BTC</text>
  <text class="vs-text" x="60" y="336">• 减半机制</text>
  <text class="vs-text" x="60" y="349">• 抗通胀</text>
  <!-- Ethereum side -->
  <rect class="vs-rect-blue" x="350" y="50" width="280" height="320" rx="8"/>
  <text class="vs-text-subtitle" x="490" y="75" text-anchor="middle">以太坊 (Ethereum)</text>
  <circle class="vs-circle-blue" cx="490" cy="115" r="25"/>
  <text class="vs-text-icon" x="490" y="123" text-anchor="middle">Ξ</text>
  <text class="vs-text-bold" x="370" y="165">定位：</text>
  <text class="vs-text" x="390" y="180">• 世界计算机</text>
  <text class="vs-text" x="390" y="193">• 智能合约平台</text>
  <text class="vs-text" x="390" y="206">• DApp生态基础</text>
  <text class="vs-text-bold" x="370" y="230">技术特点：</text>
  <text class="vs-text" x="390" y="245">• 权益证明 (PoS)</text>
  <text class="vs-text" x="390" y="258">• 账户模型</text>
  <text class="vs-text" x="390" y="271">• 图灵完备 (Solidity)</text>
  <text class="vs-text" x="390" y="284">• ~30 TPS (L2可达数千)</text>
  <text class="vs-text-bold" x="370" y="308">供应：</text>
  <text class="vs-text" x="390" y="323">• 无固定上限</text>
  <text class="vs-text" x="390" y="336">• EIP-1559销毁机制</text>
  <text class="vs-text" x="390" y="349">• 可能实现通缩</text>
  <!-- Divider -->
  <line class="vs-line-divider" x1="320" y1="70" x2="320" y2="360"/>
  <!-- Bottom comparison -->
  <text class="vs-text-italic" x="325" y="390" text-anchor="middle">比特币专注于货币功能,以太坊提供可编程的去中心化平台</text>
</svg>
</div>

### 什么是智能合约？

**智能合约**（Smart Contract）是运行在区块链上的自动执行程序,其代码和状态存储在链上,当预设条件满足时自动执行,无需信任第三方。

#### 智能合约工作流程

<div style="background: rgba(52, 81, 178, 0.06); padding: 1.5em; border-radius: 8px; margin: 2em 0;">
<svg viewBox="0 0 700 350" xmlns="http://www.w3.org/2000/svg" style="width: 100%; max-width: 800px; display: block; margin: 0 auto;">
  <defs>
    <style>
      .sc-text { font-family: arial, sans-serif; font-size: 7px; fill: #1f2937; }
      .sc-text-tiny { font-family: arial, sans-serif; font-size: 6px; fill: #1f2937; }
      .sc-text-small { font-family: arial, sans-serif; font-size: 8px; fill: #1f2937; }
      .sc-text-small-bold { font-family: arial, sans-serif; font-size: 7px; fill: #1f2937; font-weight: bold; }
      .sc-text-medium { font-family: arial, sans-serif; font-size: 9px; fill: #1f2937; font-weight: bold; }
      .sc-text-large { font-family: arial, sans-serif; font-size: 10px; fill: #1f2937; font-weight: bold; }
      .sc-text-arrow { font-family: arial, sans-serif; font-size: 12px; fill: #df6919; }
      .sc-text-arrow-blue { font-family: arial, sans-serif; font-size: 12px; fill: #4c9be8; }
      .sc-text-title { font-family: arial, sans-serif; font-size: 14px; fill: #1f2937; font-weight: bold; }
      .sc-rect-orange { fill: rgba(223, 105, 25, 0.08); stroke: #df6919; stroke-width: 0.5; }
      .sc-rect-orange-light { fill: rgba(223, 105, 25, 0.06); stroke: #df6919; stroke-width: 0.5; }
      .sc-rect-blue { fill: rgba(52, 81, 178, 0.10); stroke: #4c9be8; stroke-width: 0.5; }
      .sc-rect-green { fill: rgba(92, 184, 92, 0.10); stroke: #5cb85c; stroke-width: 0.5; }
      .sc-rect-green-dark { fill: rgba(92, 184, 92, 0.15); stroke: #5cb85c; stroke-width: 0.5; }
      .sc-line-blue { stroke: #4c9be8; stroke-width: 0.5; }
      .sc-line-green { stroke: #5cb85c; stroke-width: 0.5; }
      .sc-path-green { stroke: #5cb85c; stroke-width: 0.5; fill: none; }
    </style>
    <marker id="arrow-sc-1" markerWidth="6" markerHeight="6" refX="6" refY="3" orient="auto">
      <polygon points="0 0, 6 3, 0 6" fill="#4c9be8"/>
    </marker>
    <marker id="arrow-sc-2" markerWidth="6" markerHeight="6" refX="6" refY="3" orient="auto">
      <polygon points="0 0, 6 3, 0 6" fill="#5cb85c"/>
    </marker>
  </defs>
  <!-- Title -->
  <text class="sc-text-title" x="350" y="25" text-anchor="middle">智能合约执行流程</text>
  <!-- Step 1: 编写合约 -->
  <rect class="sc-rect-orange" x="30" y="60" width="120" height="80" rx="5"/>
  <text class="sc-text-large" x="90" y="85" text-anchor="middle">1. 编写合约</text>
  <text class="sc-text-small" x="90" y="100" text-anchor="middle">Write Contract</text>
  <text class="sc-text" x="50" y="120">• 使用Solidity</text>
  <text class="sc-text" x="50" y="132">• 定义业务逻辑</text>
  <text class="sc-text-arrow" x="155" y="105">→</text>
  <!-- Step 2: 编译合约 -->
  <rect class="sc-rect-orange" x="180" y="60" width="120" height="80" rx="5"/>
  <text class="sc-text-large" x="240" y="85" text-anchor="middle">2. 编译</text>
  <text class="sc-text-small" x="240" y="100" text-anchor="middle">Compile</text>
  <text class="sc-text" x="200" y="120">• 转为字节码</text>
  <text class="sc-text" x="200" y="132">• 生成ABI</text>
  <text class="sc-text-arrow" x="305" y="105">→</text>
  <!-- Step 3: 部署到链上 -->
  <rect class="sc-rect-orange" x="330" y="60" width="120" height="80" rx="5"/>
  <text class="sc-text-large" x="390" y="85" text-anchor="middle">3. 部署</text>
  <text class="sc-text-small" x="390" y="100" text-anchor="middle">Deploy</text>
  <text class="sc-text" x="350" y="120">• 发送交易</text>
  <text class="sc-text" x="350" y="132">• 获得地址</text>
  <text class="sc-text-arrow" x="455" y="105">→</text>
  <!-- Step 4: 合约地址 -->
  <rect class="sc-rect-blue" x="480" y="60" width="190" height="80" rx="5"/>
  <text class="sc-text-large" x="575" y="85" text-anchor="middle">4. 链上合约</text>
  <text class="sc-text-small" x="575" y="100" text-anchor="middle">On-Chain Contract</text>
  <text class="sc-text" x="495" y="120">• 合约地址: 0x1234...abcd</text>
  <text class="sc-text" x="495" y="132">• 永久存储,不可篡改</text>
  <!-- Arrow down -->
  <line class="sc-line-blue" x1="575" y1="150" x2="575" y2="180" marker-end="url(#arrow-sc-1)"/>
  <!-- Step 5: 用户调用 -->
  <rect class="sc-rect-blue" x="480" y="190" width="190" height="80" rx="5"/>
  <text class="sc-text-large" x="575" y="215" text-anchor="middle">5. 用户调用</text>
  <text class="sc-text-small" x="575" y="230" text-anchor="middle">User Interaction</text>
  <text class="sc-text" x="495" y="248">• 发送交易调用函数</text>
  <text class="sc-text" x="495" y="260">• 支付Gas费</text>
  <text class="sc-text-arrow-blue" x="470" y="235">←</text>
  <!-- Step 6: 条件判断 -->
  <rect class="sc-rect-blue" x="280" y="190" width="160" height="80" rx="5"/>
  <text class="sc-text-large" x="360" y="215" text-anchor="middle">6. 条件检查</text>
  <text class="sc-text-small" x="360" y="230" text-anchor="middle">Condition Check</text>
  <text class="sc-text" x="295" y="248">• 验证require条件</text>
  <text class="sc-text" x="295" y="260">• 检查权限和余额</text>
  <text class="sc-text-arrow-blue" x="270" y="235">←</text>
  <!-- Step 7: 自动执行 -->
  <rect class="sc-rect-green" x="80" y="190" width="160" height="80" rx="5"/>
  <text class="sc-text-large" x="160" y="215" text-anchor="middle">7. 自动执行</text>
  <text class="sc-text-small" x="160" y="230" text-anchor="middle">Auto Execute</text>
  <text class="sc-text" x="95" y="248">• 修改状态变量</text>
  <text class="sc-text" x="95" y="260">• 转移资产</text>
  <!-- Arrow down from execution -->
  <line class="sc-line-green" x1="160" y1="280" x2="160" y2="300" marker-end="url(#arrow-sc-2)"/>
  <!-- Step 8: 结果 -->
  <rect class="sc-rect-green-dark" x="80" y="310" width="160" height="35" rx="5"/>
  <text class="sc-text-medium" x="160" y="330" text-anchor="middle">✓ 交易完成,状态更新</text>
  <!-- Arrow from result to user -->
  <path class="sc-path-green" d="M 240 327 Q 450 327 450 255" marker-end="url(#arrow-sc-2)"/>
  <text class="sc-text" x="350" y="315" text-anchor="middle">返回结果</text>
  <!-- Key features box -->
  <rect class="sc-rect-orange-light" x="30" y="290" width="40" height="55" rx="3"/>
  <text class="sc-text-small-bold" x="50" y="305" text-anchor="middle">特点</text>
  <text class="sc-text-tiny" x="37" y="318">确定性</text>
  <text class="sc-text-tiny" x="37" y="328">透明性</text>
  <text class="sc-text-tiny" x="37" y="338">不可篡改</text>
</svg>
</div>

#### 智能合约示例：简单的资金托管

```javascript
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

/**
 * @title Escrow
 * @dev 简单的资金托管合约
 */
contract Escrow {
    address public buyer;        // 买家地址
    address public seller;       // 卖家地址
    address public arbiter;      // 仲裁者地址
    uint256 public amount;       // 托管金额
    bool public fundsReleased;   // 资金是否已释放

    event FundsDeposited(address indexed buyer, uint256 amount);
    event FundsReleased(address indexed seller, uint256 amount);
    event FundsRefunded(address indexed buyer, uint256 amount);

    /**
     * @dev 构造函数,创建托管合约
     * @param _seller 卖家地址
     * @param _arbiter 仲裁者地址
     */
    constructor(address _seller, address _arbiter) payable {
        require(msg.value > 0, "Must deposit funds");
        require(_seller != address(0), "Invalid seller");
        require(_arbiter != address(0), "Invalid arbiter");

        buyer = msg.sender;
        seller = _seller;
        arbiter = _arbiter;
        amount = msg.value;
        fundsReleased = false;

        emit FundsDeposited(buyer, amount);
    }

    /**
     * @dev 仲裁者批准,释放资金给卖家
     */
    function releaseFunds() external {
        require(msg.sender == arbiter, "Only arbiter can release");
        require(!fundsReleased, "Funds already released");

        fundsReleased = true;
        payable(seller).transfer(amount);

        emit FundsReleased(seller, amount);
    }

    /**
     * @dev 仲裁者批准,退款给买家
     */
    function refundBuyer() external {
        require(msg.sender == arbiter, "Only arbiter can refund");
        require(!fundsReleased, "Funds already released");

        fundsReleased = true;
        payable(buyer).transfer(amount);

        emit FundsRefunded(buyer, amount);
    }

    /**
     * @dev 查看合约余额
     */
    function getBalance() external view returns (uint256) {
        return address(this).balance;
    }
}
```

### 智能合约的应用场景

1. **DeFi（去中心化金融）**
   - Uniswap：去中心化交易所
   - Aave：借贷协议
   - MakerDAO：稳定币协议

2. **NFT（非同质化代币）**
   - 数字艺术品
   - 游戏道具
   - 数字收藏品

3. **DAO（去中心化自治组织）**
   - 链上治理
   - 资金管理
   - 投票决策

4. **供应链管理**
   - 产品溯源
   - 物流追踪
   - 质量保证

## 3.4 其他主流加密货币

<div style="background: rgba(52, 81, 178, 0.06); padding: 1.5em; border-radius: 8px; margin: 2em 0;">
<svg viewBox="0 0 750 550" xmlns="http://www.w3.org/2000/svg" style="width: 100%; max-width: 800px; display: block; margin: 0 auto;">
  <defs>
    <style>
      .eco-text { font-family: arial, sans-serif; font-size: 7px; fill: #1f2937; }
      .eco-text-small { font-family: arial, sans-serif; font-size: 8px; fill: #1f2937; }
      .eco-text-italic { font-family: arial, sans-serif; font-size: 8px; fill: #1f2937; font-style: italic; }
      .eco-text-bold { font-family: arial, sans-serif; font-size: 9px; fill: #1f2937; font-weight: bold; }
      .eco-text-large { font-family: arial, sans-serif; font-size: 11px; fill: #1f2937; font-weight: bold; }
      .eco-text-title { font-family: arial, sans-serif; font-size: 14px; fill: #1f2937; font-weight: bold; }
      .eco-rect-orange { fill: rgba(223, 105, 25, 0.06); stroke: #df6919; stroke-width: 0.5; }
      .eco-rect-blue { fill: rgba(52, 81, 178, 0.07); stroke: #4c9be8; stroke-width: 0.5; }
      .eco-rect-green { fill: rgba(92, 184, 92, 0.07); stroke: #5cb85c; stroke-width: 0.5; }
      .eco-rect-gray { fill: rgba(78, 93, 108, 0.15); stroke: #4e5d6c; stroke-width: 0.5; }
      .eco-rect-purple { fill: rgba(156, 39, 176, 0.15); stroke: #9c27b0; stroke-width: 0.5; }
      .eco-rect-yellow { fill: rgba(255, 193, 7, 0.15); stroke: #ffc107; stroke-width: 0.5; }
    </style>
  </defs>
  <!-- Title -->
  <text class="eco-text-title" x="375" y="25" text-anchor="middle">主流加密货币生态图谱</text>
  <!-- Category 1: Layer 1 Public Chains -->
  <rect class="eco-rect-orange" x="20" y="50" width="220" height="220" rx="8"/>
  <text class="eco-text-large" x="130" y="75" text-anchor="middle">Layer 1 公链</text>
  <text class="eco-text-bold" x="40" y="100">• Ethereum (ETH)</text>
  <text class="eco-text" x="55" y="115">智能合约平台领导者</text>
  <text class="eco-text-bold" x="40" y="135">• Binance Smart Chain (BNB)</text>
  <text class="eco-text" x="55" y="150">高性能 EVM 兼容链</text>
  <text class="eco-text-bold" x="40" y="170">• Solana (SOL)</text>
  <text class="eco-text" x="55" y="185">高吞吐量公链 (65k TPS)</text>
  <text class="eco-text-bold" x="40" y="205">• Cardano (ADA)</text>
  <text class="eco-text" x="55" y="220">学术研究驱动,PoS</text>
  <text class="eco-text-bold" x="40" y="238">• Polkadot (DOT)</text>
  <text class="eco-text" x="55" y="253">跨链互操作平台</text>
  <!-- Category 2: Layer 2 Solutions -->
  <rect class="eco-rect-blue" x="260" y="50" width="220" height="220" rx="8"/>
  <text class="eco-text-large" x="370" y="75" text-anchor="middle">Layer 2 扩容方案</text>
  <text class="eco-text-bold" x="280" y="100">• Polygon (MATIC)</text>
  <text class="eco-text" x="295" y="115">以太坊侧链,低费用</text>
  <text class="eco-text-bold" x="280" y="135">• Arbitrum (ARB)</text>
  <text class="eco-text" x="295" y="150">Optimistic Rollup</text>
  <text class="eco-text-bold" x="280" y="170">• Optimism (OP)</text>
  <text class="eco-text" x="295" y="185">Optimistic Rollup</text>
  <text class="eco-text-bold" x="280" y="205">• zkSync</text>
  <text class="eco-text" x="295" y="220">Zero-Knowledge Rollup</text>
  <text class="eco-text-bold" x="280" y="238">• StarkNet</text>
  <text class="eco-text" x="295" y="253">ZK-STARK Rollup</text>
  <!-- Category 3: DeFi Tokens -->
  <rect class="eco-rect-green" x="500" y="50" width="230" height="220" rx="8"/>
  <text class="eco-text-large" x="615" y="75" text-anchor="middle">DeFi 协议代币</text>
  <text class="eco-text-bold" x="520" y="100">• Uniswap (UNI)</text>
  <text class="eco-text" x="535" y="115">去中心化交易所 DEX</text>
  <text class="eco-text-bold" x="520" y="135">• Aave (AAVE)</text>
  <text class="eco-text" x="535" y="150">借贷协议</text>
  <text class="eco-text-bold" x="520" y="170">• Chainlink (LINK)</text>
  <text class="eco-text" x="535" y="185">去中心化预言机网络</text>
  <text class="eco-text-bold" x="520" y="205">• Maker (MKR)</text>
  <text class="eco-text" x="535" y="220">DAI 稳定币协议</text>
  <text class="eco-text-bold" x="520" y="238">• Curve (CRV)</text>
  <text class="eco-text" x="535" y="253">稳定币交易优化DEX</text>
  <!-- Category 4: Stablecoins -->
  <rect class="eco-rect-gray" x="20" y="290" width="220" height="220" rx="8"/>
  <text class="eco-text-large" x="130" y="315" text-anchor="middle">稳定币</text>
  <text class="eco-text-bold" x="40" y="340">• USDT (Tether)</text>
  <text class="eco-text" x="55" y="355">法币抵押,市值最大</text>
  <text class="eco-text-bold" x="40" y="375">• USDC (USD Coin)</text>
  <text class="eco-text" x="55" y="390">合规,透明度高</text>
  <text class="eco-text-bold" x="40" y="410">• DAI</text>
  <text class="eco-text" x="55" y="425">去中心化,加密资产抵押</text>
  <text class="eco-text-bold" x="40" y="445">• BUSD</text>
  <text class="eco-text" x="55" y="460">Binance & Paxos 发行</text>
  <text class="eco-text-bold" x="40" y="478">• FRAX</text>
  <text class="eco-text" x="55" y="493">部分算法稳定币</text>
  <!-- Category 5: Privacy Coins -->
  <rect class="eco-rect-purple" x="260" y="290" width="220" height="220" rx="8"/>
  <text class="eco-text-large" x="370" y="315" text-anchor="middle">隐私币</text>
  <text class="eco-text-bold" x="280" y="340">• Monero (XMR)</text>
  <text class="eco-text" x="295" y="355">环签名,强隐私保护</text>
  <text class="eco-text-bold" x="280" y="375">• Zcash (ZEC)</text>
  <text class="eco-text" x="295" y="390">zk-SNARKs,可选隐私</text>
  <text class="eco-text-bold" x="280" y="410">• Dash (DASH)</text>
  <text class="eco-text" x="295" y="425">PrivateSend 混币功能</text>
  <text class="eco-text-bold" x="280" y="445">• Tornado Cash</text>
  <text class="eco-text" x="295" y="460">以太坊隐私混币协议</text>
  <!-- Category 6: Meme & Community -->
  <rect class="eco-rect-yellow" x="500" y="290" width="230" height="220" rx="8"/>
  <text class="eco-text-large" x="615" y="315" text-anchor="middle">Meme币 & 社区币</text>
  <text class="eco-text-bold" x="520" y="340">• Dogecoin (DOGE)</text>
  <text class="eco-text" x="535" y="355">最早的Meme币</text>
  <text class="eco-text-bold" x="520" y="375">• Shiba Inu (SHIB)</text>
  <text class="eco-text" x="535" y="390">以太坊上的Meme币</text>
  <text class="eco-text-bold" x="520" y="410">• Pepe (PEPE)</text>
  <text class="eco-text" x="535" y="425">基于网络表情包</text>
  <text class="eco-text-bold" x="520" y="445">• Floki (FLOKI)</text>
  <text class="eco-text" x="535" y="460">社区驱动项目</text>
  <!-- Bottom note -->
  <text class="eco-text-italic" x="375" y="535" text-anchor="middle">加密货币生态多样化,满足不同用户需求和应用场景</text>
</svg>
</div>

## 3.5 如何获得加密货币

### 3.5.1 通过交易所购买

这是最常见和最简单的方式。

#### 中心化交易所（CEX）

**全球主流交易所：**

| 交易所 | 特点 | 优势 | 适合人群 |
|--------|------|------|----------|
| **Binance** | 全球最大 | 流动性高、币种多 | 专业交易者 |
| **Coinbase** | 美国最大 | 合规性强、用户友好 | 新手、美国用户 |
| **OKX** | 综合平台 | 衍生品丰富 | 专业交易者 |
| **Kraken** | 老牌交易所 | 安全性高 | 长期投资者 |
| **Gemini** | 合规交易所 | 受监管、保险保障 | 机构投资者 |

**购买流程：**
1. 注册账户并完成 KYC 认证
2. 存入法定货币（USD、EUR等）
3. 选择要购买的加密货币
4. 下单购买（市价单或限价单）
5. 提现到个人钱包（推荐）

#### 去中心化交易所（DEX）

**主流 DEX：**

| DEX | 网络 | 特点 |
|-----|------|------|
| **Uniswap** | Ethereum | 最大的DEX,AMM模式 |
| **PancakeSwap** | BSC | 低费用,高速度 |
| **SushiSwap** | 多链 | 跨链支持 |
| **Curve** | 多链 | 稳定币交易优化 |
| **1inch** | 多链 | DEX聚合器 |

**特点：**
- ✅ 无需 KYC
- ✅ 用户保管私钥
- ✅ 抗审查
- ❌ 需要准备原生代币支付 Gas 费
- ❌ 可能遇到滑点

### 3.5.2 挖矿与质押

#### PoW 挖矿（工作量证明）

**可挖矿的主流币种：**

| 币种 | 算法 | 硬件要求 | 难度 |
|------|------|----------|------|
| Bitcoin (BTC) | SHA-256 | ASIC矿机 | 极高 |
| Litecoin (LTC) | Scrypt | ASIC矿机 | 高 |
| Ethereum Classic (ETC) | Ethash | GPU | 中 |
| Ravencoin (RVN) | KawPow | GPU | 中 |
| Monero (XMR) | RandomX | CPU | 低 |

**挖矿成本考虑：**
- 硬件投资（ASIC/GPU）
- 电费成本（最重要）
- 散热和场地租金
- 矿池费用（1-3%）
- 维护成本

#### PoS 质押（权益证明）

无需专业设备,只需持有和质押代币：

**主流 PoS 币种及收益：**

| 币种 | 质押要求 | 年化收益 (APR) | 锁定期 |
|------|----------|----------------|--------|
| Ethereum (ETH) | 32 ETH | 4-5% | 无固定 |
| Cardano (ADA) | 无最低要求 | 4-6% | 无 |
| Solana (SOL) | 无最低要求 | 6-8% | 2-3天 |
| Polkadot (DOT) | 120 DOT (建议) | 10-14% | 28天 |
| Cosmos (ATOM) | 无最低要求 | 15-20% | 21天 |

### 3.5.3 赚取加密货币

**其他获得方式：**

1. **空投（Airdrop）**
   - 项目方免费发放代币
   - 通常需要完成任务
   - 风险：可能是骗局

2. **流动性挖矿（Liquidity Mining）**
   - 为 DEX 提供流动性
   - 赚取交易手续费和奖励
   - 风险：无常损失

3. **工作获得**
   - 接受加密货币支付
   - 参与赏金计划
   - 内容创作奖励

4. **测试网奖励**
   - 参与项目测试
   - 反馈问题获得奖励
   - 早期项目空投机会

## 3.6 加密货币钱包

### 钱包类型对比

<div style="background: rgba(52, 81, 178, 0.06); padding: 1.5em; border-radius: 8px; margin: 2em 0;">
<svg viewBox="0 0 700 370" xmlns="http://www.w3.org/2000/svg" style="width: 100%; max-width: 800px; display: block; margin: 0 auto;">
  <defs>
    <style>
      .wallet-text { font-family: arial, sans-serif; font-size: 7px; fill: #1f2937; }
      .wallet-text-small { font-family: arial, sans-serif; font-size: 8px; fill: #1f2937; }
      .wallet-text-italic { font-family: arial, sans-serif; font-size: 8px; fill: #1f2937; font-style: italic; }
      .wallet-text-bold { font-family: arial, sans-serif; font-size: 9px; fill: #1f2937; font-weight: bold; }
      .wallet-text-subtitle { font-family: arial, sans-serif; font-size: 9px; fill: #1f2937; }
      .wallet-text-large { font-family: arial, sans-serif; font-size: 12px; fill: #1f2937; font-weight: bold; }
      .wallet-text-title { font-family: arial, sans-serif; font-size: 14px; fill: #1f2937; font-weight: bold; }
      .wallet-text-green { font-family: arial, sans-serif; font-size: 8px; fill: #5cb85c; font-weight: bold; }
      .wallet-text-orange { font-family: arial, sans-serif; font-size: 8px; fill: #df6919; font-weight: bold; }
      .wallet-rect-orange-light { fill: rgba(223, 105, 25, 0.06); stroke: #df6919; stroke-width: 0.5; }
      .wallet-rect-orange { fill: rgba(223, 105, 25, 0.08); stroke: #df6919; stroke-width: 0.5; }
      .wallet-rect-blue-light { fill: rgba(52, 81, 178, 0.07); stroke: #4c9be8; stroke-width: 0.5; }
      .wallet-rect-blue { fill: rgba(52, 81, 178, 0.10); stroke: #4c9be8; stroke-width: 0.5; }
    </style>
  </defs>
  <!-- Title -->
  <text class="wallet-text-title" x="350" y="25" text-anchor="middle">加密货币钱包分类及对比</text>
  <!-- Hot Wallets -->
  <rect class="wallet-rect-orange-light" x="30" y="50" width="300" height="280" rx="8"/>
  <text class="wallet-text-large" x="180" y="75" text-anchor="middle">热钱包 (Hot Wallet)</text>
  <text class="wallet-text-subtitle" x="180" y="92" text-anchor="middle">联网钱包,便于日常使用</text>
  <!-- Web Wallet -->
  <rect class="wallet-rect-orange" x="50" y="110" width="120" height="65" rx="5"/>
  <text class="wallet-text-bold" x="110" y="128" text-anchor="middle">网页钱包</text>
  <text class="wallet-text" x="110" y="142" text-anchor="middle">MetaMask</text>
  <text class="wallet-text" x="110" y="154" text-anchor="middle">Phantom</text>
  <text class="wallet-text" x="110" y="166" text-anchor="middle">Rabby</text>
  <!-- Mobile Wallet -->
  <rect class="wallet-rect-orange" x="190" y="110" width="120" height="65" rx="5"/>
  <text class="wallet-text-bold" x="250" y="128" text-anchor="middle">移动钱包</text>
  <text class="wallet-text" x="250" y="142" text-anchor="middle">Trust Wallet</text>
  <text class="wallet-text" x="250" y="154" text-anchor="middle">imToken</text>
  <text class="wallet-text" x="250" y="166" text-anchor="middle">Coinbase Wallet</text>
  <!-- Desktop Wallet -->
  <rect class="wallet-rect-orange" x="50" y="185" width="120" height="65" rx="5"/>
  <text class="wallet-text-bold" x="110" y="203" text-anchor="middle">桌面钱包</text>
  <text class="wallet-text" x="110" y="217" text-anchor="middle">Electrum</text>
  <text class="wallet-text" x="110" y="229" text-anchor="middle">Exodus</text>
  <text class="wallet-text" x="110" y="241" text-anchor="middle">Atomic Wallet</text>
  <!-- Hot Wallet Pros/Cons -->
  <text class="wallet-text-green" x="50" y="275">优点:</text>
  <text class="wallet-text" x="65" y="288">✓ 方便快捷</text>
  <text class="wallet-text" x="65" y="300">✓ 易于使用</text>
  <text class="wallet-text" x="65" y="312">✓ 适合频繁交易</text>
  <text class="wallet-text-orange" x="190" y="275">缺点:</text>
  <text class="wallet-text" x="205" y="288">✗ 安全性较低</text>
  <text class="wallet-text" x="205" y="300">✗ 易受黑客攻击</text>
  <text class="wallet-text" x="205" y="312">✗ 依赖网络连接</text>
  <!-- Cold Wallets -->
  <rect class="wallet-rect-blue-light" x="370" y="50" width="300" height="280" rx="8"/>
  <text class="wallet-text-large" x="520" y="75" text-anchor="middle">冷钱包 (Cold Wallet)</text>
  <text class="wallet-text-subtitle" x="520" y="92" text-anchor="middle">离线存储,最高安全性</text>
  <!-- Hardware Wallet -->
  <rect class="wallet-rect-blue" x="390" y="110" width="120" height="65" rx="5"/>
  <text class="wallet-text-bold" x="450" y="128" text-anchor="middle">硬件钱包</text>
  <text class="wallet-text" x="450" y="142" text-anchor="middle">Ledger Nano X</text>
  <text class="wallet-text" x="450" y="154" text-anchor="middle">Trezor Model T</text>
  <text class="wallet-text" x="450" y="166" text-anchor="middle">SafePal S1</text>
  <!-- Paper Wallet -->
  <rect class="wallet-rect-blue" x="530" y="110" width="120" height="65" rx="5"/>
  <text class="wallet-text-bold" x="590" y="128" text-anchor="middle">纸钱包</text>
  <text class="wallet-text" x="590" y="142" text-anchor="middle">打印私钥</text>
  <text class="wallet-text" x="590" y="154" text-anchor="middle">二维码存储</text>
  <text class="wallet-text" x="590" y="166" text-anchor="middle">完全离线</text>
  <!-- Multi-sig Wallet -->
  <rect class="wallet-rect-blue" x="390" y="185" width="260" height="65" rx="5"/>
  <text class="wallet-text-bold" x="520" y="203" text-anchor="middle">多签钱包</text>
  <text class="wallet-text" x="520" y="217" text-anchor="middle">Gnosis Safe (Safe) - 以太坊生态最流行</text>
  <text class="wallet-text" x="520" y="229" text-anchor="middle">Multisig Wallet - 需要多个签名才能转账</text>
  <text class="wallet-text" x="520" y="241" text-anchor="middle">适合团队资金管理和大额资产</text>
  <!-- Cold Wallet Pros/Cons -->
  <text class="wallet-text-green" x="390" y="275">优点:</text>
  <text class="wallet-text" x="405" y="288">✓ 最高安全性</text>
  <text class="wallet-text" x="405" y="300">✓ 离线存储私钥</text>
  <text class="wallet-text" x="405" y="312">✓ 防止远程攻击</text>
  <text class="wallet-text-orange" x="530" y="275">缺点:</text>
  <text class="wallet-text" x="545" y="288">✗ 不便于频繁交易</text>
  <text class="wallet-text" x="545" y="300">✗ 需要额外成本</text>
  <text class="wallet-text" x="545" y="312">✗ 可能丢失设备</text>
  <!-- Recommendation -->
  <text class="wallet-text-italic" x="350" y="350" text-anchor="middle">推荐策略: 大额资产用冷钱包,小额日常交易用热钱包</text>
</svg>
</div>

### 钱包安全最佳实践

1. **备份助记词**
   - 写在纸上,多处分散保存
   - 不要截图或保存在电脑/云端
   - 考虑使用金属助记词板
   - 永远不要告诉任何人

2. **使用硬件钱包**
   - 大额资产（>$1000）必须使用冷钱包
   - 小额日常交易用热钱包
   - 定期检查固件更新

3. **警惕钓鱼攻击**
   - 检查网址是否正确
   - 使用书签访问常用网站
   - 不点击可疑链接
   - 验证合约地址

4. **多重签名**
   - 大额资产考虑使用多签钱包
   - 要求2/3或3/5签名才能转账
   - 适合团队资金管理

5. **定期安全审计**
   - 检查授权的合约
   - 撤销不必要的授权
   - 使用工具如 Revoke.cash



### 3.8 BTCFi 与比特币第二层生态(2024-2026 爆发)

![CCBus 标准代币 — BRC-20/SPL/ERC-20 一键部署,适用于多种代币标准](../public/images/chapters/zh/standard-token-create.png)

*图: CCBus 标准代币 — BRC-20/SPL/ERC-20 一键部署,适用于多种代币标准*


比特币在 2024-2026 年发生了范式转变:从"静态的价值存储"演变为"可编程的金融原语"。**BTCFi**(Bitcoin Finance)指利用比特币或比特币链上资产做的所有 DeFi 活动。

**1. Babylon(2024 主网):比特币质押**

- 用户把 BTC 锁定在比特币链上的 Babylon 合约
- Babylon 在 Cosmos 链上铸造 `Babylon BTC` 凭证
- 用户用这个凭证在其他 PoS 链(BSC、ATOM、SOL)做 staking
- **2026 数据**:Babylon 锁仓 5 万 BTC($35B+),已支持 30+ 链

**2. BitVM(2023 论文,2024 主网候选):比特币上的任意计算**

- 核心思想:用 Bitcoin Script 的限制性操作模拟任意计算
- 通过"挑战-响应"机制保证正确性(类似 Optimistic Rollup)
- 可以在比特币链上做 ZK 验证(但当前成本极高)
- **2026 真实项目**:BitVM2(Bitlayer)、Citrea、Alpen Labs

**3. Stacks(2021 主网,2024 Nakamoto Release):比特币 L2**

- 用 Clarity 语言写合约
- 通过 Proof of Transfer(PoX)锚定到比特币
- **2026 真实项目**:Stacks 链 TVL 3 亿美元

**4. Lightning Network:支付层**

- 状态通道实现链下支付
- **2026 数据**:Lightning 容量 5000 BTC,月交易量 100 万+ 笔
- **2026 新功能**:Taproot Assets(在 Lightning 上转移代币,如 USDT)

**5. Liquid Network(侧链)**

- Blockstream 运营,联邦式侧链
- 用于交易所间的快速结算
- 发行 L-BTC、L-USDT 等资产

**6. Ordinals(2023-01 上线)+ BRC-20(2023-03 上线)+ Runes(2024-04 上线)**

- 把任意数据(图片、文字)写入比特币 satoshi
- **2026 真实数据**:Ordinals 累计铸造 1 亿+,BRC-20 市值峰值 30 亿美元
- Runes 是 Casey Rodarmor(Ordinals 作者)推出的更高效的代币标准

**7. RGB(可扩展的比特币智能合约)**

- 客户端验证 + 链下存储
- 比 Ordinals 更接近"智能合约"
- **2026 状态**:主网已上线,生态仍小

**BTCFi 的经济意义**:
- 比特币不再是被"锁在玻璃柜里的金条"
- 1 BTC 可以在 Stacks 上做 DeFi,在 Babylon 上做 staking,在 Lightning 上做支付
- 这就是"比特币效用化"(Bitcoin utilitization)
- **2026 数据**:BTCFi 链上总价值 $50B+(2024 年仅 $5B)

**BTCFi 风险**:
- **桥风险**:从 BTC 主网桥到 L2 总是有被攻击的可能
- **最终性风险**:比特币主网 L1 最终性是 ~1 小时,L2 更快但有回滚风险
- **监管风险**:美国 SEC 把 BTCFi 视为证券的可能性

## 3.7 加密货币的风险与挑战

### 主要风险

1. **价格波动风险**
   - 加密货币价格波动极大
   - 可能在短时间内暴涨暴跌
   - 不适合风险承受能力低的投资者

2. **安全风险**
   - 私钥丢失,资产永久丢失
   - 交易所被黑客攻击
   - 钓鱼网站和诈骗

3. **监管风险**
   - 各国监管政策不确定
   - 可能面临禁令或限制
   - 税务合规要求

4. **技术风险**
   - 智能合约漏洞
   - 网络拥堵
   - 51%攻击

### 投资建议

1. **只投资你能承受损失的资金**
2. **做好充分研究（DYOR）**
3. **分散投资,不要全仓单一币种**
4. **长期持有,不要频繁交易**
5. **学习基本的安全知识**

<div class="ccbus-teacher-credits">
  <div class="ccbus-teacher-credits-avatar">
    <img src="../public/images/avatars/heroes/satoshi-driver.png" alt="Satoshi Driver" />
  </div>
  <div class="ccbus-teacher-credits-body">
    本章讲师:<strong>Satoshi Driver</strong> — 比特币诞生的"见证人" — 领你走第一条链<br />
    <span style="font-size: 0.85em; color: var(--vp-c-text-3);">📚 下一章 [第四章：共识机制] 将由另一位 CCBus 讲师带你继续。</span>
  </div>
</div>

<div class="chapter-footer">
  <h3>本章小结</h3>
  <p>
    本章系统介绍了加密货币的基础知识,从比特币的诞生到以太坊的创新,再到各类主流加密货币的特点。我们学习了如何获取、存储和管理加密货币,以及需要注意的安全事项和风险。
  </p>
  <p>
    <strong>关键要点：</strong>
  </p>
  <ul>
    <li>加密货币是基于密码学和区块链技术的数字货币</li>
    <li>比特币通过有限供应、减半机制和PoW共识实现去中心化货币</li>
    <li>以太坊引入智能合约,开创了可编程区块链时代</li>
    <li>可通过交易所、挖矿、质押等多种方式获得加密货币</li>
    <li>安全存储至关重要,大额资产应使用冷钱包</li>
    <li>加密货币投资存在高风险,需谨慎对待</li>
  </ul>
  <p>
    在下一章中,我们将深入探讨<strong>共识机制</strong>,了解区块链网络如何在无需中心化权威的情况下达成一致。
  </p>

  <div style="margin-top: 2em; padding-top: 1em; border-top: 2px solid #4c9be8;">
    <p style="text-align: center;">
      <a href="/zh/chapter-2" style="margin: 0 1em;">← 上一章：密码学基础</a>
      <a href="/zh/" style="margin: 0 1em;">返回目录</a>
      <a href="/zh/chapter-4" style="margin: 0 1em;">下一章：共识机制 →</a>
    </p>
  </div>
</div>
