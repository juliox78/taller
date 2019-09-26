const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')



module.exports = {
devServer: {
 allowedHosts: [
  'host.com',
  'subdomain.host.com',
  'subdomain2.host.com',
  '78d0db8f.ngrok.io',
  'iq3di4tikuyr3lxhsqimn2.webrelay.io'
   ]
  },  
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        use: [ 
          'style-loader', 
          'css-loader',
          'sass-loader',
        ]
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    })
  ]
}
