class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeightII(stones) {
        const sum = stones.reduce((a, b) => a + b, 0);
        const target = Math.floor(sum / 2);

        const dp = new Array(target + 1).fill(false);
        dp[0] = true;

        for(let i = 0; i < stones.length; i++) {
            const stone = stones[i];
            for(let j = target; j >= stone; j--) {
                dp[j] = dp[j] || dp[j - stone];
            }
        }

        for(let k = target; k >= 0; k--) {
            if(dp[k] === true) {
                return sum - 2 * k;
            }
        }
    }
}