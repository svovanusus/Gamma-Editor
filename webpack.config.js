const Path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const { VuetifyLoaderPlugin } = require('vuetify-loader');
const CircularDependencyPlugin = require('circular-dependency-plugin');

module.exports = {
  mode: 'development',
  entry: './src/main.ts',
  devtool: 'source-map',
  context: __dirname,
  target: 'web',
  output: {
    path: Path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader',
            options: {
              loaders: {
                ts: 'ts-loader',
              }
            }
          },
        ],
      },
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              appendTsSuffixTo: [/\.vue$/],
            },
          },
        ],
      },
      {
        test: /node_modules.*\.scss$/,
        sideEffects: true,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'wrap-css-loader',
            options: {
              selector: '.editor-ui',
            },
          },
          {
            loader: 'sass-loader',
            options: {
              additionalData: "@import 'src/assets/scss/variables.scss';"
            },
          },
        ],
      },
      {
        test: /node_modules.*\.sass$/,
        sideEffects: true,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'wrap-css-loader',
            options: {
              selector: '.editor-ui',
            },
          },
          {
            loader: 'sass-loader',
            options: {
              additionalData: "@import 'src/assets/scss/variables.scss'"
            },
          },
        ],
      },
      {
        test: /node_modules.*\.css$/,
        exclude: [/(litegraph\.js)/],
        sideEffects: true,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'wrap-css-loader',
            options: {
              selector: '.editor-ui',
            },
          },
        ],
      },
      {
        test: /node_modules.*(litegraph\.js).*\.css$/,
        sideEffects: true,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.(sc|sa|c)ss$/,
        exclude: [/node_modules.*\.(sc|sa|c)ss$/],
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpg|gif|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]',
          outputPath: 'resources/i',
          publicPath: '/resources/i',
        },
      },
      {
        test: /\.(ttf|eot|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]',
          outputPath: 'resources/fonts',
          publicPath: '/resources/fonts',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js', '.vue', '.json'],
    alias: {
        vue$: 'vue/dist/vue',
    },
    plugins: [new TsconfigPathsPlugin()],
  },
  devServer: {
    contentBase: __dirname,
    port: 3000,
    compress: false,
    historyApiFallback: true,
    hot: true,
    https: false,
    noInfo: true,
    open: true,
  },
  /*experiments: {
    asyncWebAssembly: true,
    // WebAssembly as async module (Proposal)
    syncWebAssembly: true,
    // WebAssembly as sync module (deprecated)
    outputModule: true,
    // Allow to output ESM
    topLevelAwait: true,
    // Allow to use await on module evaluation (Proposal)
  },*/
  plugins: [
    new VueLoaderPlugin(),
    new VuetifyLoaderPlugin(),
    new CircularDependencyPlugin({
      // exclude detection of files based on a RegExp
      exclude: /a\.js|node_modules/,
      // add errors to webpack instead of warnings
      failOnError: false,
      // allow import cycles that include an asyncronous import,
      // e.g. via import(/* webpackMode: "weak" */ './file.js')
      allowAsyncCycles: true,
      // set the current working directory for displaying module paths
      cwd: process.cwd(),
    })
  ],
};