class Solution {
    /**
     * @param {string[][]} tickets
     * @return {string[]}
     */
    findItinerary(tickets) {
        const res = [];

        const adjList = new Map();

        for(const t of tickets) {
            if(!adjList.has(t[0])) {
                adjList.set(t[0], []);
            }
            adjList.get(t[0]).push(t[1]);
        }

        for(const [, neighbors] of adjList) {
            neighbors.sort();
        }

        function dfs(node) {
           const neighbors = adjList.get(node);

           while(neighbors && neighbors.length > 0) {
                const nextNode = neighbors.shift();
                dfs(nextNode);
           }

           res.unshift(node);
        }

        dfs("JFK");

        return res;
    }
}
