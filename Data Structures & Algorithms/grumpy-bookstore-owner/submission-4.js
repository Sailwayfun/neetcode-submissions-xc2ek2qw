class Solution {
    /**
     * @param {number[]} customers
     * @param {number[]} grumpy
     * @param {number} minutes
     * @return {number}
     */
    maxSatisfied(customers, grumpy, minutes) {
        let maxSave = 0;

        let savedCount = 0;
        let baseSatisfied = 0;

        for(let right = 0; right < customers.length; right++) {
            if(grumpy[right] === 0) {
                baseSatisfied += customers[right];
            } else {
                savedCount += customers[right];
            }
            
            if(right >= minutes) {
                if(grumpy[right - minutes] === 1) {
                    savedCount -= customers[right - minutes];
                }
            }

            maxSave = Math.max(maxSave, savedCount);
        }

        return baseSatisfied + maxSave;
    }
}
