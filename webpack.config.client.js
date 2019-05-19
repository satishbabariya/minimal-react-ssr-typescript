const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    main: './src/client/index.tsx',
  },
  module: {
    rules: [
      {
        loader: 'ts-loader',
        test: /\.tsx?$/,
        exclude: [/node_modules/],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: '[name].bundle.js',
    sourceMapFilename: '[file].map',
    path: path.resolve(__dirname, 'dist/public'),
  },
};