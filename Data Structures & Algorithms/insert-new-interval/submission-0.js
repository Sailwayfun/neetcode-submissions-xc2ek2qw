class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals, newInterval) {
        const res = [];

        let [newStart, newEnd] = newInterval;

        for(let i = 0; i < intervals.length; i++) {
            const [currStart, currEnd] = intervals[i];
            
            if(currEnd < newStart) {
                res.push([currStart, currEnd]);
            } else if(currStart > newEnd) {
                res.push([newStart, newEnd]);
                res.push(...intervals.slice(i));
                return res;
            } else {
                newStart = Math.min(newStart, currStart);
                newEnd = Math.max(newEnd, currEnd);
            }
        }

        res.push([newStart, newEnd]);

        return res;
    }
}
