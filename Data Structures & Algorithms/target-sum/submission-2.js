class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    findTargetSumWays(nums, target) {
        const n = nums.length;
        const m = nums.reduce((a, b) => a + b, 0);

        const cache = Array.from({length: n}, () => new Array(2 * m + 1).fill(-1));

        function dfs(index, currSum) {
            if(m < target) return 0;
            
            if(index === n) {
                if(currSum === target) return 1;
                return 0;
            }

            if(cache[index][currSum + m] !== -1) return cache[index][currSum + m];

            return cache[index][currSum + m] = dfs(index + 1, currSum - nums[index]) + dfs(index + 1, currSum + nums[index]);
        }

        return dfs(0, 0);
    }
}
