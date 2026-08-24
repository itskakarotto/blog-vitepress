// .vitepress/locales/zh.js
import postsSidebarData from '../postsSidebarData.json' with { type: 'json' }
import vitepressSidebarData from '../vitepressSidebarData.json' with { type: 'json' }
import exampleSidebarData from '../exampleSidebarData.json' with { type: 'json' }
export default {
    // 导航栏
    nav: [
        { text: '首页', link: '/' },
        { text: '示例', link: '/example/markdown-examples' },
        { text: '归档', link: '/archive' },
        { text: '记账', link: '/account' },
    ],

    // 侧边栏
    sidebar: {
        '/blog/posts/': postsSidebarData,
        '/blog/vitepress/': vitepressSidebarData,
        '/example': exampleSidebarData
    },

    // 上一篇/下一篇
    docFooter: {
        prev: '上一页',
        next: '下一页',
    },

    // 大纲标题
    outline: {
        label: '本页内容',
        level: 'deep',
    },

    // 最后更新时间
    // lastUpdated: {
    //     text: '最后更新于',
    // },

    // 编辑链接
    // editLink: {
    //     pattern: 'https://github.com/your-repo/edit/main/docs/:path',
    //     text: '编辑此页',
    // },

    darkModeSwitchLabel: '切换暗色主题',
    sidebarMenuLabel: '侧边栏菜单',
    notFound: {
        title: '页面未找到',
        quote: '但别担心，你可以从首页找到所需内容。',
        linkText: '返回首页',
        linkLabel: '返回首页',
    },

    // 返回顶部（移动端）
    returnToTopLabel: '返回顶部',

    // 本地搜索配置
    search: {
        provider: 'local',
        options: {
            placeholder: '搜索文档',
            translations: {
                button: {
                    buttonText: '搜索',
                },
                modal: {
                    displayDetails: '显示详细信息',
                    resetButtonTitle: '重置搜索',
                    backButtonTitle: '返回',
                    noResultsText: '未找到结果',
                    footer: {
                        selectText: '选择',
                        navigateText: '导航',
                        closeText: '关闭',
                    },
                },
            },
        },
    },

    // 社交链接（如果需要在不同语言下不同，也可以放这里）
    socialLinks: [
        { icon: 'github', link: 'https://github.com/itskakarotto' },
    ],
}