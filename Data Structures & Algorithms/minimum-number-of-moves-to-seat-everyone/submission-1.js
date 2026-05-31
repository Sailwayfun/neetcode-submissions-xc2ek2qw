class Solution {
    /**
     * @param {number[]} seats
     * @param {number[]} students
     * @return {number}
     */
    minMovesToSeat(seats, students) {
        const countArr = new Array(101).fill(0);

        for(const se of seats) {
            countArr[se]++;
        }

        for(const st of students) {
            countArr[st]--;
        }

        let res = 0;
        let currDiff = 0;

        for(let i = 0; i <= 100; i++) {
            currDiff += countArr[i];
            res += Math.abs(currDiff);
        }

        return res;
    }
}
