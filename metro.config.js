/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */
const getLocalModuleConfig = require('./utils/get-local-module-config');
const path = require('path');

const modulesPaths = getLocalModuleConfig();

// https://github.com/facebook/metro/issues/7

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
  resolver: {
    extraNodeModules: {
      ...modulesPaths,
    },
    nodeModulesPaths: [path.resolve('.', 'node_modules')],
  },
  watchFolders: [...Object.values(modulesPaths)],
};
