//Challenge:

//Given an array of numbers of n integers, find the subarray of 2 elements with the largest sum and print the two integers
//to the console as a new array.

//Solution:

function subarraySum (array) {
  let number = array[0];
  let arr = []
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data.length; j++) {
      if (data[i] + data[j] > number && i !== j) {
        number = data[i] + data[j]
        arr = [data[i], data[j]]
      }
    }
  }
  return arr
}
console.log(subarraySum([2, -3, 4, 7, 1, 30])) ---> ANSWER: [7, 30]
