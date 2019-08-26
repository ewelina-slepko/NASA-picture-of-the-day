const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const PUBLIC_PATH = 'https://nasa-get-the-photo.firebaseapp.com/';


module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: PUBLIC_PATH
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            },
        },
        {
            test: /\.(gif|png|jpe?g|svg)$/i,
            use: [
                'file-loader',
                {
                    loader: 'image-webpack-loader',
                    options: {
                        bypassOnDebug: true,
                        disable: true,
                        mozjpeg: {
                            progressive: true,
                            quality: 65
                        },
                        optipng: {
                            enabled: false,
                        },
                        pngquant: {
                            quality: '65-90',
                            speed: 4
                        },
                        gifsicle: {
                            interlaced: false,
                        },
                        webp: {
                            quality: 75
                        }
                    },
                },
            ],
        },
        {
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        },
        {
            test: /\.jpe?g$|\.ico$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/,
            loader: 'file-loader?name=icon.[ext]'
        },
        ]
    },
    devtool: 'cheap-module-eval-source--map',
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html'
        }),
        new WorkboxPlugin.GenerateSW(),
        new SWPrecacheWebpackPlugin(
            {
                cacheId: 'my-domain-cache-id',
                dontCacheBustUrlsMatching: /\.\w{8}\./,
                filename: 'service-worker.js',
                minify: true,
                navigateFallback: PUBLIC_PATH + 'index.html',
                staticFileGlobsIgnorePatterns: [/\.map$/, /manifest\.json$/]
            }
        ),
        new WebpackPwaManifest({
            name: 'NASA - Picture of the day!',
            short_name: 'NASA Picture',
            description: '',
            background_color: '#252526',
            theme_color: '#262626',
            'theme-color': '#262626',
            start_url: '/',
            icons: [
                {
                    src: path.resolve('src/images/planets512.png'),
                    sizes: [57, 96, 128, 192, 256, 384, 512],
                    destination: path.join('assets', 'icons')
                }
            ]
        })
    ]
}
