class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        const n = nums.length;

        if(n === 1) return nums[0];
        if(n === 2) return Math.max(...nums);

        let prev2 = nums[0];
        let prev1 = Math.max(nums[0], nums[1]);

        for(let i = 2; i < n; i++) {
            let temp = prev1;
            prev1 = Math.max(prev1, prev2 + nums[i])
            prev2 = temp;
        }


        return Math.max(prev1, prev2);
    }
}
