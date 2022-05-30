import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ActiveBreakpointIndicator } from '../components/ActiveBreakpointIndicator'
import { Navigation } from '../page-components/Navigation'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {process.env.NODE_ENV === 'development' && <ActiveBreakpointIndicator />}
      <Navigation />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
