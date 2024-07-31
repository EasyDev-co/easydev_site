import react from "eslint-plugin-react";
import globals from "globals";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [...compat.extends(
    "plugin:react/recommended",
    "prettier",
    "eslint:recommended",
    "plugin:react/jsx-runtime",
), {
    plugins: {
        react,
    },

    languageOptions: {
        globals: {
            ...globals.browser,
        },

        ecmaVersion: "latest",
        sourceType: "module",

        parserOptions: {
            ecmaFeatures: {
                jsx: true,
            },
        },
    },

    rules: {
        "react/jsx-filename-extension": [1, {
            extensions: [".js", ".jsx"],
        }],

        "react/react-in-jsx-scope": "off",
        "no-unused-vars": "warn",
        "react/prop-types": 0,
        "no-console": "warn",
        "no-alert": "warn",
    },
}];