for(let i = 1900 ; i <= 2100 ; i++){
    if(i%4 == 0 && i%100 !== 0 || i%400 == 0){
        document.write(`<p>${i}</p>`);
    }
}