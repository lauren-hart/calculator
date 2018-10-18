const path = require('path')

module.exports = {
  entry: path.join(__dirname, './index.js'),
  output: {
    path: path.join(__dirname, '../server/public'),
    filename: 'bundle.js'
  },
  devServer: {
    publicPath: path.join(__dirname, '../server/public'),
    contentBase: path.resolve(__dirname, '../server/public'),
    watchContentBase: true,
    compress: true,
    port: 3000
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      use: 'raw-loader',
      loader: 'babel-loader',
      exclude: /node_modules/
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devtool: 'source-map'
}
