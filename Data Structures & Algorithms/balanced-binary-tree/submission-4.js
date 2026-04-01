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
    isBalanced(root) {

        let res = true;

        function getHeight(node) {
            if(!node) return 0;
            const leftHeight = getHeight(node.right);
            const rightHeight = getHeight(node.left);
            if(Math.abs(leftHeight - rightHeight) > 1) {
                res = false;
            }
            return 1 + Math.max(getHeight(node.right), getHeight(node.left));
        }

        getHeight(root);

        return res;
    }
}
