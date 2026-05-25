class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits) {
        if(digits.length === 0) return [];

        const res = [];
        
        const table = {
            "2": "abc",
            "3": "def",
            "4": "ghi",
            "5": "jkl",
            "6": "mno",
            "7": "pqrs",
            "8": "tuv",
            "9": "wxyz"
        }

        function backtrack(index, currStr) {
            if(currStr.length === digits.length) {
                res.push(currStr);
                return;
            }
            const currDigit = digits[index];
            for(let i = 0; i < table[currDigit].length; i++) {
                const currChar = table[currDigit][i];
                backtrack(index + 1, currStr + currChar);
            }
        }

        backtrack(0, "");

        return res;
    }
}
