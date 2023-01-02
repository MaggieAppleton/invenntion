import Head from 'next/head'
import { ChangeEvent, useState } from 'react'
import { Inter } from '@next/font/google'
import TextareaAutosize from 'react-textarea-autosize'
import {
  vennWrapper,
  vennSizer,
  vennUnion,
  generateButton,
  conceptInput,
  firstConceptInput,
  secondConceptInput,
} from '@/styles/index.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [apiKey, setApiKey] = useState('')
  const [result, setResult] = useState('')
  const [firstConcept, setFirstConcept] = useState('')
  const [secondConcept, setSecondConcept] = useState('')

  const handleFirstConceptChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setFirstConcept(e.target.value)
  }

  const handleSecondConceptChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setSecondConcept(e.target.value)
  }

  const callOpenAI = async () =>
    fetch('/api/openai', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        input1: 'cats',
        input2: 'paintball',
        apiKey,
      }),
    })
      .then((res) => res.json())
      .then((res) => setResult(res.text))

  return (
    <>
      <Head>
        <title>Invenntion</title>
        {/* todo: change the description from "Your mum" */}
        <meta name="description" content="Your mum" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* todo: add a favicon */}
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <main className={inter.className}>
        <input
          type="text"
          value={apiKey}
          onChange={(e) => setApiKey(e.target.value)}
        />
        <button onClick={callOpenAI}>Send</button>
        <h1>Result: {result}</h1>
        <div className={vennWrapper}>
          <div className={vennSizer}>
            <svg viewBox="15 0 200 100">
              <circle cx="80" cy="50" r="50" fill="#a7f3ff" />
              <circle cx="150" cy="50" r="50" fill="#ffbc9d" />
              <path
                className={vennUnion}
                d="M 79 50 A 50 50 0 0 1 151 50 A 50 50 0 0 1 79 50 Z"
                transform="rotate(90 115 50)"
              />
            </svg>
            <button className={generateButton}>Generate</button>
            <TextareaAutosize
              name="first-concept"
              className={`${conceptInput} ${firstConceptInput}`}
              value={firstConcept}
              onChange={handleFirstConceptChange}
              placeholder='Write a concept or idea eg. "popcorn" or "cricket"'
            />
            <TextareaAutosize
              name="second-concept"
              className={`${conceptInput} ${secondConceptInput}`}
              value={secondConcept}
              onChange={handleSecondConceptChange}
              placeholder='Write a concept or idea eg. "snowflakes" or "economics"'
            />
          </div>
        </div>
      </main>
    </>
  )
}
