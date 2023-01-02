import { NextApiRequest, NextApiResponse } from 'next'
import OpenAI from 'openai-api'

const request = async (req: NextApiRequest, res: NextApiResponse) => {
  if (!req.headers.authorization) {
    return res.status(401).json({ error: 'No credentials sent!' })
  }

  const prompt = `Question: Consider the qualities of a dog and a burrito.Come up with a set of three interesting and creative inventions that combine these based on their qualities.
  Are follow up questions needed here: Yes
  Follow up: What qualities does a dog have?
  Immediate answer:
  * Loyalty – Dogs are known for their loyalty and devotion to their owners.
  * Intelligence – Dogs are intelligent animals and can be trained to obey commands.
  * Affection – Dogs show affection to their owners through cuddling and licking.
  * Playfulness – Dogs have an innate sense of playfulness and enjoy playing with toys or other animals.
  * Exercise – Dogs need regular exercise to stay healthy and active.
  Follow up: What qualities does a burrito have?
  Immediate answer:
  * Filling – A burrito should be filled with a variety of ingredients such as beans, meat, vegetables, and cheese.
  * Flavorful – A burrito should have a flavorful combination of ingredients and spices.
  * Wrapping – A burrito should be wrapped in a soft and warm tortilla.
  * Warm – A burrito is best when it is warm and fresh.
  * Presentation – A burrito should look appetizing and should be garnished with fresh ingredients.
  Final answers:
  1. Burrito Dog Coat: A warm dog coat made to look like a wrapped-up tortilla with cheese, beans, salsa, and guacamole inside.
  2. Burrito Dog Treats: Delicious treats made from flavorful burrito ingredients like beans, meat, and salsa. But for dogs.
  3. The Burrito Dog Toy: A stuffed toy shaped like a bean burrito. When the toy is squeezed, it looks like cheese is coming out of the toy.

  Question: Consider the qualities of ${req.body.input1} and ${req.body.input2}. Come up with a set of three interesting and creative inventions that combine these based on their qualities.
  Are follow up questions needed here: Yes
  Follow up: What qualities does ${req.body.input1} have?
  Immediate answer:`
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
