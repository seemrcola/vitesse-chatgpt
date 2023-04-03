<script setup lang='ts'>
import Question from '../_components/question.vue'
import Answer from '../_components/answer.vue'
import Tool from '../_components/tool.vue'
import type { Chat } from '~/types/gpt'
import { useOpenAI } from '~/api/gpt/index'
import { useContext } from '~/store/modules/index'

const { completionAPI } = useOpenAI()
const contextStore = useContext()

const question = ref('')

function send() {
  let chat: Chat = {
    question: { role: 'user', content: question.value },
    answer: { role: 'assistant', content: '' },
  }
  contextStore.chatContext.push(chat)

  const chatContext: any[] = []
  contextStore.chatContext.forEach(
    item => chatContext.push(item.question, item.answer),
  )
  completionAPI(chatContext)
    .then((response: any) => {
      const answer = response.data.choices[0].message
      chat = { ...chat, answer }
      contextStore.chatContext.pop()
      contextStore.chatContext.push(chat)
    })

  question.value = ''
}
</script>

<template>
  <div h-full>
    <!-- 对话框 -->
    <div h="90%" b-b="1px solid #999" flex>
      <div
        h="100%" max-h="100%" overflow-y-scroll
        class="chat-box" flex-1 px-4
      >
        <div v-for="({ question, answer }, index) of contextStore.chatContext" :key="index">
          <Question :question="question.content" my-4 />
          <Answer :answer="answer.content" my-4 />
        </div>
      </div>
      <div b-l="1px solid #999" w="200px">
        <Tool b-b="1px solid #999" />
      </div>
    </div>
    <!-- 输入框 -->
    <div h="10%" flex items-center relative>
      <TheTextarea
        v-model="question"
        w-full mx-2
        px-10
        placeholder="What's your question?"
        autocomplete="false"
      />
      <div
        ml-2 h-8 w-8 color="#999" cursor-pointer
        absolute right-6
        i-ph:paper-plane-right
        @click="send"
      />
    </div>
  </div>
</template>

<style scoped>
::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}
.chat-box {
  transition: all .3s;
}
</style>
