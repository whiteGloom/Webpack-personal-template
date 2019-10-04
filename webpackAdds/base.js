module.exports = function(options) {
	options = options ? options : {};
	var base = options.base;

	return {
		mode: "development",
		entry: {
			"scripts": base + "/src/index.js",
			"static": base + "/src/static.js"
		},
		output: {
			path: base + "/prod/",
			filename: (data) => {
				switch(data.chunk.name) {
					case "static":
						return "scripts/tmp/[name].js";
					default: 
						return "scripts/[name].js";
				}
			}
		},
		module: {
			rules: [

			]
		},
		plugins: [
		
		],
		optimization: {
			splitChunks: {
				cacheGroups: {
					vendors: {
						test: /[\\/](vendors|node_modules)[\\/]/,
						name: "vendors",
						filename: "[name].js",
						chunks: "all"
					},
					default: false
				}
			}
		},
		resolve : {
			
		},
		devtool: "none",
		devServer: {
			stats: "errors-only"
		}
	};
};
