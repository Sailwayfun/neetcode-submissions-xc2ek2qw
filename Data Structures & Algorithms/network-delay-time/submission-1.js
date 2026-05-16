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

        const pq = new PQ((node1, node2) => node1[1] - node2[1]);
        pq.push([k, 0]);
        dist[k] = 0;

        while(pq.size() > 0) {
            const [curr, currTime] = pq.pop();

            if(currTime > dist[curr]) continue;

            for(const [target, time] of adjList[curr]) {
                const newTime = dist[curr] + time;
                if(newTime < dist[target]) {
                    dist[target] = newTime;
                    pq.push([target, newTime]);
                }
            }
        }

        const res = Math.max(...dist.slice(1));
        return res === Infinity ? -1 : res;
        
    }
}

class PQ {
    constructor(compareFn) {
        this.queue = [];
        this.compareFn = compareFn;
    }

    size() {
        return this.queue.length;
    }

    swap(i, j) {
        [this.queue[i], this.queue[j]] = [this.queue[j], this.queue[i]];
    }

    push(node) {
        this.queue.push(node);
        this.bubbleUp(node);
    }

    pop() {
        if(this.size() === 0) return null;
        if(this.size() === 1) return this.queue.pop();
        
        const top = this.queue[0];
        this.queue[0] = this.queue.pop();
        this.bubbleDown();
        return top;
    }

    bubbleUp() {
        let index = this.size() - 1;
        
        while(index > 0) {
            let parentIdx = Math.floor((index - 1) / 2);
            if(this.compareFn(this.queue[index], this.queue[parentIdx]) < 0) {
                this.swap(parentIdx, index);
                index = parentIdx;
            } else break;
        }
    }

    bubbleDown() {
        let index = 0;
        let smallestIdx = index;

        while(true) {
            let left = index * 2 + 1;
            let right = index * 2 + 2;
            if(left < this.size() && this.compareFn(this.queue[left], this.queue[smallestIdx]) < 0) {
                smallestIdx = left;
            }
            if(right < this.size() && this.compareFn(this.queue[right], this.queue[smallestIdx]) < 0) {
                smallestIdx = right;
            }

            if(smallestIdx === index) break;
            this.swap(index, smallestIdx);
            index = smallestIdx;
        }
    }
}
