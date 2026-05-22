class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        const uf = new UnionFind(n);

        for(const [a, b] of edges) {
            uf.union(a, b);
        }

        return uf.count;
    }
}

class UnionFind {
    constructor(size) {
        this.parent = Array.from({length: size}, (_, i) => i);
        this.count = size;
        this.rank = new Array(size).fill(0);
    }

    find(i) {
        if(this.parent[i] !== i) this.parent[i] = this.find(this.parent[i]);
        return this.parent[i];
    }

    union(i, j) {
        const rootI = this.find(i);
        const rootJ = this.find(j);

        if(rootI !== rootJ) {
            if(this.rank[rootI] > this.rank[rootJ]) {
                this.parent[rootJ] = rootI;
            } else if(this.rank[rootJ] > this.rank[rootI]) {
                this.parent[rootI] = rootJ;
            } else {
                this.parent[rootJ] = rootI;
                this.rank[rootI]++;
            }

            this.count--;
        }


    }
}
