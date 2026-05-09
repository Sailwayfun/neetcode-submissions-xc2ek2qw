class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        const rows = grid.length;
        const cols = grid[0].length;

        const uf = new UnionFind(rows, cols);

        for(let i = 0; i < rows; i++) {
            for(let j = 0; j < cols; j++) {
                const currIndex = i * cols + j;
                if(grid[i][j] === 1) {
                    if(i + 1 < rows && grid[i+1][j] === 1) {
                        const rightIndex = (i + 1) * cols + j;
                        uf.union(currIndex, rightIndex);
                    }
                    if(j + 1 < cols && grid[i][j + 1] === 1) {
                        const bottomIndex = i * cols + j + 1;
                        uf.union(currIndex, bottomIndex);
                    }
                } else {
                    uf.sizes[currIndex] = 0;
                }
            }
        }

        return Math.max(...uf.sizes);
    }
}

class UnionFind {
    constructor(rows, cols) {
        this.parent = Array.from({length: rows * cols}, (_, i) => i);
        this.sizes = new Array(rows * cols).fill(1);
    }

    find(i) {
        if(this.parent[i] === i) return i;
        return this.parent[i] = this.find(this.parent[i]);
    }

    union(i, j) {
        const rootI = this.find(i);
        const rootJ = this.find(j);
        if(rootI !== rootJ) {
            this.parent[rootI] = rootJ;
            this.sizes[rootJ] += this.sizes[rootI];
        }
    }
}
