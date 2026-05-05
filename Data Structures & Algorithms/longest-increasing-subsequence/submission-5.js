class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums) {
        const n = nums.length;

        if(n === 0) return 0;
        
        const dp = new Array(n).fill(1);//dp[i] = lis till index[i]
        
        for(let i = 1; i < n; i++) {
            for(let j = 0; j < i; j++) {
                if(nums[i] > nums[j]) {
                    dp[i] = Math.max(1 + dp[j], dp[i]);   
                }
            }
        }

        return Math.max(...dp);
    }
}
