module.exports = function (api) {
  api.cache(true)

  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            '@dtos/*': './src/dtos/*',
            '@assets/*': './src/assets/*',
            '@components/*': './src/components/*',
            '@screens/*': './src/screens/*',
            '@storage/*': './src/storage/*',
            '@utils/*': './src/utils/*',
            '@services/*': './src/services/*',
            '@http/*': './src/http/*',
            '@hooks/*': './src/hooks/*',
            '@contexts/*': './src/contexts/*',
            '@routes/*': './src/routes/*',
            '@schemas/*': './src/schemas/*',
            '@styles/*': './src/styles/*',
            '@reducers/*': './src/reducers/*',
            'tailwind.config': './tailwind.config.js',
          },
        },
      ],
      'react-native-reanimated/plugin',
      '@babel/plugin-transform-template-literals',
    ],
  }
}
