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

        let balance = 0;
        let i = 0;
        let j = 0;

        while(i < gas.length) {
            for(j = 0; j < gas.length; j++) {
                balance += gas[ (i + j) % gas.length] - cost[(i + j) % gas.length];
                if(balance < 0) {
                    balance = 0;
                    i += j + 1;
                    break;
                }
            }
            if(j === gas.length) return i;
        }

        return -1;
    }
}
