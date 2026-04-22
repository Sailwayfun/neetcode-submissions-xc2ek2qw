class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        const res = [];

        function backtrack(curr, open, close) {
            if(curr.length === 2 * n) {
                res.push([...curr].join(""));
                return;
            }

            if(open < n) {
                curr.push("(");
                backtrack(curr, open + 1, close);
                curr.pop();
            }

            if(close < open) {
                curr.push(")");
                backtrack(curr, open, close + 1);
                curr.pop();
            }
        }

        backtrack([], 0, 0);

        return res;
    }
}
