class Solution {
    /**
     * @param {number} n
     * @param {number[][]} trust
     * @return {number}
     */
    findJudge(n, trust) {
        const trustScores = new Array(n + 1).fill(0);

        for(const [a, b] of trust) {
            trustScores[a] = NaN;
            trustScores[b]++;
        }

        for(let i = 1; i <= n; i++) {
            if(trustScores[i] === n - 1) return i;
        }

        return -1;
    }
}
