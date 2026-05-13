class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
        if(amount === 0) return 0;

        const dp = new Array(amount + 1).fill(amount + 1);

        dp[0] = 0;

        for(let i = 1; i <= amount; i++) {
            for(let j = 0; j < coins.length; j++) {
                if(i >= coins[j]) {
                    dp[i] = Math.min(dp[i], 1 + dp[i - coins[j]]);
                }
            }
        }

        if(dp[amount] === amount + 1) return -1;
        return dp[amount];
    }
}
