class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    maxFrequency(nums, k) {
        //sort the input array to group similar elements
        nums.sort((a,b) => a - b);

        let res = 1;

        let left = 0;
        let windowSum = 0;
        for(let right = 0; right < nums.length; right++) {
            windowSum += nums[right];

            while(windowSum + k < (right - left + 1) * nums[right]) {
                windowSum -= nums[left];
                left++;
            }

            res = Math.max(res, right - left + 1);
        }

        return res;
    }
}
