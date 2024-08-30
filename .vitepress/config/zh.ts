import {defineConfig, type DefaultTheme} from 'vitepress'

const variant = process.env.VARIANT ?? "global";

export const zh = defineConfig({
    lang: 'zh-Hans',
    description: '用 ❤ 创造有趣的产品',

    themeConfig: {
        nav: nav(),

        sidebar: {
            '/zh-Hans/products/': {base: '/zh-Hans/products/', items: sidebarProducts()},
            '/zh-Hans/configurator/': {base: '/zh-Hans/configurator/', items: sidebarConfigurator()},
        },

        editLink: {
            pattern: 'https://github.com/RAKKA-Keyboards/website/edit/master/:path',
            text: '在 GitHub 上编辑此页面'
        },

        footer: {
            message: variant == "cn" ? '<a href="https://beian.miit.gov.cn/" target="_blank">沪ICP备2023020656号-1</a>' : undefined,
            copyright: `版权所有 © 2022-${new Date().getFullYear()} RAKKA`
        },

        docFooter: {
            prev: '上一页',
            next: '下一页'
        },

        outline: {
            label: '页面导航'
        },

        lastUpdated: {
            text: '最后更新于',
            formatOptions: {
                dateStyle: 'short',
                timeStyle: 'medium'
            }
        },

        langMenuLabel: '多语言',
        returnToTopLabel: '回到顶部',
        sidebarMenuLabel: '菜单',
        darkModeSwitchLabel: '主题',
        lightModeSwitchTitle: '切换到浅色模式',
        darkModeSwitchTitle: '切换到深色模式'
    }
})

function nav(): DefaultTheme.NavItem[] {
    return [
        {
            text: '产品',
            items: [
                {
                    text: 'PomPomBoard',
                    link: '/zh-Hans/products/pompomboard'
                },
                {
                    text: 'RAKKA 60',
                    link: '/zh-Hans/products/60-origin'
                }
            ]
        },
        {text: "更新日志", link: "/zh-Hans/changelog"},
        {
            text: "配置器",
            items: [
                {
                    text: '打开',
                    link: variant == "cn" ? "https://kb.rakka.cn/" : "https://kb.rakka.dev/"
                },
                {
                    text: '帮助',
                    link: '/zh-Hans/configurator/overview'
                }
            ]
        },
        {text: "联系我们", link: "/zh-Hans/contact"},
    ]
}

function sidebarProducts(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: '产品',
            collapsed: false,
            items: [
                {text: '概览', link: 'overview'}
            ]
        },
        {
            text: '磁轴键盘',
            collapsed: false,
            items: [
                {text: 'PomPomBoard', link: 'pompomboard'},
                {text: 'RAKKA 60', link: '60-origin'}
            ]
        }
    ]
}

function sidebarConfigurator(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: '配置器',
            items: [
                {text: '起始页', link: 'overview'},
                {
                    text: '按键设置',
                    base: '/zh-Hans/configurator/keymap/',
                    items: [
                        {text: '概览', link: 'overview'}
                    ]
                },
                {
                    text: '配置文件',
                    base: '/zh-Hans/configurator/profile/',
                    items: [
                        {text: '概览', link: 'overview'}
                    ]
                }
            ]
        }
    ]
}
