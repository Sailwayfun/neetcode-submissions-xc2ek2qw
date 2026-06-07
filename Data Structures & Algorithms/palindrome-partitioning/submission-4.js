
class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s) {
        const res = [];

        const n = s.length;

        const cache = Array.from({length: n}, () => new Array(n).fill(null));

        function isPalindrome(start, end) {
            if(cache[start][end] !== null) {
                return cache[start][end];
            }

            if(start === end) {
                return cache[start][end] = true;
            }

            let i = start;
            let j = end;
            while(i < j) {
                if(s[i] !== s[j]) {
                    return cache[i][j] = false;
                }
                i++;
                j--;
            }

            return cache[start][end] = true;
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
