let countries = {
    Japan:["日本","ニッポン"],
    USA:["アメリカ","あめりか"],
    CHINA:["中国","ちゅうか"]
};

let code = {
    Japan:1, // 「キーの共通性」や「キーに基づくアクセス」
    USA:2,
    CHINA:3
}

for(let k in countries){
    document.write(`<tr>`);
    document.write(`<th>${k}</th>`); //${k}にはキーが入る
    document.write(`<td>${countries[k].join(` `)}</td>`); //${countries[k]}とする事でバリューが入ってくる。joinを使用した場合は()内の値が入る。引数としてjoinを指定しない場合は配列のデフォルトで,(カンマ)が入る。
    document.write(`<td>${code[k]}</td>`);
    document.write(`</tr>`);
} 



/* let countries = {
    Japan: ["日本", "ニッポン"],
    USA: ["アメリカ", "あめりか"],
    CHINA: ["中国", "ちゅうか"]
};

let code = {
    Japan: 1,
    USA: 2,
    CHINA: 3
};

for (let k in countries) {
    document.write(`<tr>`);
    document.write(`<th>${k}</th>`); // ${k}にはキーが入る
    document.write(`<td>${countries[k].join(', ')}</td>`); // ${countries[k]}でバリューが入る。配列をカンマ区切りの文字列に変換。
    document.write(`<td>${code[k]}</td>`); // ${code[k]}で対応するコードの値が入る
    document.write(`</tr>`);
} */
