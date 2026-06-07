
class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s) {
        const res = [];

        const n = s.length;

        function isPalindrome(start, end) {
            let i = start;
            let j = end;
            while(i < j) {
                if(s[i] !== s[j]) return false;
                i++;
                j--;
            }
            return true;
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
