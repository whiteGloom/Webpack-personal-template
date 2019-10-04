const HTMLWebpackPlugin = require("html-webpack-plugin");
const HtmlBeautifyPlugin = require("html-beautify-webpack-plugin");

module.exports = function(options) {
	options = options ? options : {};
	var base = options.base;
	return {
		module: {
			rules: [
				{
					test: /\.(pug|html)/,
					loader: "pug-loader",
					exclude: /[\\/]node_modules[\\/]/
				}
			]
		},
		plugins: [
			new HTMLWebpackPlugin({
				template: base + "/src/views/index.pug",
				filename: "index.html",
				inject: false,
				minify: false
			}),
			
			new HtmlBeautifyPlugin({
				config: {
					html: {
						indent_with_tabs: true,
						inline: [],
						unformatted: ["p", "i", "b", "span"]
					}
				}
			})
		]
	};
};