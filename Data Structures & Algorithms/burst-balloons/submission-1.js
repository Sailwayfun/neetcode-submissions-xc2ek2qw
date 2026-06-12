class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxCoins(nums) {
        const extendedNums = [1, ...nums, 1];
        const n = extendedNums.length;

        const cache = Array.from({length: n}, () => new Array(n).fill(-1));

        function dfs(l, r) {
            if(l > r) return 0;

            if(cache[l][r] !== -1) return cache[l][r];

            let max = 0;

            for(let i = l; i <= r; i++) {
                const coins =  extendedNums[i] * extendedNums[l - 1] * extendedNums[r + 1];
                const total = dfs(l, i - 1) + dfs(i + 1, r);
                max = Math.max(max, coins + total);
            }

            return cache[l][r] = max;
        }

        return dfs(1, n - 2);
    }
}
