// 119. Pascal's Triangle II
// Solved
// Easy
// Topics
// Companies
// Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:


 

// Example 1:

// Input: rowIndex = 3
// Output: [1,3,3,1]
// Example 2:

// Input: rowIndex = 0
// Output: [1]
// Example 3:

// Input: rowIndex = 1
// Output: [1,1]
 

// Constraints:

// 0 <= rowIndex <= 33
 

// Follow up: Could you optimize your algorithm to use only O(rowIndex) extra space?


function getRow(rowIndex: number): number[] {
    if (rowIndex === 0) return [1]
    if (rowIndex === 1) return [1,1]
    const result: number[][] = []

    for (let row = 1; row <= rowIndex + 1; row++) {
        let arr: number[] = []
        for (let col = 0; col < row; col++) {
            if (col === 0 || col === row - 1) {
                arr.push(1)
            } else {
                arr.push((result[row-2][col-1] + result[row-2][col]))
            }
        }
        result.push(arr)
    }

    return result[rowIndex]
};