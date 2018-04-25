var path = require('path');

module.exports = {
    mode: "production",
    entry: './src/main/resources/public/App.js',
    output: {
        path: path.resolve(__dirname, '/src/main/resources/public'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /.js$/,
                loaders: 'babel-loader',
                exclude: /(node_modules)/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
};