module.exports = {
	test: /\.(png|jpg|gif|svg)$/i,
	use: [
		{
			loader: 'url-loader',
			options: {
				fallback: 'file-loader', //file-loader is default
				name: '[name].[ext]',
				outputPath: 'images/',
				publicPath: '../images/',
				limit: 8192
			},
		}
	]
}