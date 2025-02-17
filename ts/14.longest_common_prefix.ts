// 14. Longest Common Prefix
// Solved
// Easy
// Topics
// Companies
// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

 

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
 

// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters if it is non-empty.



function longestCommonPrefix(strs: string[]): any {
    const shortestLength = strs.reduce((minLength, currentString) => Math.min(minLength, currentString.length), Infinity);
    console.log(shortestLength)

    for (let i = shortestLength; i > 0; i--) {
        const currentPrefix = strs[0].substring(0, i);

        if (strs.every(string => string.startsWith(currentPrefix))) {
            return currentPrefix;
        }
    }

    return '';
};