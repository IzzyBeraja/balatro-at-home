// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: "expo",
  ignorePatterns: ["/dist/*"],
  parser: "@typescript-eslint/parser",
  plugins: ["sort-keys-fix", "import"],
  rules: {
    "@typescript-eslint/consistent-type-imports": [
      "error",
      {
        prefer: "type-imports",
      },
    ],
    "import/order": [
      "error",
      {
        alphabetize: { caseInsensitive: true, order: "asc" },
        groups: ["type", "internal", "external"],

        "newlines-between": "always",

        pathGroups: [
          {
            group: "internal",
            pattern: "@/**",
            position: "after",
          },
        ],
        // Prevent type imports from being merged into the internal group
        pathGroupsExcludedImportTypes: ["type"],
      },
    ],
    "no-restricted-imports": [
      "error",
      {
        patterns: ["./*", "../*"],
      },
    ],
    // This rule will actually sort keys instead of the sort-keys rule which only checks if they are sorted
    "sort-keys-fix/sort-keys-fix": ["error", "asc", { caseSensitive: false, natural: true }],
  },
};
