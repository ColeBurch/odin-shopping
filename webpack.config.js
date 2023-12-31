const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const InjectBodyPlugin = require("inject-body-webpack-plugin").default;
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = (env, argv) => {
  return {
    mode: "development",
    entry: {
      index: "./src/index.tsx",
    },
    devtool: "inline-source-map",
    devServer: {
      static: "./dist",
      historyApiFallback: true,
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: "Odin Store",
      }),
      new InjectBodyPlugin({
        content: "<main id=root></main>",
      }),
    ],
    output: {
      filename: "[name].bundle.js",
      path: path.resolve(__dirname, "dist"),
      clean: true,
      publicPath: "https://coleburch.github.io/odin-shopping/",
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)?$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader", "postcss-loader"],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: "asset/resource",
        },
      ],
    },
    resolve: {
      modules: ["node_modules"],
      plugins: [
        new TsconfigPathsPlugin({ extensions: [".tsx", ".ts", ".js"] }),
      ],
      extensions: [".tsx", ".ts", ".js"],
    },
    optimization: {
      runtimeChunk: "single",
    },
  };
};
