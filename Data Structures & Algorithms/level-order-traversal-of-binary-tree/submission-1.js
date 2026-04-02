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

        const queue = [root];

        while(queue.length > 0) {
            const levelSize = queue.length;
            const currLevel = [];

            for(let i = 0; i < levelSize; i++) {
                const curr = queue.shift();
                currLevel.push(curr.val);

                if(curr.left) queue.push(curr.left);
                if(curr.right) queue.push(curr.right);
            }

            res.push(currLevel);
           
        }

        return res;
    }
}
