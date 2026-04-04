class MyStack {
    constructor() {
        this.queue1 = [];
        this.queue2 = [];
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x) {
        this.queue1.push(x);
    }

    /**
     * @return {number}
     */
    pop() {
        const currLen = this.queue1.length;
        for(let i = 0; i < currLen - 1; i++) {
            const front = this.queue1.shift();
            this.queue2.push(front);
        }
        const front = this.queue1[0];
        this.queue1 = this.queue2;
        this.queue2 = [];
        return front;
       
    }

    /**
     * @return {number}
     */
    top() {
        const currLen = this.queue1.length;
        for(let i = 0; i < currLen -1; i++) {
            const front = this.queue1.shift();
            this.queue2.push(front);
        }
        const top = this.queue1[0];
        this.queue2.push(top);
        this.queue1 = this.queue2;
        this.queue2 = [];
        return top;
    }

    /**
     * @return {boolean}
     */
    empty() {
        return this.queue1.length === 0;
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
