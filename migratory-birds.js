

function migratoryBirds(arr) {
    let obj = {}
    for (let i = 0; i < arr.length; i++) {
        let types = arr[i]
        if (obj[types] === undefined) {
            obj[types] = 1
        } else {
            obj[types] += 1
        }
    }
    var keys = Object.keys(obj);
    keys.sort(function (a, b) {
        return obj[b] - obj[a];
    });
    return keys[0]
}
