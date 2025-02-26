// 217. Contains Duplicate
// Solved
// Easy
// Topics
// Companies
// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 

// Example 1:

// Input: nums = [1,2,3,1]

// Output: true

// Explanation:

// The element 1 occurs at the indices 0 and 3.

// Example 2:

// Input: nums = [1,2,3,4]

// Output: false

// Explanation:

// All elements are distinct.

// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]

// Output: true

 

// Constraints:

// 1 <= nums.length <= 105
// -109 <= nums[i] <= 109



function containsDuplicate(nums: number[]): boolean {
    // // Time Complexity: O(n2) -> Brute Force Sorting
    // const n = nums.length;
    // let result: number = 0;
    // for (let i = 0; i < n; i++) {
    //     for (let j = i + 1; j < n; j++) {
    //         console.log(nums[i], nums[j])
    //         if (nums[i] === nums[j]) {
    //             result++
    //         }
    //     }
    // }

    // return result ? true : false

    // Time Complexity: O(n) -> Hash Set
    const seen: Set<number> = new Set;

    for (const num of nums) {
        if (seen.has(num)) return true;
        seen.add(num)
    }
    return false

    // // Time complexity: O(n log n) -> Sorting
    // nums.sort((a,b) => a - b)
    // for (let i = 0; i < nums.length - 1; i++) {
    //     if (nums[i] === nums[i+1]) return true
    // }
    // return false
};