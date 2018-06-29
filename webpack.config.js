module.exports = options => {
  return {
    entry: './index.js',
    output: {
      filename: 'bundle.js',
    },

	devServer: {
		host:'45.55.150.116',
		port: 8888
		}
	
  }
}

