let i = 0;

while(i < 5){
    i++;
    // contiuneでループの先頭に戻す
    // そのループの現在の反復をスキップし、次の反復に直ちに進むために使われる
    if(i == 3){
        continue;
    }
    document.write(`<p>繰り返し処理中だよーん(${i})</p>`);
}