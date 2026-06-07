import { defineConfig } from 'vitepress'
import { zhConfig } from './config/zh'
import { enConfig } from './config/en'

export default defineConfig({
  title: 'CCBook',
  description: 'Blockchain: From Beginner to Expert',
  cleanUrls: true,

  // For GitHub Pages deployment at ccbook.ccbus.cc
  base: '/',

  head: [
    // Preconnect to Google Fonts for performance
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    // Inter for body text, Noto Sans SC for CJK, Fira Code for code blocks
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Noto+Sans+SC:wght@400;500;700&family=Fira+Code:wght@400;500&display=swap',
      },
    ],
    // Favicon
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }],
    // Open Graph
    ['meta', { property: 'og:image', content: '/og-image.png' }],
  ],

  // Last updated timestamp
  lastUpdated: true,

  // Markdown configuration with MathJax 3 (KaTeX-compatible: $...$ inline, $$...$$ blocks)
  markdown: {
    lineNumbers: true,
    image: {
      lazyLoading: true,
    },
    math: true,
  },

  // Vite config: don't fail on missing image assets
  vite: {
    build: {
      rollupOptions: {
        onwarn(warning: any, warn: (warning: any) => void) {
          if (warning.code === 'UNRESOLVED_IMPORT') return
          warn(warning)
        },
      },
    },
  },

  // Theme configuration shared across locales
  themeConfig: {
    logo: {
      light: '/CCBus_B_T_64.png',
      dark: '/CCBus_B_T_64.png',
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
