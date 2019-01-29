/*
    Файл с инструкциями для обработки Stylus и CSS файлов.
    Добавляет:
    	* - в список обработчиков:
    		* - лоадеры для 'Stylus' и CSS;
    	* - в список плагинов:
    		* - плагин для вывода стилей в отдельный файл и имя для выходящего файла;
*/

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = function(paths) {
    return {
        module: {
            rules: [
				{
					test: /\.styl$|\.css$/,
					use: ["style-loader", MiniCssExtractPlugin.loader, "css-loader", "stylus-relative-loader"],
					exclude: /node_modules/
				}
            ]
        },
        plugins: [
            new MiniCssExtractPlugin({filename: "styles.css"})
        ]
    }
};

// -whiteGloom
