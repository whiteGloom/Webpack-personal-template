import HTMLWebpackPlugin from "html-webpack-plugin";
import HtmlBeautifyPlugin from "html-beautify-webpack-plugin";

const workFolder = process.cwd();

export default function() {
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
				template: workFolder + "/src/views/index.pug",
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
}