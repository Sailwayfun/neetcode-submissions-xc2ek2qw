class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s) {
        if(s[0] === "0") return 0;

        const n = s.length;
        const dp = new Array(n + 1).fill(0);

        dp[0] = 1;
        dp[1] = 1;

        for(let i = 2; i <= n; i++) {
            if(s[i - 1] !== "0") {
                dp[i] += dp[i - 1];
            }
            
            const twoDigits = Number(s[i - 1]) + Number(s[i - 2]) * 10;
            if(twoDigits >= 10 && twoDigits <= 26) {
                dp[i] += dp[i - 2];
            }
        }

        return dp.pop();
    }
}
