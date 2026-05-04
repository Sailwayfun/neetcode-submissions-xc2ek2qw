class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {
        const cache = new Array(cost.length);
        
        function dfs(pos) {
            if(pos >= cost.length) {
                return 0;
            }
            
            if(cache[pos]) return cache[pos];
            
            cache[pos] = cost[pos] + Math.min(dfs(pos + 1), dfs(pos + 2));

            return cache[pos];
        }

        return Math.min(dfs(0), dfs(1));
    }
}
