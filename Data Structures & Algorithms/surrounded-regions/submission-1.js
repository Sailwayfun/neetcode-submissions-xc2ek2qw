class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    solve(board) {
        const [rows, cols] = [board.length, board[0].length];
        
        function dfs(i, j) {
            if(i < 0 || j < 0 || i >= rows || j >= cols || board[i][j] !== "O") {
                return;
            }

            board[i][j] = "#";

            dfs(i - 1, j);
            dfs(i + 1, j);
            dfs(i, j - 1);
            dfs(i, j + 1);
        }

        for(let i = 0; i < rows; i++) {
            for(let j = 0; j < cols; j++) {
                if(i === 0 || j === 0 || i === rows - 1 || j === cols - 1) {
                    dfs(i, j);
                }
            }
        }

        for(let i = 0; i < rows; i++) {
            for(let j = 0; j < cols; j++) {
                if(board[i][j] === "#") {
                    board[i][j] = "O";
                } else if(board[i][j] === "O") {
                    board[i][j] = "X";
                }
            }
        }
    }
}
