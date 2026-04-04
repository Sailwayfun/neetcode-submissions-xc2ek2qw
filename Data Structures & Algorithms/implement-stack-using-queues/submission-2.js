class MyStack {
    constructor() {
        this.queue = [];
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x) {
        this.queue.push(x);
    }

    /**
     * @return {number}
     */
    pop() {
        const currLen = this.queue.length;
        for(let i = 0; i < currLen - 1; i++) {
            const front = this.queue.shift();
            this.queue.push(front);
        }
        const front = this.queue.shift();
        return front;
       
    }

    /**
     * @return {number}
     */
    top() {
       const top = this.pop();
       this.queue.push(top);
       return top;
    }

    /**
     * @return {boolean}
     */
    empty() {
        return this.queue.length === 0;
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
