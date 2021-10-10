(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) :
  factory();
})((function () { 'use strict';

  var fsPromise = require('fs/promises');
  var stylelintrc = {
      "extends": ['@primer/stylelint-config'],
  };
  module.exports = function (api) {
      api.extendPackage({
          devDependencies: {
              stylelint: '^13.13.1',
              '@primer/stylelint-config': '^12.0.1',
              '@primer/css': '^18.0.1',
          },
          scripts: {
              'lint-fix': 'eslint src/**/*.js src/**/*.vue --fix && stylelint src/**/*.{vue,html,less,css} --fix',
              stylelint: 'stylelint src/**/*.{vue,html,less,css}',
          },
          prettier: {
              singleQuote: true,
          },
      });
      fsPromise.writeFile('.stylelintrc.json', JSON.stringify(stylelintrc));
  };

}));
