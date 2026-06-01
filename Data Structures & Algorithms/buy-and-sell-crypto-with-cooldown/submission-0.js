class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        const n = prices.length;

        if(n === 1) return 0;

        const cache = Array.from({length: n}, () => new Array(2).fill(null));

        function dfs(index, canBuy) {
            if(index >= n) return 0;

            if(cache[index][Number(canBuy)] !== null) return cache[index][Number(canBuy)];

            if(canBuy) {
                return cache[index][Number(canBuy)] = Math.max(dfs(index + 1, false) - prices[index], dfs(index + 1, canBuy));
            } 
            return cache[index][Number(canBuy)] = Math.max(dfs(index + 2, true) + prices[index], dfs(index + 1, canBuy));
        }

        return dfs(0, true);
    }
}
