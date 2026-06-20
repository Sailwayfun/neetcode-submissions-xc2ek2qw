class Solution {
    /**
     * @param {string} s
     * @param {number} minJump
     * @param {number} maxJump
     * @return {boolean}
     */
    canReach(s, minJump, maxJump) {
        const n = s.length;
        const reachable = new Array(n).fill(false);
        reachable[0] = true;

        let maxReach = 0;

        for(let i = 0; i < n; i++) {
            
            if(!reachable[i]) continue;
            
            const start = Math.max(i + minJump, maxReach);
            const end = i + maxJump;

            for(let j = start; j <= end; j++) {
                if(j < n && s[j] === "0") {
                    reachable[j] = true;
                    maxReach = Math.max(maxReach, j);
                }
            }
        }

        return reachable[n - 1];
    }
}
