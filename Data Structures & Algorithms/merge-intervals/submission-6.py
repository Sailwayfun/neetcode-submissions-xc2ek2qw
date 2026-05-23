class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        if not intervals: return []
        sorted_intervals = sorted(intervals)

        res = [sorted_intervals[0]]

        for i in range(1, len(sorted_intervals)):
            curr = sorted_intervals[i]
            last_appended = res[-1]

            if(curr[0] <= last_appended[1]):
                last_appended[1] = max(curr[1], last_appended[1])
            else:
                res.append(curr)
        return res
        