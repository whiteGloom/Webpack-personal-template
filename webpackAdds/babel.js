module.exports = function(options) {
	var options = options ? options : {};
	return {
		module: {
			rules: [
				{
					test: /\.js/,
					loader: "babel-loader",
					exclude: /[\\/]node_modules[\\/]/
				}
			]
		}
	}
};