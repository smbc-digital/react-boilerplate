const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

let config = {
    entry: ['babel-polyfill', './src/index.js'],
    output: {
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    }
}

module.exports = (env, argv) => {
    if (argv.mode === 'development') {
        config.devtool = 'source-map'
        config.devServer = {
            inline: true,
            historyApiFallback: true
        }
        config.plugins = [
            new HtmlWebpackPlugin({
                template: './index.html'
            })
        ]
    }
    if (argv.mode === 'production') {
        config.output.filename = '[name]-latest.js'
        config.optimization = {
            splitChunks: {
                chunks: 'all',
                cacheGroups: {
                    commons: {
                        test: /[\\/]node_modules[\\/]/,
                        name: 'vendor',
                        chunks: 'all'
                    }
                }
            }
        }
        config.plugins = [
            new webpack.PrefetchPlugin('./node_modules/', 'react-google-recaptcha/lib/es/recaptcha-wrapper.js'),
            new webpack.PrefetchPlugin('./node_modules/', 'react-google-recaptcha/lib/es/recaptcha.js'),
            new webpack.PrefetchPlugin('./node_modules/', 'react-async-script/lib/async-script-loader.js'),
            new webpack.PrefetchPlugin('./node_modules/', 'babel-runtime/core-js/get-iterator.js')
        ]
    }

    return config
}
