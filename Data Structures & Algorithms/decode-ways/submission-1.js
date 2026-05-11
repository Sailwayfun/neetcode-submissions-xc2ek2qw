class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s) {
        function dfs(index, cache) {
            if(index === s.length) return 1;

            if(s[index] === "0") return 0;

            if(cache[index] !== undefined) return cache[index];

            let res = dfs(index + 1, cache);

            if(index + 1 < s.length) {
                const twoDigits = Number(s[index]) * 10 + Number(s[index + 1]);
                if(twoDigits <= 26) {
                    res += dfs(index + 2, cache);
                }
            }

            return cache[index] = res;


        }

        return dfs(0, []);
    }
}
