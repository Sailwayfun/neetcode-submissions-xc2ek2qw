class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s, wordDict) {
        const n = s.length;
        const dp = new Array(n + 1).fill(false);
        dp[0] = true;

        for(let i = 1; i <= n; i++) {
            const idx = i - 1;
            
            for(let j = 0; j < wordDict.length; j++) {
                const len = wordDict[j].length;
                if(i < len) continue;

                if(s.slice(i - len, i) === wordDict[j] && dp[i - len] === true) {
                    dp[i] = true;
                }
            }
        }

        return dp.pop() === true;
    }
}
