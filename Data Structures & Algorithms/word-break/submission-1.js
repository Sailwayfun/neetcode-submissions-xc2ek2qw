class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s, wordDict) {
        const cache = [];

        function dfs(index) {
            if(index === s.length) return true;

            if(cache[index] !== undefined) return cache[index];

            let res = false;

            for(let i = 0; i < wordDict.length; i++) {
                const substr = s.slice(index, index + wordDict[i].length);
                
                if(substr === wordDict[i]) {
                    res = dfs(index + wordDict[i].length);
                    if(res) return cache[index] = res;
                }
            }

            return cache[index] = res;
        }

        return dfs(0);
    }
}
