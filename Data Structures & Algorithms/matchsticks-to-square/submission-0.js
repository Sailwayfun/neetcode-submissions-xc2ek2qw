class Solution {
    /**
     * @param {number[]} matchsticks
     * @return {boolean}
     */
    makesquare(matchsticks) {
        const totalLength = matchsticks.reduce((a, b) => a + b, 0);

        if(totalLength % 4 !== 0) return false;

        matchsticks.sort((a, b) => b - a);

        const sides = [0, 0, 0, 0];
        const target = totalLength / 4;

        function backtrack(i) {
            if(i === matchsticks.length) return true;

            for(let j = 0; j < sides.length; j++) {
                if(sides[j] + matchsticks[i] <= target) {
                    sides[j] += matchsticks[i];

                    if(backtrack(i + 1)) return true;

                    sides[j] -= matchsticks[i];
                }
            }

            return false;
        }

        return backtrack(0);
    }
}
