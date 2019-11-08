import removeServiceOutputsPlugin from "remove-service-outputs-plugin";

export default function(options) {
	options = options ? options : {};
	var workFolder = options.workFolder;

	return {
		entry: {
			"scripts": workFolder + "/src/index.js",
			"static": workFolder + "/src/static.js"
		},
		output: {
			path: workFolder + "/prod/",
			filename: (data) => {
				switch(data.chunk.name) {
					default: 
						return "scripts/[name].js";
				}
			}
		},
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
		plugins: [
			new removeServiceOutputsPlugin([
				["static", /.*\.js$/]
			])
		],
		devtool: "none"
	};
}