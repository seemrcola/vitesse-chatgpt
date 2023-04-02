<script setup lang='ts'>
const props = defineProps<{
  question: string
}>()
</script>

<template>
  <main
    flex
    text-left text="0.9rem" w-full
  >
    <div i-ph:user-circle-bold w-8 h-8 />
    <p
      px-4 py-2 mx-2
      bg="#eee" rounded-2 color="#000"
    >
      {{ props.question }}
    </p>
  </main>
</template>
