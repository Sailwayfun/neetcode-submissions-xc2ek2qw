class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        const maxHeap = new MaxHeap(stones);

        while(maxHeap.size() >= 2) {
            const s1 = maxHeap.pop();
            const s2 = maxHeap.pop();
            const diff = s1 - s2;

            if(diff > 0) maxHeap.insert(diff);
        }

        if(maxHeap.size() > 0) return maxHeap.pop();
        return 0;
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

    _swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    insert(val) {
        this.heap.push(val);
        this.bubbleUp();
    }

    heapify() {
        const lastParentIdx = Math.floor(this.heap.length / 2) - 1;
        for(let i = lastParentIdx; i >= 0; i--) {
            this.bubbleDown(i);
        }
    }

    pop() {
        if(this.heap.length === 0) return null;
        if(this.heap.length === 1) return this.heap.pop();

        const top = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown();
        return top;
    }

    bubbleUp() {
        let i = this.heap.length - 1;
        while(i > 0) {
            const parentIndex = Math.floor((i - 1) / 2);
            if(this.heap[i] > this.heap[parentIndex]) {
                this._swap(i, parentIndex);
                i = parentIndex;
            } else break;
        }
    }

    bubbleDown(fromIdx) {
        let i = fromIdx ?? 0;
        const n = this.heap.length;

        while(true) {
            let left = 2 * i + 1;
            let right = 2 * i + 2;
            let largest = i;

            if(left < n && this.heap[left] > this.heap[largest]) {
                largest = left;
            } 
            if(right < n && this.heap[right] > this.heap[largest]) {
                largest = right;
            }

            if(largest !== i) {
                this._swap(i, largest);
                i = largest;
            } else {
                break;
            }
        }
    }
}
