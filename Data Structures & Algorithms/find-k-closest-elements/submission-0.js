class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} x
     * @return {number[]}
     */
    findClosestElements(arr, k, x) { 
        let left = 0;
        let right = arr.length - 1;

        while(right - left >= k) {
            const leftDiff = Math.abs(arr[left] - x);
            const rightDiff = Math.abs(arr[right] - x);

            if(leftDiff > rightDiff) left++;
            else right--;
        }

        return arr.slice(left, right + 1);
    }
}
