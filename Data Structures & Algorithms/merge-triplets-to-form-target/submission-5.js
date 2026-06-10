class Solution {
    /**
     * @param {number[][]} triplets
     * @param {number[]} target
     * @return {boolean}
     */
    mergeTriplets(triplets, target) {
        const [x, y, z] = target;

        let hasX = false;
        let hasY = false;
        let hasZ = false;

        for(const t of triplets) {
            if(t[0] > x || t[1] > y || t[2] > z) continue;
            
            hasX ||= t[0] === x;
            hasY ||= t[1] === y;
            hasZ ||= t[2] === z;

            if(hasX && hasY && hasZ ) return true;
        }

        return false;
    }
}
