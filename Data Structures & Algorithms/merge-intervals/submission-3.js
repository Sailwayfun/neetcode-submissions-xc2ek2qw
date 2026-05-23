class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        intervals.sort((a, b) => a[0] - b[0]);

        const res = [intervals[0]];

        for(let i = 1; i < intervals.length; i++) {
            const curr = intervals[i];
            
            if(curr[0] <= res[res.length - 1][1]) {
                const lastAppended = res[res.length - 1];
                lastAppended[1] = Math.max(curr[1],lastAppended[1]);
            } else {
                res.push(curr);
            }
        }

        return res;
    }
}
