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
    rob(root) {
        function dfs(node) {
            if(!node) {
                return [0, 0];
            }
            const [leftSkip, leftRob] = dfs(node.left);
            const [rightSkip, rightRob] = dfs(node.right);

            const skip = Math.max(leftRob, leftSkip) + Math.max(rightRob, rightSkip);
            const rob = node.val + leftSkip + rightSkip;

            return [skip, rob];
        }

        const [finalSkip, finalRob] = dfs(root);

        return Math.max(finalSkip, finalRob);
    }
}
