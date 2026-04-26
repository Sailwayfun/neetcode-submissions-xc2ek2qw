class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    moveZeroes(nums) {
        let left = 0;
        let right = 1;

        while(left <= right && right < nums.length) {
            if(nums[left] === 0 && nums[right] !== 0) {
                [nums[left], nums[right]] = [nums[right], nums[left]];
                left++;
                right++;
            } else if(nums[left] !== 0 && nums[right] !== 0) {
                left++;
                right++;
            } else if(nums[left] !== 0) {
                left++;
            } else if(nums[right] === 0) {
                right++;
            }
        }
    }
}
