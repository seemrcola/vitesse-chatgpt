export function useCompletion(instance: any) {
  async function completionAPI(chatContext: any[]) {
    return instance({
      method: 'post',
      url: '/completions',
      headers: {
        // responseType: 'stream',
      },
      data: {
        model: 'gpt-3.5-turbo',
        messages: chatContext,
        // max_tokens: 60,
        // temperature: 0.5,
        // stream: true,
        // stop: '\n',
      },
    })
  }

  return {
    completionAPI,
  }
}
