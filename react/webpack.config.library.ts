import * as webpack from 'webpack';
import baseConfig from './webpack.config';

const config = <webpack.Configuration> {
  ...baseConfig,
  entry: {
    bundle: ['core-js/es7', './entries/Library.tsx'],
  },
  output: {
    path: `${__dirname}/build/library`,
    publicPath: '/',
    libraryTarget: 'commonjs2',
    library: '[name]',
    filename: '[name].js',
  },
};

// tslint:disable-next-line:no-default-export
export default config;
