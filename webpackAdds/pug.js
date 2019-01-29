/*
    Файл с инструкциями для обработки Pug файлов.
    Добавляет:
    	* - в список обработчиков:
    		* - лоадер для 'Pug';
    	* - в список плагинов:
    		* - плагин для вывода HTML кода в отдельный файл;
    		* - плагин для кастомной преттификации конечного HTML;

   	Полные списки опций плагинов можно найти в их репозиториях.
*/

const HTMLWebpackPlugin = require("html-webpack-plugin");
const HtmlBeautifyPlugin = require('html-beautify-webpack-plugin');

module.exports = function(paths) {
    return {
        module: {
            rules: [
				{
				    test: /\.pug$/,
				    loader: 'pug-loader',
					exclude: /node_modules/
				}
            ]
        },
        plugins: [
			new HTMLWebpackPlugin({
				template: paths + "/dev/index.pug",
				inject: false,												// Параметр, отключающий включение в конечный HTML ссылок на собранные файлы CSS, JS и т.д.
				minify: false												// Параметр, отключающий минификацию конечного HTML
			}),
	        new HtmlBeautifyPlugin({
		        config: {
		            html: {
		                indent_with_tabs: true,								// Параметр, отвечающий за табуляцию отступов
		                inline: [],											// Параметр, обнуляющий массив инлайновых тэгов
		                unformatted: ['p', 'i', 'b', 'span']				// Параметр, содержащий массив необрабатываемых тегов ( по умолчанию содержит тэги, перечисленные в inline)
		            }
		        }
		    })
		]
    }
};

// -whiteGloom
