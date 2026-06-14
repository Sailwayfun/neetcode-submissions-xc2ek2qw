class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    maximumOddBinaryNumber(s) {
        const n = s.length;

        let dest = 0;
        const stringArr = s.split("");

        for(let i = 0; i < n; i++) {
            if(stringArr[i] === "1") {
                [stringArr[i], stringArr[dest]] = [stringArr[dest], stringArr[i]];
                dest++;
            }
        }

        [stringArr[n - 1], stringArr[dest - 1]] = [stringArr[dest - 1], stringArr[n - 1]];

        return stringArr.join("");


    }
}
