module.exports = {
    entry: './client/provider.js',
    output: {
      path: __dirname.toLowerCase(),
      filename: './public/bundle.js'
    },
    module: {
        rules: [
          {
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader'
          }
        ]
    }
}