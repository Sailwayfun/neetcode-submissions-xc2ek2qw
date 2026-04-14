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
        let maxSum = -Infinity;

        function pathSum(node, currentSum) {
            if(!node) return 0;

            const leftSum = Math.max(0, pathSum(node.left, currentSum));
            const rightSum = Math.max(0, pathSum(node.right, currentSum));

            const sum = node.val + leftSum + rightSum;
            maxSum = Math.max(sum, maxSum);

            return node.val + Math.max(leftSum, rightSum, 0);
        }

        pathSum(root, 0);

        return maxSum;
    }
}
