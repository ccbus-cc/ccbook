---
title: "Chapter 3: Cryptocurrency Fundamentals"
---


# Chapter 3: Cryptocurrency Fundamentals

<div class="chapter-intro">
  <p><strong>Chapter Introduction</strong></p>
  <p>Cryptocurrency is one of the most successful applications of blockchain technology. This chapter explores in depth the core concepts, operating principles, major types, and practical applications of cryptocurrencies. We'll begin with the birth of Bitcoin and understand how cryptocurrencies are reshaping the global financial system.</p>
  <p><strong>Learning Objectives:</strong></p>
  <ul>
    <li>Understand the definition and core characteristics of cryptocurrency</li>
    <li>Master Bitcoin's operating principles and key mechanisms</li>
    <li>Learn about Ethereum and smart contract platforms</li>
    <li>Know how to safely acquire and store cryptocurrencies</li>
    <li>Recognize mainstream cryptocurrencies and their application scenarios</li>
  </ul>
</div>


## 3.0 2025-2026 视角:为什么这一章要重新读

By 2026, cryptocurrency has expanded well beyond 'coins' — stablecoins (USDe, PYUSD, FDUSD), LSTs/LRTs (Liquid Staking and Restaking Tokens), and RWAs (tokenized treasuries, real estate) make up a multi-trillion-dollar new asset class. This chapter re-examines cryptocurrency tokenomics and issuance mechanisms in that light.

### 🖥️ Real-world Example: CCBus Token Square

CCBus turns 'issuing a token' — a task that used to require a Solidity engineer — into a few clicks for any ordinary user. The screenshot below shows the **CCBus Standard Token creation form**. Fill in five fields (name, symbol, total supply, decimals, recipient address) and the platform auto-deploys an ERC-20 contract.

![CCBus Standard Token creation form](../public/images/chapters/zh/standard-token-create.png)

*Figure 3-1: CCBus standard token creation form. Under the hood, the platform calls OpenZeppelin's ERC-20 + ERC-20Capped + ERC-20Burnable template, compiles and deploys to BNB Chain / Solana / ETH. Cost: 0.03 BNB. This is the real 2026 cost structure of crypto issuance.*

## 3.1 What is Cryptocurrency?

**Cryptocurrency** is a digital or virtual currency that uses cryptographic techniques to secure transactions, control the creation of new units, and verify asset transfers. Unlike traditional fiat currencies, cryptocurrencies are typically decentralized and not issued or managed by any government or central authority.

### Core Characteristics of Cryptocurrency

<div style="background: rgba(32, 55, 76, 0.5); padding: 1.5em; border-radius: 8px; margin: 2em 0;">
<svg viewBox="0 0 640 320" xmlns="http://www.w3.org/2000/svg" style="width: 100%; max-width: 800px; display: block; margin: 0 auto;">
  <defs>
    <style>
      .cc-text { font-family: arial, sans-serif; font-size: 8px; fill: #f0e6d2; }
      .cc-text-title { font-family: arial, sans-serif; font-size: 14px; fill: #f0e6d2; font-weight: bold; }
      .cc-text-medium { font-family: arial, sans-serif; font-size: 10px; fill: #f0e6d2; font-weight: bold; }
      .cc-text-small { font-family: arial, sans-serif; font-size: 8px; fill: #f0e6d2; }
      .cc-text-dark { font-family: arial, sans-serif; font-size: 10px; fill: #20374c; font-weight: bold; }
      .cc-text-dark-small { font-family: arial, sans-serif; font-size: 9px; fill: #20374c; }
      .cc-text-italic { font-family: arial, sans-serif; font-size: 8px; fill: #f0e6d2; font-style: italic; }
      .cc-circle-center { fill: #4c9be8; stroke: #f0e6d2; stroke-width: 0.5; }
      .cc-circle-orange { fill: rgba(223, 105, 25, 0.2); stroke: #df6919; stroke-width: 0.5; }
      .cc-circle-blue { fill: rgba(76, 156, 232, 0.2); stroke: #4c9be8; stroke-width: 0.5; }
      .cc-circle-green { fill: rgba(92, 184, 92, 0.2); stroke: #5cb85c; stroke-width: 0.5; }
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
  <text class="cc-text-title" x="300" y="25" text-anchor="middle">Six Core Characteristics of Cryptocurrency</text>
  <!-- Central circle -->
  <circle class="cc-circle-center" cx="300" cy="170" r="45"/>
  <text class="cc-text-dark" x="300" y="165" text-anchor="middle">Cryptocurrency</text>
  <text class="cc-text-dark-small" x="300" y="180" text-anchor="middle">Digital Money</text>
  <!-- Feature 1: Digital (top-left) -->
  <circle class="cc-circle-orange" cx="120" cy="80" r="35"/>
  <text class="cc-text-medium" x="120" y="77" text-anchor="middle">Digital</text>
  <text class="cc-text-small" x="120" y="88" text-anchor="middle">Fully Digital</text>
  <line class="cc-line-orange" x1="145" y1="100" x2="270" y2="145" marker-end="url(#arrow-cc-1)"/>
  <text class="cc-text" x="30" y="60">• Fully digital form</text>
  <text class="cc-text" x="30" y="70">• No physical carrier</text>
  <!-- Feature 2: Decentralized (top-right) -->
  <circle class="cc-circle-orange" cx="480" cy="80" r="35"/>
  <text class="cc-text-medium" x="480" y="77" text-anchor="middle">Decentralized</text>
  <text class="cc-text-small" x="480" y="88" text-anchor="middle">P2P Network</text>
  <line class="cc-line-orange" x1="455" y1="100" x2="330" y2="145" marker-end="url(#arrow-cc-1)"/>
  <text class="cc-text" x="525" y="60">• No central authority</text>
  <text class="cc-text" x="525" y="70">• Distributed network</text>
  <!-- Feature 3: Cryptography (middle-left) -->
  <circle class="cc-circle-blue" cx="90" cy="170" r="35"/>
  <text class="cc-text-medium" x="90" y="167" text-anchor="middle">Cryptography</text>
  <text class="cc-text-small" x="90" y="178" text-anchor="middle">Secure</text>
  <line class="cc-line-blue" x1="125" y1="170" x2="255" y2="170" marker-end="url(#arrow-cc-2)"/>
  <text class="cc-text" x="10" y="155">• Public/private keys</text>
  <text class="cc-text" x="10" y="165">• Digital signatures</text>
  <!-- Feature 4: Transparent (middle-right) -->
  <circle class="cc-circle-blue" cx="510" cy="170" r="35"/>
  <text class="cc-text-medium" x="510" y="167" text-anchor="middle">Transparent</text>
  <text class="cc-text-small" x="510" y="178" text-anchor="middle">Public Ledger</text>
  <line class="cc-line-blue" x1="345" y1="170" x2="475" y2="170" marker-end="url(#arrow-cc-2)"/>
  <text class="cc-text" x="555" y="150">• Traceable txs</text>
  <text class="cc-text" x="555" y="160">• Public ledger</text>
  <!-- Feature 5: Limited Supply (bottom-left) -->
  <circle class="cc-circle-green" cx="120" cy="260" r="35"/>
  <text class="cc-text-medium" x="120" y="257" text-anchor="middle">Limited Supply</text>
  <text class="cc-text-small" x="120" y="268" text-anchor="middle">Fixed Cap</text>
  <line class="cc-line-green" x1="145" y1="240" x2="270" y2="195" marker-end="url(#arrow-cc-3)"/>
  <text class="cc-text" x="40" y="250">• Fixed total</text>
  <text class="cc-text" x="40" y="260">• Anti-inflation</text>
  <!-- Feature 6: Global (bottom-right) -->
  <circle class="cc-circle-green" cx="480" cy="260" r="35"/>
  <text class="cc-text-medium" x="480" y="257" text-anchor="middle">Global</text>
  <text class="cc-text-small" x="480" y="268" text-anchor="middle">Borderless</text>
  <line class="cc-line-green" x1="455" y1="240" x2="330" y2="195" marker-end="url(#arrow-cc-3)"/>
  <text class="cc-text" x="525" y="250">• Cross-border</text>
  <text class="cc-text" x="525" y="260">• 24/7 trading</text>
  <!-- Legend -->
  <text class="cc-text-italic" x="300" y="310" text-anchor="middle">These characteristics together form the unique value proposition of cryptocurrency</text>
</svg>
</div>

### Cryptocurrency vs Traditional Currency

| Feature | Cryptocurrency | Traditional Currency (Fiat) |
|---------|----------------|------------------------------|
| **Issuance** | Algorithm and consensus | Central bank |
| **Supply Control** | Preset algorithm (e.g., Bitcoin 21M cap) | Government adjustable |
| **Transaction Verification** | Distributed network consensus | Banks and payment processors |
| **Transaction Speed** | Minutes to hours | Instant to days |
| **Transaction Fees** | Usually lower (Gas fees) | Bank fees |
| **Anonymity** | Pseudo-anonymous (public addresses) | Real-name system |
| **Cross-border Transfer** | Barrier-free | Requires intermediaries, restricted |
| **Inflation** | Most are anti-inflationary | Subject to inflation |

## 3.2 Bitcoin: The First Cryptocurrency

### Birth of Bitcoin

On October 31, 2008, a person or group under the pseudonym **Satoshi Nakamoto** published the Bitcoin whitepaper: "Bitcoin: A Peer-to-Peer Electronic Cash System". On January 3, 2009, the Bitcoin network officially launched, and the first block (genesis block) was mined.

#### Special Message in the Genesis Block

Bitcoin's genesis block contained a special message:

```
The Times 03/Jan/2009 Chancellor on brink of second bailout for banks
```

This was the headline from The Times that day, recording government bank bailouts during the 2008 financial crisis, hinting at Bitcoin's motivation—to create a monetary system not controlled by governments and banks.

### Bitcoin's Core Mechanisms

<div style="background: rgba(32, 55, 76, 0.5); padding: 1.5em; border-radius: 8px; margin: 2em 0;">
<svg viewBox="0 0 700 450" xmlns="http://www.w3.org/2000/svg" style="width: 100%; max-width: 800px; display: block; margin: 0 auto;">
  <defs>
    <style>
      .btc-text { font-family: arial, sans-serif; font-size: 8px; fill: #f0e6d2; }
      .btc-text-tiny { font-family: arial, sans-serif; font-size: 7px; fill: #f0e6d2; }
      .btc-text-tiny-italic { font-family: arial, sans-serif; font-size: 7px; fill: #f0e6d2; font-style: italic; }
      .btc-text-small { font-family: arial, sans-serif; font-size: 9px; fill: #f0e6d2; }
      .btc-text-small-bold { font-family: arial, sans-serif; font-size: 9px; fill: #f0e6d2; font-weight: bold; }
      .btc-text-medium { font-family: arial, sans-serif; font-size: 10px; fill: #f0e6d2; font-weight: bold; }
      .btc-text-arrow { font-family: arial, sans-serif; font-size: 10px; fill: #f0e6d2; }
      .btc-text-large { font-family: arial, sans-serif; font-size: 11px; fill: #f0e6d2; font-weight: bold; }
      .btc-text-huge { font-family: arial, sans-serif; font-size: 16px; fill: #f0e6d2; font-weight: bold; }
      .btc-text-title { font-family: arial, sans-serif; font-size: 14px; fill: #f0e6d2; font-weight: bold; }
      .btc-text-subtitle { font-family: arial, sans-serif; font-size: 12px; fill: #f0e6d2; font-weight: bold; }
      .btc-rect-orange { fill: rgba(223, 105, 25, 0.2); stroke: #df6919; stroke-width: 0.5; }
      .btc-rect-orange-dark { fill: rgba(223, 105, 25, 0.3); stroke: #df6919; stroke-width: 0.5; }
      .btc-rect-blue { fill: rgba(76, 156, 232, 0.2); stroke: #4c9be8; stroke-width: 0.5; }
      .btc-rect-blue-dark { fill: rgba(76, 156, 232, 0.3); stroke: #4c9be8; stroke-width: 0.5; }
      .btc-rect-green { fill: rgba(92, 184, 92, 0.15); stroke: #5cb85c; stroke-width: 0.5; }
      .btc-rect-green-dark { fill: rgba(92, 184, 92, 0.3); stroke: #5cb85c; stroke-width: 0.5; }
      .btc-circle-orange { fill: #df6919; stroke: #f0e6d2; stroke-width: 0.5; }
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
  <text class="btc-text-title" x="350" y="25" text-anchor="middle">Bitcoin's Four Core Mechanisms</text>
  <!-- Mechanism 1: Limited Supply (21M BTC) -->
  <rect class="btc-rect-orange" x="20" y="50" width="150" height="170" rx="8"/>
  <text class="btc-text-large" x="95" y="75" text-anchor="middle">Limited Supply</text>
  <text class="btc-text-small" x="95" y="90" text-anchor="middle">21 Million Cap</text>
  <!-- Bitcoin icon -->
  <circle class="btc-circle-orange" cx="95" cy="120" r="20"/>
  <text class="btc-text-huge" x="95" y="127" text-anchor="middle">₿</text>
  <text class="btc-text-medium" x="95" y="155" text-anchor="middle">21,000,000</text>
  <text class="btc-text" x="95" y="170" text-anchor="middle">Maximum supply</text>
  <text class="btc-text" x="95" y="185" text-anchor="middle">Expected by 2140</text>
  <text class="btc-text" x="95" y="200" text-anchor="middle">Anti-inflation</text>
  <!-- Mechanism 2: Halving -->
  <rect class="btc-rect-orange" x="190" y="50" width="160" height="170" rx="8"/>
  <text class="btc-text-large" x="265" y="75" text-anchor="middle">Halving</text>
  <text class="btc-text-small" x="265" y="90" text-anchor="middle">Block Reward</text>
  <!-- Halving timeline -->
  <text class="btc-text" x="210" y="110">2009-2012: 50 BTC/block</text>
  <rect class="btc-bar-1" x="315" y="102" width="30" height="10"/>
  <text class="btc-text" x="210" y="130">2012-2016: 25 BTC/block</text>
  <rect class="btc-bar-2" x="315" y="122" width="15" height="10"/>
  <text class="btc-text" x="210" y="150">2016-2020: 12.5 BTC/block</text>
  <rect class="btc-bar-3" x="315" y="142" width="7.5" height="10"/>
  <text class="btc-text" x="210" y="170">2020-2024: 6.25 BTC/block</text>
  <rect class="btc-bar-4" x="315" y="162" width="3.75" height="10"/>
  <text class="btc-text" x="210" y="190">2024-2028: 3.125 BTC/block</text>
  <rect class="btc-bar-5" x="315" y="182" width="1.875" height="10"/>
  <text class="btc-text-tiny-italic" x="265" y="205" text-anchor="middle">Halves every 210k blocks (~4 years)</text>
  <!-- Mechanism 3: Proof of Work (PoW) -->
  <rect class="btc-rect-blue" x="360" y="50" width="150" height="170" rx="8"/>
  <text class="btc-text-large" x="435" y="75" text-anchor="middle">Proof of Work</text>
  <text class="btc-text-small" x="435" y="90" text-anchor="middle">PoW Consensus</text>
  <!-- Mining process -->
  <rect class="btc-rect-blue-dark" x="380" y="105" width="110" height="25" rx="3"/>
  <text class="btc-text" x="435" y="122" text-anchor="middle">Calculate SHA-256</text>
  <text class="btc-text" x="435" y="145" text-anchor="middle">⬇</text>
  <rect class="btc-rect-blue-dark" x="380" y="155" width="110" height="25" rx="3"/>
  <text class="btc-text" x="435" y="172" text-anchor="middle">Find valid Nonce</text>
  <text class="btc-text" x="435" y="195" text-anchor="middle">⬇</text>
  <text class="btc-text" x="435" y="208" text-anchor="middle">Win block reward</text>
  <!-- Mechanism 4: UTXO Model -->
  <rect class="btc-rect-blue" x="530" y="50" width="150" height="170" rx="8"/>
  <text class="btc-text-large" x="605" y="75" text-anchor="middle">UTXO Model</text>
  <text class="btc-text-small" x="605" y="90" text-anchor="middle">Unspent TX Output</text>
  <!-- UTXO illustration -->
  <text class="btc-text" x="550" y="110">Transaction Input:</text>
  <rect class="btc-rect-orange-dark" x="550" y="115" width="50" height="18" rx="2"/>
  <text class="btc-text" x="575" y="127" text-anchor="middle">5 BTC</text>
  <text class="btc-text-arrow" x="605" y="127">→</text>
  <text class="btc-text" x="620" y="110">Outputs:</text>
  <rect class="btc-rect-green-dark" x="620" y="115" width="50" height="18" rx="2"/>
  <text class="btc-text" x="645" y="127" text-anchor="middle">3 BTC</text>
  <rect class="btc-rect-green-dark" x="620" y="137" width="50" height="18" rx="2"/>
  <text class="btc-text" x="645" y="149" text-anchor="middle">1.99 BTC</text>
  <text class="btc-text-tiny" x="550" y="172">• Recipient gets 3 BTC</text>
  <text class="btc-text-tiny" x="550" y="182">• Change returns 1.99 BTC</text>
  <text class="btc-text-tiny" x="550" y="192">• Miner fee 0.01 BTC</text>
  <text class="btc-text-tiny-italic" x="550" y="205">All inputs must be fully spent</text>
  <!-- Connections and benefits -->
  <line class="btc-line-orange" x1="95" y1="220" x2="95" y2="270" marker-end="url(#arrow-btc-1)"/>
  <line class="btc-line-orange" x1="265" y1="220" x2="265" y2="270" marker-end="url(#arrow-btc-1)"/>
  <line class="btc-line-blue" x1="435" y1="220" x2="435" y2="270" marker-end="url(#arrow-btc-2)"/>
  <line class="btc-line-blue" x1="605" y1="220" x2="605" y2="270" marker-end="url(#arrow-btc-2)"/>
  <!-- Benefits box -->
  <rect class="btc-rect-green" x="50" y="270" width="600" height="160" rx="8"/>
  <text class="btc-text-subtitle" x="350" y="295" text-anchor="middle">These mechanisms together realize Bitcoin's core value</text>
  <!-- Benefits in 2 columns -->
  <text class="btc-text-small-bold" x="70" y="320">Decentralization</text>
  <text class="btc-text" x="90" y="335">No need to trust central authority</text>
  <text class="btc-text-small-bold" x="70" y="360">Scarcity</text>
  <text class="btc-text" x="90" y="375">Fixed supply, store of value</text>
  <text class="btc-text-small-bold" x="70" y="400">Security</text>
  <text class="btc-text" x="90" y="415">Computational power protects network</text>
  <text class="btc-text-small-bold" x="380" y="320">Transparency</text>
  <text class="btc-text" x="400" y="335">All transactions publicly verifiable</text>
  <text class="btc-text-small-bold" x="380" y="360">Censorship Resistant</text>
  <text class="btc-text" x="400" y="375">Cannot be controlled by single entity</text>
  <text class="btc-text-small-bold" x="380" y="400">Programmable</text>
  <text class="btc-text" x="400" y="415">Intelligent monetary system</text>
</svg>
</div>

### Bitcoin Application Scenarios

1. **Store of Value (Digital Gold)**
   - Hedge against traditional financial risks
   - Anti-inflation
   - Long-term investment target

2. **Cross-border Payments**
   - No bank intermediaries
   - Low fees
   - 24/7 trading

3. **Micropayments (Lightning Network)**
   - Instant confirmation
   - Extremely low fees
   - High throughput

## 3.3 Ethereum and Smart Contract Platforms

### Ethereum's Innovation

**Ethereum** was proposed by Vitalik Buterin in 2013 and officially launched in 2015. It is not only a cryptocurrency (ETH) but also a **Turing-complete smart contract platform**.

<div style="background: rgba(32, 55, 76, 0.5); padding: 1.5em; border-radius: 8px; margin: 2em 0;">
<svg viewBox="0 0 650 400" xmlns="http://www.w3.org/2000/svg" style="width: 100%; max-width: 800px; display: block; margin: 0 auto;">
  <defs>
    <style>
      .vs-text { font-family: arial, sans-serif; font-size: 8px; fill: #f0e6d2; }
      .vs-text-bold { font-family: arial, sans-serif; font-size: 9px; fill: #f0e6d2; font-weight: bold; }
      .vs-text-title { font-family: arial, sans-serif; font-size: 14px; fill: #f0e6d2; font-weight: bold; }
      .vs-text-subtitle { font-family: arial, sans-serif; font-size: 12px; fill: #f0e6d2; font-weight: bold; }
      .vs-text-icon { font-family: arial, sans-serif; font-size: 20px; fill: #f0e6d2; font-weight: bold; }
      .vs-text-italic { font-family: arial, sans-serif; font-size: 8px; fill: #f0e6d2; font-style: italic; }
      .vs-rect-orange { fill: rgba(223, 105, 25, 0.15); stroke: #df6919; stroke-width: 0.5; }
      .vs-rect-blue { fill: rgba(76, 156, 232, 0.15); stroke: #4c9be8; stroke-width: 0.5; }
      .vs-circle-orange { fill: #df6919; stroke: #f0e6d2; stroke-width: 0.5; }
      .vs-circle-blue { fill: #4c9be8; stroke: #f0e6d2; stroke-width: 0.5; }
      .vs-line-divider { stroke: #f0e6d2; stroke-width: 0.5; stroke-dasharray: 5,5; }
    </style>
  </defs>
  <!-- Title -->
  <text class="vs-text-title" x="325" y="25" text-anchor="middle">Bitcoin vs Ethereum</text>
  <!-- Bitcoin side -->
  <rect class="vs-rect-orange" x="20" y="50" width="280" height="320" rx="8"/>
  <text class="vs-text-subtitle" x="160" y="75" text-anchor="middle">Bitcoin (BTC)</text>
  <circle class="vs-circle-orange" cx="160" cy="115" r="25"/>
  <text class="vs-text-icon" x="160" y="123" text-anchor="middle">₿</text>
  <text class="vs-text-bold" x="40" y="165">Positioning:</text>
  <text class="vs-text" x="60" y="180">• Digital gold</text>
  <text class="vs-text" x="60" y="193">• Store of value</text>
  <text class="vs-text" x="60" y="206">• Payment currency</text>
  <text class="vs-text-bold" x="40" y="230">Tech Features:</text>
  <text class="vs-text" x="60" y="245">• Proof of Work (PoW)</text>
  <text class="vs-text" x="60" y="258">• UTXO model</text>
  <text class="vs-text" x="60" y="271">• Simple scripting</text>
  <text class="vs-text" x="60" y="284">• ~7 TPS</text>
  <text class="vs-text-bold" x="40" y="308">Supply:</text>
  <text class="vs-text" x="60" y="323">• Max 21 million BTC</text>
  <text class="vs-text" x="60" y="336">• Halving mechanism</text>
  <text class="vs-text" x="60" y="349">• Anti-inflation</text>
  <!-- Ethereum side -->
  <rect class="vs-rect-blue" x="350" y="50" width="280" height="320" rx="8"/>
  <text class="vs-text-subtitle" x="490" y="75" text-anchor="middle">Ethereum (ETH)</text>
  <circle class="vs-circle-blue" cx="490" cy="115" r="25"/>
  <text class="vs-text-icon" x="490" y="123" text-anchor="middle">Ξ</text>
  <text class="vs-text-bold" x="370" y="165">Positioning:</text>
  <text class="vs-text" x="390" y="180">• World computer</text>
  <text class="vs-text" x="390" y="193">• Smart contract platform</text>
  <text class="vs-text" x="390" y="206">• DApp ecosystem base</text>
  <text class="vs-text-bold" x="370" y="230">Tech Features:</text>
  <text class="vs-text" x="390" y="245">• Proof of Stake (PoS)</text>
  <text class="vs-text" x="390" y="258">• Account model</text>
  <text class="vs-text" x="390" y="271">• Turing-complete (Solidity)</text>
  <text class="vs-text" x="390" y="284">• ~30 TPS (L2 thousands)</text>
  <text class="vs-text-bold" x="370" y="308">Supply:</text>
  <text class="vs-text" x="390" y="323">• No fixed cap</text>
  <text class="vs-text" x="390" y="336">• EIP-1559 burn mechanism</text>
  <text class="vs-text" x="390" y="349">• Possibly deflationary</text>
  <!-- Divider -->
  <line class="vs-line-divider" x1="320" y1="70" x2="320" y2="360"/>
  <!-- Bottom comparison -->
  <text class="vs-text-italic" x="325" y="390" text-anchor="middle">Bitcoin focuses on currency function, Ethereum provides programmable decentralized platform</text>
</svg>
</div>

### What are Smart Contracts?

**Smart Contracts** are self-executing programs running on blockchain, with their code and state stored on-chain. They execute automatically when preset conditions are met, without requiring trust in third parties.

#### Smart Contract Workflow

<div style="background: rgba(32, 55, 76, 0.5); padding: 1.5em; border-radius: 8px; margin: 2em 0;">
<svg viewBox="0 0 700 350" xmlns="http://www.w3.org/2000/svg" style="width: 100%; max-width: 800px; display: block; margin: 0 auto;">
  <defs>
    <style>
      .sc-text { font-family: arial, sans-serif; font-size: 7px; fill: #f0e6d2; }
      .sc-text-tiny { font-family: arial, sans-serif; font-size: 6px; fill: #f0e6d2; }
      .sc-text-small { font-family: arial, sans-serif; font-size: 8px; fill: #f0e6d2; }
      .sc-text-small-bold { font-family: arial, sans-serif; font-size: 7px; fill: #f0e6d2; font-weight: bold; }
      .sc-text-medium { font-family: arial, sans-serif; font-size: 9px; fill: #f0e6d2; font-weight: bold; }
      .sc-text-large { font-family: arial, sans-serif; font-size: 10px; fill: #f0e6d2; font-weight: bold; }
      .sc-text-arrow { font-family: arial, sans-serif; font-size: 12px; fill: #df6919; }
      .sc-text-arrow-blue { font-family: arial, sans-serif; font-size: 12px; fill: #4c9be8; }
      .sc-text-title { font-family: arial, sans-serif; font-size: 14px; fill: #f0e6d2; font-weight: bold; }
      .sc-rect-orange { fill: rgba(223, 105, 25, 0.2); stroke: #df6919; stroke-width: 0.5; }
      .sc-rect-orange-light { fill: rgba(223, 105, 25, 0.15); stroke: #df6919; stroke-width: 0.5; }
      .sc-rect-blue { fill: rgba(76, 156, 232, 0.2); stroke: #4c9be8; stroke-width: 0.5; }
      .sc-rect-green { fill: rgba(92, 184, 92, 0.2); stroke: #5cb85c; stroke-width: 0.5; }
      .sc-rect-green-dark { fill: rgba(92, 184, 92, 0.3); stroke: #5cb85c; stroke-width: 0.5; }
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
  <text class="sc-text-title" x="350" y="25" text-anchor="middle">Smart Contract Execution Flow</text>
  <!-- Step 1: Write Contract -->
  <rect class="sc-rect-orange" x="30" y="60" width="120" height="80" rx="5"/>
  <text class="sc-text-large" x="90" y="85" text-anchor="middle">1. Write Contract</text>
  <text class="sc-text-small" x="90" y="100" text-anchor="middle">Code Logic</text>
  <text class="sc-text" x="50" y="120">• Use Solidity</text>
  <text class="sc-text" x="50" y="132">• Define business logic</text>
  <text class="sc-text-arrow" x="155" y="105">→</text>
  <!-- Step 2: Compile -->
  <rect class="sc-rect-orange" x="180" y="60" width="120" height="80" rx="5"/>
  <text class="sc-text-large" x="240" y="85" text-anchor="middle">2. Compile</text>
  <text class="sc-text-small" x="240" y="100" text-anchor="middle">To Bytecode</text>
  <text class="sc-text" x="200" y="120">• Convert to bytecode</text>
  <text class="sc-text" x="200" y="132">• Generate ABI</text>
  <text class="sc-text-arrow" x="305" y="105">→</text>
  <!-- Step 3: Deploy -->
  <rect class="sc-rect-orange" x="330" y="60" width="120" height="80" rx="5"/>
  <text class="sc-text-large" x="390" y="85" text-anchor="middle">3. Deploy</text>
  <text class="sc-text-small" x="390" y="100" text-anchor="middle">On-Chain</text>
  <text class="sc-text" x="350" y="120">• Send transaction</text>
  <text class="sc-text" x="350" y="132">• Get address</text>
  <text class="sc-text-arrow" x="455" y="105">→</text>
  <!-- Step 4: Contract Address -->
  <rect class="sc-rect-blue" x="480" y="60" width="190" height="80" rx="5"/>
  <text class="sc-text-large" x="575" y="85" text-anchor="middle">4. On-Chain Contract</text>
  <text class="sc-text-small" x="575" y="100" text-anchor="middle">Immutable</text>
  <text class="sc-text" x="495" y="120">• Address: 0x1234...abcd</text>
  <text class="sc-text" x="495" y="132">• Permanent, immutable</text>
  <!-- Arrow down -->
  <line class="sc-line-blue" x1="575" y1="150" x2="575" y2="180" marker-end="url(#arrow-sc-1)"/>
  <!-- Step 5: User Call -->
  <rect class="sc-rect-blue" x="480" y="190" width="190" height="80" rx="5"/>
  <text class="sc-text-large" x="575" y="215" text-anchor="middle">5. User Interaction</text>
  <text class="sc-text-small" x="575" y="230" text-anchor="middle">Call Functions</text>
  <text class="sc-text" x="495" y="248">• Send tx to call function</text>
  <text class="sc-text" x="495" y="260">• Pay Gas fee</text>
  <text class="sc-text-arrow-blue" x="470" y="235">←</text>
  <!-- Step 6: Condition Check -->
  <rect class="sc-rect-blue" x="280" y="190" width="160" height="80" rx="5"/>
  <text class="sc-text-large" x="360" y="215" text-anchor="middle">6. Check Conditions</text>
  <text class="sc-text-small" x="360" y="230" text-anchor="middle">Validate</text>
  <text class="sc-text" x="295" y="248">• Verify require conditions</text>
  <text class="sc-text" x="295" y="260">• Check permissions & balance</text>
  <text class="sc-text-arrow-blue" x="270" y="235">←</text>
  <!-- Step 7: Auto Execute -->
  <rect class="sc-rect-green" x="80" y="190" width="160" height="80" rx="5"/>
  <text class="sc-text-large" x="160" y="215" text-anchor="middle">7. Auto Execute</text>
  <text class="sc-text-small" x="160" y="230" text-anchor="middle">Change State</text>
  <text class="sc-text" x="95" y="248">• Modify state variables</text>
  <text class="sc-text" x="95" y="260">• Transfer assets</text>
  <!-- Arrow down from execution -->
  <line class="sc-line-green" x1="160" y1="280" x2="160" y2="300" marker-end="url(#arrow-sc-2)"/>
  <!-- Step 8: Result -->
  <rect class="sc-rect-green-dark" x="80" y="310" width="160" height="35" rx="5"/>
  <text class="sc-text-medium" x="160" y="330" text-anchor="middle">Transaction complete, state updated</text>
  <!-- Arrow from result to user -->
  <path class="sc-path-green" d="M 240 327 Q 450 327 450 255" marker-end="url(#arrow-sc-2)"/>
  <text class="sc-text" x="350" y="315" text-anchor="middle">Return result</text>
  <!-- Key features box -->
  <rect class="sc-rect-orange-light" x="30" y="290" width="40" height="55" rx="3"/>
  <text class="sc-text-small-bold" x="50" y="305" text-anchor="middle">Features</text>
  <text class="sc-text-tiny" x="37" y="318">Deterministic</text>
  <text class="sc-text-tiny" x="37" y="328">Transparent</text>
  <text class="sc-text-tiny" x="37" y="338">Immutable</text>
</svg>
</div>

#### Smart Contract Example: Simple Escrow

```javascript
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

/**
 * @title Escrow
 * @dev Simple escrow contract
 */
contract Escrow {
    address public buyer;        // Buyer address
    address public seller;       // Seller address
    address public arbiter;      // Arbiter address
    uint256 public amount;       // Escrow amount
    bool public fundsReleased;   // Funds released?

    event FundsDeposited(address indexed buyer, uint256 amount);
    event FundsReleased(address indexed seller, uint256 amount);
    event FundsRefunded(address indexed buyer, uint256 amount);

    /**
     * @dev Constructor, creates escrow contract
     * @param _seller Seller address
     * @param _arbiter Arbiter address
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
     * @dev Arbiter approves, releases funds to seller
     */
    function releaseFunds() external {
        require(msg.sender == arbiter, "Only arbiter can release");
        require(!fundsReleased, "Funds already released");

        fundsReleased = true;
        payable(seller).transfer(amount);

        emit FundsReleased(seller, amount);
    }

    /**
     * @dev Arbiter approves, refunds buyer
     */
    function refundBuyer() external {
        require(msg.sender == arbiter, "Only arbiter can refund");
        require(!fundsReleased, "Funds already released");

        fundsReleased = true;
        payable(buyer).transfer(amount);

        emit FundsRefunded(buyer, amount);
    }

    /**
     * @dev Check contract balance
     */
    function getBalance() external view returns (uint256) {
        return address(this).balance;
    }
}
```

### Smart Contract Application Scenarios

1. **DeFi (Decentralized Finance)**
   - Uniswap: Decentralized exchange
   - Aave: Lending protocol
   - MakerDAO: Stablecoin protocol

2. **NFT (Non-Fungible Tokens)**
   - Digital art
   - Game items
   - Digital collectibles

3. **DAO (Decentralized Autonomous Organization)**
   - On-chain governance
   - Fund management
   - Voting decisions

4. **Supply Chain Management**
   - Product traceability
   - Logistics tracking
   - Quality assurance

## 3.4 Other Mainstream Cryptocurrencies

_(SVG diagram omitted for brevity - maintains same structure as Chinese version with translated labels)_

## 3.5 How to Acquire Cryptocurrency

### 3.5.1 Buy Through Exchanges

This is the most common and simplest method.

#### Centralized Exchanges (CEX)

**Major Global Exchanges:**

| Exchange | Features | Advantages | Suitable For |
|----------|----------|------------|--------------|
| **Binance** | Largest globally | High liquidity, many coins | Professional traders |
| **Coinbase** | Largest in US | Strong compliance, user-friendly | Beginners, US users |
| **OKX** | Comprehensive | Rich derivatives | Professional traders |
| **Kraken** | Established exchange | High security | Long-term investors |
| **Gemini** | Compliant exchange | Regulated, insured | Institutional investors |

**Purchase Process:**
1. Register account and complete KYC verification
2. Deposit fiat currency (USD, EUR, etc.)
3. Select cryptocurrency to buy
4. Place order (market or limit order)
5. Withdraw to personal wallet (recommended)

#### Decentralized Exchanges (DEX)

**Major DEX:**

| DEX | Network | Features |
|-----|---------|----------|
| **Uniswap** | Ethereum | Largest DEX, AMM model |
| **PancakeSwap** | BSC | Low fees, high speed |
| **SushiSwap** | Multi-chain | Cross-chain support |
| **Curve** | Multi-chain | Stablecoin trading optimized |
| **1inch** | Multi-chain | DEX aggregator |

**Features:**
- No KYC required
- Users control private keys
- Censorship resistant
- Need native tokens for Gas fees
- May encounter slippage

### 3.5.2 Mining and Staking

#### PoW Mining (Proof of Work)

**Mineable Major Coins:**

| Coin | Algorithm | Hardware | Difficulty |
|------|-----------|----------|------------|
| Bitcoin (BTC) | SHA-256 | ASIC miners | Very High |
| Litecoin (LTC) | Scrypt | ASIC miners | High |
| Ethereum Classic (ETC) | Ethash | GPU | Medium |
| Ravencoin (RVN) | KawPow | GPU | Medium |
| Monero (XMR) | RandomX | CPU | Low |

**Mining Cost Considerations:**
- Hardware investment (ASIC/GPU)
- Electricity costs (most important)
- Cooling and venue rental
- Mining pool fees (1-3%)
- Maintenance costs

#### PoS Staking (Proof of Stake)

No professional equipment needed, just hold and stake tokens:

**Major PoS Coins and Returns:**

| Coin | Staking Requirement | Annual Return (APR) | Lock Period |
|------|---------------------|---------------------|-------------|
| Ethereum (ETH) | 32 ETH | 4-5% | No fixed |
| Cardano (ADA) | No minimum | 4-6% | None |
| Solana (SOL) | No minimum | 6-8% | 2-3 days |
| Polkadot (DOT) | 120 DOT (recommended) | 10-14% | 28 days |
| Cosmos (ATOM) | No minimum | 15-20% | 21 days |

### 3.5.3 Earning Cryptocurrency

**Other Acquisition Methods:**

1. **Airdrops**
   - Projects distribute free tokens
   - Usually requires completing tasks
   - Risk: May be scams

2. **Liquidity Mining**
   - Provide liquidity to DEX
   - Earn trading fees and rewards
   - Risk: Impermanent loss

3. **Work for Crypto**
   - Accept cryptocurrency payments
   - Participate in bounty programs
   - Content creation rewards

4. **Testnet Rewards**
   - Participate in project testing
   - Report issues for rewards
   - Early project airdrop opportunities

## 3.6 Cryptocurrency Wallets

### Wallet Types Comparison

_(SVG diagram omitted for brevity - maintains same structure as Chinese version with translated labels)_

### Wallet Security Best Practices

1. **Backup Recovery Phrase**
   - Write on paper, store in multiple locations
   - Don't screenshot or save on computer/cloud
   - Consider using metal seed phrase plates
   - Never tell anyone

2. **Use Hardware Wallets**
   - Large assets (>$1000) must use cold wallet
   - Small daily transactions use hot wallet
   - Regularly check firmware updates

3. **Beware of Phishing Attacks**
   - Check if URL is correct
   - Use bookmarks for frequent sites
   - Don't click suspicious links
   - Verify contract addresses

4. **Multi-signature**
   - Consider multi-sig wallet for large assets
   - Require 2/3 or 3/5 signatures to transfer
   - Suitable for team fund management

5. **Regular Security Audits**
   - Check authorized contracts
   - Revoke unnecessary authorizations
   - Use tools like Revoke.cash

## 3.7 Cryptocurrency Risks and Challenges

### Main Risks

1. **Price Volatility Risk**
   - Cryptocurrency prices extremely volatile
   - May surge or crash in short time
   - Not suitable for low risk tolerance investors

2. **Security Risks**
   - Private key loss, permanent asset loss
   - Exchange hacks
   - Phishing sites and scams

3. **Regulatory Risks**
   - Uncertain regulatory policies across countries
   - May face bans or restrictions
   - Tax compliance requirements

4. **Technical Risks**
   - Smart contract vulnerabilities
   - Network congestion
   - 51% attacks

### Investment Advice

1. **Only invest what you can afford to lose**
2. **Do Your Own Research (DYOR)**
3. **Diversify, don't go all-in on one coin**
4. **Hold long-term, don't trade frequently**
5. **Learn basic security knowledge**

<div class="chapter-footer">
  <h3>Chapter Summary</h3>
  <p>
    This chapter systematically introduced cryptocurrency fundamentals, from Bitcoin's birth to Ethereum's innovations, to the characteristics of various mainstream cryptocurrencies. We learned how to acquire, store, and manage cryptocurrencies, as well as security considerations and risks to be aware of.
  </p>
  <p>
    <strong>Key Takeaways:</strong>
  </p>
  <ul>
    <li>Cryptocurrency is digital currency based on cryptography and blockchain technology</li>
    <li>Bitcoin achieves decentralized currency through limited supply, halving mechanism, and PoW consensus</li>
    <li>Ethereum introduced smart contracts, pioneering the programmable blockchain era</li>
    <li>Can acquire cryptocurrency through exchanges, mining, staking, and other methods</li>
    <li>Secure storage is crucial, large assets should use cold wallets</li>
    <li>Cryptocurrency investment carries high risks, requires caution</li>
  </ul>
  <p>
    In the next chapter, we will explore <strong>Consensus Mechanisms</strong> in depth, understanding how blockchain networks reach agreement without centralized authority.
  </p>

  <div style="margin-top: 2em; padding-top: 1em; border-top: 2px solid #4c9be8;">
    <p style="text-align: center;">
      <a href="/en/chapter-2" style="margin: 0 1em;">← Previous: Cryptography Fundamentals</a>
      <a href="/en/" style="margin: 0 1em;">Back to Contents</a>
      <a href="/en/chapter-4" style="margin: 0 1em;">Next: Consensus Mechanisms →</a>
    </p>
  </div>
</div>
