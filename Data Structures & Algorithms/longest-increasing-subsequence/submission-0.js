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

            if(cache[`${index}_${prev}`]) return cache[`${index}_${prev}`];

            let notTake = dfs(index + 1, prev, cache);
            if(prev === -1 || nums[index] > nums[prev]) {
                let take = 1 + dfs(index + 1, index, cache);
                cache[`${index}_${prev}`]  = Math.max(take, notTake);
                return cache[`${index}_${prev}`];
            }
            cache[`${index}_${prev}`] = notTake;
            return cache[`${index}_${prev}`];

        }

        return dfs(0, -1, {});
    }
}
