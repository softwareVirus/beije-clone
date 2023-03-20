import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import '@/styles/main.css'
import { CustomContextProvider } from '@/contexts/customContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CustomContextProvider>
      <Component {...pageProps} />
    </CustomContextProvider>
  )
}
