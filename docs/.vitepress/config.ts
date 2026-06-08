import { defineConfig } from 'vitepress'
import { zhConfig } from './config/zh'
import { enConfig } from './config/en'

export default defineConfig({
  title: 'CCBook',
  description: 'Blockchain: From Beginner to Expert',
  cleanUrls: true,

  // For GitHub Pages project-page deployment at ccbus-cc.github.io/ccbook/
  base: '/ccbook/',

  head: [
    // Preconnect to Google Fonts for performance
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    // Inter for body text + Fira Code for code blocks
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Noto+Sans+SC:wght@400;500;700&family=Fira+Code:wght@400;500&display=swap',
      },
    ],
    // Favicon
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/ccbook/favicon.ico' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/ccbook/favicon-32x32.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/ccbook/favicon-16x16.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/ccbook/apple-touch-icon.png' }],
    // Open Graph
    ['meta', { property: 'og:image', content: '/ccbook/og-image.png' }],
  ],

  // Markdown configuration (tutorial pattern + MathJax 3 for KaTeX-style math)
  markdown: {
    lineNumbers: true,
    image: {
      lazyLoading: true,
    },
    math: true,
  },

  // Theme configuration shared across locales
  themeConfig: {
    logo: {
      light: '/ccbook/CCBus_B_T_64.png',
      dark: '/ccbook/CCBus_B_T_64.png',
    },

    // Social links
    socialLinks: [
      { icon: 'github', link: 'https://github.com/ccbus-cc' },
    ],

    // Search
    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档',
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭',
                },
              },
            },
          },
        },
      },
    },
  },

  locales: {
    en: {
      label: 'English',
      lang: 'en',
      link: '/en/',
      ...enConfig,
    },
    zh: {
      label: '简体中文',
      lang: 'zh-CN',
      link: '/zh/',
      ...zhConfig,
    },
  },
})
