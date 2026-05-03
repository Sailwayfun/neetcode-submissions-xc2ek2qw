class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        const n = nums.length;
        if(n === 0) return 0;
        if(n === 1) return nums[0];

        function _rob(nums) {
            let prev2 = 0;
            let prev1 = 0;

            for(const n of nums) {
                let temp = Math.max(prev1, prev2 + n);
                prev2 = prev1;
                prev1 = temp;
            }

            return prev1;
        }

        const res1 = _rob(nums.slice(1));
        const res2 = _rob(nums.slice(0, n - 1));

        return Math.max(res1, res2);
    }
}
