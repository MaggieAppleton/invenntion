const OpenAI = require('openai-api');
const openai = new OpenAI(process.env.OPENAI_API_KEY);

export default async (req, res) => {
  let prompt = `What are some underlying assumptions about ${req.body.name}?`;
  const gptResponse = await openai.complete({
    engine: 'davinci',
    prompt: prompt,
    maxTokens: 200,
    temperature: 0.7,
    frequencyPenalty: 0.5,
});
  
  res.status(200).json({text: `${gptResponse.data.choices[0].text}`})
}
