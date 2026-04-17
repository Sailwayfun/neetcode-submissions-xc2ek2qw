class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.minHeap = new MinHeap();
        this.maxSize = k;
        
        for(const n of nums) {
            this.add(n);
        }
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        if(this.minHeap.size() < this.maxSize) {
            this.minHeap.insert(val);
        } else if(val > this.minHeap.top()) {
            this.minHeap.replace(val);
        }

        return this.minHeap.top();

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

    top() {
        return this.heap[0];
    }

    replace(val) {
        this.heap[0] = val;
        this.bubbleDown(0);
    }

    insert(val) {
        this.heap.push(val);
        
        let i = this.size() - 1;
        while(i > 0) {
            const parentIdx = Math.floor((i - 1)/ 2);
            if(this.heap[parentIdx] > this.heap[i]) {
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

    bubbleDown(index = 0) {
        let i = index;
        
        while(true) {
            let left = 2 * i + 1;
            let right = 2 * i + 2;
            let smallest = i;
            
            if(left < this.size() && this.heap[left] < this.heap[smallest]) {
                smallest = left;
            }
            if(right < this.size() && this.heap[right] < this.heap[smallest]) {
                smallest = right;
            }

            if(smallest !== i) {
                this.swap(i, smallest);
                i = smallest;
            } else break;
        }
    }
}
