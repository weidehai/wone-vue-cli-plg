/* eslint-disable */
const StylelintPlugin = require('stylelint-webpack-plugin');
/* eslint-enable */
module.exports = (api: any, options: any) => {
  api.chainWebpack((webpackConfig: any) => {
    webpackConfig.plugin('stylelint-webpack-plugin').use(StylelintPlugin);
  });
};
