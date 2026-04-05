class ListNode {
    constructor(key = -1, value = -1, next = undefined) {
        this.key = key;
        this.value = value;
        this.next = (next === undefined) ? null : next;
    }
}


class MyHashMap {
    constructor() {
        this.map = [];
        this.size = 10000;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        const index = key % this.size;

        if(!this.map[index]) {
            this.map[index] = new ListNode();
        }

        let curr = this.map[index];

        while(curr.next) {
            if(curr.next.key === key) {
                curr.next.value = value;
                return;
            }
            curr = curr.next;
        }
        curr.next = new ListNode(key, value);
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        const index = key % this.size;
        
        if(!this.map[index]) {
            this.map[index] = new ListNode();
        }

        let curr = this.map[index];
        
        while(curr) {
            if(curr.key === key) {
                return curr.value;
            }
            curr = curr.next;
        }
        return -1;
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        const index = key % this.size;
        
        if(!this.map[index]) {
            this.map[index] = new ListNode();
        }
        
        let curr = this.map[index];
        
        while(curr && curr.next) {
            if(curr.next.key === key) {
                curr.next = curr.next.next;
                return;
            }
            curr = curr.next;
        }
    }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
