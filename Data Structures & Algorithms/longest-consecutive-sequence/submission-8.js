class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const lookup = new Set(nums);

        let maxLength = -Infinity;

        for(let i = 0; i < nums.length; i++) {
            let currentLength = 1;
            let currentNum = nums[i];
            if(!lookup.has(currentNum - 1)) {
                while(lookup.has(currentNum + 1)) {
                    currentLength++;
                    currentNum++;
                }

                maxLength = Math.max(currentLength, maxLength);
            }
        }

        return maxLength === -Infinity ? 0 : maxLength;
    }
}
