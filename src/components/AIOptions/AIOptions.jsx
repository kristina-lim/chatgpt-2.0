export const arrayItems = [
  {
    name: 'Q&A',
    id: 'q&a',
    description: 'Answer questions based on existing knowledge',
    option: {
      model:"text-davinci-003",
      temperature:0,
      max_tokens:100,
      top_p:1,
      frequency_penalty:0.0,
      presence_penalty:0.0,
      stop:["\n"]
    }
  },
  {
    name: 'Grammar Correction',
    id: 'grammarCorrection',
    description: 'Correct senetences into standard English',
    option: {
      model: "text-davinci-003",
      temperature: 0,
      max_tokens: 100,
      top_p: 1,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    },
  },
  {
    name: 'Summarize to a 2nd grader',
    id: 'summary',
    description: 'Translates difficult text into simpler concepts',
    option: {
      model: "text-davinci-003",
      temperature: 0.7,
      max_tokens: 64,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    },
  },
  {
    name: 'Translate English to another language',
    id: 'translate',
    description: 'Translates English text into French, Spanish and Japanese',
    option: {
      model: "text-davinci-003",
      temperature: 0.3,
      max_tokens: 100,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    },
  },
  {
    name: 'Explain code',
    id: 'explainCode',
    description: 'Explain a complicated piece of code',
    option: {
      model: "code-davinci-002",
      temperature: 0,
      max_tokens: 64,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    },
  },
  {
    name: 'JavaScript to Python',
    id: 'jsToPy',
    description: 'Convert simple JavaScript expressions into Python expressions',
    option: {
      model: "code-davinci-002",
      temperature: 0,
      max_tokens: 64,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    },
  },
  {
    name: 'Generate an Image',
    id: 'generateImage',
    description: 'Generates an image based on what you type',
    option: {
      prompt: "This is a test",
      n: 1,
      size: "1024x1024",
    },
  },
  {
    name: 'Movie to Emoji',
    id: 'movieToEmoji',
    description: 'Convert movie titles into emojis',
    option: {
      model: "text-davinci-003",
      temperature: 0,
      max_tokens: 100,
      top_p: 1,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    },
  },
]