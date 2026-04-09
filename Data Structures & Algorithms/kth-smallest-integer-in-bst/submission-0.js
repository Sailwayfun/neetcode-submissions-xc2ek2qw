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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        // in order traversal, find kth node;
        // need a index counter starting from 1
        let curr = root;
        const visited = [];
        let currIndex = 1;

        while(curr || visited.length > 0) {
            while(curr) {
                visited.push(curr);
                curr = curr.left;
            }

            curr = visited.pop();
            if(currIndex === k) return curr.val;
            
            currIndex++;
            curr = curr.right;
        }
    }
}
