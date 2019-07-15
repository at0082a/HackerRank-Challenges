// Complete the getMoneySpent function in the editor below. It should return the maximum total price for the two items within Monica's budget, or  if she cannot afford both items.

// getMoneySpent has the following parameter(s):

// keyboards: an array of integers representing keyboard prices
// drives: an array of integers representing drive prices
// b: the units of currency in Monica's budget



// modularize with compareNumbers sorting function

function compareNumbers(a, b) {
    return a - b;
}

function getMoneySpent(keyboards, drives, b) {
    let arr = []

    keyboards.sort(compareNumbers)
    drives.sort(compareNumbers)

    if (drives[0] >= b || keyboards[0] >= b) {
        return -1
    }

    for (let i = 0; i < keyboards.length; i++) {
        for (let j = 0; j < drives.length; j++) {
            if (keyboards[i] + drives[j] <= b) {
                arr.push([keyboards[i] + drives[j]])
            }
        }
    }
     
    arr.sort(compareNumbers);

    return arr[arr.length - 1]
}
