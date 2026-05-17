class MedianFinder {
    constructor() {
        this.minHeap = new PQ((node1, node2) => node2 - node1);
        this.maxHeap = new PQ((node1, node2) => node1 - node2);
    }

    /**
     *
     * @param {number} num
     * @return {void}
     */
    addNum(num) {
        const numNum = Number(num);
        
        if(numNum > this.minHeap.top() || this.minHeap.size() === 0) {
            this.minHeap.push(numNum);
        } else {
            this.maxHeap.push(numNum);
        }

        const minHeapSize = this.minHeap.size();
        const maxHeapSize = this.maxHeap.size();

        if(Math.abs(minHeapSize - maxHeapSize) > 1) {
            if(minHeapSize > maxHeapSize) {
                this.maxHeap.push(this.minHeap.pop());
            } else {
                this.minHeap.push(this.maxHeap.pop());
            }
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
        const top = this.pq[0];
        this.pq[0] = this.pq.pop();
        this.bubbleDown();
        return top;
    }

    bubbleUp() {
        let i = this.size() - 1;
        while(i > 0) {
            const parentIdx = Math.floor((i - 1) / 2);
            if(this.compareFn(this.pq[parentIdx], this.pq[i]) < 0) {
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
            let top = i;
            
            if(left < this.size() && this.compareFn(this.pq[left], this.pq[top]) > 0) {
                top = left;
            }
            if(right < this.size() && this.compareFn(this.pq[right], this.pq[top]) > 0) {
                top = right;
            }

            if(i === top) break;
            this.swap(i, top);
            i = top;
        }
    }
}
