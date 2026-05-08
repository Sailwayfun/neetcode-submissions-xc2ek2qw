class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        const adjacentList = new Map();

        for(const [a, b] of prerequisites) {
            if(!adjacentList.has(a)) {
                adjacentList.set(a, []);
            }
            adjacentList.get(a).push(b);
        }

        const status = new Array(numCourses).fill(0);

        for(let i = 0; i < numCourses; i++) {
           if(!dfs(i, status)) return false;
        }

        function dfs(currNode, status) {
           if(status[currNode] === 2) {
                return true;
           }
           if(status[currNode] === 1) return false;

           status[currNode] = 1;

           const nextNodes = adjacentList.get(currNode) || [];

           for(const n of nextNodes) {
                if(!dfs(n, status)) return false;
           }

           status[currNode] = 2;
           return true;
        }

        return true;
    }
}
