class Solution {
    /**
     * @param {number[]} bills
     * @return {boolean}
     */
    lemonadeChange(bills) {
        let ten = 0;
        let five = 0;

        for(let i = 0; i < bills.length; i++) {
            if(bills[i] === 5) {
                five++;
            } else if(bills[i] === 10) {
                five--;
                ten++;
            } else if(ten > 0) {
                five--;
                ten--;
            } else {
                five -= 3;
            }

            if(five < 0) return false;
        }

        return true;
    }
}
