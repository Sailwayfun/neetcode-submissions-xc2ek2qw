class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        function isAlphaNumeric(char) {
            const charCodeA = "a".charCodeAt(0);
            const distance = char.toLowerCase().charCodeAt(0) - charCodeA;
            if(char === " ") return false;
            return (distance >= 0 && distance < 26) || !Number.isNaN(Number(char));
        }

        if(s.trim().length < 2) return true;

        const alphabetArr = s.split("").filter((char) => isAlphaNumeric(char));

        let left = 0;
        let right = alphabetArr.length - 1;

        while(left < right) {
            if(alphabetArr[left].toLowerCase() !== alphabetArr[right].toLowerCase()) return false;
            left++;
            right--;
        }

        return true;
    }
}
