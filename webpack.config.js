module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: './bin/js/',
    filename: 'bundle.js'
  },
  resolve: {
    alias: {
      "jquery": "./assets/javascripts/jquery.min.js",
      "jquery-ui": "./assets/javascripts/jquery-ui.min.js",
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
      jQuery: "jquery",
      $: "jquery"
    }),
    new ExtractTextPlugin("./bin/styles/main.css")
  ],
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    },
    {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract("style-loader", "css-loader")
    },
    {
      test: /\.less$/,
      loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
