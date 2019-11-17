let input = "fdjdhfgjihfdjhreureyuery"
let substring = "fdje"

function stringCheck (string, sub) {
  let newString = [...string];
  for (let item of sub) {
    if (!newString.includes(item)) {
      return false
    }
  }
  return true
}

function subString (string, sub) {
  let result = ''
  let newArray = [...sub]

  for (let i = 0; i < string.length - 1; i++) {
    let str = string[i]
      for (let j = i + 1; j < string.length; j++) {
          str += string[j]
            if (stringCheck(str, newArray)) {
              if (result === '' || str.length < result.length) {
                result = str
          }
       }
    }
  }
  return result
}

console.log(subString(input, substring));
