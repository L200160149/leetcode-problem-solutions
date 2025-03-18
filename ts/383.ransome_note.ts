// 383. Ransom Note
// Solved
// Easy
// Topics
// Companies
// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.

// Example 1:

// Input: ransomNote = "a", magazine = "b"
// Output: false
// Example 2:

// Input: ransomNote = "aa", magazine = "ab"
// Output: false
// Example 3:

// Input: ransomNote = "aa", magazine = "aab"
// Output: true

// Constraints:

// 1 <= ransomNote.length, magazine.length <= 105
// ransomNote and magazine consist of lowercase English letters.

function canConstruct(ransomNote: string, magazine: string): boolean {
  const hash: Map<string, number> = new Map();

  for (const char of magazine) {
    hash.set(char, (hash.get(char) || 0) + 1);
  }

  for (const char of ransomNote) {
    if (!hash.get(char)) return false;

    hash.set(char, (hash.get(char) || 0) - 1);
  }

  return true;
}
