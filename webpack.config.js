const path = require('path');
const merge = require('webpack-merge');

const base = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        library: ['nutrivitta', 'api'],
        libraryTarget: 'umd'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env'],
                        }
                    }
                ]
            }
        ]
    },
    externals: {
        axios: 'axios'
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    }
};

module.exports = [
    merge(base, {
        mode: 'none',
        output: {
            filename: 'bundle.js',
        }
    }),
    merge(base, {
        mode: 'production',
        output: {
            filename: 'bundle.min.js',
        }
    })
]
