import MiniCssExtractPlugin from "mini-css-extract-plugin";

export default function() {
	return {
		module: {
			rules: [
				{
					test: /\.(styl|css)/,
					use: [
						"style-loader",
						MiniCssExtractPlugin.loader,
						{ loader: "css-loader", options: { url: false } },
						"stylus-relative-loader"
					],
					exclude: /[\\/]node_modules[\\/]/
				}
			]
		},
		plugins: [
			new MiniCssExtractPlugin({
				filename: "static/styles/styles.css"
			})
		]
	};
}