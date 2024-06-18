/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended', '@vue/eslint-config-prettier'],
  overrides: [
    {
      files: ['cypress/e2e/**/*.{cy,spec}.{js,ts,jsx,tsx}', 'cypress/support/**/*.{js,ts,jsx,tsx}'],
      extends: ['plugin:cypress/recommended']
    }
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser'
  },
  rules: {
    // 關閉命名必須多字
    'vue/multi-word-component-names': 'off',
    'vue/no-reserved-component-names': 'off',
    'vue/component-tags-order': [
      'error',
      {
        order: ['script', 'template', 'style']
      }
    ],
    // 解決 Delete `␍`eslintprettier/prettier
    'prettier/prettier': ['error', { endOfLine: 'auto' }]
  }
}

// https://ithelp.ithome.com.tw/articles/10231505
//  ESLint + Prettier 整理程式碼，在VScode的settings.json設定
