
class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s) {
        const res = [];

        const n = s.length;

        const dp = Array.from({length: n}, () => new Array(n).fill(false));

        for(let i = n - 1; i >= 0; i--) {
            for(let j = i; j < n; j++) {
                if(s[i] === s[j]) {
                    if(j - i <= 2) {
                        dp[i][j] = true;
                    } else {
                        dp[i][j] = dp[i + 1][j - 1];
                    }
                }
            }
        }

        function isPalindrome(start, end) {
            return dp[start][end];
        }

        const path = [];

        function backtrack(startIdx) {
            if(startIdx === n) {
                res.push([...path]);
                return;
            }

            for(let i = startIdx; i < n; i++) {
                if(isPalindrome(startIdx, i)) {
                    path.push(s.slice(startIdx, i + 1));
                    backtrack(i + 1);
                    path.pop();
                }
            }
        }
        

        backtrack(0);

        return res;
    }
}
