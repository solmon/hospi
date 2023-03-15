import { ColorModeScript } from '@chakra-ui/react'
import { Html, Head, Main, NextScript } from 'next/document'
import {initialColorModeConfig} from '../theme/theme'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <ColorModeScript initialColorMode={initialColorModeConfig} />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
