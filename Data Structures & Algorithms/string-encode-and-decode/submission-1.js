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
        console.log({str});

        let isParsing = false;
        let endIndex = 0;
        let curr = "";

        for(let i = 0; i < str.length; i++) {
            if(!isParsing) {
                curr = "";
                const length = str[i].charCodeAt(0);
                console.log({length})

                if(length === 0) {
                    output.push("");
                    continue;
                }
                
                endIndex = i + length;

                isParsing = true;
                continue;
            } else {
                curr += str[i];
                if(i === endIndex) {
                    isParsing = false;
                    output.push(curr);
                }
            }

        }
        
        return output;
    }
}
