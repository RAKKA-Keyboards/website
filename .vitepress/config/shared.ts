import {defineConfig} from 'vitepress'

export const shared = defineConfig({
    title: 'RAKKA',

    rewrites: {
        'en/:rest*': ':rest*',
        'zh/:rest*': 'zh-Hans/:rest*'
    },

    lastUpdated: true,
    cleanUrls: true,
    metaChunk: true,
})
