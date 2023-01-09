import { NextApiRequest, NextApiResponse } from 'next'
import OpenAI from 'openai-api'

const request = async (req: NextApiRequest, res: NextApiResponse) => {
  if (!req.headers.authorization) {
    return res.status(401).json({ error: 'No credentials sent!' })
  }

  const prompt = `Question: Consider the qualities of a dog and a burrito. Come up with a set of three interesting and creative inventions that combine these based on their qualities. These should use the unique parts, qualities, and functions of dogs and burritos. Don't sound too salesy or promotion. Describe the inventions in detail.
  Inventions:
  Title: Burrito Dog Coat. Description: A warm dog coat made to look like a wrapped-up tortilla with cheese, beans, salsa, and guacamole inside.
  Title: TexMex Dog Treats. Description: Dog treats made from flavorful burrito ingredients like beans, meat, and salsa.
  Title: Burrito Chew Toy. Description: A squeaky toy shaped like a bean burrito. When the toy is squeezed, it looks like cheese is coming out of the toy.

  Question: Consider the qualities of ${req.body.input1} and ${req.body.input2}. Come up with a set of three interesting and creative inventions that combine these based on their qualities. These should use the unique parts, qualities, and functions of ${req.body.input1} and ${req.body.input2}. Don't sound too salesy or promotion. Describe the inventions in detail.
  Inventions:`
  const apiKey = req.headers.authorization.split(' ')[1]

  const openai = new OpenAI(apiKey)
  const gptResponse = await openai.complete({
    engine: 'text-davinci-003',
    prompt: prompt,
    maxTokens: 500,
    temperature: 0.7,
    frequencyPenalty: 0.5,
  })

  res.status(200).json({ text: `${gptResponse.data.choices[0].text}` })
}

export default request
