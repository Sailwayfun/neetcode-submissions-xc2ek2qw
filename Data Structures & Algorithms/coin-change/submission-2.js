class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
        function dfs(amount, cache) {
            if(cache[amount] !== undefined) return cache[amount];
            if(amount === 0) return 0;
            if(amount < 0) return Infinity;

            let res = Infinity;

            for(let i = 0; i < coins.length; i++) {
                const subCount = dfs(amount - coins[i], cache);

                if(subCount === Infinity) continue;

                res = Math.min(1 + subCount, res);
            }

            return cache[amount] = res;
        }

        const res = dfs(amount, {});

        if(res === Infinity) return -1;

        return res;
    }
}
