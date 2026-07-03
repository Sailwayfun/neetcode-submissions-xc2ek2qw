class Solution {
    /**
     * @param {string} S
     * @return {number[]}
     */
    partitionLabels(S) {
        const lastIndexMap = new Map();
        const res = [];

        for(let i = 0; i < S.length; i++) {
            const char = S[i];
            lastIndexMap.set(char, i);
        }

        let start = 0;
        let end = 0;
        for(let j = 0; j < S.length; j++) {
            const char = S[j];
            const lastIndexOfChar = lastIndexMap.get(char);
            end = Math.max(end, lastIndexOfChar);

            if(j >= end) {
                const size = end - start + 1;
                res.push(size);
                start = j + 1;
            }
        }

        return res;
    }
}
