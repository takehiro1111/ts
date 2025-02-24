export{}

const num = Math.round(Math.random() * 100);
console.log(`numの値:${num}`);

const rem = num % 2;
const cond: boolean = (rem == 0);

if(cond){
  console.log("偶数");
}else{
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
