class Solution {
    /**
     * @param {string[]} details
     * @return {number}
     */
    countSeniors(details) {
        let res = 0;

        for(const d of details) {
            const age = `${d[11]}${d[12]}`;
            if(Number(age) > 60) res++;
        }

        return res;
    }
}
