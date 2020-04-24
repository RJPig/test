const path = require('path')
module.exports = {
  // 入口
  entry: './src/main.js',
  // 出口
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    // 所有url路径自动添加dist/
    publicPath: 'dist/'
  },
  module: {
    rules: [

      // css-loader
      {
        test: /\.css$/,
        // css-loader只负责加载css文件
        // style-loader负责将样式添加到DOM中
        // 使用多个loader时,是从右往左加载
        use: [ 'style-loader', 'css-loader']
      },


      // less-loader
      {
        test: /\.less$/,
        use: [{
          loader: 'style-loader',
        },
        {
          loader: 'css-loader',
        },
        {
          loader: 'less-loader',
        }]
      },


      // 图片url-loader/file-loader
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              // 当小于限制大小的话会使用url-loader
              // 当大于限制大小的话会使用file-loader
              limit: 80000,
              // 设置打包后的图片名,不设置的话会默认32位hash命名
              name: 'img/[name].[hash:8].[ext]'
            },
          },
        ],
      },

      // ES6转ES5
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      },

      // vue-loader,同时需要加载一个vue-template-compiler解析器
      {
        test: /\.vue$/,
        use: [ 'vue-loader' ]
      }
    ]
  },

  // 设置别名
  resolve: {
    // alias:别名
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  }
}