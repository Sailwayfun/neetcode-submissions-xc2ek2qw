class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if(s1.length > s2.length) return false;

        const charMap1 = new Array(26).fill(0);

        function getIdx(char) {
            return char.charCodeAt(0) - "a".charCodeAt(0);
        }

        for(const char of s1) {
            const idx = getIdx(char);
            charMap1[idx]++;
        }

        const charMap2 = new Array(26).fill(0);

        function compareMaps(map1, map2) {
            return map1.every((val, idx) => map2[idx] === val);
        }

        for(let i = 0; i < s2.length; i++) {
            const char = s2[i];
            const idx = getIdx(char);
            charMap2[idx]++;

            if(i >= s1.length) {
                const left = i - s1.length;
                charMap2[getIdx(s2[left])]--;
            }

            if(compareMaps(charMap1, charMap2)) {
                return true;
            }
            
        }

        return false;
    }
}
