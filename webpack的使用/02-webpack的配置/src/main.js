// 使用commonjs的模块化规范
const {sum} = require('./js/mathmul.js')
console.log(sum(20, 30));

// 使用ES6的模块化规范
import {name, age, height} from "./js/info"
console.log(name, age, height);
