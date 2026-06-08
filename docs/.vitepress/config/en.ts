import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'

export const enConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
  title: 'CCBook - Blockchain: From Zero to Hero',
  description: 'A comprehensive, in-depth blockchain technology handbook from fundamentals to advanced applications',

  themeConfig: {
    nav: [
      { text: 'Home', link: '/en/' },
      { text: 'Ch. 1', link: '/en/chapter-1' },
      { text: 'Ch. 8', link: '/en/chapter-8' },
      { text: 'Ch. 16', link: '/en/chapter-16' },
    ],

    sidebar: sidebarEn(),

    editLink: {
      pattern: 'https://github.com/ccbus-cc/ccbook/edit/main/docs/:path',
      text: 'Edit this page on GitHub',
    },

    footer: {
      message: 'CCBook - Blockchain: From Beginner to Expert',
      copyright: `Copyright © ${new Date().getFullYear()} CCBus`,
    },

    docFooter: {
      prev: 'Previous',
      next: 'Next',
    },

    outline: {
      label: 'On this page',
      level: [2, 3],
    },

    lastUpdated: {
      text: 'Last updated',
    },

    returnToTopLabel: 'Return to top',
    sidebarMenuLabel: 'Menu',
    darkModeSwitchLabel: 'Appearance',
    lightModeSwitchTitle: 'Switch to light mode',
    darkModeSwitchTitle: 'Switch to dark mode',
  },
}

function sidebarEn(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'About CCBook',
      collapsed: false,
      items: [
        { text: 'Introduction', link: '/en/' },
      ],
    },
    {
      text: 'Part I: Foundations',
      collapsed: false,
      items: [
        { text: '<span class="ccbus-sidebar-badge" title="captain-ccbus">🚌</span> Chapter 1: Blockchain Fundamentals', link: '/en/chapter-1' },
        { text: '<span class="ccbus-sidebar-badge" title="satoshi-driver">🚂</span> Chapter 2: Cryptography Fundamentals', link: '/en/chapter-2' },
        { text: '<span class="ccbus-sidebar-badge" title="satoshi-driver">🚂</span> Chapter 3: Cryptocurrency Fundamentals', link: '/en/chapter-3' },
        { text: '<span class="ccbus-sidebar-badge" title="captain-ccbus">🚌</span> Chapter 4: Consensus Mechanisms', link: '/en/chapter-4' },
      ],
    },
    {
      text: 'Part II: Technical Deep Dive',
      collapsed: false,
      items: [
        { text: '<span class="ccbus-sidebar-badge" title="ether-engineer">⚙️</span> Chapter 5: Smart Contracts', link: '/en/chapter-5' },
        { text: '<span class="ccbus-sidebar-badge" title="chain-hopper">🌉</span> Chapter 6: Blockchain Architecture', link: '/en/chapter-6' },
        { text: '<span class="ccbus-sidebar-badge" title="chain-hopper">🌉</span> Chapter 7: Layer 2 Scaling Solutions', link: '/en/chapter-7' },
        { text: '<span class="ccbus-sidebar-badge" title="chain-hopper">🌉</span> Chapter 8: Interoperability and Cross-Chain', link: '/en/chapter-8' },
      ],
    },
    {
      text: 'Part III: Advanced Concepts',
      collapsed: false,
      items: [
        { text: '<span class="ccbus-sidebar-badge" title="ether-engineer">⚙️</span> Chapter 9: Advanced Cryptography', link: '/en/chapter-9' },
        { text: '<span class="ccbus-sidebar-badge" title="defi-navigator">🧭</span> Chapter 10: Decentralized Finance (DeFi)', link: '/en/chapter-10' },
        { text: '<span class="ccbus-sidebar-badge" title="token-builder">🏗️</span> Chapter 11: NFTs and Digital Assets', link: '/en/chapter-11' },
        { text: '<span class="ccbus-sidebar-badge" title="community-conductor">📣</span> Chapter 12: Governance and DAOs', link: '/en/chapter-12' },
      ],
    },
    {
      text: 'Part IV: Ecosystem & Applications',
      collapsed: false,
      items: [
        { text: '<span class="ccbus-sidebar-badge" title="rookie-rider">🎒</span> Chapter 13: Blockchain Platform Comparison', link: '/en/chapter-13' },
        { text: '<span class="ccbus-sidebar-badge" title="guardian-node">🛡️</span> Chapter 14: Enterprise Blockchain', link: '/en/chapter-14' },
        { text: '<span class="ccbus-sidebar-badge" title="guardian-node">🛡️</span> Chapter 15: Security and Best Practices', link: '/en/chapter-15' },
        { text: '<span class="ccbus-sidebar-badge" title="captain-ccbus">🚌</span> Chapter 16: The Future of Blockchain', link: '/en/chapter-16' },
      ],
    },
  ]
}
