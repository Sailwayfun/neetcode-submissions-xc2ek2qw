class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums) {
        const n = nums.length;
        
        function dfs(index, prev, cache) {
            if(index >= n) {
                return 0;
            }

            if(cache[index][prev + 1] !== -1) return cache[index][prev + 1];

            let notTake = dfs(index + 1, prev, cache);
            if(prev === -1 || nums[index] > nums[prev]) {
                let take = 1 + dfs(index + 1, index, cache);
                cache[index][prev + 1]  = Math.max(take, notTake);
                return cache[index][prev + 1];
            }
            cache[index][prev + 1] = notTake;
            return cache[index][prev + 1];

        }

        return dfs(0, -1, Array.from({length: n}, () => new Array(n + 1).fill(-1)));
    }
}
