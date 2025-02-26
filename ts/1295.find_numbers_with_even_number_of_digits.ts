// 1295. Find Numbers with Even Number of Digits
// Solved
// Easy
// Topics
// Companies
// Hint
// Given an array nums of integers, return how many of them contain an even number of digits.

 

// Example 1:

// Input: nums = [12,345,2,6,7896]
// Output: 2
// Explanation: 
// 12 contains 2 digits (even number of digits). 
// 345 contains 3 digits (odd number of digits). 
// 2 contains 1 digit (odd number of digits). 
// 6 contains 1 digit (odd number of digits). 
// 7896 contains 4 digits (even number of digits). 
// Therefore only 12 and 7896 contain an even number of digits.
// Example 2:

// Input: nums = [555,901,482,1771]
// Output: 1 
// Explanation: 
// Only 1771 contains an even number of digits.
 

// Constraints:

// 1 <= nums.length <= 500
// 1 <= nums[i] <= 105


function findNumbers(nums: number[]): number {
    // // Method 1
    // let even: number = 0;
    // for (let i = 0; i < nums.length; i++) {
    //     const length = nums[i].toString().length
    //     if (length % 2 === 0) even++
    // }
    // return even;

    // Method 2
    return nums.filter(num => num.toString().length % 2 === 0).length
};