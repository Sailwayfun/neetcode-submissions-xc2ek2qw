/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isValidBST(root) {
        let prevVal = -Infinity;
        let curr = root;
        let isValid = true;//use global variable to avoid breaking tree structure when early return

        //Morris Traversal: find precessor before traversal

        while(curr) {
            if(!curr.left) {
                if(prevVal >= curr.val) isValid = false;
                prevVal = curr.val;
                curr = curr.right;
            } else {
                let pre = curr.left;
                while(pre.right && pre.right !== curr) {
                    pre = pre.right;
                }

                if(!pre.right) {
                    //first round, creat cycle from predecessor
                    pre.right = curr;
                    curr = curr.left;
                } else {
                    //second round, break the cycle
                    pre.right = null;
                    
                    if(prevVal >= curr.val) isValid = false;
                    prevVal = curr.val;
                    curr = curr.right;
                }

            }
        }

        return isValid;
    }
}
