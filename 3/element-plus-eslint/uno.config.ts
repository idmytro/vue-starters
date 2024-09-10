import transformerDirectives from '@unocss/transformer-directives'
import { defineConfig } from 'unocss'
import { presetScrollbarHide } from 'unocss-preset-scrollbar-hide'

export default defineConfig({
  transformers: [
    transformerDirectives(),
  ],
  presets: [
    // presetUno(),
    presetScrollbarHide(),
  ],
  safelist: ['scrollbar-hide'],
})
