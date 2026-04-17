class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        const minHeap = new MinHeap();

        for(const n of nums) {
           if(minHeap.size() < k) {
                minHeap.insert(n);
           } else if(minHeap.top() < n) {
                minHeap.pop();
                minHeap.insert(n);
           }
        }

        return minHeap.pop();
    }
}

class MinHeap {
    constructor() {
        this.heap = [];
    }

    size() {
        return this.heap.length;
    }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    insert(val) {
        this.heap.push(val);
        this.bubbleUp();
    }

    top() {
        return this.heap[0];
    }

    pop() {
        if(this.size() === 0) return null;
        if(this.size() === 1) return this.heap.pop();

        const top = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown();
        return top;
    }

    bubbleUp() {
        let i = this.size() - 1;
        while(i > 0) {
            const parentIdx = Math.floor((i - 1) / 2);
            if(this.heap[parentIdx] > this.heap[i]) {
                this.swap(i, parentIdx);
                i = parentIdx;
            } else break;
        }
    }

    bubbleDown() {
        let i = 0;
        const n = this.size();

        while(true) {
            let left = 2 * i + 1;
            let right = 2 * i + 2;
            let smallest = i;

            if(left < n && this.heap[left] < this.heap[smallest]) smallest = left;
            if(right < n && this.heap[right] < this.heap[smallest]) smallest = right;

            if(smallest !== i) {
                this.swap(i, smallest);
                i = smallest;
            } else break;
        }
    }
}
