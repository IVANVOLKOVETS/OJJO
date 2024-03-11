const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");

const __base = path.resolve(__dirname, "..");
const __src = path.resolve(__base, "src");

module.exports = {
  entry: path.resolve(__src, "main.js"),

  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__base, "dist"),
    clean: true,
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "OJJO JEWELRY",
      template: path.resolve(__src, "templates", "index.html"),
    }),
    new VueLoaderPlugin(),
  ],

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ],
  },
};
