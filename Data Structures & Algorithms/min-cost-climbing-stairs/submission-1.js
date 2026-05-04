class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {
        const n = cost.length;

        if(n === 0) return 0;
        if(n === 1) return cost[0];

        function dp() {
            let prev2 = cost[0];
            let prev1 = cost[1];

            for(let i = 2; i < n; i++) {
                let temp = Math.min(prev1, prev2) + cost[i];
                prev2 = prev1;
                prev1 = temp;
            }

            return Math.min(prev1, prev2);
        }

        return dp();
    }
}
