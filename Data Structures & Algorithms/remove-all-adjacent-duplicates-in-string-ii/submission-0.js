class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {string}
     */
    removeDuplicates(s, k) {
        const stack = [];

        for(let i = 0; i < s.length; i++) {
           if(stack.length > 0 && s[i] === stack[stack.length - 1].val) {
                stack[stack.length - 1].occurrence++;
           } else {
                stack.push({val: s[i], occurrence: 1});
           }

           if(stack[stack.length - 1].occurrence === k) {
                stack.pop();
           }
        }

        let res = "";

        for(let {val, occurrence} of stack) {
            while(occurrence > 0) {
                occurrence--;
                res += val;
            }
        }

        return res;
    }
}
