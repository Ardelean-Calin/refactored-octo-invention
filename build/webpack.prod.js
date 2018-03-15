const path = require("path");

const merge = require("webpack-merge");
const common = require("./webpack.common.js");

const webpack = require("webpack");

const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
const CleanWebpackPlugin = require("clean-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const OfflinePlugin = require("offline-plugin");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");

module.exports = merge(common, {
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: {
          extractCSS: true
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin([path.resolve("dist")], {
      root: path.resolve("..")
    }),
    new ExtractTextPlugin("style.css"),
    new UglifyJSPlugin(),
    // new BundleAnalyzerPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    }),
    new OfflinePlugin()
  ]
});
