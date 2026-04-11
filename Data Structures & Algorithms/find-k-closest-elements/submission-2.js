class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} x
     * @return {number[]}
     */
    findClosestElements(arr, k, x) {
        let left = 0;
        let right = arr.length - k;

        while(left <= right) {
            const mid = Math.floor((left + right) / 2);
            
            const midNum = arr[mid];

            if(x - midNum > arr[mid + k] - x) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return arr.slice(left, left + k);
    }
}
