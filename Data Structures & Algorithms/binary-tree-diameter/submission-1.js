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
     * @return {number}
     */
    diameterOfBinaryTree(root) {
        let d = 0;

        if(!root) return d;

        function getDepth(node) {
            if(!node) return 0;
            const leftDepth = getDepth(node.left);
            const rightDepth = getDepth(node.right);
            
            d = Math.max(d, leftDepth + rightDepth);
            return 1 + Math.max(leftDepth, rightDepth);
        }

        getDepth(root);

        return d;
    }
}
