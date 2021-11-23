import "@fontsource/raleway/400.css"
import "@fontsource/open-sans/700.css"
import "@fontsource/aref-ruqaa/400.css"
import "@fontsource/roboto"
import "@fontsource/montserrat/900.css"
import '../styles/globals.css'

import { ChakraProvider } from "@chakra-ui/react"
import theme from "../theme"
import Layout from "../components/Layout"

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}
export default MyApp
