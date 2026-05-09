/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        if(!node) return null;
        
        const queue = [node];
        const nodeMap = new Map();
        
        nodeMap.set(node, new Node(node.val, []));

        while(queue.length > 0) {
            const head = queue.shift();

            for(const n of head.neighbors) {
                if(!nodeMap.has(n)) {
                    const clonedNeighbor = new Node(n.val, []);
                    nodeMap.set(n, clonedNeighbor);
                    queue.push(n);
                }

                const clonedHead = nodeMap.get(head);
                clonedHead.neighbors.push(nodeMap.get(n));
            }
        }

        return nodeMap.get(node);
    }
}
