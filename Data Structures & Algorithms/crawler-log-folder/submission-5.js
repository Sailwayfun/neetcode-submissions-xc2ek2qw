class Solution {
    /**
     * @param {string[]} logs
     * @return {number}
     */
    minOperations(logs) {
        const OPERATIONS = {
            "../": -1,
            "./": 0,
        }

        let level = 0;

        logs.forEach(l => {
            if(Object.hasOwn(OPERATIONS, l)) {
               level = Math.max(0, OPERATIONS[l] + level)
            } else level++;
        });

        return level;
    }
}
