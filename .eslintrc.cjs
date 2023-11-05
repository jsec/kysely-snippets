module.exports = {
    parser: "@typescript-eslint/parser",
        parserOptions: {
        project: ["./tsconfig.json"],
            ecmaVersion: 2022
    },
    extends: [
        "@jarsec/eslint-config"
    ]
}
