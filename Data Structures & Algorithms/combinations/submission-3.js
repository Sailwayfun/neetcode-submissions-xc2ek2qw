class Solution {
    /**
     * @param {number} n
     * @param {number} k
     * @return {number[][]}
     */
    combine(n, k) {
        const res = [];

        function backtrack(num, combination) {
            if(combination.length === k) {
                res.push([...combination]);
                return;
            }

            for(let i = num; i <= n; i++) {
                if(n - i + 1 < k - combination.length) return;
                combination.push(i);
                backtrack(i + 1, combination);
                combination.pop();
            }
        }

        backtrack(1, []);

        return res;
    }
}
