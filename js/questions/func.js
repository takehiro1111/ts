{
  modules(5)
  modules(7)
  modules(26)

  function modules(num){
    if (num <= 25){
      for(let i = 1; i <= 25; i++){
        if (i % num === 0){
          console.log(i)
        }
      }
    }else if (num > 25){
      console.log(num)
    }
  }
}

{
  let message = checkAlcoholIf(19)
  console.log(`あなたの場合は、お酒は${message}です。`)

  message = checkAlcoholIf(20)
  console.log(`あなたの場合は、お酒は${message}です。`)

  function checkAlcoholIf(age){
    if (age >= 20){
      return "OK"
    } else {
      return "NO"
    }
  }

  function checkAlcoholIf(age){
    return age >= 20 ? "OK" : "NO"
  }

  function fizzBuzz(n) {
    if (n % 15 === 0) {
      return 'FizzBuzz';
    } else if (n % 5 === 0) {
      return 'Buzz';
    } else if (n % 3 === 0) {
      return 'Fizz';
    } else {
      return 'Nothing';
    }
  }
}


{
  let message;
  message = fizzBuzz(6);
  console.log(message)

  message = fizzBuzz(10);
  console.log(message)

  message = fizzBuzz(15);
  console.log(message)

  message = fizzBuzz(16);
  console.log(message)
}
