class Solution {
    /**
     * @param {number[]} heights
     * @return {number[]}
     */
    findBuildings(heights) {
       let maxHeight = 0;

       const res = [];

       for(let i = heights.length - 1; i >= 0; i--) {
            if(heights[i] > maxHeight) {
                res.unshift(i);
                maxHeight = heights[i];
            }
       }

       return res;
    }
}
