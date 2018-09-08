import * as HtmlWebpackPlugin from 'html-webpack-plugin';
import * as webpack from 'webpack';
import * as pkgJson from './package.json';

const hotLoader = {
  loader: 'babel-loader',
  options: {
    babelrc: false,
    plugins: ['react-hot-loader/babel'],
  },
};

export const config = <webpack.Configuration> {
  context: `${__dirname}/src/composition`,
  output: {
    path: `${__dirname}/build`,
    publicPath: '/',
    filename: '[name].js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: pkgJson.name,
      filename: 'index.html',
      template: './index.html',
    }),

    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV) },
    }),
  ],
  resolve: { extensions: ['.js', '.tsx', '.ts', '.json'] },
  performance: { hints: false },
  module: {
    rules: [
      // TS
      {
        test: /(\.tsx)$/,
        loaders: [
          hotLoader,
          {
            loader: 'awesome-typescript-loader',
            options: {
              useCache: true,
            },
          },
        ],
        exclude: /node_modules/,
      },

      // CSS
      {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader'],
      },

      // ASSETS
      {
        test: /\.(png|jpg|gif|woff|woff2|eot|svg)$/,
        use: [
          { loader: 'url-loader', options: { limit: 8192 } },
        ],
      },
    ],
  },
};

// tslint:disable-next-line:no-default-export
export default config;
