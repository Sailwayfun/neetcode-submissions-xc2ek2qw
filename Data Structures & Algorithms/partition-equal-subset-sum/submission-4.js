class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canPartition(nums) {
        const n = nums.length;
        const sum = nums.reduce((a, b) => a + b);

        if(sum % 2 !== 0) return false;

        const target = sum / 2;

        const dp = new Array(target + 1).fill(false);
        dp[0] = true;

        for(let i = 1; i <= n; i++) {
            const currNum = nums[i - 1];
            
            for(let j = target; j >= currNum; j--) {
                dp[j] = dp[j - currNum] || dp[j];
            }
        }

        return dp[target];
    }
}
