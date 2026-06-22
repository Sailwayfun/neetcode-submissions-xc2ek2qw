class Solution {
    /**
     * @param {number[][]} heights
     * @return {number}
     */
    minimumEffortPath(heights) {
        const rows = heights.length;
        const cols = heights[0].length;

        const minEffort = Array.from({length: rows}, () => new Array(cols).fill(Infinity));
        minEffort[0][0] = 0;

        const minHeap = new MinPriorityQueue((cell) => cell[2]);

        minHeap.enqueue([0, 0, 0]);

        const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];

        while(minHeap.size() > 0) {
            const [i, j, currEffort] = minHeap.dequeue();

            if(i === rows - 1 && j === cols - 1) return currEffort;

            if(currEffort > minEffort[i][j]) continue;

            for(const [di, dj] of directions) {
                const newR = i + di;
                const newC = j + dj;

                if(newR < 0 || newC < 0 || newR === rows || newC === cols) continue;

                const nextEffort = Math.max(currEffort, Math.abs(heights[i][j] - heights[newR][newC]));

                if(nextEffort < minEffort[newR][newC]) {
                    minEffort[newR][newC] = nextEffort;
                    minHeap.enqueue([newR, newC, nextEffort]);
                }
            }
        }
    }
}
