class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const res = [];
        const length = nums.length;

        function backtrack(index, sum, path) {
            //base case
            if(index >= length || sum > target) {
                return;
            }
            if(sum === target) {
                res.push([...path]);
                return;
            }

            //binary decision tree

            //#branch that includes curr index
            path.push(nums[index]);
            backtrack(index, sum + nums[index], path);

            //#branch that NOT include curr index
            path.pop();
            backtrack(index + 1, sum, path);
        }

        backtrack(0, 0, []);
        return res;
    }
}
