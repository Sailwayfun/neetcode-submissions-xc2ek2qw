class Solution {
    /**
     * @param {number[]} g
     * @param {number[]} s
     * @return {number}
     */
    findContentChildren(g, s) {
        g.sort((a, b) => a - b);
        s.sort((a, b) => a - b);

        let pg = 0;
        let ps = 0;

        while(pg < g.length && ps < s.length) {
            if(s[ps] >= g[pg]) {
                pg++;
                ps++;
            } else {
                ps++;
            }
        }

        return pg;
    }
}
