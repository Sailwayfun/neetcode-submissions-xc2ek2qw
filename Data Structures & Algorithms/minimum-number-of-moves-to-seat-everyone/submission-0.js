class Solution {
    /**
     * @param {number[]} seats
     * @param {number[]} students
     * @return {number}
     */
    minMovesToSeat(seats, students) {
        let res = 0;

        seats.sort((a, b) => a - b);
        students.sort((a, b) => a - b);

        for(let i = 0; i < students.length; i++) {
            const diff = Math.abs(students[i] - seats[i]);
            res += diff;
        }

        return res;
    }
}
