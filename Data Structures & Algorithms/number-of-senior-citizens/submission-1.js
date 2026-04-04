class Solution {
    /**
     * @param {string[]} details
     * @return {number}
     */
    countSeniors(details) {
        let res = 0;

        for(const d of details) {
            const tens = d[11].charCodeAt(0) - "0".charCodeAt(0);
            const ones = d[12].charCodeAt(0) - "0".charCodeAt(0);
            if(tens * 10 + ones > 60) res++;
        }

        return res;
    }
}
