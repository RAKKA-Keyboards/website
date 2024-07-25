import {defineConfig, type DefaultTheme} from 'vitepress'

const variant = process.env.VARIANT ?? "global";

export const en = defineConfig({
    lang: 'en-US',
    description: 'Create interesting products with ❤',

    themeConfig: {
        nav: nav(),

        sidebar: {
            '/products/': {base: '/products/', items: sidebarProducts()},
            '/configurator/': {base: '/configurator/', items: sidebarConfigurator()},
        },

        editLink: {
            pattern: 'https://github.com/RAKKA-Keyboards/website/edit/master/:path',
            text: 'Edit this page on GitHub'
        },

        footer: {
            message: variant == "cn" ? '沪ICP备2023020656号-1' : undefined,
            copyright: `Copyright © 2022-${new Date().getFullYear()} RAKKA`
        }
    }
})

function nav(): DefaultTheme.NavItem[] {
    return [
        {
            text: 'Products',
            items: [
                {
                    text: 'PomPomBoard',
                    link: '/products/pompomboard'
                },
                {
                    text: 'RAKKA 60',
                    link: '/products/60-origin'
                }
            ]
        },
        {text: "Changelog", link: "/changelog"},
        {
            text: "Configurator",
            items: [
                {
                    text: 'Open',
                    link: variant == "cn" ? "https://kb.rakka.cn/" : "https://kb.rakka.dev/"
                },
                {
                    text: 'Help',
                    link: '/configurator/overview'
                }
            ]
        },
        {text: "Contact us", link: "/contact"},
    ]
}

function sidebarProducts(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: 'Products',
            collapsed: false,
            items: [
                {text: 'Overview', link: 'overview'}
            ]
        },
        {
            text: 'HE Keyboards',
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
            text: 'Configurator',
            items: [
                {text: 'Start', link: 'overview'},
                {
                    text: 'Keymap',
                    base: '/zh/configurator/keymap/',
                    items: [
                        {text: 'Overview', link: 'overview'}
                    ]
                },
                {
                    text: 'Profile',
                    base: '/zh/configurator/profile/',
                    items: [
                        {text: 'Profile', link: 'overview'}
                    ]
                }
            ]
        }
    ]
}
