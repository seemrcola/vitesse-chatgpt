import { Configuration, OpenAIApi } from 'openai'
import { API_KEY } from '../config'
import { useCompletion } from './useCompletion'

const configuration = new Configuration({
  apiKey: API_KEY,
})
const openai = new OpenAIApi(configuration)

export function useOpenAI() {
  const { completionAPI } = useCompletion(openai)

  return {
    completionAPI,
  }
}
