class Solution {
    /**
     * @param {number[]} people
     * @param {number} limit
     * @return {number}
     */
    numRescueBoats(people, limit) {
        people.sort((a, b) => a - b);

        let left = 0;
        let right = people.length - 1;
        let count = 0;

        while(left <= right) {
            if(people[left] + people[right] <= limit) {
                right--;
                left++;
            } else {
                right--;
            }

            count++;
        }

        return count;
    }
}
