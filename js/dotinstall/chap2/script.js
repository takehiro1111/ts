console.log('準備完了!');

const text = document.querySelector('#colorText');
const color = document.querySelector('#colorPicker');

// カラーピッカーを操作した時の一連の操作
const colorBg = () =>{
    // 選択した意図を背景色に設定
    document.body.style.backgroundColor = color.value;

    if (color.value === '#ffffff'){
        text.textContent = 'カラーコード: ${color.value} (white)';
    }   else if (color.value === '#000000') {
        text.textContent = 'カラーコード: ${color.value} (block)';
    } else {
        text.textContent = 'カラーコード: ${color.value}';
    }
}

// カラーピッカーが変更されたらcolorBgを発動させる。
color.addEventListener('input',colorBg);