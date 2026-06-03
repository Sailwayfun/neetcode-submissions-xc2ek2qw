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

        const dp = Array.from({length: n + 1}, () => new Array(n + 1).fill(false));
        dp[0][0] = true;

        for(let j = 1; j <= m; j++) {
            dp[0][j] = dp[0][j - 1] && (s2[j - 1] === s3[j - 1]);
        }

        for(let i = 1; i <= n; i++) {
            dp[i][0] = dp[i - 1][0] && (s1[i - 1] === s3[i - 1]);
        }

        for(let i = 1; i <= n; i++) {
            for(let j = 1; j <= m; j++) {
                const k = i + j - 1;
                dp[i][j] = (dp[i - 1][j] && s1[i - 1] === s3[k]) || (dp[i][j - 1] && s2[j - 1] === s3[k]);
            }
        }

        return dp[n][m];
    }
}
