const webpack = require('webpack');
require('es6-promise').polyfill();
let path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
let srcPath = path.join(__dirname, 'src');
let stylePath = path.join(__dirname, 'styles');
let nodePath = path.resolve(__dirname, "node_modules");

const HOST = process.env.HOST || "127.0.0.1";
const PORT = process.env.PORT || "8080";

const webpackConfig = (env, argv) => {
    const development = argv.mode === 'development';
    return {
        entry: [
            './src/index.js',
            './styles/index.scss'
        ],
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    include: srcPath,
                    exclude: /node_modules/,
                    use: ['babel-loader'],
                },
                {
                    test: /\.(scss)$/,
                    use: [
                        development ? "style-loader" : MiniCssExtractPlugin.loader,
                        "css-loader", {
                            loader: "sass-loader",
                            options: {
                                sourceMap: true,
                                precision: 8,
                                data: "$ENV: " + "PRODUCTION" + ";"
                            },
                        }],
                },
                {
                    test: /\.css$/,
                    include: [srcPath],
                    use: [
                        development ? "style-loader" : MiniCssExtractPlugin.loader,
                        "css-loader"],
                },
                {
                    test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
                    use: "url-loader?limit=10000&mimetype=application/font-woff"
                }, {
                    test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
                    use: "url-loader?limit=10000&mimetype=application/font-woff"
                }, {
                    test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                    use: "url-loader?limit=10000&mimetype=application/octet-stream"
                }, {
                    test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                    use: "file-loader"
                }, {
                    test: /\.(pdf|jpg|png|gif|svg|ico)$/,
                    use: development ? "url-loader" : 'file-loader'
                },
            ]
        },
        resolve: {
            extensions: ['*', '.js', '.jsx', '.json']
        },
        output: {
            path: __dirname + '/dist',
            publicPath: '/',
            filename: 'bundle.js'
        },
        plugins: development ? [
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NoEmitOnErrorsPlugin(),
            new HtmlWebpackPlugin({
                template: './src/index.html',
                files: {
                    js: ["bundle.js"]
                }
            })
        ] : [
            new webpack.NoEmitOnErrorsPlugin(),
            new MiniCssExtractPlugin("bundle.css"),
            new HtmlWebpackPlugin({
                template: './src/index.html',
                files: {
                    css: ['bundle.css'],
                    js: ["bundle.js"]
                }
            })
        ],
        devtool: development ? 'source-map' : undefined,
        devServer: development ? {
            contentBase: './dist',
            hot: true,
            // embed the webpack-dev-server runtime into the bundle
            inline: true,
            // serve index.html in place of 404 responses to allow HTML5 history
            historyApiFallback: true,
            port: PORT,
            host: HOST,
        } : undefined,
        // optimization:{
        //     // minimizer:[]
        // }
    }
};

module.exports = webpackConfig;