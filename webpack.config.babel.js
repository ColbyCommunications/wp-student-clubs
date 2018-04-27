import ExtractTextPlugin from 'extract-text-webpack-plugin';
import path from 'path';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

import packageJson from './package.json';

const PROD = process.argv.includes('-p');
const WATCHING = process.argv.includes('--watch') || process.argv.includes('-w');

const main = () => {
  const min = PROD ? '.min' : '';
  const entry = './src/index.js';
  const filename = `${packageJson.name}${min}.js`;
  const plugins = [new ExtractTextPlugin(`${packageJson.name}${min}.css`)];

  if (!WATCHING) {
    plugins.push(new BundleAnalyzerPlugin({ analyzerMode: 'static' }));
  }

  return {
    mode: PROD ? 'production' : 'development',
    entry,
    output: {
      filename,
      path: path.resolve(__dirname, 'dist'),
    },
    plugins,
    module: {
      rules: [
        {
          test: /\.js$/,
          use: [
            {
              loader: 'babel-loader',
              options: { babelrc: true },
            },
          ],
        },
        {
          test: /\.scss$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              {
                loader: 'css-loader',
                options: {
                  modules: true,
                  localIdentName: '[local]--[hash:base64:5]',
                },
              },
              { loader: 'postcss-loader' },
              { loader: 'sass-loader' },
            ],
          }),
        },
      ],
    },
    target: 'web',
    devtool: PROD ? false : 'source-maps',
  };
};

export default main;
