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
     * @param {number} target
     * @return {TreeNode}
     */
    removeLeafNodes(root, target) {
        if(!root) return null;

        root.left = this.removeLeafNodes(root.left, target);
        root.right = this.removeLeafNodes(root.right, target);

        if(root.val === target && !root.left && !root.right) return null;

        return root;
    }
}
