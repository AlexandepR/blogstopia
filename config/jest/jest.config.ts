/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

import path from 'path';

const config = {
    globals: {
        __IS_DEV__: true
    },
    clearMocks: true,
    testEnvironment: 'jsdom',
    coveragePathIgnorePatterns: [
        '\\\\node_modules\\\\'
    ],
    moduleNameMapper: {
        '\\.(s?css)$': 'identity-obj-proxy',
        '^src/(.*)$': '<rootDir>/src/$1',
        '\\.svg': path.resolve(__dirname, 'jestEmptyComponent.tsx')
    },
    modulePaths: [
        '<rootDir>src'
    ],
    setupFilesAfterEnv: ['<rootDir>/config/jest/setupTests.ts'],
    moduleDirectories: ['node_modules', 'src'],
    moduleFileExtensions: [
        'js',
        'jsx',
        'ts',
        'tsx',
        'json',
        'node'
    ],
    testMatch: [
        '<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)'
    ],
    rootDir: '../../'
};
module.exports = config;
