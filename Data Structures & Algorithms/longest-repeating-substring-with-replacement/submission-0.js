class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const map = new Map();

        let left = 0;
        let maxFreq = 1;
        let maxLength = 1;
        
        for(let right = 0; right < s.length; right++){
            const char = s[right];
            map.set(char, (map.get(char) || 0) + 1);

            maxFreq = Math.max(maxFreq, map.get(char));
            
            while(right - left + 1 - maxFreq > k) {
                map.set(s[left], map.get(s[left]) - 1);
                left++;
            }

            maxLength = Math.max(maxLength, right - left + 1);

        }

        return maxLength;
    }
}
