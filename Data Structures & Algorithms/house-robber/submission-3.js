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
        dp[2] = Math.max(nums[0] + nums[2], nums[1]);

        for(let i = 3; i < n; i++) {
            dp[i] = Math.max(nums[i] + dp[i - 2], dp[i - 1]);
        }


        return Math.max(...dp);
    }
}
