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

        const combination = [];
        function backtrack(index) {
            if(index === digits.length) {
                res.push(combination.join(""));
                return;
            }
            const currDigit = digits[index];
            for(let i = 0; i < table[currDigit].length; i++) {
                const currChar = table[currDigit][i];
                combination.push(currChar);
                backtrack(index + 1);
                combination.pop();
            }
        }

        backtrack(0);

        return res;
    }
}
