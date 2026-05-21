class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canPartition(nums) {
        const sum = nums.reduce((a, b) => a + b);

        if(sum % 2 !== 0) return false;

        const target = sum / 2;

        const n = nums.length;

        const dp = Array.from({length: n + 1}, () => new Array(target + 1).fill(false));

        dp[0][0] = true;

        for(let i = 1; i <= n; i++) {
            const currNum = nums[i - 1];

            for(let j = 0; j <= target; j++) {
                dp[i][j] = dp[i - 1][j];

                if(j >= currNum) {
                    dp[i][j] = dp[i - 1][j - currNum] || dp[i - 1][j];
                }
            }
        }

        return dp[n][target];
    }
}
