// 1. import `extendTheme` function
import { extendTheme } from "@chakra-ui/react"

// 2. Add your color mode config
const config = {
  colors: {
    primary: '#000080',
    secondary: 'gray.800',
    hoverone: 'red',
    bgColor: 'white'
  },
  fonts: {
    heading: "Open Sans",
    body: "Raleway",
    Roboto: 'Roboto',
    Banner: 'Montserrat'
  }
}

// 3. extend the theme
const theme = extendTheme(config)

export default theme