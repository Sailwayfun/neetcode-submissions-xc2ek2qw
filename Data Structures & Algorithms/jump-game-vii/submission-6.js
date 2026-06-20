class Solution {
    /**
     * @param {string} s
     * @param {number} minJump
     * @param {number} maxJump
     * @return {boolean}
     */
    canReach(s, minJump, maxJump) {
        const n = s.length;
        const queue = [0];
        let farthest = 0;

        let head = 0;
        while(head < queue.length) {
            const i = queue[head];
            head++;

            const start = Math.max(i + minJump, farthest + 1);
            const end = Math.min(i + maxJump, n - 1);

            for(let j = start; j <= end; j++) {
                if(s[j] === "0") {
                    queue.push(j);
                    if(j === n - 1) return true;
                }
            }

            farthest = end;
        }

        return false;
    }
}
