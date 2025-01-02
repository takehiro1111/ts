function avg(n1,n2){
    let n = (n1 + n2) / 2;
    return n;
}

let t1 = 10
let t2 = 30

let t = avg(t1,t2);
document.write(`<p>${t1}と${t2}の平均値は${t}です。</p>`)