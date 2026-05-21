class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canPartition(nums) {
        const n = nums.length;
        const sum = nums.reduce((a, b) => a + b);

        if(sum % 2 !== 0) return false;

        const target = sum / 2;

        let dp = new Set();
        dp.add(0);

        for(let i = n - 1; i >= 0; i--) {
            const nextDP = new Set();
            
            for(const t of dp) {
                if(t === target || t + nums[i] === target) {
                    return true;
                }
                if(t + nums[i] < target) {
                    nextDP.add(t + nums[i]);
                } 
                
                nextDP.add(t);
            }

            dp = nextDP;

        }

        return dp.has(target);
    }
}
