class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    firstMissingPositive(nums) {
        const n = nums.length;

        const table = new Array(n + 1).fill(0);

        for(const num of nums) {
            if(num > 0) {
                table[num]++;
            }
        }

        for(let i = 1; i < n + 1; i++) {
            if(table[i] === 0) {
                return i;
            }
        }

        return n + 1;
    }
}
