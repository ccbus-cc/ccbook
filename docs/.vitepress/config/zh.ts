import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'

export const zhConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
  title: 'CCBook 区块链：从入门到精通',
  description: '一本全面、深入的区块链技术学习手册，从基础概念到高级应用',

  themeConfig: {
    nav: [
      { text: '首页', link: '/zh/' },
      { text: '第 1 章', link: '/zh/chapter-1' },
      { text: '第 8 章', link: '/zh/chapter-8' },
      { text: '第 16 章', link: '/zh/chapter-16' },
    ],

    sidebar: sidebarZh(),

    editLink: {
      pattern: 'https://github.com/ccbus-cc/ccbook/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页面',
    },

    footer: {
      message: 'CCBook - 区块链：从入门到精通',
      copyright: `Copyright © ${new Date().getFullYear()} CCBus`,
    },

    docFooter: {
      prev: '上一章',
      next: '下一章',
    },

    outline: {
      label: '页面导航',
      level: [2, 3],
    },

    lastUpdated: {
      text: '最后更新于',
    },

    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
  },
}

function sidebarZh(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'CCBook 简介',
      collapsed: false,
      items: [
        { text: '关于本书', link: '/zh/' },
      ],
    },
    {
      text: '第一部分：基础篇',
      collapsed: false,
      items: [
        { text: '<span class="ccbus-sidebar-badge" title="captain-ccbus">🚌</span> 第一章：区块链基础', link: '/zh/chapter-1' },
        { text: '<span class="ccbus-sidebar-badge" title="satoshi-driver">🚂</span> 第二章：密码学基础', link: '/zh/chapter-2' },
        { text: '<span class="ccbus-sidebar-badge" title="satoshi-driver">🚂</span> 第三章：加密货币基础', link: '/zh/chapter-3' },
        { text: '<span class="ccbus-sidebar-badge" title="captain-ccbus">🚌</span> 第四章：共识机制', link: '/zh/chapter-4' },
      ],
    },
    {
      text: '第二部分：技术深入',
      collapsed: false,
      items: [
        { text: '<span class="ccbus-sidebar-badge" title="ether-engineer">⚙️</span> 第五章：智能合约', link: '/zh/chapter-5' },
        { text: '<span class="ccbus-sidebar-badge" title="chain-hopper">🌉</span> 第六章：区块链架构', link: '/zh/chapter-6' },
        { text: '<span class="ccbus-sidebar-badge" title="chain-hopper">🌉</span> 第七章：Layer 2 扩展方案', link: '/zh/chapter-7' },
        { text: '<span class="ccbus-sidebar-badge" title="chain-hopper">🌉</span> 第八章：互操作性与跨链', link: '/zh/chapter-8' },
      ],
    },
    {
      text: '第三部分：高级概念',
      collapsed: false,
      items: [
        { text: '<span class="ccbus-sidebar-badge" title="ether-engineer">⚙️</span> 第九章：高级密码学', link: '/zh/chapter-9' },
        { text: '<span class="ccbus-sidebar-badge" title="defi-navigator">🧭</span> 第十章：DeFi - 去中心化金融', link: '/zh/chapter-10' },
        { text: '<span class="ccbus-sidebar-badge" title="token-builder">🏗️</span> 第十一章：NFT 与数字资产', link: '/zh/chapter-11' },
        { text: '<span class="ccbus-sidebar-badge" title="community-conductor">📣</span> 第十二章：治理与 DAO', link: '/zh/chapter-12' },
      ],
    },
    {
      text: '第四部分：生态与应用',
      collapsed: false,
      items: [
        { text: '<span class="ccbus-sidebar-badge" title="rookie-rider">🎒</span> 第十三章：区块链平台对比', link: '/zh/chapter-13' },
        { text: '<span class="ccbus-sidebar-badge" title="guardian-node">🛡️</span> 第十四章：企业区块链', link: '/zh/chapter-14' },
        { text: '<span class="ccbus-sidebar-badge" title="guardian-node">🛡️</span> 第十五章：安全与最佳实践', link: '/zh/chapter-15' },
        { text: '<span class="ccbus-sidebar-badge" title="captain-ccbus">🚌</span> 第十六章：区块链的未来', link: '/zh/chapter-16' },
      ],
    },
  ]
}
