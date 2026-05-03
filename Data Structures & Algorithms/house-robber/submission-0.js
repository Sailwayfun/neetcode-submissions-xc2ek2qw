class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        const cache = new Array(nums.length);
        
        function dfs(i) {
            if(i >= nums.length) {
                return 0;
            }

            if(cache[i]) return cache[i];

            cache[i] = Math.max(nums[i] + dfs(i + 2), dfs(i + 1));

            return cache[i];
        }

        return dfs(0);
    }
}
