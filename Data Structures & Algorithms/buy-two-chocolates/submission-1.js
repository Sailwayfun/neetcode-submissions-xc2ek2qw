class Solution {
    /**
     * @param {number[]} prices
     * @param {number} money
     * @return {number}
     */
    buyChoco(prices, money) {
        let small1 = Infinity;
        let small2 = Infinity;

        for(let i = 0; i < prices.length; i++) {
            if(prices[i] < small1) {
                small2 = small1;
                small1 = prices[i];
            } else if(prices[i] < small2) {
                small2 = prices[i];
            }
        }

        if(small1 + small2 > money) return money;
        return money - small1 - small2;
    }
}
