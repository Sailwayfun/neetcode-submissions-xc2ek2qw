class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if(t.length > s.length) return "";

        let res = "";

        const tMap = new Array(58).fill(0);
        const sMap = new Array(58).fill(0);

        function getIdx(char) {
            const charCode = char.charCodeAt(0);
            const charCodeA = "A".charCodeAt(0);
            return charCode - charCodeA;
        }

        for(const char of t) {
            tMap[getIdx(char)]++;
        }

        let requiredUniques = 0;

        for(const val of tMap) {
            if(val > 0) requiredUniques++;
        }

        let minLength = s.length;

        let left = 0;
        let matchCount = 0;
        for(let i = 0; i < s.length; i++) {
            const char = s[i];
            sMap[getIdx(char)]++;

            if(tMap[getIdx(char)] === sMap[getIdx(char)]) {
                matchCount++;
            }

            while (left <= i && matchCount === requiredUniques) {
                const currentLen = i - left + 1;

                if(res === "" || currentLen < minLength) {
                    res = s.slice(left, i + 1);
                    minLength = res.length;
                }
                
                const leftIndex = getIdx(s[left]);

                if(sMap[leftIndex] === tMap[leftIndex]) {
                    matchCount--;
                }

                sMap[leftIndex]--;
                left++;
            }
        }

        return res;
    }
}
