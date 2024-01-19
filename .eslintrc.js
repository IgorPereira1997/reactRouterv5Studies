module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
    yarn: true,
  },
  extends: 'airbnb-base',
  overrides: [
    {
      env: {
        node: true,
        yarn: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'class-methods-use-this': 'off',
    camelcase: 'off',
    'no-unused-vars': ['error', { argsIgnorePattern: 'next' }],
  },
};
