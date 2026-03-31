// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        let curr = head;
        const nodeMap = new Map();

        if(!curr) return null;

        while(curr) {
            nodeMap.set(curr, new Node(curr.val));
            curr = curr.next;
        }

        curr = head;

        while(curr) {
            const newNode = nodeMap.get(curr);
            newNode.next = nodeMap.get(curr.next) || null;
            newNode.random = nodeMap.get(curr.random) || null;
            curr = curr.next;
        }

        return nodeMap.get(head);
    }
}
