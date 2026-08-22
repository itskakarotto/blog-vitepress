// .vitepress/theme/posts.data.js
import { createContentLoader } from 'vitepress'

export default createContentLoader('blog/**/*.md', {
    transform(rawData) {
        return rawData
            .filter(({ url }) => url !== '/archive.html')
            .map(({ url, frontmatter }) => ({
                url: `/blog-vitepress${url}`,  // 添加前缀
                title: frontmatter.title,
                date: frontmatter.date
            }))
            .filter(p => p.title && p.date)
            .sort((a, b) => new Date(b.date) - new Date(a.date))
    }
})