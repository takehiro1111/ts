{
  console.log(callAbs(10, 5))
  console.log(callAbs(10, 13))

  function callAbs(num1, num2){
    let answer = num1 - num2
    answer = answer < 0 ? Math.abs(answer) : answer;

    return answer;
  }
}
