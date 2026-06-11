class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    uniquePathsWithObstacles(grid) {
        if(grid[0][0] === 1) return 0;

        const rows = grid.length;
        const cols = grid[0].length;

        const dp = Array.from({length: rows}, () => new Array(cols).fill(0));
        dp[0][0] = 1;

        for(let i = 0; i < rows; i++) {
            if(grid[i][0] === 1) break;
            dp[i][0] = 1;
        }

        for(let j = 0; j < cols; j++) {
            if(grid[0][j] === 1) break;
            dp[0][j] = 1;
        }

        for(let i = 1; i < rows; i++) {
            for(let j = 1; j < cols; j++) {
                if(grid[i][j] === 1) continue;
                dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
            }
        }

        return dp[rows - 1][cols - 1];


    }
}
