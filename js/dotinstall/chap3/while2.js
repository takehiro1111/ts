let i = 0;
// breakによる処理
while(i < 5){
    document.write(`<p>繰り返し処理中だよーん(${i})</p>`);
    i++;

    if(i == 4){
        break;
    }
}
