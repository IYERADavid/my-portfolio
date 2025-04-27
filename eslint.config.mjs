import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Extend recommended configurations
  ...compat.extends(
    "next/core-web-vitals", // Next.js-specific rules
    "next/typescript", // TypeScript support for Next.js
    "eslint:recommended", // General recommended rules
    "plugin:@typescript-eslint/recommended", // TypeScript-specific rules
    "plugin:react/recommended", // React-specific rules
    "plugin:jsx-a11y/recommended", // Accessibility rules
    "plugin:prettier/recommended" // Prettier integration
  ),

  // Define parser options
  {
    parserOptions: {
      ecmaVersion: 2021, // Use modern ECMAScript features
      sourceType: "module", // Use ES modules
      ecmaFeatures: {
        jsx: true, // Enable JSX parsing
      },
    },
  },

  // Add plugins
  {
    plugins: [
      "@typescript-eslint", // TypeScript linting
      "react", // React linting
      "jsx-a11y", // Accessibility linting
      "prettier", // Prettier integration
    ],
  },

  // Define custom rules
  {
    rules: {
      // TypeScript rules
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/no-explicit-any": "warn",

      // React rules
      "react/react-in-jsx-scope": "off", // Not needed in Next.js
      "react/prop-types": "off", // Not needed with TypeScript

      // Accessibility rules
      "jsx-a11y/anchor-is-valid": [
        "error",
        {
          components: ["Link"],
          specialLink: ["hrefLeft", "hrefRight"],
          aspects: ["invalidHref", "preferButton"],
        },
      ],

      // Prettier rules
      "prettier/prettier": [
        "error",
        {
          singleQuote: true,
          semi: true,
          trailingComma: "all",
        },
      ],

      // General rules
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "no-debugger": "error",
    },
  },

  // Define settings
  {
    settings: {
      react: {
        version: "detect", // Automatically detect React version
      },
    },
  },
];

export default eslintConfig;
