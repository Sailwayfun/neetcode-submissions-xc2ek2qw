class Solution {
    /**
     * @param {string} ransomNote
     * @param {string} magazine
     * @return {boolean}
     */
    canConstruct(ransomNote, magazine) {
        const rMap = new Array(26).fill(0);
        function getIdx(char) {
            return char.charCodeAt(0) - "a".charCodeAt(0);
        }

        for(const char of ransomNote) {
            rMap[getIdx(char)]++;
        }

        for(const char of magazine) {
            const idx = getIdx(char);
            rMap[idx]--;
        }

        return !rMap.some(val => val >= 1);
    }
}
