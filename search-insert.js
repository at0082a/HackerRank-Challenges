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
