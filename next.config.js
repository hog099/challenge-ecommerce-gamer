const path = require('path');
const withSass = require("@zeit/next-sass");
const withLess = require("@zeit/next-less");
const withCSS = require("@zeit/next-css");

const isProd = process.env.NODE_ENV === "production";

module.exports = withCSS({
  env: {
    API_ENV: process.env.API_ENV,
    APP_ENV: process.env.APP_ENV,
  },
  trailingSlash: true,
  // Use the CDN in production and localhost for development.
  // assetPrefix: process.env.APP_ENV,
  assetPrefix: 'http://127.0.0.1/challenger01/',
  // assetPrefix: 'http://127.0.0.1:3000',
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
