# What is it? [ENG]
This is a "for myself" template designed for quick project pre-tuning.

**Used plugins:**

* **[Webpack](https://webpack.js.org/ "Webpack")**
* **[Pug](https://pugjs.org/ "Pug")**
* **[Stylus](http://stylus-lang.com/ "Stylus")**
* **[Jasmine](https://jasmine.github.io/ "Jasmine")**
* **[ES Lint](https://eslint.org/ "ES Lint")**

## How to
Do not forget about `npm install` to install dependencies.

**Commands:**

* `npm run build`  - launches a one-time compile of the project
* `npm run build-watch` - launches a auto recompiling of a project
* `npm run build-live` - launches a server
* `npm run test` - launches a tests

**Aliases:**
Aliases must be registered in the file "package.json" (located in the root directory), in the property "**_moduleAliases**", and must start with the abbreviation "**@**".
Webpack and Jasmine will automatically load the aliases.

*Example:*
```
// Creating of alias.
// File "package.json":
{
	...
	"scripts": { ... },
	"_moduleAliases": {
		"@NameOfAlias": "./PathToAlias",
		"@test": "./test.js"
	},
	...
}
```


## End.


# Шо ита? [RU]
Это шаблон "для себя", для быстрой преднастройки проекта. 

**Используемые плагины:**

* **[Webpack](https://webpack.js.org/ "Webpack")**
* **[Pug](https://pugjs.org/ "Pug")**
* **[Stylus](http://stylus-lang.com/ "Stylus")**
* **[Jasmine](https://jasmine.github.io/ "Jasmine")**
* **[ES Lint](https://eslint.org/ "ES Lint")**

## Инструкция
Не забудьте про `npm install`, что бы установить зависимости.

**Команды:**
* `npm run build`  - запуск разовой сборки проекта
* `npm run build-watch` - запуск автоматической пересборки проекта
* `npm run build-live` - запуск сервера
* `npm run test` - запуск тестов

**Aliases (сокращения):**
Алиасы прописываются в файле package.json (находится в корневом каталоге), в параметре "**_moduleAliases**", и должны начинаться с символа "**@**".
Webpack и Jasmine автоматически подгрузят сокращения.

*Пример:*
```
// Создание сокращения.
// Файл "package.json":
{
	...
	"scripts": { ... },
	"_moduleAliases": {
		"@ИмяСокращения": "./путьДоСокращения",
		"@test": "./test.js"
	},
	...
}
```


## Всё.

**-whiteGloom**