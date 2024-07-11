import { defineConfig } from 'vitepress'
import { shared } from './shared'
import { en } from './en'
import { zh } from './zh'

export default defineConfig({
    ...shared,
    locales: {
        root: { label: 'English', ...en },
        "zh-Hans": { label: '简体中文', ...zh }
    },
})
