class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        const rows = grid.length;
        const cols = grid[0].length;

        let count = 0;

        for(let i = 0; i < rows; i++) {
            for(let j = 0; j < cols; j++) {
                if(grid[i][j] === "1") {
                    count++;
                    
                    grid[i][j] = 0;
                    const queue = [[i, j]];

                    while(queue.length > 0) {
                        const [currI, currJ] = queue.shift();
                        const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];

                        for(const [dI, dJ] of directions) {
                            const nextI = currI + dI;
                            const nextJ = currJ + dJ;

                            if(nextI >= 0 && nextJ >= 0 && nextI < rows && nextJ < cols && grid[nextI][nextJ] === "1") {
                                grid[nextI][nextJ] = 0;
                                queue.push([nextI, nextJ]);
                            }
                        }
                    }
                }
            }
        }

        return count;
    }
}
