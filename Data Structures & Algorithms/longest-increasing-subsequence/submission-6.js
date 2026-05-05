class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums) {
        const tails = [];

        function binarySearch(arr, val) {
            let left = 0;
            let right = arr.length - 1;
            let res = 0;

            while(left <= right) {
                const mid = Math.floor((left + right) / 2);
                if(arr[mid] < val) {
                    left = mid + 1;
                    res = left;
                } else {
                    right = mid - 1;
                }
            }

            return res;
        }

        for(const val of nums) {
            let pos = binarySearch(tails, val);

            if(pos === tails.length) {
                tails.push(val);
            } else {
                tails[pos] = val;
            }
        }

        return tails.length;
    }
}
