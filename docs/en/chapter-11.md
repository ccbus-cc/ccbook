---
title: "Chapter 11: NFTs and Digital Assets"
---

<div class="ccbus-hero">
  <div class="ccbus-hero-avatar">
    <img src="../public/images/avatars/heroes/token-builder.png" alt="Token Builder" />
  </div>
  <div class="ccbus-hero-content">
    <h1>Chapter 11: NFTs and Digital Assets</h1>
    <div class="ccbus-teacher-label">🎙️ Taught by:<strong>Token Builder</strong> · The NFT/digital-assets "construction foreman" — builds with you</div>
  </div>
</div>

<div class="chapter-intro">

**Difficulty Level:** 🟡 Intermediate
**Estimated Learning Time:** 4-5 hours

**Chapter Objectives:**
- Understand NFT fundamentals
- Learn token standards
- Explore NFT applications
- Master digital asset tokenization

</div>


## 11.0 2025-2026 Perspective: Why Reread This Chapter

NFT in 2025-2026 has evolved from JPEG collectibles to **RWA, SBT, on-chain ticketing, Music NFT, GameFi assets**. Key 2026 changes:

1. **ERC-721/1155 still dominant, but new standards rising fast**:
   - **ERC-4907** (rentable NFT): standard for gaming, ticketing
   - **ERC-6551** (Token Bound Accounts): each NFT has its own smart contract account
   - **ERC-7656** (off-chain fingerprints): bridges traditional IP protection with NFT
   - **ERC-5114** (Soulbound Badge): soulbound credentials

2. **RWA-NFT mainstreaming**:
   - **Ondo OUSG**: NFT for US Treasury share
   - **Centrifuge**: tokenize private credit as NFT
   - **Polytrade**: tokenize accounts receivable
   - **2026 stats**: $8B+ RWA-NFT on-chain (vs $1B in 2024)

3. **SBT (Soulbound Token)**:
   - **Applications**: education certificates (Columbia, HKUST), identity (Worldcoin), reputation (decentralized credit scoring)
   - **Non-transferability**: enables "non-financial assets" on-chain
   - **2026 real projects**: Galxe Passport, Linea Voyager, Lens Profile

4. **Music NFT renaissance**:
   - **Audius** (2024 mainnet) integrates Spotify-style streaming
   - **Royal** (acquired by Decca Records 2024-Q3)
   - **Sound.xyz** (2024-Q4) partnership with Universal Music
   - **2026 stats**: independent musicians earn $500M+ via NFT

5. **GameFi assets**:
   - **Big Time** (2024 mainnet), Guild of Guardians, Sandbox
   - **Illuvium** (2024-Q4 mainnet) 3A-grade chain game
   - **Parallel** (2024 AI integration) on-chain TCG
   - **2026 real data**: GameFi daily active players broke 3M

## 11.1 Non-Fungible Tokens (NFTs)

**NFTs** are unique digital assets with verifiable ownership and scarcity.


<div style="background: rgba(52, 81, 178, 0.06); padding: 1.5em; border-radius: 4px; margin: 2em 0;">
<svg class="svg-11-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 370">
<defs>
<style>
.svg-11-0 .nft-ft-title { font: bold 13px arial, sans-serif; fill: #4c9be8; }
.svg-11-0 .nft-ft-subtitle { font: 12px arial, sans-serif; fill: #1f2937; }
.svg-11-0 .nft-ft-label { font: 11px arial, sans-serif; fill: #1f2937; }
.svg-11-0 .nft-ft-label-sm { font: 9px arial, sans-serif; fill: #1f2937; }
.svg-11-0 .nft-ft-box { fill: rgba(52, 81, 178, 0.05); stroke: #4c9be8; stroke-width: 1; }
.svg-11-0 .nft-ft-unique { fill: rgba(223, 105, 25, 0.05); stroke: #df6919; stroke-width: 1; }
.svg-11-0 .nft-ft-coin { fill: rgba(245, 194, 66, 0.50); stroke: #b8860b; stroke-width: 1; }
.svg-11-0 .nft-ft-art { fill: rgba(147, 112, 219, 0.3); stroke: #9370db; stroke-width: 1; }
</style>
</defs>
<text x="400" y="20" class="nft-ft-title" text-anchor="middle">FT vs NFT</text>
<text x="200" y="45" class="nft-ft-subtitle" text-anchor="middle">Fungible Token (FT)</text>
<text x="600" y="45" class="nft-ft-subtitle" text-anchor="middle">Non-Fungible Token (NFT)</text>
<g id="ft-section">
<circle cx="150" cy="85" r="22" class="nft-ft-coin"/>
<text x="150" y="92" class="nft-ft-label" text-anchor="middle" font-weight="bold">ETH</text>
<circle cx="250" cy="85" r="22" class="nft-ft-coin"/>
<text x="250" y="92" class="nft-ft-label" text-anchor="middle" font-weight="bold">ETH</text>
<text x="200" y="125" class="nft-ft-label" text-anchor="middle">1 ETH = 1 ETH</text>
<text x="200" y="140" class="nft-ft-label-sm" text-anchor="middle">fullycanmutualswap</text>
<rect x="50" y="160" width="300" height="195" class="nft-ft-box" rx="4"/>
<text x="200" y="180" class="nft-ft-label" text-anchor="middle" font-weight="bold">Features：</text>
<text x="60" y="200" class="nft-ft-label">• Divisible (Divisible)</text>
<text x="60" y="217" class="nft-ft-label">• canmutualswap (Interchangeable)</text>
<text x="60" y="234" class="nft-ft-label">• uniteunitevalue (Uniform Value)</text>
<text x="60" y="251" class="nft-ft-label">• Fungible (Homogeneous)</text>
<text x="60" y="275" class="nft-ft-label-sm" font-weight="bold">Example：</text>
<text x="60" y="290" class="nft-ft-label-sm">• ETH: EthereumnativeToken</text>
<text x="60" y="304" class="nft-ft-label-sm">• USDT: Stablecoin</text>
<text x="60" y="318" class="nft-ft-label-sm">• BTC: Bitcoin</text>
<text x="60" y="332" class="nft-ft-label-sm">• USDC: perfecteraStablecoin</text>
<text x="60" y="346" class="nft-ft-label-sm">Anyuniteoddbitvaluesame</text>
</g>
<g id="nft-section">
<rect x="520" y="70" width="60" height="75" class="nft-ft-art" rx="3"/>
<text x="550" y="105" class="nft-ft-label" text-anchor="middle">#001</text>
<text x="550" y="118" class="nft-ft-label-sm" text-anchor="middle">CryptoPunk</text>
<rect x="600" y="70" width="60" height="75" class="nft-ft-art" rx="3"/>
<text x="630" y="105" class="nft-ft-label" text-anchor="middle">#8888</text>
<text x="630" y="118" class="nft-ft-label-sm" text-anchor="middle">BAYC</text>
<text x="590" y="160" class="nft-ft-label" text-anchor="middle">#001 ≠ #8888</text>
<text x="590" y="173" class="nft-ft-label-sm" text-anchor="middle">aloneuniteNonetwo</text>
<rect x="450" y="190" width="300" height="165" class="nft-ft-unique" rx="4"/>
<text x="600" y="210" class="nft-ft-label" text-anchor="middle" font-weight="bold">Features：</text>
<text x="460" y="230" class="nft-ft-label">• Indivisible (Indivisible)</text>
<text x="460" y="247" class="nft-ft-label">• alonefeature (Unique)</text>
<text x="460" y="264" class="nft-ft-label">• canVerifyScarce (Provable Scarcity)</text>
<text x="460" y="281" class="nft-ft-label">• nocanmutualswap (Non-interchangeable)</text>
<text x="460" y="305" class="nft-ft-label-sm" font-weight="bold">Example：</text>
<text x="460" y="320" class="nft-ft-label-sm">• digitalArt (Beeple, XCOPY)</text>
<text x="460" y="334" class="nft-ft-label-sm">• virtualLand (Decentraland, Sandbox)</text>
<text x="460" y="348" class="nft-ft-label-sm">• Game Items (Axie Infinity, Gods Unchained)</text>
</g>
</svg>
</div>

<div style="background: rgba(52, 81, 178, 0.06); padding: 1.5em; border-radius: 4px; margin: 2em 0;">
<svg class="svg-11-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 550">
<defs>
<style>
.svg-11-2 .app-title { font: bold 13px arial, sans-serif; fill: #4c9be8; }
.svg-11-2 .app-cat-title { font: bold 12px arial, sans-serif; fill: #1f2937; }
.svg-11-2 .app-label { font: 11px arial, sans-serif; fill: #1f2937; }
.svg-11-2 .app-label-sm { font: 9px arial, sans-serif; fill: #1f2937; }
.svg-11-2 .app-box-art { fill: rgba(147, 112, 219, 0.15); stroke: #9370db; stroke-width: 1; }
.svg-11-2 .app-box-game { fill: rgba(223, 105, 25, 0.06); stroke: #df6919; stroke-width: 1; }
.svg-11-2 .app-box-metaverse { fill: rgba(52, 81, 178, 0.07); stroke: #4c9be8; stroke-width: 1; }
.svg-11-2 .app-box-identity { fill: rgba(92, 184, 92, 0.07); stroke: #5cb85c; stroke-width: 1; }
.svg-11-2 .app-box-utility { fill: rgba(240, 173, 78, 0.15); stroke: #f0ad4e; stroke-width: 1; }
.svg-11-2 .app-box-finance { fill: rgba(217, 83, 79, 0.15); stroke: #d9534f; stroke-width: 1; }
</style>
</defs>
<text x="450" y="18" class="app-title" text-anchor="middle">NFT Appsscenarioecograph (2025)</text>
<g id="art-collectibles">
<rect x="20" y="35" width="275" height="135" class="app-box-art" rx="4"/>
<text x="157" y="53" class="app-cat-title" text-anchor="middle">🎨 digitalArt & Collectible</text>
<text x="30" y="72" class="app-label-sm">• CryptoPunks: 10KimageelemAvatar, Floor Price $100K+</text>
<text x="30" y="86" class="app-label-sm">• Beeple Everydays: $69M (Christie's patsell)</text>
<text x="30" y="100" class="app-label-sm">• Art Blocks: generateArt, castmakei.e.inscribe呈appear</text>
<text x="30" y="114" class="app-label-sm">• NBA Top Shot: spherestaressencecolorful瞬between, 210010K+User</text>
<text x="30" y="128" class="app-label-sm">• Azuki: daytypemove漫windcell, strongcommunity</text>
<text x="30" y="148" class="app-label" font-weight="bold">Market Cap: ~$8B | Volume: $2B/month</text>
<text x="30" y="162" class="app-label-sm" fill="#9370db">royaltymechanism: Artfamilypermanentobtainprofit 2.5-10%</text>
</g>
<g id="gaming">
<rect x="310" y="35" width="275" height="135" class="app-box-game" rx="4"/>
<text x="447" y="53" class="app-cat-title" text-anchor="middle">🎮 Game Items & P2E</text>
<text x="320" y="72" class="app-label-sm">• Axie Infinity: 宠thingvswar, peakdayrevenue$20M</text>
<text x="320" y="86" class="app-label-sm">• StepN: edgerunedgeearn, 90010K+User</text>
<text x="320" y="100" class="app-label-sm">• Gods Unchained: cardplaqueGaming, truepositiveallright</text>
<text x="320" y="114" class="app-label-sm">• Immutable X: GamingdedicatedL2, Gas fee $0</text>
<text x="320" y="128" class="app-label-sm">• Illuvium: AAAgradeRPG, voidillusionguideengine5</text>
<text x="320" y="148" class="app-label" font-weight="bold">Market Cap: ~$5B | aliveleap玩family: 20010K+</text>
<text x="320" y="162" class="app-label-sm" fill="#df6919">trend: from P2E converttoward P&E</text>
</g>
<g id="metaverse">
<rect x="600" y="35" width="280" height="135" class="app-box-metaverse" rx="4"/>
<text x="740" y="53" class="app-cat-title" text-anchor="middle">🌐 Metaverse & virtualfloorproduce</text>
<text x="610" y="72" class="app-label-sm">• Decentraland: LANDfloorpiece, oddpiecemostHigh$2.4M</text>
<text x="610" y="86" class="app-label-sm">• The Sandbox: 166,464pieceLand, canencodejourneyGaming</text>
<text x="610" y="100" class="app-label-sm">• Otherside: Yuga Labs Metaverse, $300Mfinance</text>
<text x="610" y="114" class="app-label-sm">• Somnium Space: VRVirtual World, Oculuscompat</text>
<text x="610" y="128" class="app-label-sm">• Worldwide Webb: imageelemwind, wholefitManyNFTproject</text>
<text x="610" y="148" class="app-label" font-weight="bold">Market Cap: ~$3B | virtualLand: 5010K+piece</text>
<text x="610" y="162" class="app-label-sm" fill="#4c9be8">App: virtualperformsingcan, itemplaque展hall, virtualhandlemale</text>
</g>
<g id="identity">
<rect x="20" y="185" width="275" height="135" class="app-box-identity" rx="4"/>
<text x="157" y="203" class="app-cat-title" text-anchor="middle">🆔 Digital ID & Domainservice</text>
<text x="30" y="222" class="app-label-sm">• ENS: EthereumDomain, vitalik.eth, 23010K+register</text>
<text x="30" y="236" class="app-label-sm">• Unstoppable Domains: .crypto, .nft, Decentralization</text>
<text x="30" y="250" class="app-label-sm">• Lens Protocol: Web3社交graphsheet, portableIdentity</text>
<text x="30" y="264" class="app-label-sm">• POAP: outputmatProof, alivemoveerathought徽article</text>
<text x="30" y="278" class="app-label-sm">• Galxe: chainUpVCSystem, nullinvestDistribute</text>
<text x="30" y="298" class="app-label" font-weight="bold">ENSrevenue: $50M+ | POAPemitrow: 60010K+</text>
<text x="30" y="312" class="app-label-sm" fill="#5cb85c">value: stepPlatformIdentity, censorship-resistant</text>
</g>
<g id="utility">
<rect x="310" y="185" width="275" height="135" class="app-box-utility" rx="4"/>
<text x="447" y="203" class="app-cat-title" text-anchor="middle">🎫 Utilitytype NFT</text>
<text x="320" y="222" class="app-label-sm">• alivemovedoorticket: preventfake+twogradeMarket, royaltygivePrimaryhandleplace</text>
<text x="320" y="236" class="app-label-sm">• Membershipcard: VIPStake, canTransaction (e.g. Bored Ape Yacht Club)</text>
<text x="320" y="250" class="app-label-sm">• 课journeyCertificate: nocanfakemakeschool历Proof</text>
<text x="320" y="264" class="app-label-sm">• softwarepermitcan: prevent盗edition, convert售Market</text>
<text x="320" y="278" class="app-label-sm">• protectfixcard: 奢侈itemtrueitemProof (LVMH Aura)</text>
<text x="320" y="298" class="app-label" font-weight="bold">App: solve盗edition, suggeststandtwogradeMarket</text>
<text x="320" y="312" class="app-label-sm" fill="#f0ad4e">case: Coachella Musicsection NFT doorticket</text>
</g>
<g id="finance">
<rect x="600" y="185" width="280" height="135" class="app-box-finance" rx="4"/>
<text x="740" y="203" class="app-cat-title" text-anchor="middle">💵 Finance NFT (NFT-Fi)</text>
<text x="610" y="222" class="app-label-sm">• Uniswap V3 LP: Liquiditypier寸NFTify, canTransaction</text>
<text x="610" y="236" class="app-label-sm">• BondsNFT: fixedreturnproduceitem, Porter Finance</text>
<text x="610" y="250" class="app-label-sm">• roomproduceNFT: RWATokenized, PropyPlatform</text>
<text x="610" y="264" class="app-label-sm">• NFTCollateral Lend: Blur Blend, NFTfi, BendDAO</text>
<text x="610" y="278" class="app-label-sm">• NFT租赁: reNFT, Game Itemsshort租</text>
<text x="610" y="298" class="app-label" font-weight="bold">NFT-Fi TVL: $500M+ | 贷fundInterest Rate: 20-40%</text>
<text x="610" y="312" class="app-label-sm" fill="#d9534f">At Risk: Liquiditynofoot, PricewavemoveLarge</text>
</g>
<g id="trends">
<rect x="20" y="335" width="860" height="200" class="app-box-art" rx="4" opacity="0.3"/>
<text x="450" y="358" class="app-cat-title" text-anchor="middle">📊 2025yearcriticaltrend</text>
<text x="30" y="382" class="app-label">1. <tspan font-weight="bold">实用性优先</tspan>: 从纯投机转向提供真实效用 (会员权益, 游戏道具, 门票)</text>
<text x="30" y="400" class="app-label">2. <tspan font-weight="bold">链抽象化</tspan>: LayerZero跨链NFT, 用户无感知多链操作</text>
<text x="30" y="418" class="app-label">3. <tspan font-weight="bold">动态NFT (dNFT)</tspan>: Chainlink VRF随机性 + Automation定时更新元数据</text>
<text x="30" y="436" class="app-label">4. <tspan font-weight="bold">NFT-Fi爆发</tspan>: Blur Blend点对池模式, 即时借贷, TVL $500M+</text>
<text x="30" y="454" class="app-label">5. <tspan font-weight="bold">碎片化 (Fractionalization)</tspan>: 昂贵NFT拆分成ERC-20, 降低参与门槛 (Fractional, Tessera)</text>
<text x="30" y="472" class="app-label">6. <tspan font-weight="bold">版税可选</tspan>: OpenSea版税可选后, 创作者收入下降60%, Blur强制版税引争议</text>
<text x="30" y="490" class="app-label">7. <tspan font-weight="bold">AI生成NFT</tspan>: Midjourney, Stable Diffusion生成, 版权归属存疑</text>
<text x="30" y="508" class="app-label">8. <tspan font-weight="bold">蓝筹稳定</tspan>: BAYC, Azuki, CryptoPunks地板价相对稳定, 山寨NFT归零</text>
<text x="30" y="526" class="app-label-sm" fill="#9370db">Forecast: 2025yeartotalVolume $30B+, aliveleapwallet 80010K+, UtilitytypeNFTratioultra50%</text>
</g>
</svg>
</div>

<div style="background: rgba(52, 81, 178, 0.06); padding: 1.5em; border-radius: 4px; margin: 2em 0;">
<svg class="svg-11-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 850 450">
<defs>
<style>
.svg-11-3 .chal-title { font: bold 13px arial, sans-serif; fill: #4c9be8; }
.svg-11-3 .chal-subtitle { font: bold 12px arial, sans-serif; fill: #1f2937; }
.svg-11-3 .chal-label { font: 11px arial, sans-serif; fill: #1f2937; }
.svg-11-3 .chal-label-sm { font: 9px arial, sans-serif; fill: #1f2937; }
.svg-11-3 .chal-box { fill: rgba(217, 83, 79, 0.15); stroke: #d9534f; stroke-width: 1; }
.svg-11-3 .chal-solution { fill: rgba(92, 184, 92, 0.07); stroke: #5cb85c; stroke-width: 1; }
.svg-11-3 .chal-arrow { stroke: #4c9be8; stroke-width: 1; fill: none; marker-end: url(#chal-arrow); }
</style>
<marker id="chal-arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
<path d="M0,0 L0,6 L9,3 z" fill="#4c9be8"/>
</marker>
</defs>
<text x="425" y="25" class="chal-title" text-anchor="middle">NFT TechChallenges&solvesolution</text>
<g id="challenge-1">
<rect x="30" y="50" width="380" height="115" class="chal-box" rx="8"/>
<text x="220" y="68" class="chal-subtitle" text-anchor="middle">⚠️ Challenges 1: StorageCostHigh</text>
<text x="50" y="88" class="chal-label">issue: chainUpStoragegraphfilm/visionfreqextremeits昂贵</text>
<text x="50" y="103" class="chal-label">• 1 MB graphfilm ≈ $100,000+ Gas (Ethereum)</text>
<text x="50" y="118" class="chal-label">• Manyevenprojectonlyexist tokenURI (chainDownguideuse)</text>
<text x="50" y="133" class="chal-label-sm">• At Risk: Centralizedserviceercancanloseeffect (rug pull)</text>
<text x="50" y="145" class="chal-label-sm">• AWS S3 Faulty → eventhousand NFT graphfilm消lose (2022)</text>
<text x="50" y="157" class="chal-label-sm">• SLOAD Cost: 2100 gas/32bytes ≈ $0.10/byte</text>
</g>
<path d="M 220 172 L 220 192" class="chal-arrow"/>
<g id="solution-1">
<rect x="30" y="200" width="380" height="95" class="chal-solution" rx="8"/>
<text x="220" y="218" class="chal-subtitle" text-anchor="middle">✅ solvesolution</text>
<text x="50" y="235" class="chal-label">• <tspan font-weight="bold">IPFS</tspan>: 去中心化存储 (内容寻址)</text>
<text x="50" y="248" class="chal-label-sm">  CIDexactprotectimmutable, Pinata/Infuraproposesupplynetclose</text>
<text x="50" y="262" class="chal-label">• <tspan font-weight="bold">Arweave</tspan>: 永久存储 (一次付费 ~$5/MB)</text>
<text x="50" y="275" class="chal-label-sm">  200yearprotectproof, Loot/Nounsetc.projectAdoption</text>
<text x="50" y="289" class="chal-label">• <tspan font-weight="bold">链上 SVG</tspan>: 小图片直接存链上</text>
</g>
<g id="challenge-2">
<rect x="440" y="50" width="380" height="115" class="chal-box" rx="8"/>
<text x="630" y="68" class="chal-subtitle" text-anchor="middle">⚠️ Challenges 2: royaltynocanlean</text>
<text x="460" y="88" class="chal-label">issue: twogradeMarketroyaltynostrongmakeExecute</text>
<text x="460" y="103" class="chal-label">• OpenSea cancelstrongmakeroyalty (2023year2month)</text>
<text x="460" y="118" class="chal-label">• Blur default 0% royalty，抢占Marketshare</text>
<text x="460" y="133" class="chal-label-sm">• createworkagentrevenuefeel损: BAYCroyaltyfrom10%→0%</text>
<text x="460" y="145" class="chal-label-sm">• X2Y2/LooksRare optionalroyalty (UserfromPrimarydecidedecide)</text>
<text x="460" y="157" class="chal-label-sm">• estimateloss $1B+ royaltyrevenue (2023wholeyear)</text>
</g>
<path d="M 630 172 L 630 192" class="chal-arrow"/>
<g id="solution-2">
<rect x="440" y="200" width="380" height="95" class="chal-solution" rx="8"/>
<text x="630" y="218" class="chal-subtitle" text-anchor="middle">✅ solvesolution</text>
<text x="460" y="235" class="chal-label">• <tspan font-weight="bold">ERC-2981</tspan>: 版税标准 (建议性, 非强制)</text>
<text x="460" y="248" class="chal-label-sm">  royaltyInfo() returnreceivereceiveAddress&Amount</text>
<text x="460" y="262" class="chal-label">• <tspan font-weight="bold">Operator Filter</tspan>: 黑名单零版税市场</text>
<text x="460" y="275" class="chal-label-sm">  OpenSea RegistrylimittransferTargetAddress</text>
<text x="460" y="289" class="chal-label">• <tspan font-weight="bold">链上强制</tspan>: _beforeTokenTransfer 扣除版税</text>
</g>
<g id="challenge-3">
<rect x="30" y="315" width="380" height="110" class="chal-box" rx="8"/>
<text x="220" y="333" class="chal-subtitle" text-anchor="middle">⚠️ Challenges 3: Liquiditynofoot</text>
<text x="50" y="353" class="chal-label">issue: longtail NFT hardpastoutput售</text>
<text x="50" y="368" class="chal-label">• 80% NFT complete交measurecollectMediumatpierpart 5% project</text>
<text x="50" y="383" class="chal-label">• Floor PricewavemoveLarge，buysellpricepoor 20-50%</text>
<text x="50" y="398" class="chal-label-sm">• noblue筹projectavgoutput售Epoch 30+ day</text>
<text x="50" y="410" class="chal-label-sm">• 2022bearcity: 95% NFTprojectFloor Pricereturnzero</text>
</g>
<g id="solution-3">
<rect x="440" y="315" width="380" height="110" class="chal-solution" rx="8"/>
<text x="630" y="333" class="chal-subtitle" text-anchor="middle">✅ solvesolution</text>
<text x="460" y="353" class="chal-label">• <tspan font-weight="bold">NFT AMM</tspan>: Sudoswap, NFTX (流动性池)</text>
<text x="460" y="366" class="chal-label-sm">  infinitydecidemultiply积/linenaturesonglinedecideprice，instantTransaction</text>
<text x="460" y="380" class="chal-label">• <tspan font-weight="bold">碎片化</tspan>: 拆分成 ERC-20 提高流动性</text>
<text x="460" y="393" class="chal-label-sm">  Fractional.art: 1 NFT → 1MTokenshare</text>
<text x="460" y="407" class="chal-label">• <tspan font-weight="bold">NFT 借贷</tspan>: Blur Blend, NFTfi (解锁流动性)</text>
</g>
</svg>
</div>

<div style="background: rgba(52, 81, 178, 0.06); padding: 1.5em; border-radius: 4px; margin: 2em 0;">
<svg class="svg-11-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 380">
<defs>
<style>
.svg-11-4 .nftfi-title { font: bold 13px arial, sans-serif; fill: #4c9be8; }
.svg-11-4 .nftfi-step { font: bold 12px arial, sans-serif; fill: #1f2937; }
.svg-11-4 .nftfi-label { font: 11px arial, sans-serif; fill: #1f2937; }
.svg-11-4 .nftfi-label-sm { font: 9px arial, sans-serif; fill: #1f2937; }
.svg-11-4 .nftfi-box { fill: rgba(52, 81, 178, 0.05); stroke: #4c9be8; stroke-width: 1; }
.svg-11-4 .nftfi-nft { fill: rgba(147, 112, 219, 0.3); stroke: #9370db; stroke-width: 1; }
.svg-11-4 .nftfi-eth { fill: rgba(92, 184, 92, 0.10); stroke: #5cb85c; stroke-width: 1; }
.svg-11-4 .nftfi-arrow { stroke: #df6919; stroke-width: 1; fill: none; marker-end: url(#nftfi-arrow); }
</style>
<marker id="nftfi-arrow" markerWidth="12" markerHeight="12" refX="10" refY="3" orient="auto" markerUnits="strokeWidth">
<path d="M0,0 L0,6 L9,3 z" fill="#df6919"/>
</marker>
</defs>
<text x="450" y="25" class="nftfi-title" text-anchor="middle">NFT Lendingflow (Blur Blend / NFTfi)</text>
<g id="step1">
<rect x="50" y="55" width="180" height="105" class="nftfi-box" rx="8"/>
<text x="140" y="73" class="nftfi-step" text-anchor="middle">Step 1: Collateral</text>
<rect x="100" y="88" width="80" height="45" class="nftfi-nft" rx="4"/>
<text x="140" y="115" class="nftfi-label" text-anchor="middle">BAYC #1234</text>
<text x="140" y="145" class="nftfi-label-sm" text-anchor="middle">valuation: 50 ETH</text>
<text x="140" y="156" class="nftfi-label-sm" text-anchor="middle">Floor Price: 45 ETH</text>
</g>
<path d="M 240 107 L 280 107" class="nftfi-arrow"/>
<g id="step2">
<rect x="290" y="55" width="180" height="105" class="nftfi-box" rx="8"/>
<text x="380" y="73" class="nftfi-step" text-anchor="middle">Step 2: Borrow</text>
<ellipse cx="380" cy="108" rx="45" ry="28" class="nftfi-eth"/>
<text x="380" y="113" class="nftfi-label" text-anchor="middle" font-weight="bold">30 ETH</text>
<text x="380" y="140" class="nftfi-label-sm" text-anchor="middle">LTV = 60%</text>
<text x="380" y="151" class="nftfi-label-sm" text-anchor="middle">yearifyInterest Rate: 8-15%</text>
</g>
<path d="M 480 107 L 520 107" class="nftfi-arrow"/>
<g id="step3">
<rect x="530" y="55" width="180" height="105" class="nftfi-box" rx="8"/>
<text x="620" y="73" class="nftfi-step" text-anchor="middle">Step 3: usefunds</text>
<text x="550" y="95" class="nftfi-label">✓ purchasebuyother NFT</text>
<text x="550" y="108" class="nftfi-label">✓ DeFi Mining</text>
<text x="550" y="121" class="nftfi-label">✓ lifealivebeginsupport</text>
<text x="550" y="138" class="nftfi-label-sm">Borrowerprotect留Liquidity</text>
<text x="550" y="149" class="nftfi-label-sm">Noneneedoutput售supportyesasset</text>
</g>
<g id="step4a">
<rect x="50" y="185" width="340" height="145" class="nftfi-box" rx="8" stroke="#5cb85c"/>
<text x="220" y="203" class="nftfi-step" text-anchor="middle" fill="#5cb85c">scenario A: presshourrepay</text>
<text x="70" y="222" class="nftfi-label">Borrowerreturnreturn:</text>
<ellipse cx="135" y="250" rx="40" ry="23" class="nftfi-eth"/>
<text x="135" y="254" class="nftfi-label" text-anchor="middle" font-weight="bold">30 ETH</text>
<text x="200" y="246" class="nftfi-label">+ interest (3 ETH)</text>
<text x="200" y="259" class="nftfi-label">= 33 ETH total</text>
<text x="70" y="283" class="nftfi-label-sm">typicalexpectlimit: 30-90day</text>
<text x="70" y="295" class="nftfi-label-sm">cancontexpect (paymentplaqueoutfeeuse)</text>
<text x="70" y="310" class="nftfi-label" fill="#5cb85c" font-weight="bold">✅ NFT unlock，returnreturngiveBorrower</text>
<text x="70" y="324" class="nftfi-label-sm" fill="#5cb85c">Protocolreceivetake 0.5-1% servicefee</text>
</g>
<g id="step4b">
<rect x="420" y="185" width="340" height="145" class="nftfi-box" rx="8" stroke="#d9534f"/>
<text x="590" y="203" class="nftfi-step" text-anchor="middle" fill="#d9534f">scenario B: 违约Liquidation</text>
<text x="440" y="222" class="nftfi-label">Borrowernotrepay (ultrafaultexpectlimit)</text>
<text x="440" y="240" class="nftfi-label" font-weight="bold">Liquidationflow:</text>
<text x="440" y="256" class="nftfi-label">1. NFT allrightconvertgive贷place</text>
<text x="440" y="270" class="nftfi-label">2. orautopatsell (荷兰pat)</text>
<text x="440" y="284" class="nftfi-label">3. patsellreturnrepayreturn贷fund</text>
<text x="440" y="301" class="nftfi-label-sm">BendDAO: 48Smallhourpatsellwindow</text>
<text x="440" y="313" class="nftfi-label-sm">Blend: 永cont贷fund，Interest Ratefloatmove</text>
<text x="440" y="325" class="nftfi-label-sm" fill="#d9534f">LiquidationAt RiskwithMarketwavemoveincreaseadd</text>
</g>
<text x="450" y="355" class="nftfi-label" text-anchor="middle" font-weight="bold">ExamplesProtocol:</text>
<text x="450" y="370" class="nftfi-label-sm" text-anchor="middle">Blur Blend (TVL $500M+, 永cont贷fund) • NFTfi (P2P Lending, 7day-90dayexpectlimit)</text>
<text x="450" y="382" class="nftfi-label-sm" text-anchor="middle">BendDAO (Dutch AuctionLiquidation) • Arcade (捆tieLending, SupportManyNFTCollateral)</text>
</svg>
</div>

## 11.2 Token Standards

### ERC-721
- Standard for unique tokens
- Each token has distinct properties

### ERC-1155
- Multi-token standard
- Efficient batch transfers

### ERC-6551
- Token-bound accounts
- NFTs can own other assets

## 11.3 NFT Markets and Infrastructure

- **OpenSea** - Largest NFT marketplace
- **Rarible** - Community-owned marketplace
- **LooksRare** - Trading rewards

## 11.4 Digital Identity and Soulbound Tokens

**Soulbound Tokens (SBTs)** - Non-transferable tokens representing credentials.

## 11.5 Gaming and Metaverse Assets

- Play-to-Earn games
- Virtual land and real estate
- In-game items and characters



### 11.7 RWA-NFT and Soulbound Tokens (SBT): 2024-2026 Mainstreaming

**1. RWA-NFT (2024-2026 boom)**

Tokenize traditional financial assets as NFTs:

- **Ondo OUSG** (2023-Q1): NFT for US Treasury share, TVL $1B
- **Centrifuge** (2018-present): tokenize private credit as NFT, TVL $500M
- **Polytrade**: tokenize accounts receivable
- **RealT**: single-family home tokenization, 2018-present
- **Propy**: real estate transaction tokenization
- **Blocksquare**: European real estate tokenization
- **Securitize**: tokenized KKR, Apollo, BCG private funds

**RWA-NFT standards**:
- **ERC-3643** (T-REX Protocol): compliant token standard, supports identity verification, transfer rules
- **ERC-1404**: signed security token standard
- **ERC-4626**: tokenized vault (for RWA)
- **ERC-7540**: async-deposit tokenized vault

**2026 real data**:
- **RWA total on-chain**: $30B+
- **NFT form**: $8B+
- **Largest single RWA**: BlackRock BUIDL ($500M)

**2. SBT (Soulbound Token)**

Non-transferable NFT representing "non-financial assets".

**SBT protocol standards**:
- **ERC-5114**: basic SBT standard
- **ERC-721S**: Soulbound variant
- **Sismo**: ZK-proof-driven SBT
- **Galxe Passport**: SBT credential system
- **Gitcoin Passport**: sybil-resistant SBT

**SBT killer applications**:

| Application | Description | 2026 real project |
|---|---|---|
| Education certificate | University degree, course certificate | Columbia, HKUST |
| Identity credential | KYC, credit scoring | Worldcoin, Civic |
| On-chain reputation | Forum, DAO contribution proof | Lens, Mirror |
| On-chain governance | Voting rights proof | 1hive, DAOHaus |
| Sybil resistance | Prove "I'm real" | Gitcoin Passport |

**3. On-chain identity (Lens / Farcaster / ENS)**

- **Lens Protocol**: ERC-721-based on-chain social graph
- **Farcaster**: Warpcast-based decentralized social
- **ENS**: decentralized domain + on-chain identity
- **2026 stats**: ENS domains 2M+, Lens Profile 1M+, Farcaster 500K+

**4. Music NFT renaissance (2024-2026)**

- **Audius** (2024 mainnet): integrated Spotify-style streaming
- **Royal** (acquired by Decca Records 2024-Q3)
- **Sound.xyz** (2024-Q4 Universal Music partnership)
- **Catalog** (2024)
- **Mint Songs** (2024)
- **2026 stats**: independent musicians earn $500M+ via NFT

**Music NFT innovations**:
- Automatic royalty distribution
- Fans become "investors"
- Streaming revenue sharing
- Secondary market auto-royalty


![CCBus Multi-Function token (NFT standard and extension)](../public/images/chapters/zh/multi-function.png)

*Figure: CCBus Multi-Function token (NFT standard and extension)*

## 11.6 Real World Asset Tokenization (RWAs)

Tokenizing physical assets:
- Real estate
- Art and collectibles
- Commodities

## 11.7 NFT Financialization

- NFT lending and borrowing
- NFT fractionalization
- NFT derivatives

<div class="ccbus-teacher-credits">
  <div class="ccbus-teacher-credits-avatar">
    <img src="../public/images/avatars/heroes/token-builder.png" alt="Token Builder" />
  </div>
  <div class="ccbus-teacher-credits-body">

    Taught by: <strong>Token Builder</strong> — The NFT/digital-assets "construction foreman" — builds with you<br />
    <span style="font-size: 0.85em; color: var(--vp-c-text-3);">📚 The next chapter [Chapter 12: Governance and DAOs] will be taught by another CCBus guide.</span>
  </div>
</div>

<div class="chapter-footer">

### Key Takeaways
- NFTs enable true digital ownership
- Multiple token standards serve different use cases
- RWA tokenization bridges physical and digital worlds

</div>

<div style="background: rgba(52, 81, 178, 0.06); padding: 1.5em; border-radius: 4px; margin: 2em 0;">
<svg class="svg-11-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 400">
<defs>
<style>
.svg-11-1 .std-title { font: bold 13px arial, sans-serif; fill: #4c9be8; }
.svg-11-1 .std-subtitle { font: 12px arial, sans-serif; fill: #1f2937; }
.svg-11-1 .std-label { font: 11px arial, sans-serif; fill: #1f2937; }
.svg-11-1 .std-label-sm { font: 9px arial, sans-serif; fill: #1f2937; }
.svg-11-1 .std-box { fill: rgba(52, 81, 178, 0.05); stroke: #4c9be8; stroke-width: 1; }
.svg-11-1 .std-box-1155 { fill: rgba(92, 184, 92, 0.1); stroke: #5cb85c; stroke-width: 1; }
.svg-11-1 .std-check { fill: #5cb85c; }
.svg-11-1 .std-cross { fill: #d9534f; }
</style>
</defs>
<text x="450" y="18" class="std-title" text-anchor="middle">ERC-721 vs ERC-1155 standardCompare</text>
<rect x="30" y="35" width="410" height="355" class="std-box" rx="4"/>
<text x="235" y="55" class="std-subtitle" text-anchor="middle" font-weight="bold">ERC-721 (singleToken Standards)</text>
<text x="45" y="78" class="std-label" font-weight="bold">designreasonthought：</text>
<text x="45" y="94" class="std-label-sm">• uniteContract = unitetype NFT tiecol</text>
<text x="45" y="107" class="std-label-sm">• per Token ID Unique (nocanmutualswap)</text>
<text x="45" y="120" class="std-label-sm">• Indivisible (supply = 1)</text>
<text x="45" y="133" class="std-label-sm">• ProposeTime: 2017year (CryptoKitties)</text>
<text x="45" y="153" class="std-label" font-weight="bold">pros：</text>
<circle cx="50" cy="168" r="3" class="std-check"/>
<text x="60" y="171" class="std-label-sm">simpleeasyuse，ecomature</text>
<circle cx="50" cy="183" r="3" class="std-check"/>
<text x="60" y="186" class="std-label-sm">OpenSea etc.MarketwholesurfaceSupport</text>
<circle cx="50" cy="198" r="3" class="std-check"/>
<text x="60" y="201" class="std-label-sm">walletcompatnaturemostgood (MetaMask, Trust)</text>
<circle cx="50" cy="213" r="3" class="std-check"/>
<text x="60" y="216" class="std-label-sm">fitfitalone特Art/Collectible</text>
<text x="45" y="236" class="std-label" font-weight="bold">Drawbacks：</text>
<line x1="47" y1="248" x2="53" y2="254" class="std-cross" stroke-width="1"/>
<line x1="53" y1="248" x2="47" y2="254" class="std-cross" stroke-width="1"/>
<text x="60" y="253" class="std-label-sm">Batch Transfer Gas FeeHigh (needfollowring)</text>
<line x1="47" y1="263" x2="53" y2="269" class="std-cross" stroke-width="1"/>
<line x1="53" y1="263" x2="47" y2="269" class="std-cross" stroke-width="1"/>
<text x="60" y="268" class="std-label-sm">noSupportagreehourmgmtManytypeToken</text>
<line x1="47" y1="278" x2="53" y2="284" class="std-cross" stroke-width="1"/>
<line x1="53" y1="278" x2="47" y2="284" class="std-cross" stroke-width="1"/>
<text x="60" y="283" class="std-label-sm">NonenativeBatch TransferFunction</text>
<line x1="47" y1="293" x2="53" y2="299" class="std-cross" stroke-width="1"/>
<line x1="53" y1="293" x2="47" y2="299" class="std-cross" stroke-width="1"/>
<text x="60" y="298" class="std-label-sm">GamingscenarioefficiencyLow (Manyroad具)</text>
<text x="45" y="318" class="std-label" font-weight="bold">Gas CostCompare：</text>
<text x="45" y="333" class="std-label-sm">• oddtimescastmake: ~80K gas</text>
<text x="45" y="346" class="std-label-sm">• 10NFTtransfer: ~500K gas (need10timesTransaction)</text>
<text x="45" y="366" class="std-label" font-weight="bold" fill="#df6919">Examples：</text>
<text x="45" y="380" class="std-label-sm">CryptoPunks (10K), BAYC ($2B+), Azuki</text>
<rect x="460" y="35" width="410" height="355" class="std-box-1155" rx="4"/>
<text x="665" y="55" class="std-subtitle" text-anchor="middle" font-weight="bold">ERC-1155 (ManyToken Standards)</text>
<text x="475" y="78" class="std-label" font-weight="bold">designreasonthought：</text>
<text x="475" y="94" class="std-label-sm">• uniteContract = ManytypeToken (FT + NFT)</text>
<text x="475" y="107" class="std-label-sm">• flexiblesupplymeasure (supply ≥ 1)</text>
<text x="475" y="120" class="std-label-sm">• nativeapprovemeasureopSupport</text>
<text x="475" y="133" class="std-label-sm">• ProposeTime: 2018year (Enjin)</text>
<text x="475" y="153" class="std-label" font-weight="bold">pros：</text>
<circle cx="480" cy="168" r="3" class="std-check"/>
<text x="490" y="171" class="std-label-sm">Gas efficiencyVery High (approvemeasureop 90% sectionprovince)</text>
<circle cx="480" cy="183" r="3" class="std-check"/>
<text x="490" y="186" class="std-label-sm">oddContractmgmt FT + NFT (e.g.GaminggoldCoin+installprepare)</text>
<circle cx="480" cy="198" r="3" class="std-check"/>
<text x="490" y="201" class="std-label-sm">safeBatchTransferFrom Batch Transfer</text>
<circle cx="480" cy="213" r="3" class="std-check"/>
<text x="490" y="216" class="std-label-sm">fitfitGamingManytyperoad具 (Axie Infinity)</text>
<circle cx="480" cy="228" r="3" class="std-check"/>
<text x="490" y="231" class="std-label-sm">halfFT (e.g.performsingcandoorticket)</text>
<text x="475" y="251" class="std-label" font-weight="bold">Drawbacks：</text>
<line x1="477" y1="263" x2="483" y2="269" class="std-cross" stroke-width="1"/>
<line x1="483" y1="263" x2="477" y2="269" class="std-cross" stroke-width="1"/>
<text x="490" y="268" class="std-label-sm">morecomplex，devschool习CostHigh</text>
<line x1="477" y1="278" x2="483" y2="284" class="std-cross" stroke-width="1"/>
<line x1="483" y1="278" x2="477" y2="284" class="std-cross" stroke-width="1"/>
<text x="490" y="283" class="std-label-sm">partialwallet/MarketSupportmeasuremoreLow</text>
<line x1="477" y1="293" x2="483" y2="299" class="std-cross" stroke-width="1"/>
<line x1="483" y1="293" x2="477" y2="299" class="std-cross" stroke-width="1"/>
<text x="490" y="298" class="std-label-sm">nofitfit纯ArtCollectible (faultinflexible)</text>
<text x="475" y="318" class="std-label" font-weight="bold">Gas CostCompare：</text>
<text x="475" y="333" class="std-label-sm">• oddtimescastmake: ~45K gas (sectionprovince 44%)</text>
<text x="475" y="346" class="std-label-sm">• 10NFTtransfer: ~90K gas (sectionprovince 82%)</text>
<text x="475" y="366" class="std-label" font-weight="bold" fill="#5cb85c">Examples：</text>
<text x="475" y="380" class="std-label-sm">Enjin, Decentraland, Sandbox, Skyweaver</text>
</svg>
</div>
