class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        const length = word.length;
        const rows = board.length;
        const cols = board[0].length;
        
        function dfs(row, col, idx) {
            if(idx === length) return true;
            if(row < 0 || col < 0 || row >= rows || col >= cols || board[row][col] !== word[idx]) {
                return false;
            }

            const temp = board[row][col];
            board[row][col] = null;
            const res = dfs(row + 1, col, idx + 1) ||
                        dfs(row - 1, col, idx + 1) ||
                        dfs(row, col - 1, idx + 1) ||
                        dfs(row, col + 1, idx + 1)
            board[row][col] = temp;
            if(res === true) return true;
        }

        for(let i = 0; i < rows; i++) {
            for(let j = 0; j < cols; j++) {
                if(dfs(i, j, 0)) return true;
            }
        }

        return false;
    }
}
