const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: "./src/App.tsx",
  output: {
    filename: "[name]-[hash].js",
  },
  module: {
    rules: [
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      {
        test: /\.ts[x]?$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader",
        },
      },
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new webpack.EnvironmentPlugin({
      NODE_ENV: "development", // only useful when in the code.
    }),
  ],
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
  devtool: "source-map",
  devServer: {
    contentBase: "./dist",
  },
  // externals: [
  //   {
  //     React: "React",
  //   },
  // ],
};
