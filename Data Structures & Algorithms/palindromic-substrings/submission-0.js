class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {
        const n = s.length;

        let count = n;

        function buildPalindrome(l, r) {
            while(l >= 0 && r < n) {
                if(s[l] === s[r]) {
                    count++;
                    l--;
                    r++;
                } else break;
            }
        }

        for(let i = 1; i <= n; i++) {
            const currIndex = i - 1;
            buildPalindrome(currIndex, currIndex + 1);
            buildPalindrome(currIndex - 1, currIndex + 1);
        }

        return count;
    }
}

//palindromic substring length 1 - s.length
