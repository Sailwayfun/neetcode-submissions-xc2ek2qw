class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s) {
        function isPalindrome(s, i, j) {
            while(i < j) {
                if(s[i] !== s[j]) return false;
                i++;
                j--;
            }
            return true;
        }

        let left = 0;
        let right = s.length - 1;

        while(left < right) {
            if(s[left] !== s[right]) {
                return isPalindrome(s, left+1, right) || isPalindrome(s, left, right - 1);
            }
            left++;
            right--;
        }

        return true;

    }
}
