// 2529. Maximum Count of Positive Integer and Negative Integer
// Solved
// Easy
// Topics
// Companies
// Hint
// Given an array nums sorted in non-decreasing order, return the maximum between the number of positive integers and the number of negative integers.

// In other words, if the number of positive integers in nums is pos and the number of negative integers is neg, then return the maximum of pos and neg.
// Note that 0 is neither positive nor negative.

// Example 1:

// Input: nums = [-2,-1,-1,1,2,3]
// Output: 3
// Explanation: There are 3 positive integers and 3 negative integers. The maximum count among them is 3.
// Example 2:

// Input: nums = [-3,-2,-1,0,0,1,2]
// Output: 3
// Explanation: There are 2 positive integers and 3 negative integers. The maximum count among them is 3.
// Example 3:

// Input: nums = [5,20,66,1314]
// Output: 4
// Explanation: There are 4 positive integers and 0 negative integers. The maximum count among them is 4.

// Constraints:

// 1 <= nums.length <= 2000
// -2000 <= nums[i] <= 2000
// nums is sorted in a non-decreasing order.

// Follow up: Can you solve the problem in O(log(n)) time complexity?

function maximumCount(nums: number[]): number {
  let negativeInt = 0;
  let positiveInt = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0) negativeInt++;
    if (nums[i] > 0) positiveInt++;
  }

  return negativeInt > positiveInt ? negativeInt : positiveInt;
}

// O(log n) complexity
// 1. Binary Search (e.g., O(log n) search for the first negative/positive element in a sorted array).
// 2. Heap operations (logarithmic insertions/removals).
// 3. Divide & Conquer algorithms (e.g., QuickSort, MergeSort).

// // 1. Binary Search
// function maximumCount(nums: number[]): number {
//     const firstPositive = binarySearchFirstPositive(nums);
//     const firstNonNegative = binarySearchFirstNonNegative(nums);

//     // Count negatives as the index of first non-negative
//     let negativeCount = firstNonNegative;
//     // Count positives as total size - index of first positive
//     let positiveCount = nums.length - firstPositive;

//     return Math.max(negativeCount, positiveCount);
// }

// // Finds the index of the first non-negative number
// function binarySearchFirstNonNegative(nums: number[]): number {
//     let left = 0, right = nums.length;
//     while (left < right) {
//         let mid = Math.floor((left + right) / 2);
//         if (nums[mid] < 0) left = mid + 1;
//         else right = mid;
//     }
//     return left;
// }

// // Finds the index of the first positive number
// function binarySearchFirstPositive(nums: number[]): number {
//     let left = 0, right = nums.length;
//     while (left < right) {
//         let mid = Math.floor((left + right) / 2);
//         if (nums[mid] <= 0) left = mid + 1;
//         else right = mid;
//     }
//     return left;
// }

// // 2. QuickSort
// function maximumCount(nums: number[]): number {
//     quickSort(nums, 0, nums.length - 1);

//     const firstPositive = binarySearchFirstPositive(nums);
//     const firstNonNegative = binarySearchFirstNonNegative(nums);

//     let negativeCount = firstNonNegative;
//     let positiveCount = nums.length - firstPositive;

//     return Math.max(negativeCount, positiveCount);
// }

// // QuickSort implementation
// function quickSort(arr: number[], left: number, right: number): void {
//     if (left >= right) return;

//     const pivotIndex = partition(arr, left, right);
//     quickSort(arr, left, pivotIndex - 1);
//     quickSort(arr, pivotIndex + 1, right);
// }

// function partition(arr: number[], left: number, right: number): number {
//     let pivot = arr[right];
//     let i = left;

//     for (let j = left; j < right; j++) {
//         if (arr[j] < pivot) {
//             [arr[i], arr[j]] = [arr[j], arr[i]];
//             i++;
//         }
//     }
//     [arr[i], arr[right]] = [arr[right], arr[i]];
//     return i;
// }

// // 3. MergeSort
// function maximumCount(nums: number[]): number {
//     mergeSort(nums, 0, nums.length - 1);

//     const firstPositive = binarySearchFirstPositive(nums);
//     const firstNonNegative = binarySearchFirstNonNegative(nums);

//     let negativeCount = firstNonNegative;
//     let positiveCount = nums.length - firstPositive;

//     return Math.max(negativeCount, positiveCount);
// }

// // MergeSort implementation
// function mergeSort(arr: number[], left: number, right: number): void {
//     if (left >= right) return;

//     let mid = Math.floor((left + right) / 2);
//     mergeSort(arr, left, mid);
//     mergeSort(arr, mid + 1, right);
//     merge(arr, left, mid, right);
// }

// function merge(arr: number[], left: number, mid: number, right: number): void {
//     let leftArr = arr.slice(left, mid + 1);
//     let rightArr = arr.slice(mid + 1, right + 1);

//     let i = 0, j = 0, k = left;

//     while (i < leftArr.length && j < rightArr.length) {
//         if (leftArr[i] < rightArr[j]) arr[k++] = leftArr[i++];
//         else arr[k++] = rightArr[j++];
//     }

//     while (i < leftArr.length) arr[k++] = leftArr[i++];
//     while (j < rightArr.length) arr[k++] = rightArr[j++];
// }
