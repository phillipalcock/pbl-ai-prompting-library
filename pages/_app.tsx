import type { AppProps } from 'next/app'
import { MantineProvider, createTheme } from '@mantine/core'
import '@mantine/core/styles.css'
import '../styles/globals.css'

const theme = createTheme({
  primaryColor: 'blue',
  fontFamily: 'inherit',
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider theme={theme} defaultColorScheme="auto">
      <Component {...pageProps} />
    </MantineProvider>
  )
}
