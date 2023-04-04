const { composePlugins, withNx } = require('@nrwl/rspack');

module.exports = composePlugins(withNx(), (config) => {
  config = {
    ...config,
    externalsType: 'commonjs',
    externals: {
      '@nestjs/common': '@nestjs/common',
      '@nestjs/core': '@nestjs/core',
      tslib: 'tslib',
    },
    target: 'node',
  };
  return config;
});
