module.exports = function(options) {
	var options = options ? options : {};
	var base = options.base;
	return {
		mode: 'development',
		entry: {
			'base': base + '/src/index.js',
			'static': base + '/src/static.js'
		},
		output: {
			path: base + '/prod/',
			filename: (data) => {
				switch(data.chunk.name) {
					case 'static':
						return 'scripts/tmp/[name].js'
						break;
					default: 
						return 'scripts/[name].js';
						break;
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
						name: 'vendors',
						filename: '[name].js',
						chunks: 'all'
					},
					default: false
				}
			}
		},
		resolve : {
			
		},
		devtool: 'none',
		devServer: {
		}
	}
}
