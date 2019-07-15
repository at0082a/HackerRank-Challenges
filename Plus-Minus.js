// Given an array of integers, calculate the fractions of its elements that are positive, negative, and are zeros. 
// Print the decimal value of each fraction on a new line.

function plusMinus(arr) {
    let length = arr.length
    let newArr;
    const positiveLength = arr.filter(number => number > 0).length;
    const negativeLength = arr.filter(number => number < 0).length
    const zeroLength = arr.filter(number => number === 0).length

    let posFrac = (positiveLength / length).toFixed(6)
    let negFrac = (negativeLength / length).toFixed(6)
    let zeroFrac = (zeroLength / length).toFixed(6)

    newArr = [posFrac, negFrac, zeroFrac]
    console.log(newArr.join('\n'))
}
