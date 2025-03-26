// 2033. Minimum Operations to Make a Uni-Value Grid
// Solved
// Medium
// Topics
// Companies
// Hint
// You are given a 2D integer grid of size m x n and an integer x. In one operation, you can add x to or subtract x from any element in the grid.

// A uni-value grid is a grid where all the elements of it are equal.

// Return the minimum number of operations to make the grid uni-value. If it is not possible, return -1.

// Example 1:

// Input: grid = [[2,4],[6,8]], x = 2
// Output: 4
// Explanation: We can make every element equal to 4 by doing the following:
// - Add x to 2 once.
// - Subtract x from 6 once.
// - Subtract x from 8 twice.
// A total of 4 operations were used.
// Example 2:

// Input: grid = [[1,5],[2,3]], x = 1
// Output: 5
// Explanation: We can make every element equal to 3.
// Example 3:

// Input: grid = [[1,2],[3,4]], x = 2
// Output: -1
// Explanation: It is impossible to make every element equal.

// Constraints:

// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 105
// 1 <= m * n <= 105
// 1 <= x, grid[i][j] <= 104

function minOperations(grid: number[][], x: number): number {
  const sortedGrid = grid.flat().sort((a, b) => a - b);

  for (let i = 1; i < sortedGrid.length; i++) {
    if (sortedGrid[i] % x !== sortedGrid[0] % x) return -1;
  }

  const uniValue = findUniValue(sortedGrid);

  let result = 0;
  for (let i = 0; i < sortedGrid.length; i++) {
    result += Math.abs(sortedGrid[i] - uniValue) / x;
  }

  return result;
}

function findUniValue(grid: number[]): number {
  const lengthGrid = grid.length;
  return grid[Math.floor(lengthGrid / 2)];
}

// function minOperations(grid: number[][], x: number): number {
//     const sortedGrid = grid.flat().sort((a: number,b: number) => a-b)

//     for (let i = 1; i < sortedGrid.length; i++) {
//         if (sortedGrid[i] % x !== sortedGrid[0] % x) return -1;
//     }

//     const median = sortedGrid[Math.floor(sortedGrid.length / 2)];
//     let result = 0;
//     for (let i = 0; i < sortedGrid.length; i++) {
//         result += Math.abs(sortedGrid[i] - median) / x;
//     }
//     return result
// };
