<script setup lang='ts'>
import Header from './header/index.vue'
import Nav from './nav/index.vue'
import Chat from './chat/index.vue'
</script>

<template>
  <div wh-full b-b="solid 1px solid">
    <Header h="40px" />
    <div flex h="[calc(100vh-42px)]">
      <Nav w="200px" />
      <Chat flex-1 />
    </div>
  </div>
</template>
