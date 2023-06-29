import { extendTheme } from '@chakra-ui/react'
import { theme as basetheme} from '@hp-ui/react'
// import components from './components'
// import { fontSizes } from './foundations/typography'
// import '@fontsource/inter/variable.css'

const styles = {
  global: (props: any) => ({
    body: {
      height: '100%',
      color: 'gray.900',
      bg: 'white',
      fontSize: 'lg',
      _dark: {
        color: 'white',
        bg: 'gray.900',
      },
    },
    html:{
      height: '100%'
    }
  }),
}

export default extendTheme(
  {
    config: {
      initialColorMode: 'dark',
      useSystemColorMode: false,
    },
    styles,
    // fontSizes,
    // components,
  },
  basetheme
)

