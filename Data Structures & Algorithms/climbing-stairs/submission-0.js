class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        const cache = new Array(n);
        
        function climb(currentPos) {
            if(currentPos > n) return 0;
            if(currentPos === n) return 1;
            
            if(cache[currentPos]) return cache[currentPos];
            cache[currentPos] = climb(currentPos + 1) + climb(currentPos + 2);

            return cache[currentPos];
        }

        return climb(0);
    }
}
