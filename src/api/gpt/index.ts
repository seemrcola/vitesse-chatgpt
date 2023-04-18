import axios from 'axios'
import { useCompletion } from './useCompletion'

const SK = 'sk'
const API_KEY = `${SK}-4opP1oGq9Cr34CjvUB5TT3BlbkFJY3w5hLoAqhbQZELwYAaB`

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
