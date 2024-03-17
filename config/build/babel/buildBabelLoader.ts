import type { BuildOptions } from '../types/config';

export function buildBabelLoader (options: BuildOptions) {
    const { mode } = options;

    const isProd = mode === 'production';

    const plugins = [];

    if (isProd) {
        plugins.push({
            test: /\.(js|jsx|tsx)$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: [
                        '@babel/preset-env',
                        '@babel/preset-react',
                        '@babel/preset-typescript'
                    ],
                    plugins: [
                        [
                            'i18next-extract',
                            {
                                locales: ['ru', 'en'],
                                keyAsDefaultValue: true
                            }
                        ]
                    ]
                }
            }
        });
    }

    return plugins;
}
