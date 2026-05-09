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
        const nodeMap = new Map();
        
        function dfs(node) {
            if(!node) return null;
            
            if(nodeMap.has(node)) return nodeMap.get(node);
            
            nodeMap.set(node, new Node(node.val, []));
            
            for(const neighbor of node.neighbors) {
                const clonedNeighbor = dfs(neighbor);
                const clonedNode = nodeMap.get(node);
                clonedNode.neighbors.push(clonedNeighbor);
            }

            return nodeMap.get(node);
        }

        return dfs(node);
    }
}
