module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react-hooks/recommended",
        "prettier",
        "plugin:import/recommended",
        "plugin:import/typescript",
        "plugin:import/errors",
        "plugin:import/warnings",
    ],
    ignorePatterns: ["dist", ".eslintrc.cjs"],
    parser: "@typescript-eslint/parser",
    plugins: ["react-refresh", "prettier"],
    rules: {
        "react-refresh/only-export-components": [
            "warn",
            { allowConstantExport: true },
        ],
        "prettier/prettier": [
            "error",
            {
                endOfLine: "auto",
            },
        ],
        "import/order": [
            "error",
            {
                groups: [
                    "index",
                    "sibling",
                    "parent",
                    "internal",
                    "external",
                    "builtin",
                    "object",
                    "type",
                ],
            },
        ],
    },
    settings: {
        "import/resolver": {
            typescript: true,
            node: true,
        }
    }
};
