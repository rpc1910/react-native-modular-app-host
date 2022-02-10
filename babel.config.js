const getLocalModuleConfig = require('./utils/get-local-module-config');

module.exports = api => {
  api.cache(false);
  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            ...getLocalModuleConfig(),
          },
        },
      ],
    ],
  };
};
