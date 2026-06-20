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

        for(let i = 0; i < n; i++) {
            
            if(!reachable[i]) continue;
            
            for(let j = minJump; j <= maxJump; j++) {
                const dest = i + j;
                if(dest < n && s[dest] === "0" && !reachable[dest]) {
                    reachable[dest] = true;
                }
            }
        }

        return reachable[n - 1];
    }
}
