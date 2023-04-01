export function useCompletion(openai: any) {
  async function completionAPI(question: string) {
    const completion = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: question }],
    })
    const ans = completion.data.choices[0].message
    return ans
  }

  return {
    completionAPI,
  }
}
