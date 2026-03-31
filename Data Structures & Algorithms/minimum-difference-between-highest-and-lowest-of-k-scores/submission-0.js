class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    minimumDifference(nums, k) {
        nums.sort((a, b) => a - b);//1 2 3 3 5 6
        
        let res = Infinity;
        let left = 0;

        for(let right = 0; right < nums.length; right++) {
            if(right - left + 1 === k) {
                res = Math.min(res, nums[right] - nums[left]);
                left++;
            }
        }

        return res;
    }
}
