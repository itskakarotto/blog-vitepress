// rss.config.js
import { RssPlugin } from 'vitepress-plugin-rss'

// ⚠️ 替换为你的 GitHub 信息
const username = 'itskakarotto'
const repoName = 'blog-vitepress'
const baseUrl = repoName 
  ? `https://${username}.github.io/${repoName}`
  : `https://${username}.github.io`

/**
 * RSS 插件配置
 */
export function rssPlugin() {
  return RssPlugin({
    title: 'Kakarotto\'s space',
    baseUrl: baseUrl,
    copyright: 'Copyright (c) 2026 Kakarotto',
    language: 'zh-CN',
    // 如果文章有 publish: false 则过滤掉
    // filter: (page) => page.frontmatter?.publish !== false
  })
}

/**
 * 如果需要在 head 中添加 RSS 自动发现标签
 */
export function rssHead() {
  return [
    ['link', { rel: 'alternate', type: 'application/rss+xml', title: 'RSS', href: '/feed.rss' }]
  ]
}

/**
 * 在 socialLinks 中添加 RSS 图标（如果有 themeConfig）
 */
export function rssSocialLink() {
  return { icon: 'rss', link: '/feed.rss' }
}

/**
 * 导出 baseUrl，供其他地方使用
 */
export { baseUrl }