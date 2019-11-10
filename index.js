// External modules
import WebpackLoader from "webpack-loader";

// Local modules
import getAliasesConfig from "./webpackConfigs/vendors/aliasesConfig.js";
import getBabelConfig from "./webpackConfigs/vendors/babelConfig.js";
import getStylusConfig from "./webpackConfigs/vendors/stylusConfig.js";
import getPugConfig from "./webpackConfigs/vendors/pugConfig.js";
import getStaticsConfig from "./webpackConfigs/vendors/staticsConfig.js";

import getMainConfig from "./webpackConfigs/mainConfig.js";


// Variables
var npmArguments = process.argv.slice(2);
var webpackLoader = new WebpackLoader();


// Config
webpackLoader.makeNewConfig("main", [
	getMainConfig(),
	getBabelConfig(),
	getPugConfig(),
	getStylusConfig(),
	getStaticsConfig(),
	getAliasesConfig()
], "production");

webpackLoader.addToDevServerConfig({
	stats: "errors-only",
	open: true
});


// Init
// If mode is build
if (npmArguments.indexOf("build") > -1) webpackLoader.run();

// If mode is build-watch
if (npmArguments.indexOf("build-watch") > -1) webpackLoader.runWatch();

// If mode is build-live
if (npmArguments.indexOf("build-live") > -1) webpackLoader.runDevServer();