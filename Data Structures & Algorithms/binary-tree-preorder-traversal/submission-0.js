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
     * @return {number[]}
     */
    preorderTraversal(root) {
        const res = [];

        if(!root) return res;

        const stack = [root];

        while(stack.length > 0) {
            const curr = stack.pop();

            res.push(curr.val);
            
            if(curr.right) stack.push(curr.right);
            if(curr.left) stack.push(curr.left);
        }

        return res;
    }
}
