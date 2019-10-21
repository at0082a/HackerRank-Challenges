// Given a sorted array and a target value, return the index if the target is found. 
// If not, return the index where it would be if it were inserted in order.

function searchInsert (nums, target) {
   let count = 0
   if (nums.indexOf(target) === -1) {
   for (let i = 0; i < nums.length; i++) {
       if (nums[i] < target) {
         count += 1
       }
   }
     return count
   } else {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
          return i
        }
     }
  } 
}
