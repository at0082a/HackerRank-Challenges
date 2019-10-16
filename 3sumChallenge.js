//Challenge:

//Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? 
//Find all unique triplets in the array which gives the sum of zero.

//Solution:

function 3sum (array) {
let arr = []

for (let i = 0; i < data.length - 2; i++) {
  for (let j = i + 1; j < data.length - 1; j++) {
    for (let k = j + 1; k < data.length; k++) {
     const set = [data[i], data[j], data[k]]
     if (data[i] + data[j] + data[k] === number && arr.indexOf(set) === -1) {
        arr.push([data[i], data[j], data[k]])
     }
    }
   }
  }
 return arr
}

console.log(3sum( [2, -3, 4, 7, 1, 30] ) 
