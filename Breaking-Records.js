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
        if (scores[i] > scores[i - 1] && scores[i] > recordcount) {
            arr.push(i)
            recordcount = scores[i]
        }
        if (scores[i] < scores[i - 1] && scores[i] < losscount) {
            newarr.push(i)
            losscount = scores[i]
        }
    }
    return [arr.length, newarr.length]
}
