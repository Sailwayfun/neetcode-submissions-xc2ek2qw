class Solution {
    /**
     * @param {number[][]} matrix
     * @return {number}
     */
    longestIncreasingPath(matrix) {
        if(!matrix || matrix.length === 0 || matrix[0].length === 0) return 0;
        const rows = matrix.length;
        const cols = matrix[0].length;

        const dp = Array.from({length: rows}, () => new Array(cols).fill(null));

        function dfs(i, j, prevVal) {
            if(i < 0 || i >= rows || j < 0 || j >= cols || matrix[i][j] <= prevVal) return 0;

            if(dp[i][j] !== null) return dp[i][j];

            const val = matrix[i][j];

            let res = 1;
            if(i + 1 < rows && matrix[i + 1][j] > val) {
                res = Math.max(res, 1 + dfs(i + 1, j));
            }
            if(i - 1 >= 0 && matrix[i - 1][j] > val) {
                res = Math.max(res, 1 + dfs(i - 1, j));
            }
            if(j + 1 < cols && matrix[i][j + 1] > val) {
                res = Math.max(res, 1 + dfs(i, j + 1));
            }
            if(j - 1 >= 0 && matrix[i][j - 1] > val) {
                res = Math.max(res, 1 + dfs(i, j - 1));
            }

            return dp[i][j] = res;
        }

        let res = 1;
        for(let i = 0; i < rows; i++) {
            for(let j = 0; j < cols; j++) {
                res = Math.max(res, dfs(i, j, -1));
            }
        }

        return res;
    }
}
