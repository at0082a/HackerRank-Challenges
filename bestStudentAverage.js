//Given an object with students and the grades that they made on the tests that they took, determine which student has the best Test Average. 
//The key will be the student's name and the value will be an array of their grades.
//You will only have to return the student's name. You do not need to return their Test Average.


function getBestStudent(grades) {
	for (let grade in grades) {
		let length = grades[grade].length;
		let result = grades[grade].reduce((accumulator, accelerator) => {
			return accumulator + accelerator
		}, 0) / length
		grades[grade] = result
	}
	let keysSorted = Object.keys(grades).sort((a,b) => {
		return grades[a]-grades[b]
	});
	return keysSorted[keysSorted.length - 1]
}
