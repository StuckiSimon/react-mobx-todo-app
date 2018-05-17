const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = env => {
  const isProd = env.mode === 'production';
  return {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js'
    },
    resolve: {
      extensions: ['.js', '.json', '.jsx']
    },
    module: {
      rules: [{
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: [['@babel/plugin-proposal-decorators', { legacy: true }], ["@babel/plugin-proposal-class-properties", { "loose": true }]]
          }
        }
      }]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'src/template/index.html'
      })
    ],
    watch: !isProd
  }
};