class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;

        const sMap = new Map();
        const tMap = new Map();

        let result = true;

        for(const char of s) {
            const count = sMap.get(char) ? sMap.get(char) + 1: 1;
            sMap.set(char, count);
        }
        
        for(const char of t) {
            if(!sMap.get(char)) return false;
            const count = tMap.get(char) ? tMap.get(char) + 1: 1;
            tMap.set(char, count);
        }

        tMap.forEach((value, key) => {
            if(value !== sMap.get(key)) {
                result = false;
            }
        })
        
        return result;
    }
}
