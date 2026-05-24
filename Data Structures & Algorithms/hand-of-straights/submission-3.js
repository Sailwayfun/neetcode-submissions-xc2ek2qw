class Solution {
    /**
     * @param {number[]} hand
     * @param {number} groupSize
     * @return {boolean}
     */
    isNStraightHand(hand, groupSize) {
        const freq = new Map();

        for(const h of hand) {
            freq.set(h, (freq.get(h) || 0) + 1);
        }

        hand.sort((a, b) => a - b);

        for(const h of hand) {
            if(freq.get(h - 1) > 0 || freq.get(h) <= 0) continue;
            
            for(let j = 0; j < groupSize; j++) {
                if(freq.get(h + j) <= 0 || !freq.has(h + j)) return false;
                freq.set(h + j, freq.get(h + j) - 1);
            }
        }

        return true;
    }
}
