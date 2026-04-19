class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const res = [];
        const length = nums.length;

        function dfs(index, sum, path) {
            if(sum > target) return;
            if(sum === target) {
                res.push([...path]);
                return;
            }

            for(let i = index; i < length; i++) {
                path.push(nums[i]);

                dfs(i, sum + nums[i], path);

                path.pop();
            }
        }

        dfs(0, 0, []);

        return res;
    }
}
