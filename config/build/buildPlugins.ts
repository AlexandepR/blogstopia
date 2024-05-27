import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import type { BuildOptions } from './types/config';
import CircularDependencyPlugin from 'circular-dependency-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import path from 'path';
import CopyPlugin from 'copy-webpack-plugin';
import dotenv from 'dotenv';
dotenv.config();

export function buildPlugins (options: BuildOptions): webpack.WebpackPluginInstance[] {
    const { paths, mode, analyzer } = options;

    const isDev = mode === 'development';
    const isProd = mode === 'production';

    const plugins = [
        new HtmlWebpackPlugin({
            template: paths.html,
            favicon: path.resolve(paths.public, 'favicon.ico')
        }),
        new webpack.ProgressPlugin(),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
            __API__: JSON.stringify(process.env.__API__)
        }),
        new CircularDependencyPlugin({ // find cyclic dependencies in the project
            exclude: /node_modules/,
            failOnError: true
        })
    ];

    if (isDev) {
        plugins.push(new webpack.HotModuleReplacementPlugin());
        plugins.push(new ForkTsCheckerWebpackPlugin()); // Makes type checking a separate process
        plugins.push(new ReactRefreshWebpackPlugin()); // Hot start
    }

    if (isProd) {
        plugins.push(new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css'
        }));
        plugins.push(
            new CopyPlugin({
                patterns: [
                    {
                        from: path.resolve(paths.public, 'locales'),
                        to: path.resolve(paths.build, 'locales')
                    }
                ]
            })
        );
    }

    if (analyzer) {
        plugins.push(new BundleAnalyzerPlugin({
            analyzerPort: 8889,
            openAnalyzer: true
        }));
    }

    return plugins;
}
