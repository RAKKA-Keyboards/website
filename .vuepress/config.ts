import {defineUserConfig} from "vuepress";
import type {DefaultThemeOptions} from "vuepress";
import recoTheme from "vuepress-theme-reco";
import { themeConfig } from './config/index'

const variant = process.env.VARIANT ?? "global";
console.log("Variant: " + variant);

/*const locales = variant == "global" ? {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/zh-CN/': {
        lang: 'zh-CN',
        description: '创造有趣的键盘产品',
    },
    '/': {
        lang: 'en-US',
        description: 'Create interesting products with ❤',
    },
} : {
    '/': {
        lang: 'zh-CN',
        description: '创造有趣的键盘产品',
    }
}*/

const locales = {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/zh-CN/': {
        lang: 'zh-CN',
        description: '创造有趣的键盘产品',
    },
    '/': {
        lang: 'en-US',
        description: 'Create interesting products with ❤',
    },
}

export default defineUserConfig({
    title: "RAKKA",
    locales: locales,
    theme: recoTheme(themeConfig),
    debug: false,
    port: 4000,
    head: [
        ['script', {id: "scriptImporter"}, `
        (function() { 
        if (window.location.href === 'https://rakka.cn/') window.location.href = 'https://rakka.cn/zh-CN/'
        })(); 
    `]
    ]
});
