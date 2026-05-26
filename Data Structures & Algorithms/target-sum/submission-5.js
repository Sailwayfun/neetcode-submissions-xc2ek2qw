class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    findTargetSumWays(nums, target) {
        const n = nums.length;

        let dp = new Map();

        dp.set(0, 1);

        for(let i = 1; i <= n; i++) {
            const currNum = nums[i - 1];

            let nextDP = new Map();
            
            for(const [prevSum, count] of dp) {
                nextDP.set(prevSum + currNum, (nextDP.get(prevSum + currNum) || 0) + count);
                nextDP.set(prevSum - currNum, (nextDP.get(prevSum - currNum) || 0) + count);
            }

            dp = nextDP;
        }

        return dp.get(target) || 0;
    }
}
