class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
        const res = [];

        const n = nums.length;
        const threshold = n / 3;

        let num1 = 0;
        let num2 = 1;
        let count1 = 0;
        let count2 = 0;

        for(const num of nums) {
            if(num === num1) {
                count1++;
            } else if(num === num2) {
                count2++;
            } else if(count1 === 0) {
                num1 = num;
                count1 = 1;
            } else if(count2 === 0) {
                num2 = num;
                count2 = 1;
            } else {
                count1--;
                count2--;
            }
        }

        count1 = 0;
        count2 = 0;

        for(const num of nums) {
            if(num === num1) {
                count1++;
            } else if(num === num2) {
                count2++;
            }
        }

        if(count1 > threshold) {
            res.push(num1);
        } 
        if(count2 > threshold) {
            res.push(num2);
        }

        return res;
    }
}
