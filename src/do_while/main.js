"use strict";
let count = 100;
/*
通常のwhile文だと先に条件を評価するためループが実行されないが、
do-whileは処理が先で条件の評価が後なので、条件に合致しなくても最初の1週目は実行される。
*/
do {
    console.log('do-while:', count);
    count += 1;
    console.log('do-while+:', count);
} while (count < 10);
/*
$node main.js
do-while: 100
do-while+: 101
*/
