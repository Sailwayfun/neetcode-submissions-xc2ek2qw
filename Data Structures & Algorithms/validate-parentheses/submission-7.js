class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const map = {
            "(" : ")",
            "[": "]",
            "{": "}"
        }

        const stack = [];

        const openBrackets = new Set(Object.keys(map));

        for(const char of s) {
            if(openBrackets.has(char)) {
                stack.push(char);
            } else {
                const top = stack.pop();
                if(map[top] !== char) {
                    return false;
                }
            }
        }

        return stack.length === 0;
    }
}
