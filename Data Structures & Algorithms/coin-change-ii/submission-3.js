class Solution {
    /**
     * @param {number} amount
     * @param {number[]} coins
     * @return {number}
     */
    change(amount, coins) {
        const n = coins.length;
        const dp = new Array(amount + 1).fill(0);
        dp[0] = 1;

        for(let i = 1; i <= n; i++) {
            const coin = coins[i - 1]
            for(let j = coin; j <= amount; j++) {
                dp[j] += dp[j - coin];
            }
        }

        return dp[amount];

    }
}
