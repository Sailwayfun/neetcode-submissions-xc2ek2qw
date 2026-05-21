class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canPartition(nums) {
        const sum = nums.reduce((a, b) => a + b);

        if(sum % 2 !== 0) return false;

        const target = sum / 2;

        const cache = Array.from({length: nums.length}, () => new Array(sum + 1).fill(null));

        function dfs(index, subSum) {
            if(index >= nums.length) {
                return subSum === target;
            }

            if(subSum === target) return true;

            if(cache[index][subSum] !== null) return cache[index][subSum];
            
            const nextIdx = index + 1;
            const inclusiveSum = subSum + nums[index];

            if(inclusiveSum <= target) {
                if(dfs(nextIdx, inclusiveSum)) return cache[index][subSum] = true;
            }
            
            if(dfs(nextIdx, subSum)) return cache[index][subSum] = true;

            return cache[index][subSum] = false;
        }

        return dfs(0, 0);
    }
}
