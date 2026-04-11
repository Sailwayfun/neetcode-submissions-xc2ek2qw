class FreqStack {
    constructor() {
        this.map = new Map();
        this.freqGroups = [];
        this.maxFreq = 0;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        const freq = (this.map.get(val) || 0) + 1;

        this.map.set(val, freq);

        if(freq > this.maxFreq) this.maxFreq++;

        if(!this.freqGroups[freq]) this.freqGroups[freq] = [];
        this.freqGroups[freq].push(val);
    }

    /**
     * @return {number}
     */
    pop() {
        const top = this.freqGroups[this.maxFreq].pop();

        this.map.set(top, this.map.get(top) - 1);

        if(this.freqGroups[this.maxFreq].length === 0) {
            this.maxFreq--;
        }

        return top;
    }
}

/**
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(val)
 * var param_2 = obj.pop()
 */
