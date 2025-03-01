{
  console.log(cal(3));
  console.log(cal(4));

  function cal(number) {
    let stringNumber = number.toString();
    console.log(stringNumber);
    let threeTimeNumber = stringNumber.repeat(3);
    console.log(threeTimeNumber);

    let intNumber = parseInt(threeTimeNumber);

    return number + intNumber;
  }
}
