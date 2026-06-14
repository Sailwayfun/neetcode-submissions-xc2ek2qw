class Solution {
    /**
     * @param {number[]} heights
     * @return {number[]}
     */
    findBuildings(heights) {
        const stack = [];

        for(let i = 0; i < heights.length; i++) {
           while(stack.length > 0 && heights[i] >= heights[stack[stack.length - 1]]) {
                stack.pop();
           }
           stack.push(i);
        }

        return stack;
    }
}
