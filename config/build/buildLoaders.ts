import type webpack from 'webpack';
import { buildCssLoader } from './loaders/buildCssLoader';
import type { BuildOptions } from './types/config';
import ReactRefreshTypeScript from 'react-refresh-typescript';
import { buildBabelLoader } from './babel/buildBabelLoader';

export function buildLoaders (options: BuildOptions): webpack.RuleSetRule[] {
    const { mode } = options;
    const isDev = mode === 'development';

    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack']
    };

    const cssLoader = buildCssLoader(isDev);

    // If we do not use typescript - need babel-loader
    const babelLoader = buildBabelLoader(options);
    // const tsLoader = {
    //     test: /\.tsx?$/,
    //     exclude: /node_modules/,
    //     use: [
    //         {
    //             loader: 'ts-loader',
    //             options: {
    //                 transpileOnly: true, // skip type checking during the compilation process
    //                 getCustomTransformers: () => ({
    //                     before: [isDev && ReactRefreshTypeScript()].filter(Boolean)
    //                 })
    //             }
    //         }
    //     ]
    // };

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        use: [
            {
                loader: 'file-loader'
            }
        ]
    };

    return [
        fileLoader,
        svgLoader,
        ...babelLoader,
        // tsLoader,
        ...cssLoader
    ];
}
