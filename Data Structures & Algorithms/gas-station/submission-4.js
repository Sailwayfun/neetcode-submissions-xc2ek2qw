class Solution {
    /**
     * @param {number[]} gas
     * @param {number[]} cost
     * @return {number}
     */
    canCompleteCircuit(gas, cost) {
        const totalGas = gas.reduce((a, b) => a + b);
        const totalCost = cost.reduce((a, b) => a + b);

        if(totalGas < totalCost) return -1;

        let start = 0;
        let currTank = 0;

        for(let i = 0; i < gas.length; i++) {
            currTank += (gas[i] - cost[i]);

            if(currTank < 0) {
                currTank = 0;
                start = i + 1;
            }
        }

        if(currTank >= 0) return start;
        return -1;
    }
}
