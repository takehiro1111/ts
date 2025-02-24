let employee = [
    //["名字",年齢,"勤務地"]
    ["加藤",56," 愛知"], // enployee[0]
    ["田中",26,"東京"], // enployee[1]
    ["高橋",65,"沖縄"] // enployee[2]
]

for(let i = 0 ; i < employee.length; i++){
    document.write("<li>"+employee[i]+"</li>")
}