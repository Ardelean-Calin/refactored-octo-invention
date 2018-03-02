const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

function resolve(dir) {
  return path.join(__dirname, "..", dir);
}

module.exports = {
  entry: path.resolve("src/main.js"),
  resolve: {
    extensions: [".js", ".vue"],
    alias: {
      "@": resolve("src")
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
      inject: false,
      template: require("html-webpack-template"),
      headHtmlSnippet:
        "<style>body {font-family: 'Roboto', sans-serif;}</style>",
      appMountId: "app",
      links: [
        "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons"
      ],
      mobile: true
    })
  ]
};
