class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    tribonacci(n) {
        if(n === 0) return 0;
        if(n === 1 || n === 2) return 1;

        const dp = [0, 1, 1];

        for(let i = 3; i <= n; i++) {
            [dp[0], dp[1], dp[2]] = [dp[1], dp[2], dp[0] + dp[1] + dp[2]];
        }

        return dp[2];
    }
}
