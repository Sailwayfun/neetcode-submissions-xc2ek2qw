class Solution {
    /**
     * @param {number[]} prices
     * @param {number} money
     * @return {number}
     */
    buyChoco(prices, money) {
        prices.sort((a, b) => a - b);
        const small1 = prices[0];
        const small2 = prices[1];

        if(small1 + small2 > money) return money;
        return money - small1 - small2;
    }
}
