class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        const n = nums.length;

        let prev2 = nums[0];
        let prev1 = Math.max(nums[0], nums[1]);

        if(n === 0) return 0;
        if(n === 1) return prev2;
        if(n === 2) return prev1;

        for(let i = 2; i < n; i++) {
            let temp = prev1;
            prev1 = Math.max(prev1, prev2 + nums[i])
            prev2 = temp;
        }


        return prev1;
    }
}
