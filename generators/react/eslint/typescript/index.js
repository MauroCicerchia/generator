const _ = require("lodash");
const Generator = require('yeoman-generator');
_.extend(Generator.prototype, require('yeoman-generator/lib/actions/install'));

module.exports = class extends Generator {
	installDependencies() {
		this.npmInstall(
			[
				"prettier",
				"eslint",
				"eslint-config-prettier",
				"eslint-config-standard",
				"eslint-plugin-import",
				"eslint-plugin-node",
				"eslint-plugin-prettier",
				"eslint-plugin-promise",
				"eslint-plugin-react",
				"eslint-plugin-react-hooks",
				"@typescript-eslint/parser",
				"@typescript-eslint/eslint-plugin",
			],
			{ "save-dev": true }
		);
	}

	eslint() {
		this.fs.copy(this.templatePath(".eslintrc"), this.destinationPath(".eslintrc"));
	}
};
