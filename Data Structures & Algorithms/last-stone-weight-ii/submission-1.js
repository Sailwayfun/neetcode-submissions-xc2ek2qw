class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeightII(stones) {
        const sum = stones.reduce((a, b) => a + b, 0);
        const target = Math.floor(sum / 2);

        const n = stones.length;

        const cache = Array.from({length: n}, () => new Array(target + 1).fill(null));

        function dfs(i, total) {
            if(total > target || i >= n) {
                return Math.abs(total - (sum - total));
            }
            if(cache[i][total] !== null) return cache[i][total];

            return cache[i][total] = Math.min(dfs(i + 1, total), dfs(i + 1, total + stones[i]));
        }

        return dfs(0, 0);
    }
}