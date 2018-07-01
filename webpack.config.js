module.exports = options => {
  return {
    entry: './index.js',
    output: {
      filename: 'bundle.js',
	  publicPath: '/'
    },
    module: {
      rules: [
        {
          test: /.js$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                cacheDirectory: true,
              },
            },
          ],
        },
      ],
    },
	devServer: {
		host:'45.55.150.116',
		port: 8888,
		historyApiFallback: true
		}
	
  }
}

