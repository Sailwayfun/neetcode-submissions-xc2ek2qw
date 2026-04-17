class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        const maxHeap = new MaxHeap(nums);

        for(let i = 1; i <= k - 1; i++) {
            maxHeap.pop();
        }

        return maxHeap.pop();
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

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    bubbleDown(index = 0) {
        let i = index;
        const n = this.heap.length;

        while(true) {
            let left = 2 * i + 1;
            let right = 2 * i + 2;
            let largest = i;

            if(left < n && this.heap[left] > this.heap[largest]) largest = left;
            if(right < n && this.heap[right] > this.heap[largest]) largest = right;

            if(largest !== i) {
                this.swap(i, largest);
                i = largest;
            } else break;
        }
    }

    heapify() {
        const lastParentIndex = Math.floor(this.heap.length / 2) - 1;
        for(let i = lastParentIndex; i >= 0; i--) {
            this.bubbleDown(i);
        }
    }

    pop() {
        if(this.heap.length === 0) return null;
        if(this.heap.length === 1) return this.heap.pop();

        const top = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown(0);
        return top;
    }
}

