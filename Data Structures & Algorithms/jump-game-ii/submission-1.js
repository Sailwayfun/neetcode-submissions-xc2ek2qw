class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    jump(nums) {
        let r = 0;
        let farthest = 0;
        let steps = 0;

        for(let l = 0; l < nums.length - 1; l++) {
            farthest = Math.max(farthest, nums[l] + l);

            if(l === r) {
                r = farthest;
                steps++;
            }
        }

        return steps;
    }
}
