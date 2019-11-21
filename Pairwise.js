//Given an array arr, find element pairs whose sum equal the second argument arg and return the sum of their indices.
//You may use multiple pairs that have the same numeric elements but different indices. 
//Each pair should use the lowest possible available indices. 
//Once an element has been used it cannot be reused to pair with another element. 


function pairwise(arr, arg) {
 let array = [];

 for (let i = 0; i < arr.length; i++) {
   for (let j = 0; j < arr.length; j++) {
     if (arr[j] + arr[i] === arg && i != j && array.indexOf(i) === -1 && array.indexOf(j) === -1) {
      array.push(i)
      array.push(j)
     }
   }
 }
 let result = array.reduce((accumulator, accelerator) => {return accumulator + accelerator}, 0 )
 return result;
}



pairwise([7, 9, 11, 13, 15], 20);
