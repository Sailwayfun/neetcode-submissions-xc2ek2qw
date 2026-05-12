class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        let maxLength = 1;
        let startIndex = 0;

        function buildPalindrome(l, r) {
            while(l >= 0 && r < s.length) {
                if(s[l] === s[r]) {
                    l -= 1;
                    r += 1;
                } else break;
            }

            const currLength = r - l - 1;
            if(currLength > maxLength) {
                startIndex = l + 1;
                maxLength = currLength;
            }
        }

        for(let i = 0; i < s.length; i++) {
            buildPalindrome(i - 1, i + 1);
            buildPalindrome(i, i + 1);
        }

        return s.slice(startIndex, startIndex + maxLength);
    }
}
