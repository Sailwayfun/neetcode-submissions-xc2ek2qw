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
    maxDepth(root) {
        if(!root) return 0;

        let leftDepth = 0;
        let rightDepth = 0;

        if(root.left) leftDepth++;
        if(root.right) rightDepth++;

        leftDepth = this.maxDepth(root.left);
        rightDepth = this.maxDepth(root.right);

        return 1 + Math.max(leftDepth, rightDepth);
    }
}
