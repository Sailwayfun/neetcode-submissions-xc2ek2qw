class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        const n = nums.length;

        for(let i = 0; i < n; i++) {
            nums[i + n] = nums[i];
        }

        return nums;
    }
}
