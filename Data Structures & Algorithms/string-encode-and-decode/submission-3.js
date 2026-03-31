class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let output = "";
        for(const str of strs) {
            const lengthCode = String.fromCharCode(str.length);
            output += (lengthCode + str);
        }

        return output;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const output = [];

        let i = 0;

        while(i < str.length) {
            const length = str[i].charCodeAt(0);
            const curr = str.slice(i + 1, i + 1 + length);
            output.push(curr);
            i = i + length + 1;
        }
        
        return output;
    }
}
