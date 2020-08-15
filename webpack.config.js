const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    homepage: "./webpack/index.js"
  },
  output: {
    path: path.resolve(__dirname, "./assets/js/")
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        query: {
          presets: ["@babel/preset-env"]
        }
      }
    ]
  }
};
