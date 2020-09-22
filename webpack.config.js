// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line no-undef
require('webpack')

// eslint-disable-next-line no-undef
module.exports = {
  entry: {
    filename: './app.js'
  },
  output: {
    filename: './build.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-env'],
        }
      }
    ]
  }

}

