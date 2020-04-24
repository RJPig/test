// 使用commonjs的模块化规范
const {sum} = require('./js/mathmul.js')
console.log(sum(20, 30));

// 使用ES6的模块化规范
import {name, age, height} from "./js/info"
console.log(name, age, height);


// 依赖css文件
require('./css/nomal.css')

// 依赖less文件
require('./css/special.less')

//依赖图片文件
require('./imgs/3.jpg')

// 使用Vue进行开发
import Vue from 'vue'
import App from './vue/App.vue'
new Vue({
  // 同时具备el和template的时候,template会将内容替换el对应的id中
  el: '#app',
  template: '<App/>',
  components: {
    App
  }
})