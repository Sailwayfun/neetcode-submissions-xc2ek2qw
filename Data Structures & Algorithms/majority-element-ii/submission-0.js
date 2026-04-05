class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
        const res = [];

        const threshold = nums.length / 3;

        const freq = new Map();

        for(const num of nums) {
            freq.set(num, (freq.get(num) || 0) + 1);
        }

        for(const [num, count] of freq) {
            if(count > threshold) {
                res.push(num);
            }
        }

        return res;
    }
}
