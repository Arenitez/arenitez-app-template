const path = require('path');

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          extensions: ['.tsx', '.ts', '.js', '.json'],
          alias: {
            $navigation: path.resolve(__dirname, './src/navigation'),
            $components: path.resolve(__dirname, './src/components'),
            $constants: path.resolve(__dirname, './src/shared/constants'),
            $hooks: path.resolve(__dirname, './src/shared/hooks'),
            $libs: path.resolve(__dirname, './src/shared/libs'),
          },
        },
      ],
      'react-native-reanimated/plugin',
    ],
  };
};
