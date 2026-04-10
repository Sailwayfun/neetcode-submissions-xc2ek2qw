class StockSpanner {
    constructor() {
        this.stack = [];
    }

    /**
     * @param {number} price
     * @return {number}
     */
    next(price) {
        let res = 1;
        
        if(this.stack.length === 0 || price < this.stack[this.stack.length - 1]) {
            this.stack.push(price);
            return 1;
        }

        for(let i = this.stack.length - 1; i >= 0; i--) {
            const top = this.stack[i];
            if(top <= price) res++;
            else break;
        }

        this.stack.push(price);

        return res;
    }
}

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
