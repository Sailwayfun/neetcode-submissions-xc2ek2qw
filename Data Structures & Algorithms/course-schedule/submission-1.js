class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        const preMap = new Map();

        for (const [c, p] of prerequisites) {
            if(!preMap.has(c)) preMap.set(c, []);
            preMap.get(c).push(p);
        }

        function hasCycle(course, visited) {
            if(!preMap.has(course)) return false;
            if(visited.has(course)) return true;
            
            visited.add(course);
            for(const p of preMap.get(course)) {
                if(hasCycle(p, visited)) return true;
            }
            
            preMap.set(course, []);
            visited.delete(course);
            
            return false;
        }

        for(let i = 0; i < numCourses; i++) {
            if(hasCycle(i, new Set())) return false;
        }

        return true;
    }
}
