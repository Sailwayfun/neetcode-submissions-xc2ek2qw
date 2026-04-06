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
    rightSideView(root) {
        const res = [];

        if(!root) return res;

        const queue = [root];

        while(queue.length) {
            const levelSize = queue.length;

            for(let i = 0; i < levelSize; i++) {
                const front = queue.shift();
                if(front.left) queue.push(front.left);
                if(front.right) queue.push(front.right);

                if(i === levelSize - 1) {
                    res.push(front.val);
                }
            }

        }

        return res;
    }
}
