import axios from 'axios'
import { useCompletion } from './useCompletion'

const SK = 'sk'
const API_KEY = `${SK}-JtLyIqujSrrnrQ9iTWOxT3BlbkFJyaFsUBlFuLykwv66vvHq`

const instance = axios.create({
  baseURL: 'https://api.openai.com/v1',
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
})

export function useOpenAI() {
  const { completionAPI, completionsAPI } = useCompletion(instance)

  return {
    completionAPI,
    completionsAPI,
  }
}
