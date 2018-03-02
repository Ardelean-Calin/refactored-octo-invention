const path = require("path");

const merge = require("webpack-merge");
const common = require("./webpack.common.js");

const webpack = require("webpack");

module.exports = merge(common, {
  output: {
    filename: "bundle.[hash].js",
    path: path.resolve("dist")
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: {
          extractCSS: false
        }
      }
    ]
  },
  devtool: "eval-source-map",
  devServer: {
    contentBase: "dist",
    hot: true
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("development")
      }
    })
  ]
});
