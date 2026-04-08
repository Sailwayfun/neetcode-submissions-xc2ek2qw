class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    mySqrt(x) {
        if(x < 2) return x;
        let left = 1;
        let right = x;
        let ans = 1;

        while(left <= right) {
            const mid = Math.floor((left + right) / 2);

            if(mid * mid > x) {
                right = mid - 1;
            } else {
                ans = mid;
                left = mid + 1;
            }
        }

        return ans;
    }
}
