class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {number}
     */
    minDistance(word1, word2) {
        const n1 = word1.length;
        const n2 = word2.length;

        const cache = Array.from({length: n1 + 1}, () => new Array(n2 + 1).fill(-1));

        function dfs(i, j) {
            if(cache[i][j] !== -1) return cache[i][j];
            
            if(i === n1) return cache[i][j] = n2 - j;
            if(j === n2) return cache[i][j] = n1 - i;

            if(word1[i] !== word2[j]) {
                return cache[i][j] = 1 + Math.min(dfs(i, j + 1), dfs(i + 1, j), dfs(i + 1, j + 1));
            }
            return cache[i][j] = dfs(i + 1, j + 1);
        }

        return dfs(0, 0);
    }
}
