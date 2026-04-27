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
        let satisfiedCount = 0;

        let left = 0;
        for(let right = 0; right < customers.length; right++) {
            if(grumpy[right] === 0) {
                satisfiedCount += customers[right];
            } else {
                savedCount += customers[right];
            }
            
            if(right - left === minutes) {
                if(grumpy[left] === 1) {
                    savedCount -= customers[left];
                }
                left++;
            }

            maxSave = Math.max(maxSave, savedCount);
        }

        return satisfiedCount + maxSave;
    }
}
