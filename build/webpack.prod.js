const path = require("path");

const merge = require("webpack-merge");
const common = require("./webpack.common.js");

const webpack = require("webpack");

const ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

module.exports = merge(common, {
  output: {
    filename: "bundle.js",
    path: path.resolve("dist")
  },
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
    new BundleAnalyzerPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    })
  ]
});
