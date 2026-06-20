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

        let maxChecked = 0;

        for(let i = 0; i < n; i++) {
            
            if(!reachable[i]) continue;
            
            const start = Math.max(i + minJump, maxChecked);
            const end = i + maxJump;

            for(let j = start; j <= end; j++) {
                if(j < n && s[j] === "0") {
                    reachable[j] = true;
                }
                maxChecked = Math.max(maxChecked, j);
            }
        }

        return reachable[n - 1];
    }
}
