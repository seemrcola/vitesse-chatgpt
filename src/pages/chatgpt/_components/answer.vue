<script setup lang='ts'>
import MarkdownIt from 'markdown-it'
import hljs from 'highlight.js'
const props = defineProps<{ answer: any }>()
const mdi = MarkdownIt({
  linkify: true,
  highlight(code, language) {
    const validLang = !!(language && hljs.getLanguage(language))
    if (validLang) {
      const lang = language ?? ''
      return highlightBlock(
        hljs.highlight(code, { language: lang }).value, lang,
      )
    }
    return highlightBlock(hljs.highlightAuto(code).value, '')
  },
})
function highlightBlock(str: string, lang?: string) {
  return `
    <code class="hljs code-block-body ${lang}">${str}</code>
    `
}
const text = computed(() => {
  return mdi.render(props.answer)
})
</script>

<template>
  <main
    text-left w="95%" px-4 py-2 my-4
    bg="#eee" rounded-2 color="#000" text="0.9rem"
  >
    <p class="markdown-body" v-html="text" />
  </main>
</template>

<style lang="scss">
// 样式还没细调整
</style>
