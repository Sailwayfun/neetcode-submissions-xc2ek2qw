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
     * @param {number} key
     * @return {TreeNode}
     */
    deleteNode(root, key) {
        if(!root) return null;
        if(root.val > key) {
            root.left = this.deleteNode(root.left, key)
        } else if(root.val < key) {
            root.right = this.deleteNode(root.right, key);
        } else {
            //root.val = key

            //no left tree
            if(!root.right) return root.left;

            // no right tree
            if(!root.left) return root.right;

            // if no children just return null to parent;
            
            // use a swap value approach
            // swap root val with succesor value
            // remove the successor
            let successor = root.left;
            while(successor.right) {
                successor = successor.right;
            }
            root.val = successor.val;
            root.left = this.deleteNode(root.left, root.val);
        }

        return root;
    }
}
