import presetWind3 from '@unocss/preset-wind3'
import transformerDirectives from '@unocss/transformer-directives'
import { defineConfig } from 'unocss'

export default defineConfig({
  transformers: [
    transformerDirectives(),
  ],
  presets: [
    presetWind3({
      preflight: true,
    }),
  ],
  theme: {
    breakpoints: {
      b1024px: '1024px',
    },
  },
})
