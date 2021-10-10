(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) :
  factory();
})((function () { 'use strict';

  var StylelintPlugin = require('stylelint-webpack-plugin');
  module.exports = function (api, options) {
      api.chainWebpack(function (webpackConfig) {
          webpackConfig.plugin('stylelint-webpack-plugin').use(StylelintPlugin);
      });
  };

}));
