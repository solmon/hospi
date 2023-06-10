import { defineConfig } from 'tsup'
import config from '../../../tsup.config'

export default defineConfig({
  ...config,
  outDir: './dist/ajv',
  external: [
    'ajv',
    'react-hook-form',
    '@hp-ui/forms',
    '@hookform/resolvers/ajv',
    '@chakra-ui/utils',
  ],
  clean: false,
})
