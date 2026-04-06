class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        const suffixMap = new Map();
        
        suffixMap.set(0, 1);
        let currentSuffix = 0;
        let count = 0;
        
        for(let i = nums.length - 1; i >= 0; i--) {
            const num = nums[i];
            currentSuffix += num;

            const target = currentSuffix - k;

            if(suffixMap.has(target)) {
                count += suffixMap.get(target);
            }

            suffixMap.set(currentSuffix, (suffixMap.get(currentSuffix) || 0) + 1);

        }

        return count;
    }
}
