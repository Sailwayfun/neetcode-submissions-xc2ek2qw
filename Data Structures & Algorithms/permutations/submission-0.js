class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        const res = [];
        const chosen = new Array(nums.length).fill(false);

        function backtrack(permutation) {
            if(permutation.length === nums.length) {
                res.push([...permutation]);
                return;
            }
            
            for(let i = 0; i < nums.length; i++) {
                if(chosen[i] === false) {
                    permutation.push(nums[i]);
                    chosen[i] = true;
                    
                    backtrack(permutation);
                    
                    permutation.pop();
                    chosen[i] = false;
                }
            }
        }

        backtrack([]);
        return res;
    }
}
