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
    maxDepth(root) {
        if(!root) return 0;

        // let leftDepth = 0;
        // let rightDepth = 0;

        // if(root.left) leftDepth++;
        // if(root.right) rightDepth++;

        // leftDepth = this.maxDepth(root.left);
        // rightDepth = this.maxDepth(root.right);

        // return 1 + Math.max(leftDepth, rightDepth);

        let max = 0;

        const stack = [{node: root, depth: 1}];

        while(stack.length > 0) {
            const {node, depth} = stack.pop();

            if(node) {
                max = Math.max(max, depth);

                if(node.left) {
                    stack.push({node: node.left, depth: depth + 1});
                }

                if(node.right) {
                    stack.push({node: node.right, depth: depth + 1});
                }
            }
        }

        return max;


    }
}
