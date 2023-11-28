<template>
  <div class="footer-wrapper">

    <span v-show="frontmatter?.footer?.record && isCN">
      <Xicons
          icon="Security"
          :link="frontmatter?.footer?.recordLink"
          :text="frontmatter?.footer?.record"
          target="_blank"
      />
    </span>

    <span>
      <Xicons :text="copyRight">
        <template #icon>
          <svg class="xicon-icon" style="width: 18px; height: 18px; font-size: 18px; color: inherit;" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M14 9.75a3.016 3.016 0 0 0-4.163.173a2.993 2.993 0 0 0 0 4.154A3.016 3.016 0 0 0 14 14.25"></path></g></svg>
        </template>
      </Xicons>
    </span>

    <span class="cyber-security" v-if="frontmatter?.footer?.cyberSecurityRecord">
      <img src="vuepress-theme-reco/lib/client/assets/cyberSecurityRecord.png" alt="">
      <a :href="frontmatter?.footer?.cyberSecurityLink || '#'" target="_blank">{{ frontmatter?.footer?.cyberSecurityRecord }}</a>
    </span>

    <Comments v-if="!isShowCommentAtHomePage" :hide-comments="true" />
  </div>
</template>

<script setup>
import { defineComponent, computed } from 'vue'
import {useThemeData, useThemeLocaleData} from 'vuepress-theme-reco/lib/client/composables'
import { usePageFrontmatter, useRouteLocale } from '@vuepress/client'
import packageInfo from 'vuepress-theme-reco/package.json'

const routeLocale = useRouteLocale()
const theme = useThemeData()
const themeLocal = useThemeLocaleData()
const frontmatter = usePageFrontmatter()

const { version } = packageInfo

const copyRight = computed(() => {
  let text = ''

  if (themeLocal.value.author) {
    text += `${themeLocal.value.author} `
  }

  const startYear = frontmatter.value?.footer?.startYear
  const currYear = new Date().getFullYear()

  if (startYear && startYear != currYear) {
    text += `${startYear} - `
  }

  text += currYear

  return text
})

const homeLink = computed(() => themeLocal.value.home || routeLocale.value)

const isShowCommentAtHomePage = computed(() => {
  return (frontmatter.value.modules || [])?.includes('Comment')
})

const isCN = computed(() => theme.value.variant === 'cn')
</script>
