class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        const graph = new Map();
        const inDegree = new Array(numCourses).fill(0);

        for(let i = 0; i < numCourses; i++) {
            graph.set(i, []);
        }

        for(const [course, prereq] of prerequisites) {
            graph.get(prereq).push(course);
            inDegree[course]++;
        }

        let completed = 0;
        const queue = [];
        for(let i = 0; i < numCourses; i++) {
            if(inDegree[i] === 0) {
                queue.push(i);
            }
        }

        function bfs() {
            while(queue.length > 0) {
                const curr = queue.shift();
                completed++;

                for(const nextCourse of graph.get(curr)) {
                    inDegree[nextCourse]--;
                    
                    if(inDegree[nextCourse] === 0) {
                        queue.push(nextCourse);
                    }
                }
            }
        }

        bfs();

        return completed === numCourses;
    }
}
