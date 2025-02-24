export {};

let ans1 = 0;
// for(処理の準備; 条件設定; 実際に行う処理内容)
for (let i = 1; i <= 5; i++) {
  console.log(`${i}`);
  ans1 += 1;
  console.log(`計算1:${ans1}`);
}

let ans2 = 0;
for (let i = 1; i <= 5; ++i) {
  console.log(`${i}`);
  ans2 += i;
  console.log(`計算2:${ans2}`);
}
