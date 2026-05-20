class Solution {
    /**
     * @param {number} n
     * @param {number[][]} trust
     * @return {number}
     */
    findJudge(n, trust) {
       const trustMap = Array.from({length: n + 1}, () => [0, 0]);

       for(const [a, b] of trust) {
            trustMap[a][0]++;
            trustMap[b][1]++;
       }

       for(let i = 1; i <= n; i++) {
            if(trustMap[i][0] === 0 && trustMap[i][1] === n - 1) {
                return i;
            }
       }

       return -1;
    }
}
