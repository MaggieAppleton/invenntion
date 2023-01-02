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
  vennSVG,
  circleOne,
  circleTwo,
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
        input1: firstConcept,
        input2: secondConcept,
        apiKey,
      }),
    })
      .then((res) => res.json())
      .then((res) => setResult(res.text.split('Final answers:')[1]))

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
        <div className={vennWrapper}>
          <div className={vennSizer}>
            <svg viewBox="15 0 200 100" className={vennSVG}>
              <defs>
                <linearGradient
                  id="venn-gradient"
                  x1="50%"
                  y1="0%"
                  x2="50%"
                  y2="100%"
                >
                  <stop offset="0%" stop-color="#baacff">
                    <animate
                      attributeName="stop-color"
                      values="#baacff; #64ceff;"
                      dur="20s"
                      repeatCount="indefinite"
                    ></animate>
                  </stop>

                  <stop offset="50%" stop-color="#64ceff">
                    <animate
                      attributeName="stop-color"
                      values="#64ceff; #ffb2f1; #ffb9a2;"
                      dur="20s"
                      repeatCount="indefinite"
                    ></animate>
                  </stop>

                  <stop offset="100%" stop-color="#ffb9a2">
                    <animate
                      attributeName="stop-color"
                      values="#ffb9a2; #baacff;"
                      dur="20s"
                      repeatCount="indefinite"
                    ></animate>
                  </stop>
                </linearGradient>
              </defs>
              <circle
                cx="80"
                cy="50"
                r="50"
                className={circleOne}
                fill="url('#venn-gradient')"
              />
              <circle
                cx="150"
                cy="50"
                r="50"
                className={circleTwo}
                fill="url('#venn-gradient')"
              />
              <path
                className={vennUnion}
                d="M 79 50 A 50 50 0 0 1 151 50 A 50 50 0 0 1 79 50 Z"
                transform="rotate(90 115 50)"
              />
            </svg>
            <button className={generateButton}>Generate</button>
            <p>{result}</p>
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
