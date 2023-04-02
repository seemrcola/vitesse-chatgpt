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
      return hljs.highlight(code, { language: lang }).value
    }
    return hljs.highlightAuto(code).value
  },
})
const text = computed(() => {
  return mdi.render(props.answer)
})
</script>

<template>
  <main
    flex
    text-left w-full flex-row-reverse
  >
    <div i-tabler:brand-openai w-8 h-8 />
    <p
      bg="#eee" rounded-2 color="#000" text="0.9rem"
      px-4 py-2 mx-2
      class="markdown-body" v-html="text"
    />
  </main>
</template>

<style lang="scss">
.markdown-body {
  code ,pre {
    margin-top: 10px;
    margin-bottom: 10px;
  }
  pre {
    background-color: #fff;
    padding: 8px;
    border-radius: 8px;
  }
  code {
    font-size: 0.9rem;
    font-weight: 600;
  }
}
</style>
