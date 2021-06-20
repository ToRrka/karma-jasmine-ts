const path = require('path');
const LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {
    entry: './src/app/app.ts',
    devtool: 'inline-source-map',
    plugins: [
        new LiveReloadPlugin(options)
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
                include: [
                    path.resolve(__dirname, "src")
                ],
            },
        ],
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
};
