/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {boolean}
     */
    canAttendMeetings(intervals) {
        const n = intervals.length;

        if(n <= 1) return true;

        intervals.sort((a, b) => a.end - b.end);

        let prevEnd = intervals[0].end;

        for(let i = 1; i < n; i++) {
            const curr = intervals[i];
            if(curr.start < prevEnd) return false;
            prevEnd = curr.end;
        }

        return true;
    }
}
