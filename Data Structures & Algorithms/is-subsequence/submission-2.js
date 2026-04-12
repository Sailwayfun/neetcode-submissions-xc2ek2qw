class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isSubsequence(s, t) {
        if(t.length < s.length) return false;

        let p1 = 0;
        let p2 = 0;

        let matchedCount = 0;

        while(p1 < s.length && p2 < t.length) {
            if(s.length - matchedCount > t.length - p2) return false;
            
            if(s[p1] === t[p2]) {
                p1++;
                matchedCount++;
            }
            
            p2++;
        }

        return matchedCount === s.length;
    }
}
