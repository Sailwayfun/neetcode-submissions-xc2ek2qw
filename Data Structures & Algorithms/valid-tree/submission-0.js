class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        const adjList = Array.from({length: n}, () => []);

        for(const [a, b] of edges) {
            adjList[a].push(b);
            adjList[b].push(a);
        }

        const visited = new Set();

        function dfs(node, parent) {
            if(visited.has(node)) return false;

            visited.add(node);

            for(const n of adjList[node]) {
                if(n === parent) continue;
                if(dfs(n, node) === false) {
                    return false;
                }
            }

            return true;
        }

        if(dfs(0, -1) === false) return false;

        return visited.size === n;
    }
}
