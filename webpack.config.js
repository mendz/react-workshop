const { resolve } = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	devtool: 'source-map',
	entry: [
		'./index'
	],
	output: {
		path: __dirname,
		filename: 'bundle.js',
		publicPath: '/'
	},
	context: resolve(__dirname, 'src'),
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				options: {
					presets: [["env", { modules: false }], "react"],
				}
			},
			{
				test: /\.scss$/,
				loader: ['style-loader', 'css-loader', 'sass-loader']
			}
		]
	},
	plugins: [
		new HTMLWebpackPlugin({
			title: "React workshop"
		})
	]
};