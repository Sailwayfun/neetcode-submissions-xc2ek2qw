class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const numSet = new Set(nums);

        return numSet.size !== nums.length;
    }
}
