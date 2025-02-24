"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var num = Math.round(Math.random() * 100);
console.log("num\u306E\u5024:".concat(num));
var rem = num % 2;
var cond = (rem == 0);
if (cond) {
    console.log("偶数");
}
else {
    console.log("奇数");
}
// if (num > 50){
//   console.log('50より大きい。')
// } else if(num < 20 && num < 50) {
//   console.log('20より大きく且つ50以下である。')
// } else {
//   console.log('20より小さい')
// }
console.log('処理完了。');
