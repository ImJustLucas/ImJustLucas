import { Linter } from "eslint";

export const NextConfig: Linter.Config = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2022: true,
  },
  extends: [
    "next",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "next/core-web-vitals",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "prettier", "simple-import-sort"],
  rules: {
    "simple-import-sort/imports": [
      "error",
      {
        groups: [
          /* Style imports */
          ["^.+\\.?(css)$", "^styled-components$"],

          /* React imports */
          ["^react", "^@react"],

          /* Next imports */
          ["^next"],

          /* Imports starting with @ */
          ["^@"],

          /* Custom imports */
          [
            "^@components",
            "^@constants",
            "^@contexts",
            "^@hooks",
            "^@misc",
            "^@pages",
            "^@plugins",
            "^@public",
            "^@services",
            "^@stores",
            "^@typesDef",
            "^@utils",
          ],

          /* Parent imports. Put .. last */
          ["^\\.\\.(?!/?$)", "^\\.\\./?$"],

          /* Other relative imports. Put same-folder imports and . last */
          ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
        ],
      },
    ],
    "simple-import-sort/exports": "error",
    "react/jsx-filename-extension": [1, { extensions: [".tsx", ".ts"] }],
    "react/jsx-props-no-spreading": [0],
    "react/no-unknown-property": ["error", { ignore: ["jsx"] }],
    "react/react-in-jsx-scope": "off",
    "react/jsx-indent-props": ["error", 2],
    "import/extensions": [0],
    semi: ["error", "always"],
    quotes: ["error", "double"],
    "no-console": 0,
    "no-control-regex": 0,
    "prettier/prettier": ["error", { endOfLine: "auto" }],
  },
  overrides: [
    // Only uses Testing Library lint rules in test files
    {
      files: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
      extends: ["plugin:testing-library/react"],
    },
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
};
