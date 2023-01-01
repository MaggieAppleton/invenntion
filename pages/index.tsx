import Head from 'next/head'
import { useRef, useState } from 'react'
import { useRect } from '@reach/rect'
import { Inter } from '@next/font/google'
import { assignInlineVars } from '@vanilla-extract/dynamic'
import {
  circle,
  circleWrapper,
  firstCircle,
  secondCircle,
  xPos,
  yPos,
} from '@/styles/index.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [apiKey, setApiKey] = useState('')
  const [result, setResult] = useState('')
  const ref = useRef<HTMLDivElement>(null)
  const rect = useRect(ref)

  const callOpenAI = async () =>
    fetch('/api/openai', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        name: 'sandwiches',
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
        <div className={circleWrapper} ref={ref}>
          <div className={`${circle} ${firstCircle}`} />
          <div
            className={`${circle} ${secondCircle}`}
            style={assignInlineVars({
              [xPos]: `${rect?.x}px`,
              [yPos]: `${rect?.y}px`,
            })}
          />
        </div>
      </main>
    </>
  )
}
