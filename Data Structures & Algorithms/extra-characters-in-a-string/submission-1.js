class Solution {
    /**
     * @param {string} s
     * @param {string[]} dictionary
     * @return {number}
     */
    minExtraChar(s, dictionary) {
        const trie = new Trie();
        for(const word of dictionary) {
            trie.insert(word);
        }

        const memo = {};
        
        function dfs(start) {
           //base case
           if(start === s.length) return 0;

           if(memo[start]) return memo[start];

           let res = 1 + dfs(start + 1);

           let curr = trie.root;
           for(let i = start; i < s.length; i++) {
                const char = s[i];
                if(!curr.children.has(char)) {
                    break;
                }
                curr = curr.children.get(char);

                if(curr.isWord) {
                    res = Math.min(res, dfs(i + 1));
                }
           }

           memo[start] = res;
           return res;
        }

        return dfs(0);
    }
}

// iterate through s, match each word from dict
//create a Trie using the words from dict
//search s against the Trie
class TreeNode {
    constructor() {
        this.isWord = false;
        this.children = new Map();
    }
}

class Trie {
    constructor() {
        this.root = new TreeNode();
    }

    insert(word) {
        let curr = this.root;
        for(let i = 0; i < word.length; i++) {
            const char = word[i];
            if(!curr.children.has(char)) {
                curr.children.set(char, new TreeNode());
            }
            curr = curr.children.get(char);
        }
        curr.isWord = true;
    }
}