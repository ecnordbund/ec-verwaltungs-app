const path = require("path");
const nodeExternals = require("webpack-node-externals");
const MinifyPlugin = require("babel-minify-webpack-plugin");
const ProgressBarPlugin = require("progress-bar-webpack-plugin");
const TSLintPlugin = require("tslint-webpack-plugin");

module.exports = {
  entry: "./lib/api_master.ts",
  target: "node",
  externals: [
    nodeExternals({
      whitelist: []
    })
  ],
  module: {
    rules: [
      // {
      //   test: /\.ts$/,
      //   enforce: "pre",
      //   use: [
      //     {
      //       loader: "tslint-loader",
      //       options: {}
      //     }
      //   ]
      // },
      {
        test: /.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: ["@babel/plugin-transform-runtime"]
          }
        }
      }
    ]
  },
  mode: "production",
  resolve: {
    extensions: [".ts", ".js", ".json"]
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "serverProd.js"
  },
  plugins: [new MinifyPlugin(), new ProgressBarPlugin(), new TSLintPlugin({
    files: ['./src/**/*.ts']
  })]
};
