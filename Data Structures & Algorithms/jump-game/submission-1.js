class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums) {
        const n  = nums.length;

        if(n === 1) return true;

        let goal = n - 1;

        for(let i = n - 2; i >= 0; i--) {
            const steps = nums[i];
            if(i + steps >= goal) {
                goal = i;
            }
        }

        return goal === 0;
    }
}
