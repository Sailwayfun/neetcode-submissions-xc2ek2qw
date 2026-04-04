class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        const freq = new Map();

        for(const num of nums) {
            const count =  (freq.get(num) || 0) + 1;
            freq.set(num, count);
            if(count > nums.length / 2) return num;
        }
    }
}
