class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals, newInterval) {
        const res = [];

        let [newStart, newEnd] = newInterval;

        let i = 0;
        const n = intervals.length;

        while(i < n && intervals[i][1] < newStart) {
            res.push(intervals[i]);
            i++;
        }

        while(i < n && intervals[i][0] <= newEnd) {
            newStart = Math.min(newStart, intervals[i][0]);
            newEnd = Math.max(newEnd, intervals[i][1]);
            i++;
        }

        res.push([newStart, newEnd]);

        while(i < n) {
            res.push(intervals[i]);
            i++;
        }

        return res;
    }
}
