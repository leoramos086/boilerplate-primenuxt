// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  rules: {
    'vue/max-attributes-per-line': ['error', { singleline: { max: 5 } }],
  },
},
  // Your custom configs here
)
