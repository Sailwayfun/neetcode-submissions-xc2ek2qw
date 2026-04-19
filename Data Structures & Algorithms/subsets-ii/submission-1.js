class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        nums.sort((a, b) => a - b);// sort the input to be able to skip duplicates;

        const res = [];

        function backtrack(index, subset) {
            //base case
            res.push([...subset]);
        
            for(let i = index; i < nums.length; i++) {
                if(i > index && nums[i] === nums[i - 1]) continue;

                subset.push(nums[i]);
                backtrack(i + 1, subset);
                subset.pop(nums[i]);
            }
        }

        backtrack(0, []);

        return res;

    }
}
