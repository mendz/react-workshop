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
						"transform-object-rest-spread",
						"react-hot-loader/babel"
					]
				}
			},
			{
				test: /\.scss$/,
				loader: ['style-loader?sourceMap', 'css-loader?sourceMap', 'sass-loader?sourceMap']
			},
			{
				test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loader: "url-loader?limit=10000&mimetype=application/font-woff"
			},
			{
				test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loader: "file-loader"
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