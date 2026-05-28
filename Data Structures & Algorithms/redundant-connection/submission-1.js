class Solution {
    /**
     * @param {number[][]} edges
     * @return {number[]}
     */
    findRedundantConnection(edges) {
        const n = edges.length;
        const uf = new UnionFind(n);

        for(const e of edges) {
            if(uf.union(e[0], e[1]) === false) {
                return e;
            }
        }
    }
}

class UnionFind {
    constructor(n) {
        this.parent = Array.from({length: n + 1}, (_, i) => i);
        this.rank = new Array(n + 1).fill(0);
    }

    find(i) {
        if(this.parent[i] !== i) this.parent[i] = this.find(this.parent[i]);
        return this.parent[i];
    }

    union(i, j) {
        const rootI = this.find(i);
        const rootJ = this.find(j);

        if(rootI === rootJ) return false;
       
        if(this.rank[rootI] > this.rank[rootJ]) {
            this.parent[rootJ] = rootI;
        } else if(this.rank[rootJ] > this.rank[rootI]) {
            this.parent[rootI] = rootJ;
        } else {
            this.parent[rootJ] = rootI;
            this.rank[rootI]++; 
        }

        return true;
        
    }
}
