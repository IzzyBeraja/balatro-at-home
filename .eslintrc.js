// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: 'expo',
  ignorePatterns: ['/dist/*'],
  plugins: ['sort-keys-fix'],
  rules: {
    // This rule will actually sort keys instead of the sort-keys rule which only checks if they are sorted
    'sort-keys-fix/sort-keys-fix': ['error', 'asc', { caseSensitive: false, natural: true }],
  }
};
