export{}

const sushi: string = "syake"

function favorite_sushi(neta: string) {
  switch(neta){
    case "syake": {
      const message = `${neta}は1番目に好きです。`
      console.log(message)
      break
    }
    case "maguro": {
      const message = `${neta}は1番目に好きです。`
      console.log(message)
      break
    }
    default:
      console.log(`該当なしです。`)
  }
}

favorite_sushi(sushi)
