// webpack.config.js
const path = require('path');
const webpack = require('webpack');

const base = {
  entry: './src/index.ts',
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  externals: ['react', 'react-dom'],
  optimization: {
    concatenateModules: false,
  },
  plugins: [
    new webpack.DefinePlugin({
      self: 'typeof self !== "undefined" ? self : this',
    }),
  ],
};

module.exports = [
  // 1) CommonJS build
  {
    ...base,
    mode: 'production',
    externalsType: 'commonjs2',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'index.cjs.js',
      library: { type: 'commonjs2' },
    },
  },

  // 2) ESModule build
  {
    ...base,
    mode: 'production',
    externalsType: 'module',
    experiments: { outputModule: true },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'index.esm.js',
      library: { type: 'module' },
    },
  },
];
