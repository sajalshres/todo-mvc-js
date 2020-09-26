const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: { index: path.resolve(__dirname, 'src', 'js', 'app.js') },
  output: { path: path.resolve(__dirname, 'dist') },
  module: {
    rules: [
      {
        // Apply rule for .sass, .scss or .css files
        test: /\.(sa|sc|c)ss$/,
        // Set loaders to transform files
        // Loaders are applied from right to left
        use: [
          // gets all the transformed CSS and
          // extract it into single bundled file
          { loader: MiniCssExtractPlugin.loader },
          // resolves url() and @imports inside css
          { loader: 'css-loader' },
          // apply postCSS fixes like autoprefixer and minifying
          { loader: 'postcss-loader' },
          // transform sass to css
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
            },
          },
        ],
      },
      {
        // Apply rule for images
        test: /\.(png|jpe?g|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'images',
            },
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
    }),
    new MiniCssExtractPlugin({ filename: 'bundle.css' }),
  ],
};
