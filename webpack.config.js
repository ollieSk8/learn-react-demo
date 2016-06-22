var webpack = require('webpack');

module.exports = {
    entry: [
      'webpack/hot/only-dev-server',
      "./js/app.js"
    ],
    output: {
        path: './build',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
            { test: /\.css$/, loader: "style-loader!css-loader" },
            {test: /\.less/,loader: 'style-loader!css-loader!less-loader'},
            {
              test: /\.js$/,
              exclude: /node_modules/,
              loader: "babel-loader",
              query:
                {
                  presets:['react','es2015']
                }
            }
        ]
    },
    resolve:{
        extensions:['','.js','.json','.css'],
        modulesDirectories: [
          'node_modules'
        ]     
    },
    devServer: {
        hot: true,
        inline: true
    },
    plugins: [
      new webpack.NoErrorsPlugin(),
      new webpack.HotModuleReplacementPlugin()
    ]
};