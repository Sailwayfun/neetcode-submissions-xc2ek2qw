class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {
        const freq = new Map();

        for(const t of tasks) {
            freq.set(t, (freq.get(t) || 0) + 1);
        }

        const maxHeap = new MaxHeap([...freq.values()]);
        const queue = [];

        let time = 0;
        while (maxHeap.size() > 0 || queue.length > 0) {
            time++;

            if(maxHeap.size() > 0) {
                const remaining = maxHeap.pop() - 1;
                if(remaining > 0) {
                    queue.push([remaining, time + n]);
                }
            }
            
            if(queue.length > 0 && queue[0][1] === time) {
                maxHeap.push(queue.shift()[0]);
            }
            
        }

        return time;
    }
}

class MaxHeap {
    constructor(arr) {
        this.heap = [...arr];
        if(this.heap.length > 0) {
            this.heapify();
        }
    }

    size() {
        return this.heap.length;
    }

    top() {
        return this.heap[0];
    }

    heapify() {
        const lastParentIdx = Math.floor((this.size() - 1) / 2);
        for(let i = lastParentIdx; i >= 0; i--) {
            this.bubbleDown(i);
        }
    }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    push(val) {
        this.heap.push(val);

        let i = this.size() - 1;
        while(i > 0) {
            const parentIdx = Math.floor((i - 1) / 2);
            if(this.heap[parentIdx] < this.heap[i]) {
                this.swap(i, parentIdx);
                i = parentIdx;
            } else break;
        }
    }

    pop() {
        if(this.size() === 0) return null;
        if(this.size() === 1) return this.heap.pop();

        const top = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown(0);

        return top;
    }

    bubbleDown(index) {
        let i = index;

        while(true) {
            let left = 2 * i + 1;
            let right = 2 * i + 2;
            let largest = i;

            if(left < this.size() && this.heap[left] > this.heap[largest]) largest = left;
            if(right < this.size() && this.heap[right] > this.heap[largest]) largest = right;

            if(largest !== i) {
                this.swap(i, largest);
                i = largest;
            } else break;
        }
    }
}
