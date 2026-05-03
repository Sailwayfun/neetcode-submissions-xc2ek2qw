class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        const n = nums.length;

        if(n === 1) return nums[0];
        if(n === 2) return Math.max(...nums);
        
        const dp = new Array(n);

        dp[0] = nums[0];
        dp[1] = Math.max(nums[0], nums[1]);

        for(let i = 2; i < n; i++) {
            dp[i] = Math.max(nums[i] + dp[i - 2], dp[i - 1]);
        }


        return dp.pop();
    }
}
