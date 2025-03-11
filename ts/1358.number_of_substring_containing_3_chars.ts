// Code
// Testcase
// Test Result
// Test Result
// 1358. Number of Substrings Containing All Three Characters
// Solved
// Medium
// Topics
// Companies
// Hint
// Given a string s consisting only of characters a, b and c.

// Return the number of substrings containing at least one occurrence of all these characters a, b and c.

// Example 1:

// Input: s = "abcabc"
// Output: 10
// Explanation: The substrings containing at least one occurrence of the characters a, b and c are "abc", "abca", "abcab", "abcabc", "bca", "bcab", "bcabc", "cab", "cabc" and "abc" (again).
// Example 2:

// Input: s = "aaacb"
// Output: 3
// Explanation: The substrings containing at least one occurrence of the characters a, b and c are "aaacb", "aacb" and "acb".
// Example 3:

// Input: s = "abc"
// Output: 1

// Constraints:

// 3 <= s.length <= 5 x 10^4
// s only consists of a, b or c characters.

function numberOfSubstrings(s: string): number {
  let l = 0;
  let res = 0;
  let count: Record<string, number> = {};

  for (let r = 0; r < s.length; r++) {
    count[s[r]] = (count[s[r]] || 0) + 1;

    while (count["a"] && count["b"] && count["c"]) {
      res += s.length - r;
      count[s[l]] -= 1;

      if (count[s[l]] === 0) {
        delete count[s[l]];
      }
      l += 1;
    }
  }
  return res;
}
