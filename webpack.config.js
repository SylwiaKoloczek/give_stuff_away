var path = require("path");

module.exports = {
    entry:"./js/main.jsx",
    output: { filename: "out.js", path: path.resolve(__dirname, "js") },
    mode: "development", watch: true,
    module: {
        rules: [{
            test: /\.jsx$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: ["es2015","stage-2", "react"]
                }
            }
        },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(jpg|jpeg|gif|png|csv)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        publicPath: 'images',
                        outputPath: 'images'
                    }
                }
            },
            {
                test: /\.(eot|ttf|woff|woff2)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        publicPath: 'fonts',
                        outputPath: 'fonts'
                    }
                }
            }]
    }
}