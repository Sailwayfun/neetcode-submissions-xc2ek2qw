class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        candidates.sort((a, b) => a - b);

        const res = [];

        const combination = [];

        function backtrack(index, sum) {

            if(sum === target) {
                res.push([...combination]);
                return;
            }

            if(sum > target) return;

            for(let i = index; i < candidates.length; i++) {
                if(i > index && candidates[i] === candidates[i - 1]) {
                    continue;
                }

                combination.push(candidates[i]);
                backtrack(i + 1, sum + candidates[i]);
                combination.pop();
            }
        }

        backtrack(0, 0);

        return res;
    }
}
