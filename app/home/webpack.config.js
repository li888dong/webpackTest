var webpack = require('webpack');
//不打包的第三方类库，这里是jquery
// var ignoreFiles = new webpack.IgnorePlugin(/\.\/jquery-last.js$/);
module.exports = {
  entry: {
    main1: "./entry.js",
    main2: "./entry2.js",
    vendor: ["jquery"]
  },
  output: {
    path: __dirname,
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!scss-loader'
      },
      // 内联 base64 URLs, 限定 <=8k 的图片, 其他的用 URL
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=8192'
      }

    ]
  },
  plugins: [
    new webpack.BannerPlugin('This file is created by lidong'),
    //jquery使用须前安装，npm install jquery
    new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery"
      }),
    //代码压缩
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js")
  ]
  // plugins:[ignoreFiles]
};