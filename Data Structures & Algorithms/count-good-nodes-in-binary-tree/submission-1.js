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
        function dfs(node, currentMax) {
            if(!node) return 0;
            
            let count = 0;
            
            if(node.val >= currentMax) {
                currentMax = node.val;
                count = 1;
            }
            
            return count + dfs(node.left, currentMax) + dfs(node.right, currentMax);
        }

        return dfs(root, -Infinity);
    }
}
