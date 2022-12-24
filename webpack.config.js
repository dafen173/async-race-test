const path = require('path')

module.exports = {
    mode:'development',
    entry: './client/frontend.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
}


