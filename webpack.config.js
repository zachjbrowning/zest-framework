const HtmlWebPackPlugin = require("html-webpack-plugin");
var path = require('path');

module.exports = {
    entry: './src/index.js',
    devServer: {
        historyApiFallback: true,
        port: 9000
    },
    optimization: {
      runtimeChunk: {
        name: 'manifest'
      },
      splitChunks: {
        chunks: "all",
        maxInitialRequests: Infinity,
        minSize: 0,
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendor',
            chunks: 'initial',
          }
        }
      }
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: "[name].js",
      chunkFilename: "[id]-[chunkhash].js",
      publicPath: '/'
    },
    module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.(png|jpg|gif|ico)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: [
            { loader: 'style-loader' },
            {
              loader: 'css-loader',
              options: {
                modules: {auto : true},
                importLoaders: 1
              }
            }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
};