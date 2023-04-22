<script setup lang='ts'>
import { useOpenAI } from '~/api/gpt/index'

const { completionsAPI } = useOpenAI()
function getCompletions() {
  completionsAPI()
    .then((res) => { console.log(res) })
    .catch((err) => { console.log(err) })
}
getCompletions()
</script>

<template>
  <div
    h-full w-full b-r="1px solid #999"
    overflow-hidden
  >
    <div h="100%" h-max="100%" overflow-y-scroll />
  </div>
</template>

<style scoped>
::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}
</style>
