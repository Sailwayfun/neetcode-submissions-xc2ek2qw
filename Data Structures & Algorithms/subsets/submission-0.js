class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        const res = [];

        function build(index, subset) {
            if(index === nums.length) {
                res.push([...subset]);
                return;
            }

            subset.push(nums[index]);
            build(index + 1, subset);
            subset.pop();

            build(index + 1, subset);
        }

        build(0, []);

        return res;
    }
}
