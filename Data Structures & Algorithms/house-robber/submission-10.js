class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        const n = nums.length;

        let prev2 = 0;
        let prev1 = 0;

        for(let i = 0; i < n; i++) {
            let temp = prev1;
            prev1 = Math.max(prev1, prev2 + nums[i])
            prev2 = temp;
        }


        return prev1;
    }
}
