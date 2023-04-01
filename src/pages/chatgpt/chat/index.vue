<script setup lang='ts'>
import { useOpenAI } from '../_hooks/index'
import type { Chat } from '../types'
import Question from '../_components/question.vue'
import Answer from '../_components/answer.vue'
import TheInput from '~/components/TheInput.vue'

const { completionAPI } = useOpenAI()
const question = ref('')
const chatList = ref<Chat[]>([])

function send() {
  let chat: Chat = { question: question.value, answer: '......' }
  chatList.value.push(chat)
  completionAPI(question.value)
    .then(({ content }) => {
      chat = { ...chat, answer: content }
      chatList.value.pop()
      chatList.value.push(chat)
    })
  question.value = ''
}
</script>

<template>
  <div h-full p-4>
    <!-- 对话框 -->
    <div h="90%" max-h="90%" overflow-y-scroll b-b="1px solid #999">
      <div v-for="({ question, answer }, index) of chatList" :key="index">
        <Question :question="question" />
        <Answer :answer="answer" />
      </div>
    </div>
    <!-- 输入框 -->
    <div h="10%" flex items-center relative>
      <TheInput
        v-model="question"
        w="95%"
        px-10
        placeholder="What's your question?"
        autocomplete="false"
      />
      <div
        ml-2 h-8 w-8 color="#999" cursor-pointer
        absolute right-16
        i-ph:paper-plane-right
        @click="send"
      />
    </div>
  </div>
</template>

<style>
::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}
</style>
