class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortedSquares(nums) {
        for(let i = 0; i < nums.length; i++) {
            let j = i + 1;
            while(j < nums.length && nums[j] ** 2 <= nums[i] ** 2) {
                [nums[i], nums[j]] = [nums[j], nums[i]];
                j++;
            }            
        }

        return nums.map(n => n ** 2);
    }
}
