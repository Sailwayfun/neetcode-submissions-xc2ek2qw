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

            return [Math.max(leftRob, leftSkip) + Math.max(rightRob, rightSkip), node.val + leftSkip + rightSkip];
        }

        const [nodeSkip, nodeRob] = [dfs(root)[0], dfs(root)[1]];

        return Math.max(nodeSkip, nodeRob);
    }
}
