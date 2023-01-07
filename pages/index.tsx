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
} from '@/styles/index.css'
import Share from '../components/Share'
import Help from '../components/Help'
import { ArrowsInLineHorizontal } from 'phosphor-react'

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
      .then((res) => {
        console.log(res)
        setResult(res.text)
        setResult(res.text.split('Inventions:')[1])
      })

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
        <Share />
        <Help />
        <label htmlFor="api-key">API Key</label>
        <input
          type="text"
          value={apiKey}
          onChange={(e) => setApiKey(e.target.value)}
        />
        <div className={vennWrapper}>
          <div className={vennSizer}>
            <svg viewBox="15 0 200 100" className={vennSVG}>
              <defs>
                <linearGradient
                  id="a"
                  gradientUnits="objectBoundingBox"
                  x1="0"
                  y1="0"
                  x2="1"
                  y2="1"
                >
                  <stop offset="0" stop-color="#caecf7">
                    <animate
                      attributeName="stop-color"
                      values="#caecf7;#fff2c4;#fcdccd;#dbc4f8;#fcdccd;#caecf7;"
                      dur="30s"
                      repeatCount="indefinite"
                    ></animate>
                  </stop>
                  <stop offset="1" stop-color="#fff2c4">
                    <animate
                      attributeName="stop-color"
                      values="#fff2c4;#fcdccd;#caecf7;#fcdccd;#fff2c4;"
                      dur="30s"
                      repeatCount="indefinite"
                    ></animate>
                  </stop>
                  <animateTransform
                    attributeName="gradientTransform"
                    type="rotate"
                    from="45"
                    to="405"
                    dur="20s"
                    repeatCount="indefinite"
                  />
                </linearGradient>
              </defs>
              <circle cx="150" cy="50" r="50" fill="url(#a)" />
              <circle cx="80" cy="50" r="50" fill="url(#a)" />
              <clipPath id="clip1">
                <circle cx="80" cy="50" r="50" />
              </clipPath>
              <circle
                cx="150"
                cy="50"
                r="50"
                fill="#fff"
                clipPath="url('#clip1')"
              />
            </svg>
            <button className={generateButton} onClick={callOpenAI}>
              Generate
              <ArrowsInLineHorizontal size={64} weight="thin" />
            </button>

            <TextareaAutosize
              name="first-concept"
              className={`${conceptInput} ${firstConceptInput}`}
              value={firstConcept}
              onChange={handleFirstConceptChange}
              placeholder='Write a concept eg. "popcorn"'
            />
            <TextareaAutosize
              name="second-concept"
              className={`${conceptInput} ${secondConceptInput}`}
              value={secondConcept}
              onChange={handleSecondConceptChange}
              placeholder='Write a concept eg. "snowflakes"'
            />
          </div>
        </div>
        <p>{result}</p>
      </main>
    </>
  )
}
