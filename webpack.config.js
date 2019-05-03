const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html'
        })
    ]
}
