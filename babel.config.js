module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          src: './src',
          '@pages': './src/pages',
          '@assets': './src/assets',
          '@components': './src/components',
          '@constants': './src/constants',
          '@helpers': './src/helpers',
          '@hooks': './src/hooks',
          '@models': './src/models',
          '@navigation': './src/navigation',
          '@redux': './src/redux',
          '@screens': './src/screens',
          '@services': './src/services',
          '@features': './src/features',
          '@theme': './src/theme',
          '@utils': './src/utils',
          '@themes': './src/themes',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
