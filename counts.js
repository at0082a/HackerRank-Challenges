function counts(teamA, teamB) {
    let obj = {}

    for (let i = 0; i < teamA.length; i++) {
      let elementsA = teamA[i]
      teamB.forEach((element, index) => {
        if (obj[element] === undefined) {
          obj[element] = { "count": 0, "position": index }
        }
        if (elementsA <= element) {
          obj[element].count += 1
        }
      });
    }

    let values = Object.values(obj).sort(function (a, b) {
      return a.position - b.position;
    })

    let newValues = values.map(x => x.count);

    return newValues
}

console.log(counts([2,10,5,4,8], [3, 1, 7, 8]))
