class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    uniquePathsWithObstacles(grid) {
        if(grid[0][0] === 1) return 0;

        const rows = grid.length;
        const cols = grid[0].length;

        if(grid[rows - 1][cols - 1] === 1) return 0;

        const dp = new Array(cols).fill(0);
        dp[0] = 1;

        for(let i = 0; i < rows; i++) {
            for(let j = 0; j < cols; j++) {
                if(grid[i][j] === 1) {
                    dp[j] = 0;
                } else if(j > 0) {
                    dp[j] += dp[j - 1];
                }
            }
        }

        return dp[cols - 1];


    }
}
