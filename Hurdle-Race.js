// Complete the hurdleRace function in the editor below. It should return the minimum units of potion Dan needs to drink to 
// jump all of the hurdles. hurdleRace has the following parameter(s):

// k: an integer denoting the height Dan can jump naturally

// height: an array of integers denoting the heights of each hurdle

function hurdleRace(k, height) {
    let arr = []
    for (let i = 0; i < height.length; i++) {
        if (k - height[i] < 0) {
            arr.push(Math.abs(k - height[i]))
        }
    }
    arr.sort(function (a, b) {
        return a - b;
    });
    
    if (arr.length < 1) {
        return 0
    } else {
     return arr[arr.length - 1]
    }
}
