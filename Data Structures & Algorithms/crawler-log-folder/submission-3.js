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
            if(l in OPERATIONS) {
                if(level + OPERATIONS[l] < 0) {
                    level = 0;
                } else {
                    level += OPERATIONS[l];
                }
            } else level++;
        });

        return level;
    }
}
