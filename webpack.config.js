const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const Dotenv = require('dotenv-webpack');
const CompressionPlugin = require('compression-webpack-plugin');

/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const zlib = require('zlib');

const config = {
  entry: ['react-hot-loader/patch', './src/index.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(pcss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          'postcss-loader',
        ],
      },
      // NOTE: for antd theme tweaking
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                modifyVars: {
                  hack: `true; @import "${path.resolve(
                    __dirname,
                    'src',
                    'shared',
                    'config',
                    'theme.less'
                  )}";`,
                },
                javascriptEnabled: true,
              },
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        use: 'file-loader',
      },
      {
        test: /\.png$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              mimetype: 'image/png',
            },
          },
        ],
      },
      {
        test: /\.ico$/i,
        use: {
            loader: "file-loader",
            options: {
                name: "[name].[ext]"
            }
        }
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      'react-dom': '@hot-loader/react-dom',
      '@perseus': path.resolve(__dirname, 'src'),
      '@perseus-elements': path.resolve(__dirname, 'src/shared/components'),
      '@perseus-modules': path.resolve(__dirname, 'src/modules'),
      '@perseus-shared': path.resolve(__dirname, 'src/shared'),
    },
  },
  devServer: {
    contentBase: './dist',
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Rick and Morty',
      template: path.resolve(__dirname, 'src/index.html'),
      filename: 'index.html',
      favicon: './src/shared/assets/favicon.ico'
    }),
    new Dotenv(),
    new MiniCssExtractPlugin(),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false,
    }),
    new webpack.ContextReplacementPlugin(
      /date-fns[/\\]/,
      new RegExp(
        `[/\\\\](${['en-GB', 'hi', 'de', 'it', 'es', 'fr'].join(
          '|'
        )})[/\\\\]index.js$`
      )
    ),
    new CompressionPlugin({
      filename: '[path][base].gz',
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
    new CompressionPlugin({
      filename: '[path][base].br',
      algorithm: 'brotliCompress',
      test: /\.(js|css|html|svg)$/,
      compressionOptions: {
        params: {
          [zlib.constants.BROTLI_PARAM_QUALITY]: 11,
        },
      },
      threshold: 10240,
      minRatio: 0.8,
      deleteOriginalAssets: false,
    }),
  ],
  optimization: {
    runtimeChunk: 'single',
    // NOTE: splits up the bundle into two:
    // one bundle contains the code we  write,
    // and the other contains all your dependencies
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
};

module.exports = (env, argv) => {
  if (argv.hot) {
    // Cannot use "contenthash" when hot reloading is enabled.
    config.output.filename = '[name].[fullhash].js';
  }

  return config;
};
