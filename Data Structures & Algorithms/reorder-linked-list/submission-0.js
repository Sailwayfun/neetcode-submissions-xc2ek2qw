/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head) {
        let fast = head;
        let slow = head;

        while(fast && fast.next) {
            fast = fast.next.next;
            slow = slow.next;
        }

        let ptr = slow.next;
        let reversed = null;
        slow.next = null;
        
        while(ptr) {
            let tempNext = ptr.next;
            ptr.next = reversed;
            reversed = ptr;
            ptr = tempNext;
        }

        let left = head;
        let right = reversed;

        while(right) {
            let tempL = left.next;
            let tempR = right.next;

            left.next = right;
            right.next = tempL;

            left = tempL;
            right = tempR;
        }

    }
}
