class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
       if(!this.keyStore.get(key)) {
            this.keyStore.set(key, []);
       } else if(this.keyStore.get(key).timestamp >= timestamp) {
            throw new Error("timestamps should be in increasing order");
       }

       this.keyStore.get(key).push({timestamp, value});
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        if(!this.keyStore.get(key)) {
            return "";
        }

        const values = this.keyStore.get(key);

        let left = 0;
        let right = values.length - 1;

        while(left <= right) {
            let mid = Math.floor((left + right) / 2);
            let midTimestamp = values[mid].timestamp;

            if(midTimestamp > timestamp) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }

        const found = left - 1;

        return values[found]?.value || "";

    }
}
