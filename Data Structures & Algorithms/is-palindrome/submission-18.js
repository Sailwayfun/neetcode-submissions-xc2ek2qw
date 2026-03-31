class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        // function isAlphaNumeric(char) {
        //     const charCodeA = "a".charCodeAt(0);
        //     const distance = char.toLowerCase().charCodeAt(0) - charCodeA;
        //     if(char === " ") return false;
        //     return (distance >= 0 && distance < 26) || !Number.isNaN(Number(char));
        // }

        // const alphabetArr = s.split("").filter((char) => isAlphaNumeric(char));

        // let left = 0;
        // let right = alphabetArr.length - 1;

        // while(left < right) {
        //     if(alphabetArr[left].toLowerCase() !== alphabetArr[right].toLowerCase()) return false;
        //     left++;
        //     right--;
        // }

        // return true;

        function isAlphanumeric(char) {
            //0 - 9
            const charCode = char.toLowerCase().charCodeAt(0);
            const charCode0 = "0".charCodeAt(0);
            const charCode9 = "9".charCodeAt(0);
            // console.log({charCode0, charCode9})
            if(charCode >= charCode0 && charCode <= charCode9) return true;

            // a - z (case insensitive)
            const charCodeA = "a".charCodeAt(0);
            const charCodeZ = "z".charCodeAt(0);
            if(charCode >= charCodeA && charCode <= charCodeZ) return true;

            return false;
        }

        let left = 0;
        let right = s.length - 1;

        while(left < right) {
            if(!isAlphanumeric(s[left])) {
                left++;
                continue;
            }

            if(!isAlphanumeric(s[right])) {
                right--;
                continue;
            }

            if(s[left].toLowerCase() !== s[right].toLowerCase()) return false;

            left++;
            right--;
        }

        return true;
    }
}
