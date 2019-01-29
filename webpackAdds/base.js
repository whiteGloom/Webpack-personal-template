/*
    Файл с основной информацией.
    Указывает:
    * - входной файл с поключаемыми файлами;
    * - путь и имя для выходного файла;
    * - поля для оперативного встраивания ( на всякий случай );
*/

module.exports = function(paths) {
	return {
		mode: 'development',
		entry: paths + "/dev/index.js",
		output: {
			path: paths + "/prod/",
			filename: "scripts.js"
		},
	    module: {
	        rules: [

	        ]
	    },
	    plugins: [

	    ]
	}
}

// -whiteGloom
