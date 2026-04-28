class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    subsetXORSum(nums) {
        function backtrack(index, currentXor) {
            if(index === nums.length) {
                return currentXor;
            }

            return backtrack(index + 1, currentXor ^ nums[index]) + backtrack(index + 1, currentXor);
        }

        return backtrack(0, 0);
    }
}
