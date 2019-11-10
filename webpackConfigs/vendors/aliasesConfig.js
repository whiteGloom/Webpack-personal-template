const packageAliases = require("../../package.json")._moduleAliases;
const workFolder = process.cwd();

export default function() {
	var aliases = {};
	for(var key in packageAliases) {
		aliases[key] = workFolder + packageAliases[key].slice(1);
	}

	return {
		resolve: {
			alias: aliases
		}
	};
}