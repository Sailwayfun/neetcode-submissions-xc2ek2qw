class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m, n) {
       const N = m - 1 + n - 1;
       const K = m - 1;

       let ans = 1;

       for(let i = 1; i <= K; i++) {
            ans = ans * (N - K + i) / i;
       }

       return Math.round(ans);
    }
}
