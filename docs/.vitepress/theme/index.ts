import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import './custom.css'
import './math.css'

export default {
  extends: DefaultTheme,
} satisfies Theme
