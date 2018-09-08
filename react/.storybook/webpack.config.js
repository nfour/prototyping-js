
// tslint:disable-next-line:no-default-export
export default (baseConfig: any, foo: any, config: any) => {
  return {
    ...config,
    ...{
      resolve: { extensions: ['.js', '.tsx', '.ts', '.json'] },
      module: {
        ...config.module,
        rules: [
          ...config.module.rules,
          {
            test: /(\.tsx)$/,
            loaders: [
              {
                loader: 'awesome-typescript-loader',
                options: { useCache: true },
              },
            ],
            exclude: /node_modules/,
          },
        ],
      },
    },
  };
};
