import * as zhCNConfig from './zh-CN'
import * as enConfig from './en'

const variant = process.env.VARIANT ?? "global";

export const themeConfig = {
    locales: {
        '/': {
            selectLanguageText: 'Languages',
            selectLanguageName: 'English',
            navbar: enConfig.default.navbar,
            series: enConfig.default.series,
        },
        '/zh-CN/': {
            selectLanguageText: '语言',
            selectLanguageName: '简体中文',
            lastUpdatedText: '最后更新时间',
            navbar: zhCNConfig.default.navbar,
            series: zhCNConfig.default.series,
        },
    },
    variant: variant,
    /*logo: '/logo.png',*/
    /*author: 'RAKKA',
    docsRepo: '',
    docsBranch: 'main',
    docsDir: '/docs',
    vuePreviewsDir: './docs/.vuepress/vue-previews',
    componentsDir: './docs/.vuepress/components',*/
}
