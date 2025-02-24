let jst_top_sier = [
    {
        company:"NTTデータ",
        URL:"https://www.nttdata.com/jp/ja/"
    },
    {
        company:"富士通",
        URL:"https://global.fujitsu/ja-jp/"
    },
    {
        company:"日立製作所",
        URL:"https://www.hitachi.co.jp/"
    },
    {
        company:"NRI",
        URL:"https://www.nri.com/jp"
    },
]

let urlkey = "URL"

for( let item  of jst_top_sier ){
    // 配列の各要素を反復処理

    document.write(`<tr>`);
    // 各反復で、<tr>タグを開始し、テーブルの新しい行を開始
    
    for(let k in item  ){
    // 内側のループで、各オブジェクトごとに全てのキー（company,URL）を反復処理する
        
        let data = item[k];
        // オブジェクトの各キーに対応する値を取得

        if(k === urlkey){
            data = `<a href= "${data}">${data}</a>`;
        }
        // もしキーが urlkey("URL")の場合、その値（URL）をアンカータグ（<a>）に包み、リンクとして機能する
        // これにより、テーブルのセル内にリンクが表示される
        
        document.write(`<td>${data}</td>`);
       // キーが URL でない場合（companyの場合）、その値はテーブルデータセル（<td>）内にテキストとして表示される

    }
    
    document.write(`</tr>`);
    // 全てのキーを処理した後、</tr>タグを使用してテーブル行を閉じる
}
