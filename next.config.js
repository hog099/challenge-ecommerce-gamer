const path = require('path');
require('dotenv').config()  
const withSass = require("@zeit/next-sass");
const withLess = require("@zeit/next-less");
const withCSS = require("@zeit/next-css");

const isProd = process.env.NODE_ENV === "production";

// fix: prevents error when .less files are required by node
if (typeof require !== "undefined") {
  require.extensions[".less"] = (file) => {};
}


module.exports = withCSS({
  env: {
    API_ENV: process.env.API_ENV,
    APP_ENV: process.env.APP_ENV,
  },
  trailingSlash: true,
  // Use the CDN in production and localhost for development.
  assetPrefix: process.env.APP_ENV,
  // assetPrefix: 'https://hog099.github.io/challenge-ecommerce-gamer',
  // assetPrefix: 'http://127.0.0.1/challenger01/',
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')],
  },
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]___[hash:base64:5]",
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.css$/,
      loader: "style-loader!css-loader",
    });
  },
  ...withLess(
    withSass({
      lessLoaderOptions: {
        javascriptEnabled: true,
      },
    })
  ),
});
