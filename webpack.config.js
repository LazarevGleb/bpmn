const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        bundle: ['./app/main.js']
    },
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
