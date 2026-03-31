class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const closeSet = new Set([")", "}", "]"]);
        const map = {
            "(": ")",
            "{": "}",
            "[": "]"
        }

        const stack = [];

        for(const char of s) {
            if(closeSet.has(char)) {
                if(stack.length === 0 || map[stack.pop()] !== char) {
                    return false;
                }
            } else {
                stack.push(char);
            }
        }

        return stack.length === 0;
    }
}
