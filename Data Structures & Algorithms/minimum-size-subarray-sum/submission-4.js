class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) {
        let currentSum = 0;

        let minLength = Infinity;

        let left = 0;
        for(let i = 0; i < nums.length; i++) {
            if(nums[i] >= target) return 1;
            
            currentSum += nums[i];

            while(currentSum - nums[left] >= target) {
                currentSum -= nums[left];
                left++;
                minLength = Math.min(minLength, i - left + 1);
            }
        }
        
        if(minLength === Infinity) {
            if(currentSum < target) return 0;
            return nums.length;
        }
        return minLength;
    }
}
