{
  console.log(bmi(187.0,61.0))
  function bmi(height, weight){
    height_process = (height / 100) ** 2

    return weight / height_process
  }
}
