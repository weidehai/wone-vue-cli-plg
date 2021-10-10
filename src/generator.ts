/* eslint-disable */
const fsPromise = require('fs/promises');

const stylelintrc = {
  extends: ['@primer/stylelint-config'],
};

module.exports = (api: any) => {
  api.extendPackage({
    devDependencies: {
      stylelint: '^13.13.1',
      '@primer/stylelint-config': '^12.0.1',
      '@primer/css': '^18.0.1',
    },
    scripts: {
      'lint-fix':
        'eslint src/**/*.js src/**/*.vue --fix && stylelint src/**/*.{vue,html,less,css} --fix',
      stylelint: 'stylelint src/**/*.{vue,html,less,css}',
    },
    prettier: {
      singleQuote: true,
    },
  });
  fsPromise.writeFile('.stylelintrc.json', JSON.stringify(stylelintrc));
};
