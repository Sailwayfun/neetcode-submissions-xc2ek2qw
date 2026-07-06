class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    checkValidString(s) {
        const leftStack = [];
        const starStack = [];

        for(let i = 0; i < s.length; i++) {
            if(s[i] === "(") {
                leftStack.push(i);
            }
            if(s[i] === "*") {
                starStack.push(i);
            }
            if(s[i] === ")") {
                if(leftStack.length > 0) {
                    leftStack.pop();
                } else if(starStack.length > 0) {
                    starStack.pop();
                } else return false;
            }
        }

        if(leftStack.length === 0 && starStack.length === 0) return true;

        while(leftStack.length > 0) {
            if(starStack.length === 0) return false;
            if(starStack[starStack.length - 1] < leftStack[leftStack.length - 1]) return false;
            starStack.pop();
            leftStack.pop(); 
        }

        return true;
    }
}
