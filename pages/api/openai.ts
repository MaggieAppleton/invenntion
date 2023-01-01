import { NextApiRequest, NextApiResponse } from 'next'
import OpenAI from 'openai-api'

const request = async (req: NextApiRequest, res: NextApiResponse) => {
  if (!req.headers.authorization) {
    return res.status(401).json({ error: 'No credentials sent!' })
  }

  const prompt = `What are three clever and creative ways to combine the concepts 'a sandwich' and 'pokemon'?

  Answer:
  1. Pokemon-Themed Sandwich Art
  Description: Create fun, edible creations by arranging your sandwich ingredients in the shapes of your favorite Pokemon characters.

  2. Pokemon-Themed Lunchbox
  Description: Pack a Pokemon-themed lunchbox with sandwiches, snacks, and drinks inspired by your favorite Pokemon characters.

  3. Pokemon Sandwich Battle
  Description: Compete against your friends to see who can create the most delicious and creative Pokemon-themed sandwich.
  
  What are three clever and creative ways to combine '${req.body.input1}' and '${req.body.input2}'?
  
  Answer:`
  const apiKey = req.headers.authorization.split(' ')[1]

  const openai = new OpenAI(apiKey)
  const gptResponse = await openai.complete({
    engine: 'text-davinci-003',
    prompt: prompt,
    maxTokens: 280,
    temperature: 0.7,
    frequencyPenalty: 0.5,
  })

  res.status(200).json({ text: `${gptResponse.data.choices[0].text}` })
}

export default request
