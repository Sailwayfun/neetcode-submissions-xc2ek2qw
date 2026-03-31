class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        // const seen  = new Set();
        // for(let i = 0; i < nums.length; i++) {
        //     if(seen.has(nums[i])) return nums[i];
        //     seen.add(nums[i]);
        // }
        let slow = nums[0];
        let fast = nums[0];

        while(fast) {
            slow = nums[slow];
            fast = nums[nums[fast]];
            if(slow === fast) break;
        }

        slow = nums[0];

        while(slow !== fast) {
            slow = nums[slow];
            fast = nums[fast];
        }

        return slow;
    }
}
