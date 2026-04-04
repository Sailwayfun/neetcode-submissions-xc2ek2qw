class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let res = nums[0];
        let count = 1;

        for(let i = 1; i < nums.length; i++) {
            if(nums[i] === res) {
                count++;
            } else if(nums[i] !== res && count > 0) {
                count--;
            } else {
                res = nums[i];
                count++;
            }
        }

        return res;
    }
}
