class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    jump(nums) {
        let l = 0;
        let r = 0;

        let step = 0;

        const n = nums.length;

        while(l < n - 1 && r < n - 1) {
            const temp = r;
            r = Math.max(nums[l] + l, nums[r] + r);
            l = temp + 1;
            step++;
        }

        return step;
    }
}
