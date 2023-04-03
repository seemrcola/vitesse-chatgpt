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
</script>

<template>
  <div
    w-full h="80px"
    flex justify-center items-center
  >
    <div text-xl mx-2 cursor-pointer i-material-symbols:create-new-folder-outline />
    <div
      text-xl mx-2 cursor-pointer i-ic:outline-delete-forever
      @mouseenter="delHandleEnter"
      @mousedown="delHandleDown"
      @mouseleave="delHandleLeave"
    />
  </div>
</template>
