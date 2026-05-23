class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number}
     */
    eraseOverlapIntervals(intervals) {
        const n = intervals.length;

        if(n <= 1) return 0;

        intervals.sort((a, b) => a[0] - b[0]);

        let prevEnd = intervals[0][1];

        let removeCount = 0;

        for(let i = 1; i < n; i++) {
            const curr = intervals[i];

            if(curr[0] >= prevEnd) {
                prevEnd = curr[1];
            } else {
                prevEnd = Math.min(curr[1], prevEnd);
                removeCount++;
            }
        }

        return removeCount;
    }
}
