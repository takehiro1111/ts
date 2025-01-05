"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ans = 0;
// for(処理の準備; 条件設定; 実際に行う処理内容)
for (var i = 1; i <= 100; i++) {
    console.log("".concat(i));
    ans += i;
    console.log("\u8A08\u7B97:".concat(ans));
}
console.log("\u7D50\u679C:".concat(ans));
