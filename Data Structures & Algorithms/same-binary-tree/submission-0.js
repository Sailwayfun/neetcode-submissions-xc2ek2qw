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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        function dfs(p, q) {
            if(!p && !q) return true;
            if(!p && q || !q && p) return false;

            if(p.val !== q.val) return false;
            if(p.left?.val !== q.left?.val) return false;
            if(p.right?.val !== q.right?.val) return false;

            if(!dfs(p.left, q.left)) return false;
            if(!dfs(p.right, q.right)) return false;

            return true;
        }

        return dfs(p, q);
    }
}
