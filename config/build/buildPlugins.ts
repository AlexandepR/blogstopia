import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import type { BuildOptions } from './types/config';
import CircularDependencyPlugin from 'circular-dependency-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';

export function buildPlugins ({ paths, mode }: BuildOptions): webpack.WebpackPluginInstance[] {
    const isDev = mode === 'development';
    const isProd = mode === 'production';

    const plugins = [
        new HtmlWebpackPlugin({
            template: paths.html
        }),
        new BundleAnalyzerPlugin(),
        new webpack.ProgressPlugin(),

        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev)
        }),
        new CircularDependencyPlugin({
            exclude: /node_modules/,
            failOnError: true
        })
    ];

    if (isDev) {
        plugins.push(new webpack.HotModuleReplacementPlugin());
        plugins.push(new ForkTsCheckerWebpackPlugin()); // Makes type checking a separate process
        plugins.push(new BundleAnalyzerPlugin({
            analyzerPort: 8889,
            openAnalyzer: true
        }));
    }
    if (isProd) {
        plugins.push(new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css'
        }));
    }

    return plugins;
}
