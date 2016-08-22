var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: "./src/home.js",
  output: {
    path: __dirname,
    filename: "home.min.js"
  }
};
