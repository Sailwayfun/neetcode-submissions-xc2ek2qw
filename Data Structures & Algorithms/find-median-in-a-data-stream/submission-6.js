class MedianFinder {
    constructor() {
        this.minHeap = new PQ((node1, node2) => node1 - node2);
        this.maxHeap = new PQ((node1, node2) => node2 - node1);
    }

    /**
     *
     * @param {number} num
     * @return {void}
     */
    addNum(num) {
        const numNum = Number(num);
        
        this.minHeap.push(numNum);
        this.maxHeap.push(this.minHeap.pop());

        const minHeapSize = this.minHeap.size();
        const maxHeapSize = this.maxHeap.size();

        if(maxHeapSize > minHeapSize) {
            this.minHeap.push(this.maxHeap.pop());
        }
    }

    /**
     * @return {number}
     */
    findMedian() {
        const minHeapSize = this.minHeap.size();
        const maxHeapSize = this.maxHeap.size();
        
        if(minHeapSize === maxHeapSize) {
            return (this.minHeap.top() + this.maxHeap.top()) / 2;
        }
        if(minHeapSize > maxHeapSize) {
            return this.minHeap.top();
        }
        return this.maxHeap.top();
    }
}


class PQ {
    constructor(compareFn) {
        this.pq = [];
        this.compareFn = compareFn;
    }

    size() {
        return this.pq.length;
    }

    top() {
        return this.pq[0];
    }

    swap(i, j) {
        [this.pq[i], this.pq[j]] = [this.pq[j], this.pq[i]];
    }

    push(val) {
        this.pq.push(val);
        this.bubbleUp();
    }

    pop() {
        if(this.size() === 0) return null;
        if(this.size() === 1) return this.pq.pop();
        
        const top = this.pq[0];
        this.pq[0] = this.pq.pop();
        this.bubbleDown();
        return top;
    }

    bubbleUp() {
        let i = this.size() - 1;
        while(i > 0) {
            const parentIdx = Math.floor((i - 1) / 2);
            if(this.compareFn(this.pq[parentIdx], this.pq[i]) > 0) {
                this.swap(parentIdx, i);
                i = parentIdx;
            } else break;
        }
    }

    bubbleDown() {
        let i = 0;

        while(true) {
            let left = 2 * i + 1;
            let right = 2 * i + 2;
            let swap = i;
            
            if(left < this.size() && this.compareFn(this.pq[swap], this.pq[left]) > 0) {
                swap = left;
            }
            if(right < this.size() && this.compareFn(this.pq[swap], this.pq[right]) > 0) {
                swap = right;
            }

            if(i === swap) break;
            this.swap(i, swap);
            i = swap;
        }
    }
}
