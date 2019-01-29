/*
    Файл с инструкциями для обработки JS файлов.
    Добавляет в список обработчиков лоадер сборщика 'Babel'
*/

module.exports = function(paths) {
    return {
        module: {
            rules: [
				{
					test: /\.js$/,
					loader: "babel-loader",
					exclude: /node_modules/
				}
            ]
        }
    }
};

// -whiteGloom
