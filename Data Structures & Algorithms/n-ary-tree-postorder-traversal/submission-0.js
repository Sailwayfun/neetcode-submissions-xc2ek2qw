/**
 * Definition for a binary tree node.
 * class Node {
 *     constructor(val = 0, children = []) {
 *         this.val = val;
 *         this.children = children;
 *     }
 * }
 */
class Solution {
    /**
     * @param {Node|null} root
     * @return {number[]}
     */
    postorder(root) {
        const res = [];
        
        if(!root) return res;

        function dfs(node) {
            if(!node) return;

            node.children.forEach(child => dfs(child));

            res.push(node.val);
        }

        dfs(root);

        return res;
    }
}
