<script setup lang='ts'>
const props = defineProps<{ question: string }>()
</script>

<template>
  <main
    flex
    text-left text="0.9rem" w-full
  >
    <div w-8 h-8>
      <div i-ph:user-circle-bold text-xl />
    </div>
    <pre
      flex-1
      px-4 py-2 mx-2
      bg="#eee" rounded-2 color="#000"
    >
      {{ `\n${props.question}` }}
    </pre>
  </main>
</template>

<style scped>

</style>
