<script setup lang='ts'>
const props = defineProps<{
  question: string
}>()
</script>

<template>
  <main
    text-left text="0.9rem" w="95%" px-4 py-2 my-4
    bg="#eee" rounded-2 color="#000"
  >
    {{ props.question }}
  </main>
</template>
