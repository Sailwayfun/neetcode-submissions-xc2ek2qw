class Solution {
    /**
     * @param {number[][]} triplets
     * @param {number[]} target
     * @return {boolean}
     */
    mergeTriplets(triplets, target) {
        const [x, y, z] = target;

        let matchX = 0;
        let matchY = 0;
        let matchZ = 0;

        for(const t of triplets) {
            if(t[0] > x || t[1] > y || t[2] > z) continue;
            if(t[0] === x) {
                matchX++;
            }
            if(t[1] === y) {
                matchY++;
            }
            if(t[2] === z) {
                matchZ++;
            }
            if(matchX > 0 && matchY > 0 && matchZ > 0) return true;
        }

        return false;
    }
}
