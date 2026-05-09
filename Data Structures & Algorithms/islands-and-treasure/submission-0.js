class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        const [rows, cols] = [grid.length, grid[0].length];

        const INF = 2147483647;
        
        const queue = [];
        let head = 0;
        function bfs() {
            while(head < queue.length) {
                const [row, col] = queue[head];
                head++;
                
                const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];

                for(const [r, c] of directions) {
                   const nextR = row + r;
                   const nextC = col + c;

                   if(nextR < 0 || nextC < 0 || nextR >= rows || nextC >= cols) continue;

                   const nextVal = grid[nextR][nextC];
                   if(nextVal === INF) {
                        grid[nextR][nextC] = grid[row][col] + 1;
                        queue.push([nextR, nextC]);
                   }
                }
            }
        }

        for(let i = 0; i < rows; i++) {
            for(let j = 0; j < cols; j++) {
                if(grid[i][j] === 0) {
                    queue.push([i, j]);
                }
            } 
        }

        bfs();
        
    }
}
