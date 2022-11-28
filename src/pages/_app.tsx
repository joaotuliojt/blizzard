import type { AppProps } from 'next/app'
import { resetCss } from '../../stitches.config'

export default function App({ Component, pageProps }: AppProps) {
  resetCss()
  return <Component {...pageProps} />
}
