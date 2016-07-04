const path = require('path');
const buildPath = path.resolve(__dirname, 'build');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');
const TransferWebpackPlugin = require('transfer-webpack-plugin');

const config = {
  entry: [
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
        exclude: [nodeModulesPath],
        loaders: ['babel'],
      },
    ],
  },
  // Omit .jsx extension when including in React files
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  plugins: [
    // Moves files
    new TransferWebpackPlugin([
      { from: 'static' },
    ], path.resolve(__dirname, 'src')),
  ],
  // Dev server configurations
  devServer: {
    colors: true,
    contentBase: 'src/static', // Relative directory for base of server
    devtool: 'eval',
    historyApiFallback: true,
    host: 'localhost', // Change to '0.0.0.0' for external facing server
    port: 3000,
  },
};

module.exports = config;
