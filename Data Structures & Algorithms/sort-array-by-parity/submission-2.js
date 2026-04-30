class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArrayByParity(nums) {
        let left = 0;

        for(let right = 0; right < nums.length; right++) {
            if(nums[right] % 2 === 0) {
                [nums[right], nums[left]] = [nums[left], nums[right]];
                left++;
            }
        }

        return nums;
    }
}
