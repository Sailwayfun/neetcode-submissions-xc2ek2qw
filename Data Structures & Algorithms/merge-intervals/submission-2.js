class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        intervals.sort((a, b) => a[0] - b[0]);

        const res = [intervals[0]];

        for(let i = 1; i < intervals.length; i++) {
            const [start, end] = intervals[i];
            if(start <= res[res.length - 1][1]) {
                res[res.length - 1][1] = Math.max(end,res[res.length - 1][1]);
            } else {
                res.push(intervals[i]);
            }
        }

        return res;
    }
}
