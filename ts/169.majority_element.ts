// 169. Majority Element
// Solved
// Easy
// Topics
// Companies
// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2
 

// Constraints:

// n == nums.length
// 1 <= n <= 5 * 104
// -109 <= nums[i] <= 109
 

// Follow-up: Could you solve the problem in linear time and in O(1) space?


function majorityElement(nums: number[]): number {
    // // O(n2) -> Brute Force Sorting
    // const n: number = nums.length;
    // for (let i = 0; i < n; i++) {
    //     let count: number = 0
    //     for (let j = 0; j < n; j++) {
    //         if (nums[i] === nums[j]) {
    //             count++;
    //         }
    //     }
    //     if (count > n/2){
    //         return nums[i]
    //     }
    // }
    // return -1;
    
    // // O(n) -> Hash Map 
    // const n: number = nums.length;
    // const freq: Map<number, number> = new Map();

    // for (const num of nums) {
    //     freq.set(num, (freq.get(num) || 0) + 1)
    // }
    // for (const [num, count] of freq.entries()) {
    //     if (count > Math.floor(n / 2)) {
    //         return num
    //     }
    // }
    // return -1;

    // // O(1) -> Boyer Moore
    let candidate = 0, count = 0;

    // find potential majority element
    for (const num of nums) {
        if (count === 0) candidate = num;
        count += (num === candidate) ? 1 : -1;
    }

    // verify majority element
    count = 0;
    for (const num of nums) {
        if  (num === candidate) count++
    }

    return count > Math.floor(nums.length / 2) ? candidate : -1;
};