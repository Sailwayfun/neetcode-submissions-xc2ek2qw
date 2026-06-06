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
     * @returns {number}
     */
    minMeetingRooms(intervals) {
        const n = intervals.length;

        if(n <= 1) return n;


        let res = 0;
        let count = 0;

        let s = 0;
        let e = 0;

        const starts = intervals.map((i) => i.start).sort((a, b) => a - b);
        const ends = intervals.map((i) => i.end).sort((a, b) => a - b);

        while(s < n && e < n) {
            if(starts[s] < ends[e]) {
                count++;
                s++;
                res = Math.max(res, count);
            } else {
                count--;
                e++;
            }
        }

        return res;
    }
}
