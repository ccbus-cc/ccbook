---
title: "Chapter 5: Smart Contracts"
---


<div class="ccbus-hero">
  <div class="ccbus-hero-avatar">
    <img src="../public/images/avatars/heroes/ether-engineer.png" alt="Ether Engineer" />
  </div>
  <div class="ccbus-hero-content">
    <h1>Chapter 5: Smart Contracts</h1>
    <div class="ccbus-teacher-label">🎙️ Taught by:<strong>Ether Engineer</strong> · The "foreman" of smart contracts — code is craft</div>
  </div>
</div>

<div class="chapter-intro">

**Difficulty Level:** 🟡 Intermediate
**Estimated Learning Time:** 5-6 hours
**Prerequisites:** Understanding of blockchain fundamentals and basic programming concepts

**Chapter Objectives:**
- Understand smart contract core concepts and working principles
- Master Solidity programming basics
- Learn smart contract design patterns
- Understand smart contract security best practices
- Explore smart contract applications in DeFi, NFT, and other domains

</div>


## 5.0 2025-2026 Perspective: Why Reread This Chapter

Smart contracts in 2026 have entered their "specialization" phase. Beyond the old ERC-20 / ERC-721 / ERC-1155 standards, **ERC-4337 (Account Abstraction), ERC-4626 (Tokenized Vaults), ERC-7683 (Cross-chain Intents), and ERC-7715 (Delegation Authorizations)** are reshaping how contracts are written. This chapter covers Solidity basics and the paradigm shifts introduced by these new standards.

### 🖥️ Real-world Example: CCBus Multi-Function Token Contract

CCBus's "Multi-Function Token" is a representative case of current DeFi contract complexity — it implements 10+ features in a single ERC-20 contract: standard transfer, burn, mint, on-chain dividend, referral rewards, whitelisted trading, tax switching, hold-to-earn, auto-liquidity-add, and more. The screenshot below shows the contract configuration UI.

![CCBus Multi-Function Token contract configuration](../public/images/chapters/zh/multi-function.png)

*Figure 5-1: CCBus Multi-Function Token configuration. Each toggle is an upgradable contract function. This **modular contract architecture** is the 2026 DeFi project default.*

---

## 5.1 What are Smart Contracts?


<div style="background: rgba(52, 81, 178, 0.06); padding: 1.5em; border-radius: 4px; margin: 2em 0;">
<svg class="svg-5-0" viewBox="0 0 700 350" xmlns="http://www.w3.org/2000/svg" style="width: 100%; max-width: 800px; display: block; margin: 0 auto;">
<defs>
<style>
      .svg-5-0 .sc-text-title { font-family: arial, sans-serif; font-size: 14px; fill: #1f2937; font-weight: bold; }
      .svg-5-0 .sc-text { font-family: arial, sans-serif; font-size: 10px; fill: #1f2937; }
      .svg-5-0 .sc-text-small { font-family: arial, sans-serif; font-size: 8px; fill: #1f2937; }
      .svg-5-0 .sc-circle-main { fill: rgba(52, 81, 178, 0.15); stroke: #4c9be8; stroke-width: 1.5; }
      .svg-5-0 .sc-circle-feature { fill: rgba(223, 105, 25, 0.25); stroke: #df6919; stroke-width: 1; }
      .svg-5-0 .sc-line { stroke: #4c9be8; stroke-width: 1; fill: none; }
    </style>
    <marker id="sc-arrow" markerWidth="8" markerHeight="8" refX="8" refY="4" orient="auto">
      <polygon points="0 0, 8 4, 0 8" fill="#4c9be8"/>
    </marker>
  </defs>
  <text class="sc-text-title" x="350" y="25" text-anchor="middle">Smart Contractcorefeature</text>
  <circle class="sc-circle-main" cx="350" cy="175" r="55"/>
  <text class="sc-text" x="350" y="172" text-anchor="middle" font-weight="bold">Smart Contract</text>
  <text class="sc-text-small" x="350" y="185" text-anchor="middle">Smart Contract</text>
  <circle class="sc-circle-feature" cx="150" cy="80" r="45"/>
  <text class="sc-text" x="150" y="75" text-anchor="middle" font-weight="bold">autoExecute</text>
  <text class="sc-text-small" x="150" y="88" text-anchor="middle">Automatic</text>
  <text class="sc-text-small" x="150" y="100" text-anchor="middle">Execution</text>
  <line class="sc-line" x1="185" y1="105" x2="310" y2="150" marker-end="url(#sc-arrow)"/>
  <text class="sc-text-small" x="220" y="120" fill="#4c9be8">conditiontrigger</text>
  <circle class="sc-circle-feature" cx="550" cy="80" r="45"/>
  <text class="sc-text" x="550" y="75" text-anchor="middle" font-weight="bold">immutable</text>
  <text class="sc-text-small" x="550" y="88" text-anchor="middle">Immutable</text>
  <line class="sc-line" x1="515" y1="105" x2="390" y2="150" marker-end="url(#sc-arrow)"/>
  <text class="sc-text-small" x="480" y="120" fill="#4c9be8">Deploypostfixed</text>
  <circle class="sc-circle-feature" cx="150" cy="270" r="45"/>
  <text class="sc-text" x="150" y="265" text-anchor="middle" font-weight="bold">transparentPublic</text>
  <text class="sc-text-small" x="150" y="278" text-anchor="middle">Transparent</text>
  <line class="sc-line" x1="185" y1="245" x2="310" y2="200" marker-end="url(#sc-arrow)"/>
  <text class="sc-text-small" x="220" y="230" fill="#4c9be8">codecansee</text>
  <circle class="sc-circle-feature" cx="550" cy="270" r="45"/>
  <text class="sc-text" x="550" y="265" text-anchor="middle" font-weight="bold">Decentralization</text>
  <text class="sc-text-small" x="550" y="278" text-anchor="middle">Decentralized</text>
  <line class="sc-line" x1="515" y1="245" x2="390" y2="200" marker-end="url(#sc-arrow)"/>
  <text class="sc-text-small" x="480" y="230" fill="#4c9be8">NoneneedMediummediate</text>
  <rect x="50" y="330" width="600" height="1" fill="#4c9be8" opacity="0.3"/>
  <text class="sc-text-small" x="350" y="345" text-anchor="middle" font-style="italic">Smart Contract = code + Data + Blockchainenv</text>
</svg>
</div>

<div style="background: rgba(52, 81, 178, 0.06); padding: 1.5em; border-radius: 4px; margin: 2em 0;">
<svg class="svg-5-1" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" style="width: 100%; max-width: 800px; display: block; margin: 0 auto;">
<defs>
<style>
      .svg-5-1 .scw-text-title { font-family: arial, sans-serif; font-size: 14px; fill: #1f2937; font-weight: bold; }
      .svg-5-1 .scw-text { font-family: arial, sans-serif; font-size: 10px; fill: #1f2937; }
      .svg-5-1 .scw-text-small { font-family: arial, sans-serif; font-size: 8px; fill: #1f2937; }
      .svg-5-1 .scw-box-step { fill: rgba(92, 184, 92, 0.10); stroke: #5cb85c; stroke-width: 1; }
      .svg-5-1 .scw-box-contract { fill: rgba(52, 81, 178, 0.10); stroke: #4c9be8; stroke-width: 1; }
      .svg-5-1 .scw-line-flow { stroke: #4c9be8; fill: none; stroke-width: 1.5; stroke-dasharray: 3,2; }
      .svg-5-1 .scw-circle-num { fill: rgba(223, 105, 25, 0.12); stroke: #df6919; stroke-width: 1; }
    </style>
    <marker id="scw-arrow" markerWidth="8" markerHeight="8" refX="8" refY="4" orient="auto">
      <polygon points="0 0, 8 4, 0 8" fill="#4c9be8"/>
    </marker>
  </defs>
  <text class="scw-text-title" x="375" y="25" text-anchor="middle">Smart Contractworkflowjourney</text>
  <rect class="scw-box-step" x="30" y="55" width="160" height="70" rx="4"/>
  <circle class="scw-circle-num" cx="50" cy="75" r="12"/>
  <text class="scw-text" x="50" y="80" text-anchor="middle" font-weight="bold">1</text>
  <text class="scw-text" x="70" y="75" font-weight="bold">encodewriteContractcode</text>
  <text class="scw-text-small" x="70" y="90">• useSolidityetc.language</text>
  <text class="scw-text-small" x="70" y="102">• decidemeaningbusinesslogical</text>
  <text class="scw-text-small" x="70" y="114">• settingstriggercondition</text>
  <line class="scw-line-flow" x1="190" y1="90" x2="230" y2="90" marker-end="url(#scw-arrow)"/>
  <rect class="scw-box-step" x="230" y="55" width="160" height="70" rx="4"/>
  <circle class="scw-circle-num" cx="250" cy="75" r="12"/>
  <text class="scw-text" x="250" y="80" text-anchor="middle" font-weight="bold">2</text>
  <text class="scw-text" x="270" y="75" font-weight="bold">encodeinterpret&Testing</text>
  <text class="scw-text-small" x="270" y="90">• encodeinterpretforBytecode</text>
  <text class="scw-text-small" x="270" y="102">• Local Test</text>
  <text class="scw-text-small" x="270" y="114">• Security Audit</text>
  <line class="scw-line-flow" x1="390" y1="90" x2="430" y2="90" marker-end="url(#scw-arrow)"/>
  <rect class="scw-box-step" x="430" y="55" width="160" height="70" rx="4"/>
  <circle class="scw-circle-num" cx="450" cy="75" r="12"/>
  <text class="scw-text" x="450" y="80" text-anchor="middle" font-weight="bold">3</text>
  <text class="scw-text" x="470" y="75" font-weight="bold">DeploytoBlockchain</text>
  <text class="scw-text-small" x="470" y="90">• paymentDeployGasfee</text>
  <text class="scw-text-small" x="470" y="102">• generateContractAddress</text>
  <text class="scw-text-small" x="470" y="114">• nocan逆convert</text>
  <line class="scw-line-flow" x1="590" y1="90" x2="630" y2="90" marker-end="url(#scw-arrow)"/>
  <rect class="scw-box-contract" x="630" y="55" width="90" height="70" rx="4"/>
  <text class="scw-text" x="675" y="85" text-anchor="middle" font-weight="bold">Contract</text>
  <text class="scw-text" x="675" y="98" text-anchor="middle" font-weight="bold">alreadyDeploy</text>
  <text class="scw-text-small" x="675" y="112" text-anchor="middle">0x1234...</text>
  <line class="scw-line-flow" x1="675" y1="125" x2="675" y2="165" marker-end="url(#scw-arrow)"/>
  <rect class="scw-box-step" x="560" y="175" width="230" height="80" rx="4"/>
  <circle class="scw-circle-num" cx="580" cy="195" r="12"/>
  <text class="scw-text" x="580" y="200" text-anchor="middle" font-weight="bold">4</text>
  <text class="scw-text" x="600" y="195" font-weight="bold">Userinteract</text>
  <text class="scw-text-small" x="600" y="210">• UserSend TxCallFunction</text>
  <text class="scw-text-small" x="600" y="222">• transmitdelivermustwantparam</text>
  <text class="scw-text-small" x="600" y="234">• paymentGasfee</text>
  <text class="scw-text-small" x="600" y="246">• etc.treatMiner/ValidatorConfirm</text>
  <line class="scw-line-flow" x1="560" y1="215" x2="410" y2="215" marker-end="url(#scw-arrow)"/>
  <rect class="scw-box-step" x="180" y="175" width="230" height="80" rx="4"/>
  <circle class="scw-circle-num" cx="200" cy="195" r="12"/>
  <text class="scw-text" x="200" y="200" text-anchor="middle" font-weight="bold">5</text>
  <text class="scw-text" x="220" y="195" font-weight="bold">autoExecute</text>
  <text class="scw-text-small" x="220" y="210">• Verifytriggercondition</text>
  <text class="scw-text-small" x="220" y="222">• EVMExecuteBytecode</text>
  <text class="scw-text-small" x="220" y="234">• moreNewState Vars</text>
  <text class="scw-text-small" x="220" y="246">• triggerEventLog</text>
  <line class="scw-line-flow" x1="295" y1="255" x2="295" y2="295" marker-end="url(#scw-arrow)"/>
  <rect class="scw-box-step" x="180" y="295" width="230" height="80" rx="4"/>
  <circle class="scw-circle-num" cx="200" cy="315" r="12"/>
  <text class="scw-text" x="200" y="320" text-anchor="middle" font-weight="bold">6</text>
  <text class="scw-text" x="220" y="315" font-weight="bold">resultConfirm</text>
  <text class="scw-text-small" x="220" y="330">• TransactionblankethitpackinputBlock</text>
  <text class="scw-text-small" x="220" y="342">• wholenetNodeVerify</text>
  <text class="scw-text-small" x="220" y="354">• State Updatenocan逆</text>
  <text class="scw-text-small" x="220" y="366">• returnresultgiveUser</text>
  <line class="scw-line-flow" x1="410" y1="335" x2="560" y2="335" marker-end="url(#scw-arrow)"/>
  <rect class="scw-box-step" x="560" y="295" width="230" height="80" rx="4"/>
  <text class="scw-text" x="675" y="325" text-anchor="middle" font-weight="bold">✓ ExecuteComplete</text>
  <text class="scw-text-small" x="675" y="345" text-anchor="middle">• StatealreadymoreNew</text>
  <text class="scw-text-small" x="675" y="357" text-anchor="middle">• assetalreadytransfer</text>
  <text class="scw-text-small" x="675" y="369" text-anchor="middle">• Eventalreadyrecord</text>
</svg>
</div>

### Definition

A **smart contract** is a program deployed on a blockchain that automatically executes predefined logic when triggered. Unlike traditional contracts, smart contracts are self-enforcing: code is law, no intermediaries required.

### Core Characteristics

- **Autonomous**: runs without a trusted third party
- **Immutable**: deployed bytecode cannot be modified (except via upgradeability patterns)
- **Deterministic**: same input always produces same output
- **Transparent**: code and state are publicly auditable
- **Composable**: contracts can call other contracts (the "money legos" property)

### Smart Contracts vs Traditional Contracts

| Property | Traditional Contract | Smart Contract |
|---|---|---|
| Enforcer | Court / legal system | EVM / consensus network |
| Modifiability | Amendable | Immutable (unless upgradeable) |
| Cost | Lawyer + arbitration | Gas (computational) |
| Speed | Days/months | Seconds/minutes |
| Trust model | Trust in legal system | Trust in code |
| Reach | Jurisdictional | Global |

---

## 5.2 Ethereum Virtual Machine (EVM)

### EVM Architecture

The **EVM** is a stack-based, quasi-Turing-complete virtual machine. Each opcode consumes a known amount of gas, and a transaction runs until gas runs out or it halts voluntarily.

### Gas Mechanism (EIP-1559)

Gas has two components:
- **Base fee**: dynamically adjusted per block, burned
- **Priority fee**: tip to the validator
- **Max fee per gas**: user's ceiling

```
effective_gas_price = min(max_fee_per_gas, base_fee + priority_fee)
```

### EVM 2026 Upgrades: Cancun → Pectra → Fusaka

By 2026, the EVM has gone through three major hard forks — **Cancun (2024-03)**, **Pectra (2025-05)**, and **Fusaka (2026-Q2 planned)**. Each one reshapes the developer toolkit:

**Cancun (Dencun, 2024-03-13)** — EIP-4844 (Proto-Danksharding / Blob transactions):
- L2 rollups no longer need to store calldata on L1; use 128 KB temporary blobs (expire in ~18 days)
- L2 transaction gas costs dropped from ~$0.10 to ~$0.001 — a **100x** reduction
- New opcodes `BLOBHASH` and `BLOBBASEFEE` let L1 contracts read blob summaries
- Any contract that stored large data in calldata (e.g., on-chain NFT metadata) should migrate to blobs

**Pectra (2025-05-07)** — 11 EIPs, three most important:

| EIP | Name | Contract Developer Impact |
|---|---|---|
| **EIP-7702** | Set EOA account code | **Revolutionary** — EOA temporarily becomes a smart account (batch calls, gas sponsorship, key rotation) |
| EIP-7251 | Increase max validator balance | Validators' max effective balance 32 ETH → 2048 ETH, simplifies restaking |
| EIP-7691 | Blob throughput increase | Blob target 3 → 6, max 6 → 9, L2 capacity doubles |
| EIP-2935 | Serve historical block hashes from state | Historical block hashes from 256 → 8192, more reliable long-term price oracles |
| EIP-6110 | Supply validator deposits on chain | Validator deposit event latency 12 hours → ~13 minutes |

**EIP-7702 deep dive** — the most important 2026 primitive:
- User signs an `AUTH` message, temporarily binding their EOA to a deployed contract implementation
- During that transaction, the EOA behaves like a smart account: batch calls, gas sponsorship, social recovery
- User doesn't need to abandon EOA, doesn't need to deploy a new contract, doesn't need to migrate assets
- Real use cases: MetaMask uses 7702 for **gas sponsorship**; Safe uses 7702 to give EOA multi-sig capability; Uniswap uses 7702 for **approve-free swap**

**Fusaka (2026-Q2 planned)**:
- **EIP-7594 (PeerDAS)**: data availability sampling, blob capacity ×4-8
- **EIP-7883**: secp256r1 native precompile, AA signature verification cheaper
- **EIP-5920 (PAY opcode)**: native ETH transfer with data, simpler payment flows

### Mainstream EVM Implementations

The EVM is not just Ethereum mainnet — in 2026's multi-chain universe, every EVM chain is a slightly different implementation:

| Chain | Consensus | Block Time | Gas Token | Special EVM Behavior |
|---|---|---|---|---|
| **Ethereum** | PoS + SSF | 12s | ETH | Full EVM + blob |
| **BNB Chain** | PoSA | 3s | BNB | Full EVM, no blob |
| **Avalanche C-Chain** | Snowball | 1-2s | AVAX | Full EVM, independent Subnets |
| **Polygon PoS** | PoS | 2s | POL | Full EVM + EIP-1559 |
| **Arbitrum One** | AnyTrust | 0.25s | ETH | Stylus (WASM + Rust), ArbOS precompiles |
| **OP Mainnet** | Bedrock (OP Stack) | 2s | ETH | OP Stack standardized fault proof |
| **zkSync Era** | zkRollup | ~1s | ETH | **NOT EVM-equivalent**, own zkEVM bytecode |
| **Linea** | zkRollup | 2s | ETH | zkEVM, evm-equivalence |
| **Scroll** | zkRollup | 3s | ETH | zkEVM, bytecode-level compatible |
| **Base** | OP Stack | 2s | ETH | OP Stack, same bytecode as OP Mainnet |

**Key tip**: Default to "Ethereum mainnet EVM" for testing, but **deploying to zkSync Era / Starknet / Solana requires rewriting** (zkSync Era uses zkEVM bytecode, Solana uses Rust + Anchor for BPF).

---

## 5.3 Solidity Programming Basics

### Solidity Overview

Solidity is the dominant EVM smart contract language — statically typed, JavaScript-inspired, with first-class support for contract types, units (wei, gwei, ether), and global variables (`msg.sender`, `block.timestamp`).

### Basic Contract Structure

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.25;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MyToken is ERC20 {
    constructor() ERC20("MyToken", "MTK") {
        _mint(msg.sender, 1_000_000 * 10 ** decimals());
    }
}
```

### Solidity Data Types

- **Value types**: `bool`, `uint8`-`uint256`, `int8`-`int256`, `address`, `address payable`, `bytes1`-`bytes32`, `enum`
- **Reference types**: `string`, `bytes`, arrays, mappings, structs
- **Function types**: internal/external, view/pure/payable


<div style="background: rgba(52, 81, 178, 0.06); padding: 1.5em; border-radius: 4px; margin: 2em 0;">
<svg class="svg-5-3" viewBox="0 0 750 500" xmlns="http://www.w3.org/2000/svg" style="width: 100%; max-width: 800px; display: block; margin: 0 auto;">
<defs>
<style>
      .svg-5-3 .sol-text-title { font-family: arial, sans-serif; font-size: 14px; fill: #1f2937; font-weight: bold; }
      .svg-5-3 .sol-text { font-family: arial, sans-serif; font-size: 10px; fill: #1f2937; }
      .svg-5-3 .sol-text-small { font-family: arial, sans-serif; font-size: 8px; fill: #1f2937; }
      .svg-5-3 .sol-box-category { fill: rgba(52, 81, 178, 0.10); stroke: #4c9be8; stroke-width: 1; }
      .svg-5-3 .sol-box-type { fill: rgba(223, 105, 25, 0.06); stroke: #df6919; stroke-width: 1; }
      .svg-5-3 .sol-box-ref { fill: rgba(92, 184, 92, 0.07); stroke: #5cb85c; stroke-width: 1; }
    </style>
</defs>
  <text class="sol-text-title" x="375" y="25" text-anchor="middle">Solidity Typesbodytie</text>
  <rect class="sol-box-category" x="30" y="50" width="330" height="210" rx="4"/>
  <text class="sol-text" x="195" y="68" text-anchor="middle" font-weight="bold">Value (Value Types)</text>
  <text class="sol-text-small" x="40" y="85" font-style="italic">replicatetransmitdeliver，Storageindependentreplica</text>
  <rect class="sol-box-type" x="40" y="95" width="150" height="80" rx="3"/>
  <text class="sol-text" x="115" y="110" text-anchor="middle" font-weight="bold">IntType</text>
  <text class="sol-text-small" x="50" y="125">• uint8 ~ uint256 (unsigned)</text>
  <text class="sol-text-small" x="50" y="137">• int8 ~ int256 (signed)</text>
  <text class="sol-text-small" x="50" y="149">• Default: uint256, int256</text>
  <text class="sol-text-small" x="50" y="161">• steplong: 8bitdeliverincrease</text>
  <rect class="sol-box-type" x="200" y="95" width="150" height="80" rx="3"/>
  <text class="sol-text" x="275" y="110" text-anchor="middle" font-weight="bold">Address Type</text>
  <text class="sol-text-small" x="210" y="125">• address (20Bytes)</text>
  <text class="sol-text-small" x="210" y="137">• address payable</text>
  <text class="sol-text-small" x="210" y="149">  - canreceivereceiveETH</text>
  <text class="sol-text-small" x="210" y="161">  - yestransfer/sendmethod</text>
  <rect class="sol-box-type" x="40" y="185" width="100" height="65" rx="3"/>
  <text class="sol-text" x="90" y="200" text-anchor="middle" font-weight="bold">BoolType</text>
  <text class="sol-text-small" x="50" y="215">• bool</text>
  <text class="sol-text-small" x="50" y="227">  - true</text>
  <text class="sol-text-small" x="50" y="239">  - false</text>
  <rect class="sol-box-type" x="150" y="185" width="100" height="65" rx="3"/>
  <text class="sol-text" x="200" y="200" text-anchor="middle" font-weight="bold">BytesType</text>
  <text class="sol-text-small" x="160" y="215">• bytes1 ~ bytes32</text>
  <text class="sol-text-small" x="160" y="227">• fixedLargeSmall</text>
  <text class="sol-text-small" x="160" y="239">• HigheffectStorage</text>
  <rect class="sol-box-type" x="260" y="185" width="90" height="65" rx="3"/>
  <text class="sol-text" x="305" y="200" text-anchor="middle" font-weight="bold">Enum</text>
  <text class="sol-text-small" x="270" y="215">• enum</text>
  <text class="sol-text-small" x="270" y="227">• Custom</text>
  <text class="sol-text-small" x="270" y="239">• Inttabledemo</text>
  <rect class="sol-box-category" x="390" y="50" width="330" height="210" rx="4"/>
  <text class="sol-text" x="555" y="68" text-anchor="middle" font-weight="bold">Reference (Reference Types)</text>
  <text class="sol-text-small" x="400" y="85" font-style="italic">guideusetransmitdeliver，needindicatedecideDatabitplace</text>
  <rect class="sol-box-ref" x="400" y="95" width="150" height="95" rx="3"/>
  <text class="sol-text" x="475" y="110" text-anchor="middle" font-weight="bold">Array (Array)</text>
  <text class="sol-text-small" x="410" y="125">• fixedArray: uint[5]</text>
  <text class="sol-text-small" x="410" y="137">• Dynamic Array: uint[]</text>
  <text class="sol-text-small" x="410" y="149">• bytes (Dynamic Bytes)</text>
  <text class="sol-text-small" x="410" y="161">• string (UTF-8)</text>
  <text class="sol-text-small" x="410" y="173">• Supportpush/popop</text>
  <rect class="sol-box-ref" x="560" y="95" width="150" height="95" rx="3"/>
  <text class="sol-text" x="635" y="110" text-anchor="middle" font-weight="bold">Mapping (Mapping)</text>
  <text class="sol-text-small" x="570" y="125">• mapping(K => V)</text>
  <text class="sol-text-small" x="570" y="137">• keyvaluevsStorage</text>
  <text class="sol-text-small" x="570" y="149">• onlystoragebitplace</text>
  <text class="sol-text-small" x="570" y="161">• nocanIteration</text>
  <text class="sol-text-small" x="570" y="173">• GasHigheffect</text>
  <rect class="sol-box-ref" x="400" y="200" width="310" height="50" rx="3"/>
  <text class="sol-text" x="555" y="215" text-anchor="middle" font-weight="bold">Struct (Struct)</text>
  <text class="sol-text-small" x="410" y="230">• CustomreplyfitType</text>
  <text class="sol-text-small" x="410" y="242">• cancontainsAnyData Type（removefrom身）</text>
  <rect class="sol-box-category" x="30" y="280" width="690" height="110" rx="4"/>
  <text class="sol-text" x="375" y="298" text-anchor="middle" font-weight="bold">Databitplace (Data Location)</text>
  <rect x="40" y="310" width="210" height="70" rx="3" fill="rgba(52, 81, 178, 0.05)" stroke="#4c9be8" stroke-width="1"/>
  <text class="sol-text" x="145" y="325" text-anchor="middle" font-weight="bold">storage</text>
  <text class="sol-text-small" x="50" y="340">• permanentStorageatBlockchainUp</text>
  <text class="sol-text-small" x="50" y="352">• State Varsdefaultbitplace</text>
  <text class="sol-text-small" x="50" y="364">• GasCostHigh</text>
  <rect x="260" y="310" width="210" height="70" rx="3" fill="rgba(223, 105, 25, 0.05)" stroke="#df6919" stroke-width="1"/>
  <text class="sol-text" x="365" y="325" text-anchor="middle" font-weight="bold">memory</text>
  <text class="sol-text-small" x="270" y="340">• 临hourStorage</text>
  <text class="sol-text-small" x="270" y="352">• Functionparam/bureaupartchangemeasure</text>
  <text class="sol-text-small" x="270" y="364">• GasCostMediumetc.</text>
  <rect x="480" y="310" width="230" height="70" rx="3" fill="rgba(92, 184, 92, 0.1)" stroke="#5cb85c" stroke-width="1"/>
  <text class="sol-text" x="595" y="325" text-anchor="middle" font-weight="bold">calldata</text>
  <text class="sol-text-small" x="490" y="340">• nocanrevise临hourStorage</text>
  <text class="sol-text-small" x="490" y="352">• outsideFunctionparamdedicated</text>
  <text class="sol-text-small" x="490" y="364">• GasCostmostLow</text>
  <rect x="30" y="400" width="690" height="80" rx="4" fill="rgba(223, 105, 25, 0.05)" stroke="#df6919" stroke-width="1"/>
  <text class="sol-text" x="375" y="418" text-anchor="middle" font-weight="bold">特殊Type&wholebureauchangemeasure</text>
  <text class="sol-text-small" x="40" y="435">• msg.sender: currentCallagentAddress</text>
  <text class="sol-text-small" x="240" y="435">• msg.value: emitsendETHcount(wei)</text>
  <text class="sol-text-small" x="440" y="435">• block.timestamp: currentBlock Timestamp</text>
  <text class="sol-text-small" x="40" y="450">• block.number: currentPreviousno.</text>
  <text class="sol-text-small" x="240" y="450">• tx.origin: Transactionemitriseagent</text>
  <text class="sol-text-small" x="440" y="450">• tx.gasprice: TransactionGasPrice</text>
  <text class="sol-text-small" x="40" y="465">• this: currentContractAddress</text>
  <text class="sol-text-small" x="240" y="465">• now: etc.agreeinblock.timestamp (already弃use)</text>
</svg>
</div>

### Function Visibility & State Mutability

```solidity
function externalFn() external view returns (uint256);
function publicFn() public payable returns (uint256);
function internalFn() internal pure returns (uint256);
function privateFn() private {}
```

### Solidity 0.8.25+ New Features: Custom Errors / Transient Storage / PUSH0

Solidity 0.8.4 introduced `custom errors`, 0.8.24 introduced `transient storage` (EIP-1153), 0.8.20 introduced the `PUSH0` opcode. These are the three baselines for modern Solidity in 2025-2026.

**1. Custom errors (replacing `require` strings)**

```solidity
// ❌ Old (waste gas, hard for frontends to decode)
require(balance >= amount, "Insufficient balance, please top up your wallet");

// ✅ New (gas saving ~50%, type-safe on frontend)
error InsufficientBalance(uint256 available, uint256 required);

function withdraw(uint256 amount) external {
    if (balance < amount)
        revert InsufficientBalance({ available: balance, required: amount });
    balance -= amount;
    payable(msg.sender).transfer(amount);
}
```

**Why save gas?** Old `require` strings go on-chain as revert reason — each character ~6 gas, long strings can be 100+ gas. Custom errors use 4-byte selector + ABI-encoded args, typically 30-50 gas.

**Frontend integration** (TypeScript + viem):
```typescript
import { decodeErrorResult } from 'viem'

try {
  await contract.write.withdraw([amountn])
} catch (err) {
  const decoded = decodeErrorResult({ abi, data: err.data })
  if (decoded.errorName === 'InsufficientBalance') {
    const [available, required] = decoded.args
    toast.error(`Insufficient balance: you have ${available}, need ${required}`)
  }
}
```

**2. Transient storage (EIP-1153) — the ultimate ReentrancyGuard optimization**

Solidity 0.8.24 (2025-Q1) enabled transient storage: it **only exists for one transaction, auto-cleared across transactions**, gas cost near zero (warm/cold both 100 gas vs SSTORE 2900/100).

```solidity
// ❌ Old ReentrancyGuard (uses normal storage, leaves trace across txs)
abstract contract ReentrancyGuardLegacy {
    uint256 private constant _NOT_ENTERED = 1;
    uint256 private constant _ENTERED = 2;
    uint256 private _status;
    modifier nonReentrant() {
        require(_status != _ENTERED, "reentrant");
        _status = _ENTERED;
        _;
        _status = _NOT_ENTERED;
    }
}
// Gas: ~5200 gas / call

// ✅ New ReentrancyGuard (transient storage, auto-cleared across txs)
abstract contract ReentrancyGuard {
    uint256 private constant _NOT_ENTERED = 1;
    uint256 private constant _ENTERED = 2;
    uint256 private transient _status;
    modifier nonReentrant() {
        require(_status != _ENTERED, "reentrant");
        _status = _ENTERED;
        _;
        _status = _NOT_ENTERED;
    }
}
// Gas: ~100 gas / call — 50x cheaper
```

OpenZeppelin 5.1+ (2025-04 release) defaults to transient-storage `ReentrancyGuard`. Upgrading to OZ 5.1+ is the most cost-effective 2026 gas optimization.

**3. PUSH0 (EIP-3855) — zero-byte stack push**

Solidity 0.8.20+ enabled PUSH0: pushes `0` onto the stack for 2 gas (old `PUSH1 0x00` was 3 gas — small but compounds in contracts with many `0` constants). **Modern compiler auto-applies, no code change needed.**

**4. Other Solidity 0.8.27+ (2025-Q4) features**

- **`mcopy` / `mload` / `mstore` memory optimizations** — compiler auto-applies
- **Verbatim bytecode inlining** — bypass Yul IR pipeline in assembly
- **Improved Yul optimizer** — better loop unrolling and stack scheduling
- **Stricter type checker** — inheritance graph conflict detection

---

## 5.4 Smart Contract Design Patterns

### Common Patterns

- **Ownable**: simple access control with single owner
- **AccessControl**: role-based access (OpenZeppelin)
- **Pausable**: emergency stop mechanism
- **ReentrancyGuard**: prevent reentrancy attacks
- **Pull over Push**: let users withdraw rather than push funds
- **Checks-Effects-Interactions**: state updates before external calls

### Upgradeability Patterns

- **Transparent Proxy (EIP-1967)**: standard pattern, simple but uses delegatecall
- **UUPS (EIP-1822)**: Universal Upgradeable Proxy Standard, logic in implementation
- **Diamond (EIP-2535)**: multi-facet proxy for unlimited contract size
- **Beacon Proxy**: shared implementation across many proxies

---

## 5.5 Smart Contract Security


<div style="background: rgba(52, 81, 178, 0.06); padding: 1.5em; border-radius: 4px; margin: 2em 0;">
<svg class="svg-5-5" viewBox="0 0 700 480" xmlns="http://www.w3.org/2000/svg" style="width: 100%; max-width: 800px; display: block; margin: 0 auto;">
<defs>
<style>
      .svg-5-5 .sec-text-title { font-family: arial, sans-serif; font-size: 14px; fill: #1f2937; font-weight: bold; }
      .svg-5-5 .sec-text { font-family: arial, sans-serif; font-size: 10px; fill: #1f2937; }
      .svg-5-5 .sec-text-small { font-family: arial, sans-serif; font-size: 8px; fill: #1f2937; }
      .svg-5-5 .sec-box-practice { fill: rgba(92, 184, 92, 0.10); stroke: #5cb85c; stroke-width: 1; }
      .svg-5-5 .sec-box-tool { fill: rgba(52, 81, 178, 0.10); stroke: #4c9be8; stroke-width: 1; }
      .svg-5-5 .sec-circle-check { fill: rgba(92, 184, 92, 0.15); stroke: #5cb85c; stroke-width: 1; }
    </style>
</defs>
  <text class="sec-text-title" x="350" y="25" text-anchor="middle">Smart ContractsafeBest Practice</text>
  <rect class="sec-box-practice" x="30" y="50" width="640" height="180" rx="4"/>
  <text class="sec-text" x="350" y="68" text-anchor="middle" font-weight="bold">devPhaseBest Practice</text>
  <circle class="sec-circle-check" cx="50" cy="90" r="8"/>
  <text class="sec-text-small" x="65" y="94">1. usemostNewstabledecideeditionSolidity (0.8.x+)</text>
  <circle class="sec-circle-check" cx="50" cy="110" r="8"/>
  <text class="sec-text-small" x="65" y="114">2. followfollowCEIpattern</text>
  <circle class="sec-circle-check" cx="50" cy="130" r="8"/>
  <text class="sec-text-small" x="65" y="134">3. useOpenZeppelinetc.viafaultauditlib</text>
  <circle class="sec-circle-check" cx="50" cy="150" r="8"/>
  <text class="sec-text-small" x="65" y="154">4. limitfollowringtimeseven，avoidexemptGas耗尽attack</text>
  <circle class="sec-circle-check" cx="50" cy="170" r="8"/>
  <text class="sec-text-small" x="65" y="174">5. useSafeMathprevent溢output（0.8.0pre）</text>
  <circle class="sec-circle-check" cx="50" cy="190" r="8"/>
  <text class="sec-text-small" x="65" y="194">6. 谨慎usedelegatecall，warningStorage Layout</text>
  <circle class="sec-circle-check" cx="370" cy="90" r="8"/>
  <text class="sec-text-small" x="385" y="94">7. implementurgentPausemechanism</text>
  <circle class="sec-circle-check" cx="370" cy="110" r="8"/>
  <text class="sec-text-small" x="385" y="114">8. useEventrecordimportantop</text>
  <circle class="sec-circle-check" cx="370" cy="130" r="8"/>
  <text class="sec-text-small" x="385" y="134">9. avoidexemptusetx.origininputrowauthorized</text>
  <circle class="sec-circle-check" cx="370" cy="150" r="8"/>
  <text class="sec-text-small" x="385" y="154">10. vsoutsideCallsettingsGaslimit</text>
  <circle class="sec-circle-check" cx="370" cy="170" r="8"/>
  <text class="sec-text-small" x="385" y="174">11. encodewritewholesurfaceUnit Test</text>
  <circle class="sec-circle-check" cx="370" cy="190" r="8"/>
  <text class="sec-text-small" x="385" y="194">12. useNatSpecfootnotedoc</text>
  <text class="sec-text-small" x="40" y="215" font-style="italic">⚠️ rememberlive: ContractDeploypostnocanrevise，Securityyesprimarythinkconsidercauseelem</text>
  <rect class="sec-box-tool" x="30" y="250" width="310" height="210" rx="4"/>
  <text class="sec-text" x="185" y="268" text-anchor="middle" font-weight="bold">Security Tools&service</text>
  <text class="sec-text" x="40" y="288" font-weight="bold">Static Analysistool:</text>
  <text class="sec-text-small" x="40" y="303">• Slither - Trail of Bitsdev</text>
  <text class="sec-text-small" x="40" y="316">• Mythril - ConsenSysdev</text>
  <text class="sec-text-small" x="40" y="329">• Securify - ETH Zurichdev</text>
  <text class="sec-text" x="40" y="348" font-weight="bold">Formal Verify:</text>
  <text class="sec-text-small" x="40" y="363">• Certora Prover</text>
  <text class="sec-text-small" x="40" y="376">• K Framework</text>
  <text class="sec-text" x="40" y="395" font-weight="bold">Testingframework:</text>
  <text class="sec-text-small" x="40" y="410">• Hardhat (JavaScript/TypeScript)</text>
  <text class="sec-text-small" x="40" y="423">• Foundry (Soliditynative)</text>
  <text class="sec-text-small" x="40" y="436">• Truffle (tradframework)</text>
  <rect class="sec-box-tool" x="360" y="250" width="310" height="210" rx="4"/>
  <text class="sec-text" x="515" y="268" text-anchor="middle" font-weight="bold">audit&Monitor</text>
  <text class="sec-text" x="370" y="288" font-weight="bold">dedicatedjobAudit Firms:</text>
  <text class="sec-text-small" x="370" y="303">• Trail of Bits</text>
  <text class="sec-text-small" x="370" y="316">• OpenZeppelin Security</text>
  <text class="sec-text-small" x="370" y="329">• ConsenSys Diligence</text>
  <text class="sec-text-small" x="370" y="342">• Quantstamp</text>
  <text class="sec-text-small" x="370" y="355">• CertiK</text>
  <text class="sec-text" x="370" y="374" font-weight="bold">chainUpMonitor:</text>
  <text class="sec-text-small" x="370" y="389">• Forta Network - real-timethreatcheckmeasure</text>
  <text class="sec-text-small" x="370" y="402">• Tenderly - Transaction模拟&Monitor</text>
  <text class="sec-text-small" x="370" y="415">• OZ Defender - Operationstool</text>
  <text class="sec-text-small" x="370" y="428">• Etherscan - ContractVerify&Monitor</text>
</svg>
</div>

### Common Vulnerabilities

1. **Reentrancy attack** — recursive call exploits unupdated state
2. **Integer overflow/underflow** — Solidity 0.8+ has built-in checks
3. **Access control bugs** — missing `onlyOwner` modifiers
4. **Front-running** — miners/validators can reorder transactions

### 2025-2026 New Attack Surfaces: ERC-4337 / EIP-7702 / Permit2

Old attacks (reentrancy, integer overflow) are rare with OpenZeppelin 5.1+. **In 2025-2026, 70%+ of contract thefts come from new attack surfaces:**

**1. EIP-7702 phishing (testnet first, 2025-09 mainnet)**

Attacker tricks user into signing an `AUTH` message, temporarily binding EOA to attacker's contract:
```solidity
// Attacker contract (simplified)
contract WalletDrainer7702 {
    function execute(address[] calldata targets, bytes[] calldata data) external {
        for (uint i = 0; i < targets.length; i++) {
            (bool ok,) = targets[i].call(data[i]);
            require(ok);
        }
    }
}
```

**Defenses**:
- Wallets must clearly show "temporarily upgrading EOA to smart contract" in the AUTH signing UI
- Any "confirm authorization" message must verify which contract address is being bound (Etherscan has integrated 7702 authorization check)
- High-value EOAs should use Safe (CBA mode) instead of 7702 temporary upgrades

**2. Permit2 signature abuse (2024-12 onward)**

Permit2 is Uniswap's universal approve protocol (sign once, use in all dApps), but it's being phished:
```solidity
// User tricked into signing Permit2: approve(attacker, type(uint256).max, deadline)
```

**2025 stats**: Permit2 + ERC-20 approve phishing alone caused $420M in losses.

**Defenses**:
- Permit2 defaults to 0 expiry (never expires); **wallets should enforce 7-30 day expiry**
- Big holders use Revoke.cash to periodically clean up
- Contracts can reject Permit2 without expiry: `require(deadline <= block.timestamp + 30 days)`

**3. ERC-4337 signature replay (2025-Q3 wave)**

If UserOperation's `signature` only contains `owner` signature, attackers can replay to another wallet (same `owner` multi-sig wallet):
```solidity
// Defense: UserOperation hash must include sender
bytes32 hash = keccak256(abi.encode(
    userOp.hash,                    // includes sender
    address(this),                  // entryPoint
    chainId                         // prevent cross-chain replay
));
```

**4. MEV automation**

2026 MEV is industrialized:
- **Atomic Arbitrage** — single tx multi-DEX arbitrage
- **Sandwich Attack** — front-run + back-run large swaps
- **Long-tail liquidation** — specialized bots for tail-end lending protocols

**Best defense**: use **MEV-Blocker** or **Flashbots Protect** private tx pools to bypass public mempool.

### 2025-2026 Contract Security Best Practices (Updated)

OpenZeppelin 5.1+, Solidity 0.8.25+, Foundry tests, Certora formal verification — the 2026 standard workflow:

```solidity
// ✅ Must use OpenZeppelin 5.1+ (transient-storage ReentrancyGuard + custom errors)
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/utils/Address.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

contract Vault is ReentrancyGuard, Ownable {
    using SafeERC20 for IERC20;

    mapping(address => uint256) private balances;

    error InsufficientBalance(uint256 available, uint256 required);
    error ZeroAddress();
    error ZeroAmount();

    function deposit(IERC20 token, uint256 amount) external nonReentrant {
        if (address(token) == address(0)) revert ZeroAddress();
        if (amount == 0) revert ZeroAmount();
        balances[msg.sender] += amount;
        token.safeTransferFrom(msg.sender, address(this), amount);
    }

    function withdraw(IERC20 token, uint256 amount) external nonReentrant {
        if (balances[msg.sender] < amount)
            revert InsufficientBalance({
                available: balances[msg.sender],
                required: amount
            });
        balances[msg.sender] -= amount;
        token.safeTransfer(msg.sender, amount);
    }
}
```

**Required toolchain (2026 standard)**:

| Tool | Purpose | 2026 Status |
|---|---|---|
| **Foundry** | Test + fuzz + invariant | Default, replaced Hardhat |
| **Slither** | Static analysis | CI-mandatory |
| **Echidna** | Property-based fuzzing | Required for complex contracts |
| **Certora** | Formal verification | Standard for large-value DeFi |
| **Mythril** | Symbolic execution | Mostly replaced by Slither |
| **Tenderly** | Debug + fork simulation | Tx tracing |
| **Forta** | On-chain monitoring | Required post-launch |
| **OpenZeppelin Defender** | Auto-ops + upgrades | Multi-sig projects |
| **Code Arena (Cantina)** | Crowdsourced audit | 2025 rising, 3x faster |

---

## 5.6 Smart Contract Application Scenarios

### DeFi Applications

- **Lending protocols**: Aave, Compound, Morpho (2026 — modular lending)
- **DEX**: Uniswap v4 (hooks), Curve, Balancer v3
- **Yield aggregators**: Yearn v3, Convex
- **Stablecoins**: MakerDAO (RWA), crvUSD, USDe (Ethena)
- **RWA**: Ondo, Maple, Centrifuge (tokenized treasuries/credit)

### NFT and Digital Assets

- **ERC-721 / ERC-1155**: collectibles, in-game items
- **ERC-4907**: rentable NFTs
- **ERC-6551**: Token Bound Accounts (NFT has smart account)
- **Music NFT**: Audius, Royal, Sound.xyz
- **RWA NFT**: Ondo, Polytrade, Backed Finance

### Other Applications

- **DAO governance**: Governor Bravo, OpenZeppelin Governor
- **Identity**: ENS, Lens Protocol, Farcaster
- **Supply chain**: Hyperledger Besu, VeChain
- **Gaming**: Big Time, Illuvium, Parallel

---

## 5.7 New Contract Paradigms: Account Abstraction / Intents / Modular

By 2026, contract development has moved past "write an ERC-20, deploy to Ethereum". Here are three paradigms reshaping the industry:

### 5.7.1 Account Abstraction (AA)

**Traditional EOA limitations**:
- A transaction can only call one contract
- Must pay gas in ETH
- Lost private key = lost assets
- No batch operations or social recovery

**ERC-4337 (finalized 2023-03, mainstreamed 2024-2025)** solves all of this:

**Core components**:
- **UserOperation** — replaces transaction with 13 fields including `sender`, `callData`, `signatureGas`
- **EntryPoint** — global singleton (0x0000000071727De22E5E9d8BAf0edAc6f37da032)
- **Bundler** — like mempool node but for UserOps (Flashbots, Alchemy, Biconomy, Stackup)
- **Paymaster** — gas-sponsoring contract (project can pay gas for users)
- **Account Contract** — user's wallet contract (implements `validateUserOp` and `execute`)

**Minimal AA wallet contract**:
```solidity
// Based on ERC-4337 v0.7
contract MinimalAccount is IAccount, Ownable {
    IEntryPoint public immutable entryPoint;

    constructor(IEntryPoint _entryPoint) Ownable(msg.sender) {
        entryPoint = _entryPoint;
    }

    function validateUserOp(
        PackedUserOperation calldata userOp,
        bytes32 userOpHash,
        uint256 missingAccountFunds
    ) external onlyEntryPoint returns (uint256 validationData) {
        return _validateSignature(userOp, userOpHash);
    }

    function _validateSignature(
        PackedUserOperation calldata userOp,
        bytes32 userOpHash
    ) internal view returns (uint256 validationData) {
        bytes32 hash = MessageHashUtils.toEthSignedMessageHash(userOpHash);
        if (ECDSA.recover(hash, userOp.signature) != owner()) {
            return SIG_VALIDATION_FAILED;
        }
        return 0; // success
    }

    function execute(address dest, uint256 value, bytes calldata func) external onlyEntryPoint {
        (bool success, bytes memory result) = dest.call{value: value}(func);
        if (!success) {
            assembly {
                revert(add(result, 32), mload(result))
            }
        }
    }

    modifier onlyEntryPoint() {
        require(msg.sender == address(entryPoint), "only EntryPoint");
        _;
    }
}
```

**Real-world deployment**:
- **Safe (formerly Gnosis Safe)** — 90%+ multi-sig scenarios use ERC-4337
- **Biconomy** — paymaster-as-a-service, gas-free for new users
- **ZeroDev** — kernel-mode AA with modular plugins
- **Alchemy Account Kit** — fully managed AA SDK
- **Stackup** — bundler-as-a-service
- **EIP-7702 (2025-05)** — EOA can temporarily upgrade to AA wallet (no contract deployment needed)

### 5.7.2 Intents — User says "what", solvers figure out "how"

**Traditional swap problem**: User must pick DEX, calculate path, pay gas, absorb MEV.

**Intent model**: User signs "I want to trade 100 USDC for ≥ 0.025 ETH", solvers bid to fill.

**ERC-7683 (finalized 2024-11, mainstreamed 2025-2026)** — cross-chain intent standard:
```solidity
// User's signed order (simplified)
struct CrossChainOrder {
    address owner;
    uint256 srcChainId;
    uint256 dstChainId;
    address srcToken;
    address dstToken;
    uint256 srcAmount;
    uint256 minDstAmount;
    uint256 deadline;
    bytes32 salt;
}
```

**Mainstream intent protocols**:

| Protocol | Type | 2026 Status |
|---|---|---|
| **UniswapX** | In-chain intent, Dutch auction | $5B+ monthly volume |
| **1inch Fusion** | In-chain intent, Dutch auction | Top solver |
| **CoW Swap** | Batch settlement + coincidence-of-wants | Top 5 DEX |
| **Across Protocol** | Cross-chain intent, optimizer (not Dutch) | Mainstream bridge |
| **deBridge DLN** | Cross-chain intent | Fast growing |
| **Symbiosis** | Cross-chain intent + DEX aggregation | Big in Asia |
| **Squid Router** | Axelar-based cross-chain intent | High integration |
| **KIP Protocol** | AI-driven intent | 2025-Q4 newcomer |

**Intent + AA combo** — the hottest 2026 paradigm. Safe + Across lets users **one UserOp** "swap with Safe wallet on Base, CoW as solver, bridge to Arbitrum" — fully hands-off.

### 5.7.3 Modular Contracts — Diamond Standard (EIP-2535)

Traditional single-file contracts hit the 24KB size limit; options were either to fork or migrate. **Diamond Standard** uses "main contract + multiple facets" for unlimited extensibility:

```solidity
// Diamond main contract (simplified)
contract Diamond {
    mapping(bytes4 => address) public facetAddress;
    mapping(bytes4 => bytes4) public selectors;
    mapping(address => mapping(bytes4 => bool)) public supportedInterfaces;

    fallback() external payable {
        address facet = facetAddress[msg.sig];
        require(facet != address(0), "Diamond: Function does not exist");
        assembly {
            calldatacopy(0, 0, calldatasize())
            let result := delegatecall(gas(), facet, 0, calldatasize(), 0, 0)
            returndatacopy(0, 0, returndatasize())
            switch result
                case 0 { revert(0, returndatasize()) }
                default { return(0, returndatasize()) }
        }
    }
}

// ERC-2535 facets
contract LiquidityFacet { /* ... */ }
contract GovernanceFacet { /* ... */ }
contract SecurityFacet { /* ... */ }
contract L2BridgeFacet { /* ... */ }
```

**2026 real cases**:
- **Aavegotchi** — Diamond upgrade for game contracts
- **ApeCoin DAO** — Diamond for airdrop + staking + governance
- **ERC-6551 (Token Bound Accounts)** — every NFT has a smart account, Diamond pattern

### 5.7.4 Real-world Example: CCBus Multi-Function Token = Modular Contract Blueprint

Back to the CCBus Multi-Function Token from this chapter's opening — it's essentially a **small modular contract**:
- Main contract is `MultiFunctionToken` (Diamond-like)
- Internal facet split: **TransferFacet**, **DividendFacet**, **BurnFacet**, **ReferralFacet**, **WhitelistFacet**, **AntiBotFacet**
- Each facet is independently upgradeable, independently pausable

CCBus's **single-contract-multi-facet** pattern is the 2026 mainstream for token contracts — not "stack all logic in one `.sol` file".

---

## Summary

### Key Takeaways

- Smart contracts are self-executing programs on the blockchain — code is law
- EVM is the dominant execution environment; 2026 saw Cancun/Pectra/Fusaka hard forks reshape it
- Solidity 0.8.25+ requires custom errors, transient storage, PUSH0 as baseline
- ERC-4337, EIP-7702, ERC-7683 are the new contract paradigms of 2026
- 70%+ of 2025-2026 attacks target new surfaces: 7702 phishing, Permit2 abuse, ERC-4337 replay
- Modular contracts (Diamond Standard) and Intent-based protocols define modern DeFi

### Next Steps

Continue to [Chapter 6: Blockchain Architecture](/en/chapter-6) to learn about execution, settlement, consensus, and data-availability layers in the modular-blockchain era.

<div class="ccbus-teacher-credits">
  <div class="ccbus-teacher-credits-avatar">
    <img src="../public/images/avatars/heroes/ether-engineer.png" alt="Ether Engineer" />
  </div>
  <div class="ccbus-teacher-credits-body">

    Taught by: <strong>Ether Engineer</strong> — The "foreman" of smart contracts — code is craft<br />
    <span style="font-size: 0.85em; color: var(--vp-c-text-3);">📚 The next chapter [Chapter 6: Blockchain Architecture] will be taught by another CCBus guide.</span>
  </div>
</div>

<div style="background: rgba(52, 81, 178, 0.06); padding: 1.5em; border-radius: 4px; margin: 2em 0;">
<svg class="svg-5-2" viewBox="0 0 700 450" xmlns="http://www.w3.org/2000/svg" style="width: 100%; max-width: 800px; display: block; margin: 0 auto;">
<defs>
<style>
      .svg-5-2 .evm-text-title { font-family: arial, sans-serif; font-size: 14px; fill: #1f2937; font-weight: bold; }
      .svg-5-2 .evm-text { font-family: arial, sans-serif; font-size: 10px; fill: #1f2937; }
      .svg-5-2 .evm-text-small { font-family: arial, sans-serif; font-size: 8px; fill: #1f2937; }
      .svg-5-2 .evm-box-main { fill: rgba(76, 156, 232, 0.25); stroke: #4c9be8; stroke-width: 1.5; }
      .svg-5-2 .evm-box-component { fill: rgba(223, 105, 25, 0.08); stroke: #df6919; stroke-width: 1; }
      .svg-5-2 .evm-box-storage { fill: rgba(92, 184, 92, 0.10); stroke: #5cb85c; stroke-width: 1; }
      .svg-5-2 .evm-line { stroke: #4c9be8; stroke-width: 1; fill: none; }
    </style>
    <marker id="evm-arrow" markerWidth="6" markerHeight="6" refX="6" refY="3" orient="auto">
      <polygon points="0 0, 6 3, 0 6" fill="#4c9be8"/>
    </marker>
  </defs>
  <text class="evm-text-title" x="350" y="25" text-anchor="middle">EVM (EVM) architecture</text>
  <rect class="evm-box-main" x="50" y="50" width="600" height="360" rx="6"/>
  <text class="evm-text" x="350" y="72" text-anchor="middle" font-weight="bold">Ethereum Virtual Machine (EVM)</text>
  <rect class="evm-box-component" x="70" y="90" width="250" height="100" rx="4"/>
  <text class="evm-text" x="195" y="108" text-anchor="middle" font-weight="bold">Executeenv (Execution Context)</text>
  <text class="evm-text-small" x="80" y="125">• Bytecodeinterpreter (Bytecode Interpreter)</text>
  <text class="evm-text-small" x="80" y="138">• OpcodeExecuteer (Opcode Executor)</text>
  <text class="evm-text-small" x="80" y="151">• Gasplanmeasureer (Gas Metering)</text>
  <text class="evm-text-small" x="80" y="164">• stackmechanism (Stack-based)</text>
  <text class="evm-text-small" x="80" y="177">  - mostLargedepth: 1024</text>
  <rect class="evm-box-component" x="380" y="90" width="250" height="100" rx="4"/>
  <text class="evm-text" x="505" y="108" text-anchor="middle" font-weight="bold">memmgmt (Memory)</text>
  <text class="evm-text-small" x="390" y="125">• easylosenaturemem (Volatile Memory)</text>
  <text class="evm-text-small" x="390" y="138">  - TransactionExecutionbetweenExists</text>
  <text class="evm-text-small" x="390" y="151">  - linenaturesearchaddress</text>
  <text class="evm-text-small" x="390" y="164">  - pressneedscale</text>
  <text class="evm-text-small" x="390" y="177">• GasCostwithusemeasureincreaseadd</text>
  <rect class="evm-box-storage" x="70" y="210" width="250" height="110" rx="4"/>
  <text class="evm-text" x="195" y="228" text-anchor="middle" font-weight="bold">Storage (Storage)</text>
  <text class="evm-text-small" x="80" y="245">• support久ifyStorage (Persistent Storage)</text>
  <text class="evm-text-small" x="80" y="258">  - keyvaluevsMapping (Key-Value Mapping)</text>
  <text class="evm-text-small" x="80" y="271">  - 256bitkey → 256bitvalue</text>
  <text class="evm-text-small" x="80" y="284">• HighGasCost</text>
  <text class="evm-text-small" x="80" y="297">  - SSTORE: ~20,000 Gas</text>
  <text class="evm-text-small" x="80" y="310">  - SLOAD: ~2,100 Gas</text>
  <rect class="evm-box-storage" x="380" y="210" width="250" height="110" rx="4"/>
  <text class="evm-text" x="505" y="228" text-anchor="middle" font-weight="bold">CallData (Calldata)</text>
  <text class="evm-text-small" x="390" y="245">• Functionparamtransmitdeliver (Function Arguments)</text>
  <text class="evm-text-small" x="390" y="258">• nocanrevise (Immutable)</text>
  <text class="evm-text-small" x="390" y="271">• LowGasCostreadtake</text>
  <text class="evm-text-small" x="390" y="284">• containsFunctionChooseer (4Bytes)</text>
  <text class="evm-text-small" x="390" y="297">  + encodecodeparam</text>
  <rect class="evm-box-component" x="70" y="340" width="250" height="60" rx="4"/>
  <text class="evm-text" x="195" y="358" text-anchor="middle" font-weight="bold">journeyserialplanevener (PC)</text>
  <text class="evm-text-small" x="80" y="375">• indicatetowardcurrentExecuteBytecodebitplace</text>
  <text class="evm-text-small" x="80" y="388">• Supportjumpconvertindicatelet (JUMP, JUMPI)</text>
  <rect class="evm-box-component" x="380" y="340" width="250" height="60" rx="4"/>
  <text class="evm-text" x="505" y="358" text-anchor="middle" font-weight="bold">Gas mechanism</text>
  <text class="evm-text-small" x="390" y="375">• peropconsumefixedGas</text>
  <text class="evm-text-small" x="390" y="388">• preventNonelimitfollowring&DoSattack</text>
  <rect x="60" y="420" width="580" height="20" rx="3" fill="rgba(223, 105, 25, 0.06)" stroke="#df6919" stroke-width="1"/>
  <text class="evm-text-small" x="350" y="434" text-anchor="middle" font-style="italic">EVMyesgraph灵doneprepareDeterministicStatemachine - sameInputtotalyesproducelifesameOutput</text>
</svg>
</div>

<div style="background: rgba(52, 81, 178, 0.06); padding: 1.5em; border-radius: 4px; margin: 2em 0;">
<svg class="svg-5-4" viewBox="0 0 750 550" xmlns="http://www.w3.org/2000/svg" style="width: 100%; max-width: 800px; display: block; margin: 0 auto;">
<defs>
<style>
      .svg-5-4 .pat-text-title { font-family: arial, sans-serif; font-size: 14px; fill: #1f2937; font-weight: bold; }
      .svg-5-4 .pat-text { font-family: arial, sans-serif; font-size: 10px; fill: #1f2937; }
      .svg-5-4 .pat-text-small { font-family: arial, sans-serif; font-size: 8px; fill: #1f2937; }
      .svg-5-4 .pat-box-pattern { fill: rgba(52, 81, 178, 0.10); stroke: #4c9be8; stroke-width: 1; }
      .svg-5-4 .pat-box-security { fill: rgba(223, 105, 25, 0.08); stroke: #df6919; stroke-width: 1; }
      .svg-5-4 .pat-box-gas { fill: rgba(92, 184, 92, 0.10); stroke: #5cb85c; stroke-width: 1; }
    </style>
</defs>
  <text class="pat-text-title" x="375" y="25" text-anchor="middle">Smart Contractoftenusedesign pattern</text>
  <rect class="pat-box-pattern" x="30" y="50" width="220" height="140" rx="4"/>
  <text class="pat-text" x="140" y="68" text-anchor="middle" font-weight="bold">1. Access Controlpattern</text>
  <text class="pat-text-small" x="40" y="85">purpose: limitFunction访askPermission</text>
  <text class="pat-text-small" x="40" y="100" font-weight="bold">implementmethod:</text>
  <text class="pat-text-small" x="40" y="113">• Ownable: singleallagent</text>
  <text class="pat-text-small" x="40" y="126">• Role-Based: Role-based</text>
  <text class="pat-text-small" x="40" y="139">• Whitelist/Blacklist</text>
  <text class="pat-text-small" x="40" y="155" font-weight="bold">Example:</text>
  <text class="pat-text-small" x="40" y="168" font-family="monospace">modifier onlyOwner() {</text>
  <text class="pat-text-small" x="50" y="180" font-family="monospace">require(msg.sender==owner);</text>
  <rect class="pat-box-pattern" x="270" y="50" width="220" height="140" rx="4"/>
  <text class="pat-text" x="380" y="68" text-anchor="middle" font-weight="bold">2. proposetakepattern (Pull)</text>
  <text class="pat-text-small" x="280" y="85">purpose: avoidexemptReentrancy</text>
  <text class="pat-text-small" x="280" y="100" font-weight="bold">corethinkthought:</text>
  <text class="pat-text-small" x="280" y="113">• UserActiveproposetakefunds</text>
  <text class="pat-text-small" x="280" y="126">• butnoContractPush</text>
  <text class="pat-text-small" x="280" y="139">• recordtreatproposetakeBalance</text>
  <text class="pat-text-small" x="280" y="155" font-weight="bold">Example:</text>
  <text class="pat-text-small" x="280" y="168" font-family="monospace">mapping(address => uint)</text>
  <text class="pat-text-small" x="290" y="180" font-family="monospace">pendingWithdrawals;</text>
  <rect class="pat-box-pattern" x="510" y="50" width="220" height="140" rx="4"/>
  <text class="pat-text" x="620" y="68" text-anchor="middle" font-weight="bold">3. Statemachinepattern</text>
  <text class="pat-text-small" x="520" y="85">purpose: mgmtContractlife命Epoch</text>
  <text class="pat-text-small" x="520" y="100" font-weight="bold">Stateconvertswap:</text>
  <text class="pat-text-small" x="520" y="113">• Created → Active</text>
  <text class="pat-text-small" x="520" y="126">• Active → Paused</text>
  <text class="pat-text-small" x="520" y="139">• Paused → Terminated</text>
  <text class="pat-text-small" x="520" y="155" font-weight="bold">Example:</text>
  <text class="pat-text-small" x="520" y="168" font-family="monospace">enum State { Created,</text>
  <text class="pat-text-small" x="530" y="180" font-family="monospace">Active, Paused }</text>
  <rect class="pat-box-security" x="30" y="210" width="220" height="150" rx="4"/>
  <text class="pat-text" x="140" y="228" text-anchor="middle" font-weight="bold">4. CEI</text>
  <text class="pat-text" x="140" y="243" text-anchor="middle">(CEI)</text>
  <text class="pat-text-small" x="40" y="258">purpose: preventReentrancy</text>
  <text class="pat-text-small" x="40" y="273" font-weight="bold">Executealongserial:</text>
  <text class="pat-text-small" x="40" y="286">1. Checks: Verifycondition</text>
  <text class="pat-text-small" x="40" y="299">   require, assert</text>
  <text class="pat-text-small" x="40" y="312">2. Effects: moreNewState</text>
  <text class="pat-text-small" x="40" y="325">   revisestoragechangemeasure</text>
  <text class="pat-text-small" x="40" y="338">3. Interactions: outsideCall</text>
  <text class="pat-text-small" x="40" y="351">   call, transfer, send</text>
  <rect class="pat-box-security" x="270" y="210" width="220" height="150" rx="4"/>
  <text class="pat-text" x="380" y="228" text-anchor="middle" font-weight="bold">5. Pausablepattern</text>
  <text class="pat-text-small" x="280" y="245">purpose: responsevsurgentthingcondition</text>
  <text class="pat-text-small" x="280" y="260" font-weight="bold">implementmethod:</text>
  <text class="pat-text-small" x="280" y="273">• Pause/recovercompletecanbeginclose</text>
  <text class="pat-text-small" x="280" y="286">• onlyadmincanop</text>
  <text class="pat-text-small" x="280" y="299">• protectUserasset</text>
  <text class="pat-text-small" x="280" y="315" font-weight="bold">Example:</text>
  <text class="pat-text-small" x="280" y="328" font-family="monospace">bool public stopped;</text>
  <text class="pat-text-small" x="280" y="340" font-family="monospace">modifier stopInEmergency {</text>
  <text class="pat-text-small" x="290" y="352" font-family="monospace">require(!stopped);</text>
  <rect class="pat-box-security" x="510" y="210" width="220" height="150" rx="4"/>
  <text class="pat-text" x="620" y="228" text-anchor="middle" font-weight="bold">6. limitfastpattern</text>
  <text class="pat-text-small" x="520" y="245">purpose: limitfundsflowmovespeed</text>
  <text class="pat-text-small" x="520" y="260" font-weight="bold">Use Cases:</text>
  <text class="pat-text-small" x="520" y="273">• proposetakelimitplaque</text>
  <text class="pat-text-small" x="520" y="286">• Timelockdecide</text>
  <text class="pat-text-small" x="520" y="299">• chasesteprelease</text>
  <text class="pat-text-small" x="520" y="315" font-weight="bold">Example:</text>
  <text class="pat-text-small" x="520" y="328" font-family="monospace">uint256 public</text>
  <text class="pat-text-small" x="530" y="340" font-family="monospace">maxWithdrawPerDay;</text>
  <text class="pat-text-small" x="530" y="352" font-family="monospace">lastWithdrawTime;</text>
  <rect class="pat-box-gas" x="30" y="380" width="220" height="150" rx="4"/>
  <text class="pat-text" x="140" y="398" text-anchor="middle" font-weight="bold">7. factorypattern</text>
  <text class="pat-text-small" x="40" y="415">purpose: approvemeasurecreatesuggestContract</text>
  <text class="pat-text-small" x="40" y="430" font-weight="bold">Pros:</text>
  <text class="pat-text-small" x="40" y="443">• uniteunitemgmt</text>
  <text class="pat-text-small" x="40" y="456">• dropLowDeployCost</text>
  <text class="pat-text-small" x="40" y="469">• versioncontrol</text>
  <text class="pat-text-small" x="40" y="485" font-weight="bold">Example:</text>
  <text class="pat-text-small" x="40" y="498" font-family="monospace">function createToken()</text>
  <text class="pat-text-small" x="50" y="510" font-family="monospace">returns (address) {</text>
  <text class="pat-text-small" x="60" y="522" font-family="monospace">return new Token();</text>
  <rect class="pat-box-gas" x="270" y="380" width="220" height="150" rx="4"/>
  <text class="pat-text" x="380" y="398" text-anchor="middle" font-weight="bold">8. Proxy Pattern</text>
  <text class="pat-text-small" x="280" y="415">purpose: ImplementationUpgrade</text>
  <text class="pat-text-small" x="280" y="430" font-weight="bold">Type:</text>
  <text class="pat-text-small" x="280" y="443">• Transparent Proxy</text>
  <text class="pat-text-small" x="280" y="456">• UUPS (Universal Upgradeable)</text>
  <text class="pat-text-small" x="280" y="469">• Beaconproxy</text>
  <text class="pat-text-small" x="280" y="485" font-weight="bold">core:</text>
  <text class="pat-text-small" x="280" y="498" font-family="monospace">delegatecall() delegateCall</text>
  <text class="pat-text-small" x="280" y="510">protect留prairieContractStorage Layout</text>
  <rect class="pat-box-gas" x="510" y="380" width="220" height="150" rx="4"/>
  <text class="pat-text" x="620" y="398" text-anchor="middle" font-weight="bold">9. Dataminleavepattern</text>
  <text class="pat-text-small" x="520" y="415">purpose: minleavelogical&Data</text>
  <text class="pat-text-small" x="520" y="430" font-weight="bold">structure:</text>
  <text class="pat-text-small" x="520" y="443">• DataContract: StorageState</text>
  <text class="pat-text-small" x="520" y="456">• Logic: businesslogical</text>
  <text class="pat-text-small" x="520" y="469">• controlContract: Permission</text>
  <text class="pat-text-small" x="520" y="485" font-weight="bold">Pros:</text>
  <text class="pat-text-small" x="520" y="498">• Upgradeflexible</text>
  <text class="pat-text-small" x="520" y="510">• Datasupport久ify</text>
  <text class="pat-text-small" x="520" y="522">• dropLowGasCost</text>
</svg>
</div>
