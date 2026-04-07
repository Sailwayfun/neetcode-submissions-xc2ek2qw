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
    goodNodes(root) {
        let currentMax = root.val;

        let count = 0;

        function dfs(node, currentMax) {
            if(!node) return;
            if(node.val >= currentMax) {
                currentMax = node.val;
                count++;
            }
            dfs(node.left, currentMax);
            dfs(node.right, currentMax);
        }

        dfs(root, currentMax);

        return count;
    }
}
