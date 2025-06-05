const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/js/ui.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'winjs.js',
    library: 'WinJS',
    libraryTarget: 'umd',
    globalObject: `(typeof self !== 'undefined' ? self : this)`
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src/js'),
        use: [
          {
            loader: '@sdinteractive/requirejs-loader'
          },
          {
            loader: 'babel-loader',
            options: {
              presets: [
                ['@babel/preset-env', { targets: { edge: '16' }, modules: false }]
              ]
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js'],
    modules: [path.resolve(__dirname, 'src/js'), 'node_modules'],
    alias: {
      'WinJS': path.resolve(__dirname, 'src/js/WinJS')
    }
  }
};
