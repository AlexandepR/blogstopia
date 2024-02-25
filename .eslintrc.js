module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true
    },
    extends: [
        'standard-with-typescript',
        'plugin:react/recommended',
        'eslint:recommended'
        // 'airbnb',
        // 'plugin:i18next/recommended'
    ],
    overrides: [
        {
            files: [
                '.eslintrc.js',
                '.eslintrc.cjs'
            ],
            parserOptions: {
                sourceType: 'script'
            }
        }
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 'latest',
        // ecmaVersion: 2021,
        sourceType: 'module'
    },
    ignorePatterns: ['./node_modules/'],
    plugins: [
        'react',
        '@typescript-eslint',
        'import'
    ],
    settings: {
        react: {
            version: 'detect'
        }
    },
    rules: {
        'react/jsx-indent': [2, 4], // 2 - error
        'react/jsx-indent-props': [2, 4],
        // indent: [2, 4],
        '@typescript-eslint/indent': [2, 4],
        '@typescript-eslint/semi': [2, 'always'],
        'react/jsx-filename-extension': [
            2,
            {
                extensions: [
                    '.js', '.jsx', '.tsx'
                ]
            }],
        'import/extensions': 'off',
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'import/no-extraneous-dependencies': 'off',
        'react/display-name': 'warn',
        'react/require-default-props': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-props-no-spreading': 'warn',
        'react/function-component-definition': 'off',
        'no-shadow': 'off',
        'no-underscore-dangle': 'off',
        'no-unused-vars': 'off',
        // 'no-floating-promise/no-floating-promise': 'off',
        // 'handle-callback-err': 'warn',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/prefer-nullish-coalescing': 'off',
        '@typescript-eslint/consistent-type-assertions': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/strict-boolean-expressions': 'off',
        // '@typescript-eslint/no-floating-promises': 'off',
        'max-len': ['error', { ignoreComments: true, code: 100 }],
        '@typescript-eslint/consistent-type-imports': [
            'error',
            {
                prefer: 'type-imports'
            }
        ]
    }
    // globals: {
    // 'process.env.IS_DEV': true
    // }
};
