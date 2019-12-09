// You are the owner of a coworking space like WeWork and your office building is rectangular.
//Your team just built wall partitions to create mini offices for startups.
//This office campus is represented by a 2D array of 1s (floor spaces) and 0s (walls).
//Each point on this array is a one foot by one foot square. You need to calculate the number of offices.
//A single office is bordered by walls and is constructed by placing floors next to each other, horizontally and/or vertically.
//Two 1s adjacent to each other horizontally or vertically are always part of the same office.
// Functions
// numOffices() has one parameter:

// grid: a 2D grid/array of 1s and 0s


function numOffices(grid) {
    let result = 0;

  for (let x = 0; x < grid[0].length; x++) {
    if (grid[0][x] === 1 && grid[0][x - 1] !== 1) {
      result = result + 1;
    }
  }


  for (let y = 1; y < grid.length; y++) {
    for (let x = 0; x < grid[0].length; x++) {
      if (grid[y][x] === 1 && grid[y][x - 1] !== 1 && grid[y - 1][x] !== 1) {
        result = result + 1;
      }
    }
  }
  return result;
};

console.log(numOffices(
  [

  [1, 1, 1, 1, 1],
  [1, 0, 0, 0, 1],
  [1, 0, 0, 0, 0],
  [1, 1, 1, 0, 1]

  ]));
