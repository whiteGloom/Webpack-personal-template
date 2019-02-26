/*
    Файл с инструкциями для обработки статики ( изображений, векторов, шрифтов и т.п. ).
*/

module.exports = function(paths) {
    return {
        module: {
            rules: [
				{
					test:  /\.(jpe?g|gif|png|svg)/,
					loader: "file-loader",
				    options: {
				      	outputPath: 'static/images',
				      	name: '[name].[ext]'
				    },
					exclude: /node_modules/
				},
				{
					test:  /\.(woff|otf|ttf|eot)/,
					loader: "file-loader",
				    options: {
				      	outputPath: 'static/fonts',
				      	name: '[name].[ext]'
				    },
					exclude: /node_modules/
				}
            ]
        }
    }
};

// -whiteGloom