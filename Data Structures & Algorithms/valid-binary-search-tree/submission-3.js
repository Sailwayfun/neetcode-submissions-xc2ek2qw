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
        function check(node, min, max) {
            if(!node) return true;
            if(node.val >= max || node.val <= min) return false;
            return check(node.left, min, node.val) && check(node.right, node.val, max); 
        }
        return check(root, -Infinity, Infinity);
    }
}
