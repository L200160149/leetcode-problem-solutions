// 1079. Letter Tile Possibilities
// Solved
// Medium
// Topics
// Companies
// Hint
// You have n  tiles, where each tile has one letter tiles[i] printed on it.

// Return the number of possible non-empty sequences of letters you can make using the letters printed on those tiles.

 

// Example 1:

// Input: tiles = "AAB"
// Output: 8
// Explanation: The possible sequences are "A", "B", "AA", "AB", "BA", "AAB", "ABA", "BAA".
// Example 2:

// Input: tiles = "AAABBC"
// Output: 188
// Example 3:

// Input: tiles = "V"
// Output: 1
 

// Constraints:

// 1 <= tiles.length <= 7
// tiles consists of uppercase English letters.



function numTilePossibilities(tiles: string): number {
    const count = new Map<string, number>();

    for (const char of tiles) {
        count.set(char, (count.get(char) || 0) + 1);
    }

    function backtrack(): number {
        let res = 0;

        for (const [char, freq] of count.entries()) {
            if (freq > 0) {
                count.set(char, freq - 1);
                res += 1 + backtrack();
                count.set(char, freq);
            }
        }

        return res;
    }

    return backtrack();
}
