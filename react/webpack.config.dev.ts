import * as webpack from 'webpack';
import base from './.storybook/webpack.config';

// tslint:disable-next-line:no-default-export
export default <webpack.Configuration> {
  ...base,

  entry: [
    'react-hot-loader/patch',
    './demos/Index.tsx',
  ],

  output: {
    path: __dirname,
    filename: '[name].js',
  },

  devtool: '#@cheap-source-map',
  mode: 'development',

  devServer: {
    compress: false,
    hot: true,
    watchOptions: { aggregateTimeout: 200 },
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    ...base.plugins!,
  ],

};
