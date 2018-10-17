const path = require('path')

module.exports = {
  entry: path.join(__dirname, './client/index.js'),
  output: {
    path: path.join(__dirname, './server/public'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devtool: 'source-map'
}
