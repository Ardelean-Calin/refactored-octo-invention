const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackPwaManifest = require("webpack-pwa-manifest");

module.exports = {
  entry: path.resolve("src/main.js"),
  output: {
    filename: "bundle.[hash].js",
    path: path.resolve("dist")
  },
  resolve: {
    extensions: [".js", ".vue"],
    alias: {
      "@": path.join(__dirname, "..", "src")
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve("..", __dirname, "src"),
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"]
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: "file-loader",
        options: { name: "[name].[ext]", outputPath: "assets/" }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve("src/index.html"),
      mobile: true
    }),
    new WebpackPwaManifest({
      name: "Master SSEA v2",
      short_name: "SSEAv2",
      description: "Aplicație mobilă pentru masterul de SSEA.",
      background_color: "#ffffff",
      icons: [
        {
          src: path.resolve("src/assets/logo.png"),
          destination: path.join("icons"),
          sizes: [96, 128, 192, 256, 384, 512] // multiple sizes
        }
      ]
    })
  ]
};
