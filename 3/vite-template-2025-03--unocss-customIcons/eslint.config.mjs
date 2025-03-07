import antfu from '@antfu/eslint-config'
import unocss from '@unocss/eslint-config/flat'

export default antfu(
  {
    vue: true,
  },
  /* https://unocss.dev/integrations/eslint */
  unocss,
  {
    rules: {
      'vue/first-attribute-linebreak': [2, { singleline: 'beside' }],
      'vue/html-self-closing': [2, {
        html: {
          void: 'never',
          normal: 'never',
          component: 'always',
        },
        svg: 'always',
        math: 'always',
      }],
      'vue/max-attributes-per-line': [2, {
        multiline: {
          max: 1,
        },
        singleline: {
          max: 1,
        },
      }],
    },
  },
)
