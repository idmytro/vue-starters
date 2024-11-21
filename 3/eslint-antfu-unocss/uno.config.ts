import presetWind from '@unocss/preset-wind'
import transformerDirectives from '@unocss/transformer-directives'
import { defineConfig } from 'unocss'

export default defineConfig({
  transformers: [
    transformerDirectives(),
  ],
  presets: [
    presetWind({
      preflight: true,
    }),
  ],
})
