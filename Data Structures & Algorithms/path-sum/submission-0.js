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
     * @param {number} targetSum
     * @return {boolean}
     */
    hasPathSum(root, targetSum) {
        function dfs(node, currSum) {
            if(!node) return false;
            currSum += node.val;

            if(!node.right && !node.left) {
                return currSum === targetSum;
            }

            return dfs(node.left, currSum) || dfs(node.right, currSum);
        }

        return dfs(root, 0);
    }
}
