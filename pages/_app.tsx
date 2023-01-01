import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { themeClass } from '@/styles/theme.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={themeClass}>
      <Component {...pageProps} />
    </div>
  )
}
