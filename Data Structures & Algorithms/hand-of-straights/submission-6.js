class Solution {
    /**
     * @param {number[]} hand
     * @param {number} groupSize
     * @return {boolean}
     */
    isNStraightHand(hand, groupSize) {
        if(hand.length % groupSize !== 0) return false;

        const freq = new Map();

        for(const h of hand) {
            freq.set(h, (freq.get(h) || 0) + 1);
        }

        hand.sort((a, b) => a - b);

        for(const h of hand) {
           if(!freq.has(h) || freq.get(h) <= 0) continue;

           freq.set(h, freq.get(h) - 1);

           for(let j = 1; j < groupSize; j++) {
                if(freq.get(h + j) === 0 || !freq.has(h + j)) return false;
                freq.set(h + j, freq.get(h + j) - 1);
           }
        }

        return true;
    }
}
