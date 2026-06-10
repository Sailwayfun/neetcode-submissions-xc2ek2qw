class Solution {
    /**
     * @param {number[][]} triplets
     * @param {number[]} target
     * @return {boolean}
     */
    mergeTriplets(triplets, target) {
        const [x, y, z] = target;

        const candidates = triplets.filter(t => !(t[0] > x || t[1] > y || t[2] > z));

        if(candidates.length === 0) return false;

        const matched = new Int8Array(3);

        for(const c of candidates) {
            if(c[0] === x) matched[0]++;
            if(c[1] === y) matched[1]++;
            if(c[2] === z) matched[2]++;
        }

        return matched[0] > 0 && matched[1] > 0 && matched[2] > 0;
    }
}
