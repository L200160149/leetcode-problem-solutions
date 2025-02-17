// 3174. Clear Digits
// Solved
// Easy
// Topics
// Companies
// Hint
// You are given a string s.

// Your task is to remove all digits by doing this operation repeatedly:

// Delete the first digit and the closest non-digit character to its left.
// Return the resulting string after removing all digits.

// Note that the operation cannot be performed on a digit that does not have any non-digit character to its left.

 

// Example 1:

// Input: s = "abc"

// Output: "abc"

// Explanation:

// There is no digit in the string.

// Example 2:

// Input: s = "cb34"

// Output: ""

// Explanation:

// First, we apply the operation on s[2], and s becomes "c4".

// Then we apply the operation on s[1], and s becomes "".

 

// Constraints:

// 1 <= s.length <= 100
// s consists only of lowercase English letters and digits.
// The input is generated such that it is possible to delete all digits.



function clearDigits(s: string): string {
    const sArr: string[] = s.split('');
    let i = 0;

    while (i < sArr.length) {
        if (/\d/.test(sArr[i])) {
            sArr.splice(i, 1);
            if (i > 0) {
                sArr.splice(i - 1, 1);
                i--
            }
        } else {
            i++;
        }
    }

    return sArr.join('')
};