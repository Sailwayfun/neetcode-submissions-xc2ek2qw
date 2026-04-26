class Solution {
    /**
     * @param {string} word
     * @param {string} abbr
     * @return {boolean}
     */
    validWordAbbreviation(word, abbr) {
        let i = 0;
        let j = 0;

        const isDigit = (char) => char >= "0" && char <= "9";

        while(i < word.length && j < abbr.length) {
            if(abbr[j] === "0") return false;
            if(isDigit(abbr[j])) {
                let num = 0;
                
                while(j < abbr.length && isDigit(abbr[j])) {
                    num = num * 10 + (abbr[j] - "0");
                    j++;
                }

                if(num > word.length) return false;
                
                i += num;
            } else {
                if(word[i] !== abbr[j]) return false;
                i++;
                j++;
            }
        }

        return i === word.length && j === abbr.length;
    }
}
