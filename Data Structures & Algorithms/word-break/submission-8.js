class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s, wordDict) {
        const n = s.length;
        const dp = new Array(n + 1).fill(false);

        dp[0] = true;

        const trie = new Trie();

        for(const w of wordDict) {
            trie.insert(w);
        }

        for(let i = 0; i < n; i++) {
            if(dp[i] !== true) continue;

            let node = trie.root;

            for(let j = i; j < n; j++) {
                const char = s[j];

                if(!node.children.has(char)) break;

                node = node.children.get(char);

                if(node.isWord === true) {
                    dp[j + 1] = true;
                }
            }
        }

        return dp[n];
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let node = this.root;

        for(const char of word) {
            if(!node.children.get(char)) {
                node.children.set(char, new TrieNode());
            }

            node = node.children.get(char);
        }

        node.isWord = true;
    }
}

class TrieNode {
    constructor() {
        this.isWord = false;
        this.children = new Map();
    }
}
