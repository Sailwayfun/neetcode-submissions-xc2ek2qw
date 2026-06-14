class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    maximumOddBinaryNumber(s) {
        const n = s.length;

        let ones = 0;

        for(const char of s) {
            if(char === "1") {
                ones++;
            }
        }

        return "1".repeat(ones - 1) + "0".repeat(n - (ones - 1) - 1) + "1";


    }
}
