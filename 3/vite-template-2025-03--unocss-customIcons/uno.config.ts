import { FileSystemIconLoader } from '@iconify/utils/lib/loader/node-loaders'

import {
  defineConfig,
  presetIcons,
  presetWind3,
} from 'unocss'

export default defineConfig({
  presets: [
    presetWind3({
      preflight: true,
    }),
    presetIcons({
      collections: {
        custom: FileSystemIconLoader(
          './src/assets/icons',
          // svg => svg.replace(/#fff/, 'currentColor')
        ),
      },
    }),
  ],
})
