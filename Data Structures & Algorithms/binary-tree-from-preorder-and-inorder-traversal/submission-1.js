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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
        const inOrderMap = new Map();

        for(let i = 0; i < inorder.length; i++) {
            inOrderMap.set(inorder[i], i);
        }

        let index = 0;

        function dfs(left, right) {
            if(left > right) return null;

            const rootVal = preorder[index++];
            const root = new TreeNode(rootVal);
            
            const rootIdx = inOrderMap.get(rootVal);
            root.left = dfs(left, rootIdx - 1);
            root.right = dfs(rootIdx + 1, right);

            return root;
        }

        return dfs(0, inorder.length - 1);
    }
}
