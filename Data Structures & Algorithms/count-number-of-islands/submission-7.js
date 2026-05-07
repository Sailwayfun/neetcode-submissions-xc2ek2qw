class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        const rows = grid.length;
        const cols = grid[0].length;
        let oneCount = 0;

        for(let i = 0; i < rows; i++) {
            for(let j = 0; j < cols; j++) {
                if(grid[i][j] === "1") oneCount++;
            }
        }

        const unionFind = new UnionFind(rows * cols, oneCount);

        for(let i = 0; i < rows; i++) {
            for(let j = 0; j < cols; j++) {
                if(grid[i][j] === "1") {
                    if(j + 1 < cols && grid[i][j + 1] === "1") {
                        unionFind.union(cols * i + j, cols * i + j + 1);
                    }
                    if(i + 1 < rows && grid[i + 1][j] === "1") {
                        unionFind.union(cols * i + j, cols * (i + 1) + j);
                    }
                }
            }
        }

        return unionFind.count;
    }
}

class UnionFind {
    constructor(totalCount, oneCount) {
        this.parent = Array.from({length: totalCount}, (_, i) => i);
        this.count = oneCount;
    }

    find(index) {
        if(this.parent[index] === index) return index;
        this.parent[index] = this.find(this.parent[index]);
        return this.parent[index];
    }

    union(i, j) {
        let rootI = this.find(i);
        let rootJ = this.find(j);
        if(this.parent[rootI] !== rootJ) {
            this.parent[rootI] = rootJ;
            this.count--;
        }
    }
}
