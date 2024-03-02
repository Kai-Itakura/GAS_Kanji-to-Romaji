const path = require('path');
const GasPlugin = require('gas-webpack-plugin');
const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin');

const entryPath = path.resolve(__dirname, 'src', 'document.ts');
const outputPath = path.resolve(__dirname, 'dist');

module.exports = {
  mode: 'production',
  entry: entryPath,
  output: {
    path: outputPath,
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.ts'],
    plugins: [
      new TsconfigPathsPlugin({
        configFile: path.resolve(__dirname, 'tsconfig.json'),
      }),
    ],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
    ],
  },
  plugins: [new GasPlugin()],
};
