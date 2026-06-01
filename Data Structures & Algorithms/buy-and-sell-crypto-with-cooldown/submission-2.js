class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        const n = prices.length;
        //rolling arrays
        let next1 = [0, 0];
        let next2 = [0, 0];

        for(let i = n - 1; i >= 0; i--) {
            let currBuy = Math.max(next1[0] - prices[i], next1[1]);
            let currSell = Math.max(next2[1] + prices[i], next1[0]);
            next2 = next1;
            next1 = [currSell, currBuy];
        }

        return next1[1];
    }
}
