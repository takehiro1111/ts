function max(n1,n2){
    if(n1 > n2){
        return n1;
    }
    return n2;
}

let num1 = 2
let num2 = 10

let take = max(num1,num2);
document.write(`<p>${num1}と${num2}で大きい値は${take}です。</p>`)