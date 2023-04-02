import axios from 'axios'
import { API_KEY } from '../config'
import { useCompletion } from './useCompletion'

const instance = axios.create({
  baseURL: 'https://api.openai.com/v1/chat',
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
})

export function useOpenAI() {
  const { completionAPI } = useCompletion(instance)

  return {
    completionAPI,
  }
}
