class Solution {
    /**
     * @param {number} n
     * @param {number[][]} flights
     * @param {number} src
     * @param {number} dst
     * @param {number} k
     * @return {number}
     */
    findCheapestPrice(n, flights, src, dst, k) {
        let prices = Array(n).fill(Infinity);
        prices[src] = 0;

        for(let i = 0; i <= k; i++) {
            const tempPrices = [...prices];

            for(let j = 0; j < flights.length; j++) {
                const [source, dest, price] = flights[j];
                
                const isReachable = prices[source] !== Infinity;

                if(isReachable) {
                    tempPrices[dest] = Math.min(prices[source] + price, tempPrices[dest]); 
                }

            }

            prices = tempPrices;
        }

        return prices[dst] !== Infinity ? prices[dst] : -1;
    }
}
