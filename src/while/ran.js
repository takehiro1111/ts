"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log('処理開始');
var num = Math.round(Math.random() * 10);
while (true) {
    console.log("\u4E71\u6570\u306E\u5024:".concat(num));
    num = Math.round(Math.random() * 10);
    break;
}
console.log("処理終了");
