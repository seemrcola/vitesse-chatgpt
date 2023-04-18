<script setup lang='ts'>
import { useContext } from '~/store/modules'
const contextStore = useContext()
function delHandleEnter() {
  contextStore.setContextColor('#456789')
}
function delHandleDown() {
  contextStore.clearContext()
}
function delHandleLeave() {
  contextStore.setContextColor('')
}
function save() {
  const chatContext = contextStore.chatContext
  let md = ''
  for (const i of chatContext) {
    if (!i)
      break
    md += `${i.question.content}\n`
    md += `${i.answer.content}\n`
  }
  generateMd(md)
}
function generateMd(md: string) {
  const fileName = 'example.md'
  const blob = new Blob([md], { type: 'text/markdown' })
  const url = URL.createObjectURL(blob)

  const a = document.createElement('a')
  a.href = url
  a.download = fileName
  a.click()

  // 释放URL对象
  URL.revokeObjectURL(url)
}
</script>

<template>
  <div
    w-full h="80px"
    flex justify-center items-center
  >
    <div
      text-xl mx-2 cursor-pointer i-material-symbols:create-new-folder-outline
      @click="save"
    />
    <div
      text-xl mx-2 cursor-pointer i-ic:outline-delete-forever
      @mouseenter="delHandleEnter"
      @mousedown="delHandleDown"
      @mouseleave="delHandleLeave"
    />
  </div>
</template>
