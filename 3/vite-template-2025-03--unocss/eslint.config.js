import antfu from '@antfu/eslint-config'

export default antfu(
  {
    vue: true,
    unocss: true,
  },
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
