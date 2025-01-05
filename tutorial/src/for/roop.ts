export{}


let ans = 0;
// for(処理の準備; 条件設定; 実際に行う処理内容)
for (let i = 1; i <= 100; i++){
  console.log(`${i}`)
  ans += i;
  console.log(`計算:${ans}`)
}
console.log(`結果:${ans}`)
