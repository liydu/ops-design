const path = require('path');
const buildPath = path.resolve(__dirname, 'build');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');
const webpack = require('webpack');
const TransferWebpackPlugin = require('transfer-webpack-plugin');

const config = {
  entry: [
    'webpack/hot/dev-server',
    'webpack/hot/only-dev-server',
    path.join(__dirname, '/src/app/app.js'),
  ],
  devtool: 'eval',
  output: {
    path: buildPath, // Path for output files
    filename: 'app.js',
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loaders: ['react-hot', 'babel-loader'],
        exclude: [nodeModulesPath],
      },
    ],
  },
  // Omit .jsx in React files
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  plugins: [
    // Enables Hot Modules Replacement
    new webpack.HotModuleReplacementPlugin(),
    // Allows error warnings but does not stop compiling.
    new webpack.NoErrorsPlugin(),
    // Moves files
    new TransferWebpackPlugin([
      {from: 'static'},
    ], path.resolve(__dirname, 'src')),
  ],
  // Dev server configurations
  devServer: {
    contentBase: 'src/static', // Relative directory for base of server
    devTool: 'eval', // Live-reload
    hot: true,
    port: 3000,
    host: 'localhost', // Change to '0.0.0.0' for external facing server
  },
};

module.exports = config;