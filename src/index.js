import './index.less'
import '@assets/123.jpg'

const sum = (a, b) => {
  console.log('测试箭头函数')
}
const result = sum(12, 23);
let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(123);
  }, 1000);
});
promise.then(res => {
  console.log(res);
});
