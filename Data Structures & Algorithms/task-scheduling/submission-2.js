class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {
        const freq = new Map();

        let maxFreq = 0;

        for(const t of tasks) {
            const curr = (freq.get(t) || 0) + 1;
            freq.set(t, curr);

            maxFreq = Math.max(maxFreq, curr);
        }

        let maxCount = 0;
        for(const f of freq.values()) {
            if(f === maxFreq) {
                maxCount++;
            }
        }

        const parts = (maxFreq - 1) * (n + 1);

        return Math.max(tasks.length, parts + maxCount);
    }
}
