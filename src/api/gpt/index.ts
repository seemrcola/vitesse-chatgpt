import axios from 'axios'
import { useCompletion } from './useCompletion'

const SK = 'sk'
const API_KEY = `${SK}-ndL4y3XpZEANwLDHP232T3BlbkFJUWkbdbB35S0lJjCFJUrM`

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
