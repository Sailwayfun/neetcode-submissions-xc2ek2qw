class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        let ans = nums[0];

        let currMin = nums[0];
        let currMax = nums[0];

        for(let i = 1; i < nums.length; i++) {
            if(nums[i] < 0) {
                [currMax, currMin] = [currMin, currMax];
            }
            currMax = Math.max(currMax * nums[i], nums[i]);
            currMin = Math.min(currMin * nums[i], nums[i]);
            ans = Math.max(ans, currMax);
        }

        return ans;
    }
}
