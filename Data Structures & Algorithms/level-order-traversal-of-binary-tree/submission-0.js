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
     * @return {number[][]}
     */
    levelOrder(root) {
        const res = [];

        if(!root) return res;

        const queue = [{node: root, level: 0}];

        while(queue.length > 0) {
            const {node, level} = queue.shift();

            if(!res[level]) res[level] = [];

            res[level].push(node.val);

            if(node.left) {
                queue.push({node: node.left, level: level + 1});
            }

            if(node.right) {
                queue.push({node: node.right, level: level + 1});
            }
           
        }

        return res;
    }
}
