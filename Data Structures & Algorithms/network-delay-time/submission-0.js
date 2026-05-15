class Solution {
    /**
     * @param {number[][]} times
     * @param {number} n
     * @param {number} k
     * @return {number}
     */
    networkDelayTime(times, n, k) {
        const dist = new Array(n + 1).fill(Infinity);
        const adjList = Array.from({length: n + 1}, () => []);
        
        for(const [source, target, time] of times) {
            adjList[source].push([target, time]);
        }

        dist[k] = 0;
        const queue = [k];
        while(queue.length > 0) {
            const curr = queue.shift();

            for(const [target, time] of adjList[curr]) {
                if(dist[curr] + time < dist[target]) {
                    dist[target] = dist[curr] + time;
                    queue.push(target);
                }
            }
        }

        const res = Math.max(...dist.slice(1));
        if(res === Infinity) return -1;
        return res;
        
    }
}
