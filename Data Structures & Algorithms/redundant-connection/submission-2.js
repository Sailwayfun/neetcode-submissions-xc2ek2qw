class Solution {
    /**
     * @param {number[][]} edges
     * @return {number[]}
     */
    findRedundantConnection(edges) {
        const n = edges.length;

        const parent = new Array(n + 1);
        for(let i = 0; i <= n; i++) {
            parent[i] = i;
        }

        const rank = new Array(n + 1).fill(0);

        function find(i) {
            if(parent[i] !== i) {
                parent[i] = find(parent[i]);
            }
            return parent[i];
        }

        for(const e of edges) {
            const [i, j] = e;
            const rootI = find(i);
            const rootJ = find(j);

            if(rootI === rootJ) return e;

            if(rank[rootI] > rank[rootJ]) {
                parent[rootJ] = rootI;
            } else if(rank[rootJ] > rank[rootI]) {
                parent[rootI] = rootJ;
            } else {
                parent[rootJ] = rootI;
                rank[i]++;
            }
        }
    }
}
