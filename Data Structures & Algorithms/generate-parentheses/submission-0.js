class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        const res = [];

        function backtrack(curr, open, close) {
            if(close > open || open > n) return;
            if(curr.length === 2 * n) {
                res.push([...curr].join(""));
                return;
            }

            curr.push("(");
            backtrack(curr, open + 1, close);

            curr.pop();
            
            curr.push(")");
            backtrack(curr, open, close + 1);

            curr.pop();
        }

        backtrack([], 0, 0);

        return res;
    }
}
