//Take a phrase like ‘turpentine and turtles’ and translate it into its “whale talk” equivalent: ‘UUEEIEEAUUEE’.

let talk = 'turpentine and turtles';
const vowels = ["a", "e", "i", "o", "u"];
let resultArray = [];

for (let i = 0; i < talk.length; i++) {
  for (let j = 0; j < vowels.length; j++) {
    if (vowels[j] === talk[i]) {
      resultArray.push(vowels[j])
     }
   } 
  if (talk[i] === 'e') {
    resultArray.push('e')
  } else if (talk[i] === 'u') {
    resultArray.push('u')
  }
}

  console.log(resultArray.join(""))
