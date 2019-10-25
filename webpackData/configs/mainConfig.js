module.exports = function(options) {
	options = options ? options : {};
	var workFolder = options.workFolder;

	return {
		mode: "development",
		entry: {
			"scripts": workFolder + "/src/index.js",
			"static": workFolder + "/src/static.js"
		},
		output: {
			path: workFolder + "/prod/",
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
