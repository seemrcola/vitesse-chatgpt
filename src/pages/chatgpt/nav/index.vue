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
    h-full w-full b-r="1px solid #999"
    overflow-hidden
  >
    <div h="90%" h-max="90%" overflow-y-scroll />
    <div
      w-full h="10%" b-t="1px solid #999"
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
  </div>
</template>

<style scoped>
::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}
</style>
