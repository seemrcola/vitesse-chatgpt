interface Question {
  role: 'user'
  content: string
}

interface Answer {
  role: 'assistant'
  content: string
}

export interface Chat {
  question: Question
  answer: Answer
}
