class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        let count = 0;

        for(let i = 0; i < grid.length; i++) {
            for(let j = 0; j < grid[0].length; j++) {
                if(grid[i][j] === "1") {
                    count++;
                    dfs(i, j);
                }
            }
        }

        function dfs(i, j) {
            if(i >= grid.length || i < 0 || j >= grid[0].length || j < 0) {
                return;
            }
            if(grid[i][j] === "0") return;

            grid[i][j] = "0";

            dfs(i + 1, j);
            dfs(i - 1, j);
            dfs(i, j + 1);
            dfs(i, j - 1);
        }

        return count;
    }
}
