import removeServiceOutputsPlugin from "remove-service-outputs-plugin";

const workFolder = process.cwd();

export default function() {
	return {
		entry: {
			"scripts": workFolder + "/src/entry.js",
			"static": workFolder + "/src/static.js"
		},
		output: {
			path: workFolder + "/prod/",
			filename: data => {
				switch(data.chunk.name) {
					default: 
						return "scripts/[name].js";
				}
			}
		},
		optimization: {
			splitChunks: {
				cacheGroups: {
					// Uncomment code below, if vendors were used

					// vendors: {
					// 	test: /[\\/](vendors|node_modules)[\\/]/,
					// 	name: "vendors",
					// 	filename: "[name].js",
					// 	chunks (chunk) {
					// 		return true
					// 	},
					// 	enforce: true
					// }
				}
			}
		},
		performance: {
			hints: false
		},
		plugins: [
			new removeServiceOutputsPlugin([
				["static", /.*\.js$/]
			])
		],
		devtool: "none"
	};
}