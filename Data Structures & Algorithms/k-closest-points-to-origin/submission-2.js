class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        const maxHeap = new MaxHeap();

        for(const p of points) {
            if(maxHeap.size() < k) {
                maxHeap.insert(p);
            } else if(maxHeap.compare(p, maxHeap.top()) < 0) {
                maxHeap.replace(p);
            }
        }

        return maxHeap.heap;
    }
}

class MaxHeap {
    constructor() {
        this.heap = [];
    }
    
    top() {
        return this.heap[0];
    }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    compare(i, j) {
        const [xi, yi] = i;
        const [xj, yj] = j
        const distI = (xi) ** 2 + (yi) ** 2;
        const distJ = (xj) ** 2 + (yj) ** 2;
        if(distI > distJ) return 1;
        if(distI === distJ) return 0;
        return -1;
    }

    size() {
        return this.heap.length;
    }

    replace(val) {
        this.heap[0] = val;
        this.bubbleDown();
    }

    bubbleDown() {
        let i = 0;
        while(true) {
            let left = 2 * i + 1;
            let right = 2 * i + 2;
            let largest = i;

            if(left < this.size() && this.compare(this.heap[left], this.heap[largest]) >= 0) {
                largest = left;
            }
            if(right < this.size() && this.compare(this.heap[right], this.heap[largest]) >= 0) {
                largest = right;
            }

            if(largest !== i) {
                this.swap(i, largest);
                i = largest;
            } else break;
        }
    }

    insert(val) {
        this.heap.push(val);

        let i = this.size() - 1;
        while(i > 0) {
            const parentIdx = Math.floor((i - 1) / 2);
            if(this.compare(this.heap[i], this.heap[parentIdx]) >= 0) {
                this.swap(i, parentIdx);
                i = parentIdx;
            } else break;
        }
    }
}
