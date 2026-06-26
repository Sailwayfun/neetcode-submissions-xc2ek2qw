class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    minPathSum(grid) {
        const rows = grid.length;
        const cols = grid[0].length;

        const dp = new Array(cols).fill(-1);
        dp[0] = grid[0][0];

        for(let j = 1; j < cols; j++) {
            dp[j] = dp[j - 1] + grid[0][j];
        }

        for(let i = 1; i < rows; i++) {
            dp[0] += grid[i][0];
            
            for(let j = 1; j < cols; j++) {
                dp[j] = Math.min(dp[j - 1], dp[j]) + grid[i][j];
            }
        }

        return dp[cols - 1];
    }
}
