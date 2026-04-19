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
            if(index === nums.length) {
                res.push([...subset]);
                return;
            }

            //binary decision tree

            //path that uses current index
            subset.push(nums[index]);
            backtrack(index + 1, subset);

            //path that does NOT use current index, skip duplicate
            subset.pop();
            let next = index + 1;
            while(nums[index] === nums[next]) {
                next++;
            }
            backtrack(next, subset);
        }

        backtrack(0, []);

        return res;

    }
}
