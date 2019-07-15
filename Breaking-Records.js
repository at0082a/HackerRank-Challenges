// Complete the breakingRecords function in the editor below. It must return an integer array containing the numbers of times 
// she broke her records. Index is for breaking most points records, and index  is for breaking least points records.
// breakingRecords has the following parameter(s):

// scores: an array of integers


function breakingRecords(scores) {
    let arr = []
    let newarr = []
    let recordcount = scores[0] 
    let losscount = scores[0]
    
    for (let i = 1; i < scores.length; i++) {
//  if statement for breaking highest score record
        if (scores[i] > scores[i - 1] && scores[i] > recordcount) {
            arr.push(i)
            recordcount = scores[i]
        }
//  if statement for breaking lowest score record
        if (scores[i] < scores[i - 1] && scores[i] < losscount) {
            newarr.push(i)
            losscount = scores[i]
        }
    }
    // return the amount of times the highest scoring record and lowest scoring record are broken
    return [arr.length, newarr.length]
}
