class Solution {
    /**
     * @param {number} amount
     * @param {number[]} coins
     * @return {number}
     */
    change(amount, coins) {
        const n = coins.length;

        const cache = Array.from({length: n}, () => new Array(amount + 1).fill(-1));
        
        function dfs(index, currAmount) {
            if(currAmount === amount) return 1;
            if(index >= n) return 0;

            if(cache[index][currAmount] !== -1) return cache[index][currAmount];

            let res = dfs(index + 1, currAmount);
            if(currAmount + coins[index] <= amount) {
                res += dfs(index, currAmount + coins[index]);
            }

            cache[index][currAmount] = res;

            return res;
        }

        return dfs(0, 0)
    }
}
