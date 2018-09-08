import * as webpack from 'webpack';
import * as webpackMerge from 'webpack-merge';
import baseConfig from './webpack.config';

export const config = <webpack.Configuration & { entry: any }> webpackMerge(baseConfig, {
  devtool: 'source-map',
  mode: 'development',

  entry: ['./demos/Index.tsx'],

  devServer: {
    contentBase: './demos',
    compress: false,
    hot: true,

    stats: <any> {
      compilation: {
        modules: false,
        assets: false,
      },
    },

    watchOptions: {
      aggregateTimeout: 100,
    },
  },

  output: {
    path: `${__dirname}/src`,
    filename: '[name].[hash].js',
  },

  stats: {
    chunkModules: false,
    chunks: false,
    modules: false,
    assets: false,

  },
});

config.entry.unshift(
  'react-hot-loader/patch',
);

config.plugins!.unshift(
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NamedModulesPlugin(),
);

// tslint:disable-next-line:no-default-export
export default config;
