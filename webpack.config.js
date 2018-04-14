const path = require('path');

module.exports = {
    entry: process.cwd() + '/src',
    output: {
        path: path.join(process.cwd(), 'build'),
        filename: 'index.js'
    },
    mode: process.env.NODE_ENV || 'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader'
            }
        ]
    }
};
