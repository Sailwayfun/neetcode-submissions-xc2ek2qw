class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        const result = [];

        const [rows, cols] = [heights.length, heights[0].length];
        const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
        const canReachPacific = Array.from({length: rows}, () => new Array(cols).fill(false));
        const canReachAtlantic = Array.from({length: rows}, () => new Array(cols).fill(false));

        for(let i = 0; i < rows; i++) {
            for(let j = 0; j < cols; j++) {
                if(i === 0 || j === 0) {
                    dfs(i, j, canReachPacific);
                }
                if(i === rows - 1 || j === cols - 1) {
                    dfs(i, j, canReachAtlantic);
                }
            }
        }

        function dfs(r, c, canReach) {
            if(canReach[r][c]) return;

            canReach[r][c] = true;
            
            for(const [dr, dc] of directions) {
                if(r + dr < 0 || c + dc < 0 || r + dr >= rows || c + dc >= cols) continue;
                const next = heights[r + dr][c + dc];
                if(next >= heights[r][c]) {
                    dfs(r + dr, c + dc, canReach);
                }
            }

        }

        for(let i = 0; i < rows; i++) {
            for(let j = 0; j < cols; j++) {
                if(canReachPacific[i][j] && canReachAtlantic[i][j]) {
                    result.push([i, j]);
                }
            }
        }


        return result;
    }
}
