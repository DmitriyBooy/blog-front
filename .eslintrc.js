module.exports = {
    root: true,
    env: {
        node: true
    },
    'extends': [
        'plugin:vue/essential',
        'eslint:recommended',
        // '@vue/typescript'
    ],
    rules: {
        "no-mixed-spaces-and-tabs": 0, // disable rule
        'no-console': process.env.NODE_ENV === 'production' ? [ "error", { allow: [ "warn", "error" ] } ] : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-prototype-builtins': 'off',
        'no-unused-vars': 'off',
        'vue/no-unused-vars': 'off',
        "vue/no-mutating-props": 'off',
        "vue/no-unused-components": 'off',
        "vue/return-in-computed-property": 'off',
        "vue/no-use-v-if-with-v-for": 'off',
        "no-case-declarations": 'off',
        "getter-return": 'off',
        "vue/max-attributes-per-line": [ "error", {
            singleline: {
                max: 1,
            },
            multiline: {
                max: 1,
            },
        } ],
        "vue/html-self-closing": [ "error", {
            html: {
                void: "never",
                normal: "always",
                component: "always",
            },
            svg: "always",
            math: "always",
        } ],
        "vue/html-indent": [
            "error", 2,
            {
                attribute: 1,
                baseIndent: 1,
                closeBracket: 0,
                alignAttributesVertically: true,
                ignores: [],
            },
        ],
        "no-multiple-empty-lines": [
            "error", { "max": 1 },
        ],
        "object-curly-spacing": [ "error", "always" ],
        "array-bracket-spacing": [ "error", "always" ],
        "template-curly-spacing": [ "error", "always" ],
        "vue/html-closing-bracket-newline": [ "error", {
            "singleline": "never",
            "multiline": "always",
        } ],
        'vue/script-indent': [ 'error', 2, { "switchCase": 1, } ]
    },
    parserOptions: {
        parser: '@typescript-eslint/parser'
    },
};
