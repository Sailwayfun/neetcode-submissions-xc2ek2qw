class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        // const closeSet = new Set([")", "}", "]"]);
        if(s.length % 2 !== 0) return false;

        const map = {
            ")": "(",
            "}": "{",
            "]": "["
        }

        const stack = [];

        for(const char of s) {
            if(Object.hasOwn(map, char)) {
                if(stack.length === 0) return false;
                if(stack.pop() !== map[char]) return false;
            } else {
                stack.push(char);
            }
        }

        return stack.length === 0;
    }
}
