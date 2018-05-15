const { injectBabelPlugin } = require('react-app-rewired');

module.exports = function override(config, env) {
  config = injectBabelPlugin(['import', { libraryName: 'axxd', libraryDirectory: 'es', style: 'css' }], config);
  return config;
};