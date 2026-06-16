class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {number}
     */
    numDistinct(s, t) {
        const sn = s.length;
        const tn = t.length;

        const cache = Array.from({length: sn + 1}, () => new Array(tn + 1).fill(-1));

        function dfs(i, j) {
            if(i === sn && j < tn) return cache[i][j] = 0;
            if(j === tn) return cache[i][j] = 1;

            if(cache[i][j] !== -1) return cache[i][j];

            let res = dfs(i + 1, j);

            if(s[i] === t[j]) {
                res += dfs(i + 1, j + 1);
            }

            return cache[i][j] = res;
        }

        return dfs(0, 0);
    }
}
