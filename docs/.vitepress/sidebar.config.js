// .vitepress/sidebar.config.js
export default {
    rootDir: 'docs',
    sidebars: {
        '/blog/posts/': { dir: 'blog/posts', output: 'postsSidebarData.json' },
        '/blog/vitepress/': { dir: 'blog/vitepress', output: 'vitepressSidebarData.json' },
        '/example/': { dir: 'example', output: 'exampleSidebarData.json' }
    },
    exclude: ['**/index.md', '**/private/**'],
    useTitleFromFrontmatter: true,
    hyphenToSpace: true,
    collapsed: true,
    sort: 'asc',
}