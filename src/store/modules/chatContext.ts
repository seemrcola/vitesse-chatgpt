import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Chat } from '~/types/gpt'

export const useContext = defineStore(
  'context',
  () => {
    const chatContext = ref<Chat[]>([])

    function setContextColor(color: string) {
      const box = document.querySelector('.chat-box') as HTMLElement
      box.style.backgroundColor = color
    }

    function clearContext() {
      chatContext.value = []
    }

    return {
      chatContext,
      setContextColor,
      clearContext,
    }
  },
  { persist: true },
)
