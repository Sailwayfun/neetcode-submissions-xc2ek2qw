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

        let head = 0;
        while(head < queue.length) {
            const tip = queue[head];
            const clonedHead = nodeMap.get(tip);
            head++;

            for(const n of tip.neighbors) {
                if(!nodeMap.has(n)) {
                    const clonedNeighbor = new Node(n.val, []);
                    nodeMap.set(n, clonedNeighbor);
                    queue.push(n);
                }

                clonedHead.neighbors.push(nodeMap.get(n));
            }
        }

        return nodeMap.get(node);
    }
}
