export{}

console.log('処理開始');

let num:number = Math.round(Math.random()*10);
while(true){
  console.log(`乱数の値:${num}`);
  num = Math.round(Math.random() * 10);
  break;
}

console.log("処理終了");

