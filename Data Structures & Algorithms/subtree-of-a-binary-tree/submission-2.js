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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {

        function isSameTree(root1, root2) {
            if(!root1 && !root2) return true;
            if(!root1 || !root2) return false;
            if(root1.val !== root2.val) return false;

            if(isSameTree(root1.left, root2.left) === false) return false;
            if(isSameTree(root1.right, root2.right) === false) return false;

            return true;
        }

        function dfs(node) {
            if(!node) return false;
            if(isSameTree(node, subRoot)) return true;
            return dfs(node.left) || dfs(node.right);
        }

        return dfs(root);
    }
}
