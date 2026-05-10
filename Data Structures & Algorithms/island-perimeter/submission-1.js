class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    islandPerimeter(grid) {
        const [rows, cols] = [grid.length, grid[0].length];

        const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
        
        function dfs(r, c) {
            if(r < 0 || c < 0 || r === rows || c === cols || grid[r][c] === 0) {
                return 1;
            }

            if(grid[r][c] === -1) return 0;

            grid[r][c] = -1;

            let p = 0;

            for(const [dr, dc] of directions) {
                p += dfs(r + dr, c + dc);
            }

            return p;
        }
        
        let ans = 0;

        for(let i = 0; i < rows; i++) {
            for(let j = 0; j < cols; j++) {
                if(grid[i][j] === 1) {
                    ans += dfs(i, j);
                }
            }
        }

        return ans;
    }
}
