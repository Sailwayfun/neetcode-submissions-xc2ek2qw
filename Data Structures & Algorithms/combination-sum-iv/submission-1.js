class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    combinationSum4(nums, target) {
        const cache = new Array(target + 1);
        
        function combinationSum(sum) {
            if(sum === target) return 1;
            if(sum > target) return 0;

            if(cache[sum]) return cache[sum];

            let res = 0;
            for(const num of nums) {
                res += combinationSum(sum + num);
            }

            cache[sum] = res;

            return res;
        }

        return combinationSum(0);
    }
    //
    //0 -> 1 -> 2 or 4 or 3. -> 3 or 4 or 4
    // 0 -> 3 -> 4 or 6 or 5
    // 0 -> 2 --> 3 or 5 or 4
}
