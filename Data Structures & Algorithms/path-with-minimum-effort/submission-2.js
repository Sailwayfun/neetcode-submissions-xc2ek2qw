class Solution {
    /**
     * @param {number[][]} heights
     * @return {number}
     */
    minimumEffortPath(heights) {
        const rows = heights.length;
        const cols = heights[0].length;

        const minEffort = Array.from({length: rows}, () => new Array(cols).fill(Infinity));

        const queue = [[0, 0, 0]]// r, c, min effort to get to (r, c)

        const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];

        while(queue.length > 0) {
            queue.sort((a, b) => a[2] - b[2]);

            const [i, j, currEffort] = queue.shift();

            if(i === rows - 1 && j === cols - 1) return currEffort;

            if(currEffort > minEffort[i][j]) continue;

            for(const [di, dj] of directions) {
                const newR = i + di;
                const newC = j + dj;

                if(newR < 0 || newC < 0 || newR === rows || newC === cols) continue;

                const nextEffort = Math.max(currEffort, Math.abs(heights[i][j] - heights[newR][newC]));

                if(nextEffort < minEffort[newR][newC]) {
                    minEffort[newR][newC] = nextEffort;
                    queue.push([newR, newC, nextEffort]);
                }
            }
        }
    }
}
