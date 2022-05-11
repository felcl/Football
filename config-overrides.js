// const path = require('path')
// function resolve (dir) {
//     return path.join(__dirname, '.', dir)
// }
const webpack = require('webpack');
module.exports = function override(config, env) {
    //do stuff with the webpack config...
    config.resolve.fallback = {
        net: false,
        url: require.resolve('url'),
        crypto: require.resolve('crypto-browserify'),
        assert: require.resolve('assert'),
        http: require.resolve('stream-http'),
        https: require.resolve('https-browserify'),
        os: require.resolve('os-browserify/browser'),
        stream: require.resolve('stream-browserify'),
    }
    config.plugins=[...config.plugins,
        new webpack.ProvidePlugin({
            Buffer: ["buffer", "Buffer"]
        }),
        new webpack.ProvidePlugin({
          process: 'process/browser',
        })
    ]
    return config;
  }