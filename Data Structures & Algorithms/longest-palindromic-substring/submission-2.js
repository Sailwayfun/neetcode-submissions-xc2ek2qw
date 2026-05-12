class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        let maxLength = 1;
        let startIndex = 0;

        for(let i = 0; i < s.length; i++) {
            let currLength = 1;
            let left = i - 1;
            let right = i + 1;
            while(left >= 0 && right < s.length) {
                if(s[left] === s[right]) {
                    currLength += 2;
                    left -= 1;
                    right += 1;
                } else break;
            }

            if(currLength > maxLength) {
                maxLength = currLength;
                startIndex = left + 1;
            }
        }

        for(let i = 0; i < s.length; i++) {
            let currLength = 0;
            let left = i;
            let right = i + 1;
            while(left >= 0 && right < s.length) {
                if(s[left] === s[right]) {
                    currLength += 2;
                    left -= 1;
                    right += 1;
                } else break;
            }

            if(currLength > maxLength) {
                maxLength = currLength;
                startIndex = left + 1;
            }
        }

        return s.slice(startIndex, startIndex + maxLength);
    }
}
