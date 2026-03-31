class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const map = new Map();
        let maxLength = 1;

        if(s.length < 2) return s.length;

        let left = 0;
        for(let right = 0 ; right < s.length; right++) {
            if (map.get(s[right]) < right && map.get(s[right]) + 1 <= right) {
                left = Math.max(map.get(s[right]) + 1, left);
            }
            console.log({left, right})
            maxLength = Math.max(maxLength, right - left + 1);
            map.set(s[right], right);
        }

        return maxLength;
    }
}
