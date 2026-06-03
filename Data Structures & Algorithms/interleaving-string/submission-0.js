class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @param {string} s3
     * @return {boolean}
     */
    isInterleave(s1, s2, s3) {
        const n = s1.length;
        const m = s2.length;
        const p = s3.length;

        if(n + m !== p) return false;

        const cache = Array.from({length: n + 1}, () => new Array(m + 1).fill(null));

        function dfs(i, j) {
            const k = i + j;
            if(k >= p) return true;

            if(cache[i][j] !== null) return cache[i][j];

            if(s1[i] === s3[k]) {
                if(dfs(i + 1, j) === true) {
                    return cache[i][j] = true;
                }
            }
            if(s2[j] === s3[k]) {
                if(dfs(i, j + 1) === true) {
                    return cache[i][j] = true;
                }
            }
            return false;
        }

        return dfs(0, 0);
    }
}
