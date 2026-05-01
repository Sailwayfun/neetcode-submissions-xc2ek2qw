class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortedSquares(nums) {
        let left = 0;
        let right = nums.length - 1;

        const res = new Array(nums.length).fill(0);

        for(let p = nums.length - 1; p >= 0; p--) {
            if(Math.abs(nums[left])  > Math.abs(nums[right])) {
                res[p] = nums[left] ** 2;
                left++;
            } else {
                res[p] = nums[right] ** 2;
                right--;
            }
        }

        return res;
    }
}
