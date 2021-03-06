module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    "airbnb-typescript",
    "airbnb/hooks",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
    project: './tsconfig.json',
  },
  plugins: ["@typescript-eslint", "prettier"],
  rules: {
    "react/jsx-filename-extension": 0,
    "react/jsx-props-no-spreading": 0,
    "import/no-named-default": 0,
    "import/no-named-as-default": 0,
    "import/prefer-default-export": 0,
    "@typescript-eslint/ban-ts-ignore": 0,
    "@typescript-eslint/no-non-null-assertion": 0,
    "@typescript-eslint/no-floating-promises": 0,
    "jsx-a11y/accessible-emoji": 0,
    "no-param-reassign": 0,
    "no-nested-ternary": 0,
    "react/prop-types": 0,
    "react/no-children-prop": 0,
    "no-shadow": ["error", { allow: ["props"] }],
  },
};
