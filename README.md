# Languages
* **[English](#what-is-it-eng "English")**
* **[Русский](#шо-ита-ru "Русский")**


------------


# What is it? [ENG]

[↓ To navigation](#Navigation "↓ To navigation") | **[↑ To languages](#languages "↑ To languages")**

This is a "for myself" template designed for quick project pre-tuning.

**Used plugins:**

* **[Webpack](https://webpack.js.org/ "Webpack")**
* **[Pug](https://pugjs.org/ "Pug")**
* **[Stylus](http://stylus-lang.com/ "Stylus")**
* **[Jasmine](https://jasmine.github.io/ "Jasmine")**
* **[ES Lint](https://eslint.org/ "ES Lint")**

## Navigation
* **[What is it? [ENG]](#what-is-it-eng "What is it? [ENG]")**
	- **Navigation**
	- **[How to](#how-to "How to")**
		+ **[Commands](#commands "Commands")**
		+ **[Aliases](#aliases "Aliases")**
	- **[End.](#end "End.")**

## How to
Do not forget about **`npm install`** to install dependencies.

### Commands

* `npm run build`  - launches a one-time compile of the project
* `npm run build-watch` - launches a auto recompiling of a project
* `npm run build-live` - launches a server
* `npm run test` - launches a tests

### Aliases

*Aliases* must be registered in the file **`package.json`** (located in the root directory), in the property **`_moduleAliases`**, and must start with the abbreviation **`@`**.
*Webpack* and *Jasmine* will automatically load the aliases.

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

[↑ To navigation](#Navigation "↑ To navigation")

## End.


# Шо ита? [RU]
Это шаблон "для себя", для быстрой преднастройки проекта.

[↓ К навигации](#Навигация "↓ К навигации") | **[↑ To languages](#languages "↑ To languages")**

**Используемые плагины:**

* **[Webpack](https://webpack.js.org/ "Webpack")**
* **[Pug](https://pugjs.org/ "Pug")**
* **[Stylus](http://stylus-lang.com/ "Stylus")**
* **[Jasmine](https://jasmine.github.io/ "Jasmine")**
* **[ES Lint](https://eslint.org/ "ES Lint")**

## Navigation
* **[Шо ита? [RU]](#шо-ита-ru "Шо ита? [RU]")**
	- **Навигация**
	- **[Инструкция](#Инструкция "Инструкция")**
		+ **[Команды](#команды "Команды")**
		+ **[Aliases](#aliases "Aliases")**
	- **[Всё.](#всё "Всё.")**


## Инструкция
Не забудьте про **`npm install`**, что бы установить зависимости.

### Команды
* `npm run build`  - запуск разовой сборки проекта
* `npm run build-watch` - запуск автоматической пересборки проекта
* `npm run build-live` - запуск сервера
* `npm run test` - запуск тестов

### Aliases
*Алиасы* (сокращения) прописываются в файле **`package.json`** (находится в корневом каталоге), в параметре **`_moduleAliases`**, и должны начинаться с символа **`@`**.
*Webpack* и *Jasmine* автоматически подгрузят сокращения.

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

[↑ К навигации](#Навигация "↓ К навигации")

## Всё.

**-whiteGloom**