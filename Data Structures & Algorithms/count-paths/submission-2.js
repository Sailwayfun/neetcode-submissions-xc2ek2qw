class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m, n) {
        const cache = Array.from({length: m}, () => new Array(n).fill(-1));
        
        function dfs(i, j) {
            if(i === m - 1 && j === n - 1) {
                return 1;
            }
            
            if(i >= m || j >= n) {
                return 0;
            }

            if(cache[i][j] !== -1) return cache[i][j];
            
            return cache[i][j] = dfs(i + 1, j) + dfs(i, j + 1);
        }

        return dfs(0, 0);
    }
}
