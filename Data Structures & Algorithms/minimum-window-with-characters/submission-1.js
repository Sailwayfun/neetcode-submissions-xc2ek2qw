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

        function isValidSubStr(map1, map2) {
            return map1.every((val, idx) => map2[idx] >= val);
        }

        for(const char of t) {
            tMap[getIdx(char)]++;
        }

        let minLength = s.length;

        let left = 0;
        for(let i = 0; i < s.length; i++) {
            const char = s[i];
            sMap[getIdx(char)]++;

            while (left <= i && isValidSubStr(tMap, sMap)) {
                const currentLen = i - left + 1;

                if(res === "" || currentLen < minLength) {
                    res = s.slice(left, i + 1);
                    minLength = res.length;
                }

                sMap[getIdx(s[left])]--;
                left++;
            }
        }

        return res;
    }
}
