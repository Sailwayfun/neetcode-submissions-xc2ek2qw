class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        const n = nums.length;

        if(n === 0) return 0;
        if(n === 1) return nums[0];

        const dp1 = new Array(n - 1);

        dp1[0] = nums[0];
        dp1[1] = Math.max(nums[0], nums[1]);

        for(let i = 2; i < n - 1; i++) {
            dp1[i] = Math.max(dp1[i - 1], dp1[i - 2] + nums[i]);
        }

        const dp2 = new Array(n);
        dp2[0] = 0;
        dp2[1] = nums[1];

        for(let j = 2; j < n; j++) {
            dp2[j] = Math.max(dp2[j - 1], dp2[j - 2] + nums[j]);
        }

        return Math.max(dp1.pop(), dp2.pop());
    }
}
