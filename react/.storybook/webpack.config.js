
module.exports = (baseConfig, foo, config) => {
  return {
    ...config,
    ...{
      resolve: { extensions: ['.js', '.tsx', '.ts', '.json'] },
      module: {
        ...config.module,
        rules: [
          ...config.module.rules,
          {
            test: /(\.tsx?)$/,
            loaders: [
              {
                loader: require.resolve('awesome-typescript-loader'),
                options: { useCache: true },
              },
            ],
            exclude: /node_modules/,
          },
          {
            test: /stories\.tsx?$/,
            loader: require.resolve('@storybook/addon-storysource/loader'),
            enforce: 'pre',
          },
        ],
      },
    },
  };
};
