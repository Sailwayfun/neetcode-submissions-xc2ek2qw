class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    minPathSum(grid) {
        const rows = grid.length;
        const cols = grid[0].length;

        const dp = Array.from({length: rows}, () => new Array(cols).fill(-1));
        dp[0][0] = grid[0][0];

        for(let i = 0; i < rows - 1; i++) {
            dp[i + 1][0] = dp[i][0] + grid[i + 1][0];
        }

        for(let j = 0; j < cols - 1; j++) {
            dp[0][j + 1] = dp[0][j] + grid[0][j + 1];
        }

        for(let i = 1; i < rows; i++) {
            for(let j = 1; j < cols; j++) {
                dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
            }
        }

        return dp[rows - 1][cols - 1];
    }
}
