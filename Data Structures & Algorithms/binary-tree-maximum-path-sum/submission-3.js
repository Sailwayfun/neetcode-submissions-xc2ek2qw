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
    maxPathSum(root) {
        function pathSum(node) {
            if(!node) {
                return {
                    maxBranch: 0,
                    maxSoFar: -Infinity
                }
            }

            const leftRes = pathSum(node.left);
            const rightRes = pathSum(node.right);

            return {
                maxBranch: node.val + Math.max(0, leftRes.maxBranch, rightRes.maxBranch),
                maxSoFar: Math.max(node.val + Math.max(0, leftRes.maxBranch) + Math.max(0, rightRes.maxBranch), leftRes.maxSoFar, rightRes.maxSoFar)
            }
        }

        return pathSum(root).maxSoFar
    }
}
