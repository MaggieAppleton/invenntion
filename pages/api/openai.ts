import { NextApiRequest, NextApiResponse } from 'next'
import OpenAI from 'openai-api'

const request = async (req: NextApiRequest, res: NextApiResponse) => {
  if (!req.headers.authorization) {
    return res.status(401).json({ error: 'No credentials sent!' })
  }

  const prompt = `What are some underlying assumptions about ${req.body.name}?`
  const apiKey = req.headers.authorization.split(' ')[1]

  const openai = new OpenAI(apiKey)
  const gptResponse = await openai.complete({
    engine: 'davinci',
    prompt: prompt,
    maxTokens: 200,
    temperature: 0.7,
    frequencyPenalty: 0.5,
  })

  res.status(200).json({ text: `${gptResponse.data.choices[0].text}` })
}

export default request
