{
  let lowStr = "ABC"
  console.log(lowStr.toLowerCase())

  let upStr = "abc"
  console.log(upStr.toUpperCase())

  let s1 = "apple"
  let s2 = "apple"

  let answer = compareString(s1, s2)
  console.log(answer)

  function compareString(str1, str2){
    let subjectArray1 = str1.split('');

    let subjectArray2 = str2.split('');
    let repetitionArray = [];
  
    for (let str of subjectArray1) {
      if(subjectArray2.includes(str)) {
        if (!repetitionArray.includes(str)) {
          repetitionArray.push(str);  
        }
      }
    }
    return repetitionArray;
  }

  let Array1 = "tanaka".split('');
  console.log(Array1)
  let Array2 = Array1.join(' ');
  console.log(Array2)

}
