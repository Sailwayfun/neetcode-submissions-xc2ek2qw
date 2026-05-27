class Solution {
    /**
     * @param {string} text1
     * @param {string} text2
     * @return {number}
     */
    longestCommonSubsequence(text1, text2) {
        const n1 = text1.length;
        const n2 = text2.length;

        const cache = Array.from({length: n1}, () => new Array(n2).fill(-1));
        
        function dfs(index1, index2) {
            if(index1 >= n1 || index2 >= n2) return 0;

            if(cache[index1][index2] !== -1) return cache[index1][index2];

            if(text1[index1] === text2[index2]) {
                return cache[index1][index2] = 1 + dfs(index1 + 1, index2 + 1);
            }

            return cache[index1][index2] = Math.max(dfs(index1 + 1, index2), dfs(index1, index2 + 1));
        }

        return dfs(0, 0);
    }
}
