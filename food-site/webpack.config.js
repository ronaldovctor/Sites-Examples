const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')

const modeDev = process.env.NODE_ENV !== 'production'

module.exports = {
	mode: modeDev ? 'development' : 'production',
	entry: './script.js',
	output: {
		filename: 'app.min.js',
		path: `${__dirname}/dist`,
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'styles.css',
		}),
	],
	module: {
		rules: [
			{
				test: /\.s?[ac]ss$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				type: 'asset/resource',
			},
		],
	},
	optimization: {
		minimizer: [new TerserPlugin({})],
	},
}
