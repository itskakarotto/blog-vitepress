import { defineConfig } from 'vitepress'
import site from './site.js'
import head from './head.js'
import markdown from './markdown.js'
import zh from './locales/zh.js'
import { rssPlugin, rssHead, rssSocialLink } from './rss.config.js'

export default defineConfig({
  ...site,
  head: [
    ...head,          // 原有的 head
    ...rssHead(),     // 添加 RSS 自动发现标签
  ],
  markdown,
  themeConfig: {
    ...zh,
    // socialLinks: [
    //   ...(zh.themeConfig?.socialLinks || []),  // 保留原有的社交链接
    //   rssSocialLink(),                         // 添加 RSS
    // ]
  },
  vite: {
    plugins: [
      rssPlugin()
    ]
  }
})