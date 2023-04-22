export function useCompletion(instance: any) {
  async function completionAPI(chatContext: any[]) {
    return instance({
      method: 'post',
      url: '/chat/completions',
      headers: {
        // responseType: 'stream',
      },
      data: {
        model: 'gpt-3.5-turbo',
        messages: chatContext,
      },
    })
  }

  async function completionsAPI() {
    return instance({
      method: 'post',
      url: '/completions',
      data: {
        model: 'gpt-3.5-turbo',
      },
    })
  }

  return {
    completionAPI,
    completionsAPI,
  }
}
