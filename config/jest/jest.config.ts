/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

// module.exports = {
import * as path from 'path';

export default {
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
    rootDir: '../..'
};
