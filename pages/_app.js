// pages/_app.js
import { ChakraProvider } from '@chakra-ui/react'
import { DefaultSeo } from 'next-seo'
import SEO from '../next-seo.config'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
