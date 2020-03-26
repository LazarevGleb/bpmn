const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './app/main.js',
    output: {
        path: __dirname + '/public',
        filename: 'main.js'
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: '**/*.{html,css}', context: 'app/' }
        ])
    ],
    mode: 'development',
};
