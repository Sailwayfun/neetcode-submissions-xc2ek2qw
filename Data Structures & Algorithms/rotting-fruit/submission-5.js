class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        if(!grid || !grid[0]) return -1;
        
        const [rows, cols] = [grid.length, grid[0].length];

        const queue = [];
        
        let freshCount = 0;

        for(let i = 0; i < rows; i++) {
            for(let j = 0; j < cols; j++) {
                if(grid[i][j] === 2) {
                    queue.push([i, j]);
                }
                if(grid[i][j] === 1) {
                    freshCount++;
                }
            }
        }

        let time = -1;

        if(freshCount === 0) return 0;

        const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];

        let head = 0;
        while(head < queue.length) {
            const size = queue.length - head;

            for(let i = 0; i < size; i++) {
                const first = queue[head];
                head++;

                for(const [r, c] of directions) {
                    const nextR = first[0] + r;
                    const nextC = first[1] + c;

                    if(nextR < 0 || nextC < 0 || nextR >= rows || nextC >= cols) continue;

                    if(grid[nextR][nextC] === 1) {
                        freshCount--;
                        grid[nextR][nextC] = 2;
                        queue.push([nextR, nextC]);
                    }
                }
            }

            time++;
        }

        if(freshCount > 0) return -1;

        return time;
    }
}
