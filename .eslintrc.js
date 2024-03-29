module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: ["plugin:vue/essential", "eslint:recommended"],
    rules: {
        "no-console": "warn",
        "no-debugger": process.env.NODE_ENV === "production" ? "error" : "warn",
        "no-undef": "off"
    },
    parserOptions: {
        parser: "@babel/eslint-parser"
    },
    overrides: [
        {
            files: ["**/__tests__/*.{j,t}s?(x)"],
            env: {
                mocha: true
            }
        }
    ]
};
