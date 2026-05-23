class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        if(intervals.length === 0) return [];

        intervals.sort((a, b) => a[0] - b[0]);

        const res = [intervals[0]];

        for(let i = 1; i < intervals.length; i++) {
            const curr = intervals[i];
            const lastAppended = res[res.length - 1];
            
            if(curr[0] <= lastAppended[1]) {
                lastAppended[1] = Math.max(curr[1],lastAppended[1]);
            } else {
                res.push(curr);
            }
        }

        return res;
    }
}
