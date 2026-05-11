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
            dfs(i, 0, canReachPacific);
            dfs(i, cols - 1, canReachAtlantic);
        }

        for(let j = 0; j < cols; j++) {
            dfs(0, j, canReachPacific);
            dfs(rows - 1, j, canReachAtlantic);
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
