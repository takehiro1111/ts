let countries_with_high_GDP = {
    USA:"アメリカ合衆国",
    China:"中華人民共和国",
    Germany:"ドイツ",
    Japan:"日本",
}

for(let k in countries_with_high_GDP){
    document.write("<tr>");
    document.write(`<td>${k}</td>`);
    document.write(`<td>${countries_with_high_GDP[k]}</td>`);
}