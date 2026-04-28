class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    subsetXORSum(nums) {
        let sum = 0;

        function backtrack(index, xorSum) {
            if(index === nums.length) {
                sum += xorSum;
                return;
            }

            backtrack(index + 1, xorSum ^ nums[index]);

            backtrack(index + 1, xorSum);
        }

        backtrack(0, 0);

        return sum;
    }
}
