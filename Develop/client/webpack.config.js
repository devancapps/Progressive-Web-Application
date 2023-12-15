const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

// TODO: Add and configure workbox plugins for a service worker and manifest file.
// TODO: Add CSS loaders and babel to webpack.

module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
        title: 'Webpack App',
      }),

      
      new InjectManifest({
        swSrc: './src/sw.js', // Source of your service worker file
        swDest: 'service-worker.js',
      }),

      // webpack manifest plugin for generating a manifest.json
      new WebpackPwaManifest({
        name: 'Your App Name',
        short_name: 'AppShortName',
        description: 'Your application description',
        background_color: '#ffffff',
        crossorigin: 'use-credentials',
        icons: [
          {
            src: path.resolve('src/assets/icon.png'),
            sizes: [96, 128, 192, 256, 384, 512] 
          },
        ],
      }),
    ],

    module: {
      rules: [
        
      ],
    },
  };
};
