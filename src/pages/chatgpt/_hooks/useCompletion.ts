export function useCompletion(instance: any) {
  async function completionAPI(chatContext: any[]) {
    return instance({
      method: 'post',
      url: '/completions',
      data: {
        model: 'gpt-3.5-turbo',
        messages: chatContext,
        stream: false,
      },
    })
  }

  return {
    completionAPI,
  }
}
