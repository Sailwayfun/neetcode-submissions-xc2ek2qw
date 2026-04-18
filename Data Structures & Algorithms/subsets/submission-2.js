class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        const res = [];

        const subset = [];
        function build(index) {
            if(index === nums.length) {
                res.push([...subset]);
                return;
            }

            subset.push(nums[index]);
            build(index + 1);
            
            subset.pop();
            build(index + 1);
        }

        build(0);

        return res;
    }
}
