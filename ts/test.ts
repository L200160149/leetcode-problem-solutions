function isValidSudoku(board: string[][]): boolean  {
    let seen = new Set();
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            let number = board[i][j];
            if (number != '.') {
                let row = number + ' in row ' + i;
                let col = number + ' in col ' + j;
                let box = number + ' in box ' + Math.floor(i / 3) + '-' + Math.floor(j / 3);
                if (seen.has(row) || seen.has(col) || seen.has(box)) {
                    return false;
                }
                seen.add(row);
                seen.add(col);
                seen.add(box);
            }
        }
    }
    return true;
}