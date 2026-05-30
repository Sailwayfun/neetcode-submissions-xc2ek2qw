class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums) {
        const n = nums.length;

        let maxReach = 0;

        for(let i = 0; i < n; i++) {
            if(i > maxReach) return false;

            maxReach = Math.max(maxReach, i + nums[i]);

            if(maxReach >= n) return true;
        }

        return true;
    }
}
