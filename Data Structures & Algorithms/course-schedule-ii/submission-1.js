class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
        const order = [];

        const indegree = new Array(numCourses).fill(0);
        const adj = Array.from({length: numCourses}, () => []);

        for(const [child, parent] of prerequisites) {
            indegree[child]++;
            adj[parent].push(child);
        }

        const queue = [];
        for(const node in indegree) {
            if(indegree[node] === 0) {
                queue.push(node);
                order.push(node);
            }
        }

        while(queue.length > 0) {
            const curr = queue.shift();
            for(const child of adj[curr]) {
                indegree[child]--;
                if(indegree[child] === 0) {
                    order.push(child);
                    queue.push(child);
                }
            }
        }

        return order.length === numCourses ? order : [];
    }
}
