class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {
        const n = cost.length;

        function dp() {
            let prev2 = 0;
            let prev1 = 0;

            for(let i = 0; i < n; i++) {
                [prev2, prev1] = [prev1, Math.min(prev1, prev2) + cost[i]];
            }

            return Math.min(prev1, prev2);
        }

        return dp();
    }
}
