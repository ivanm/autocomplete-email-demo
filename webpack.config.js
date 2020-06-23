const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyWebPackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: process.env.NODE_ENV || 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)?$/,
                enforce: 'pre',
                exclude: /node_modules/,
                use: 'eslint-loader'
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                type: 'javascript/auto',
                test: /manifest\.json$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: 'manifest.json'
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: 'index.html'
        }),
        new CopyWebPackPlugin({
            patterns: [
                { from: './src/background.png', to: 'background.png' },
                { from: './src/manifest.json', to: 'manifest.json' },
                { from: './src/favicon.ico', to: 'favicon.ico' }
            ]
        })
    ]
};
