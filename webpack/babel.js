module.exports = {
	test: /\.js$/,
	exclude: /node_modules/,
	use: {
		loader: 'babel-loader',
		options: {
			presets: [
				[
					"@babel/preset-react",
					{
						"throwIfNamespace": false // defaults to true
					}
				],
				[
					'@babel/preset-env', 
					{
						useBuiltIns: 'entry',
						targets: {
							Chrome: 67,
							IE: 11,
							'browsers': ['last 2 versions', 'safari 7']
						},
					}
				]
			],
			plugins: [
				'@babel/plugin-proposal-object-rest-spread',
				'@babel/plugin-syntax-dynamic-import',
				['@babel/plugin-proposal-decorators', { 'legacy': true }],
				['@babel/plugin-proposal-class-properties', { 'loose': false }]
			]
		}
	}
}