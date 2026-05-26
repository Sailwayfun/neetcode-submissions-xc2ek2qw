class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    findTargetSumWays(nums, target) {
        const n = nums.length;
        const dp = Array.from({length: n + 1}, () => new Map());
        dp[0].set(0, 1);

        for(let i = 1; i <= n; i++) {
            const currNum = nums[i - 1];
            for(const [prevSum, count] of dp[i - 1]) {
                dp[i].set(prevSum + currNum, (dp[i].get(prevSum + currNum) || 0) + count);
                dp[i].set(prevSum - currNum, (dp[i].get(prevSum - currNum) || 0) + count);
            }
        }

        return dp[n].get(target) || 0;
    }
}
