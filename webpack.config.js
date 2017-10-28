const { resolve } = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { HotModuleReplacementPlugin, NamedModulesPlugin } = require('webpack');

module.exports = {
	devtool: 'cheap-eval-source-map',
	entry: [
		'babel-polyfill',
		'react-hot-loader/patch',
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
					plugins: [
						"transform-class-properties",
						"react-hot-loader/babel"
					]
				}
			},
			{
				test: /\.scss$/,
				loader: ['style-loader?sourceMap', 'css-loader?sourceMap', 'sass-loader?sourceMap']
			}
		]
	},
	plugins: [
		new HTMLWebpackPlugin(),
		new HotModuleReplacementPlugin(),
		new NamedModulesPlugin()
	],
	devServer: {
		hot: true
	}
};