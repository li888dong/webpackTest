var webpack = require('webpack')

module.exports = {
  entry:{
    app:'./entry.js',
    vendor: ['jquery'] //第三方库      
  } ,
  output: {
    path: __dirname+'/view',
    filename: 'main.js'
  },
  module: {
    loaders: [
      {test: /\.css$/, loader: 'style!css'}
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
      new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js')//这是第三方库打包生成的文件
  ]
}