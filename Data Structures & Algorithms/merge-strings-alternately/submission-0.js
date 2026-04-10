class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        let res = "";

        let left = 0;
        let right = 0;

        while(left < word1.length || right < word2.length) {
            if(left < word1.length) {
                res += word1[left];
                left++;
            }
            if(right < word2.length) {
                res += word2[right];
                right++;
            }
        }

        return res;
    }
}
