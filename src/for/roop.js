"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ans1 = 0;
// for(処理の準備; 条件設定; 実際に行う処理内容)
for (var i = 1; i <= 5; i++) {
    console.log("".concat(i));
    ans1 += 1;
    console.log("\u8A08\u7B971:".concat(ans1));
}
var ans2 = 0;
for (var i = 1; i <= 5; ++i) {
    console.log("".concat(i));
    ans2 += i;
    console.log("\u8A08\u7B972:".concat(ans2));
}
