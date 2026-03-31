class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        // const closeSet = new Set([")", "}", "]"]);
        const map = {
            "(": ")",
            "{": "}",
            "[": "]"
        }

        const stack = [];

        for(const char of s) {
            if(char in map) {
                stack.push(char);
            } else {
                 if(stack.length === 0 || map[stack.pop()] !== char) {
                    return false;
                }
                
            }
        }

        return stack.length === 0;
    }
}
