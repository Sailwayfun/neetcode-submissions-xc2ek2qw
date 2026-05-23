class Solution {
    /**
     * @param {character[][]} board
     * @param {string[]} words
     * @return {string[]}
     */
    findWords(board, words) {
        const res = [];

        if(!board) return res;

        const trie = new Trie();

        for(let i = 0; i < words.length; i++) {
            trie.insert(words[i], i);
        }

        function dfs(i, j, node) {
            if(i < 0 || j < 0 || i >= board.length || j >= board[0].length) return;
            if(board[i][j] === "X") return;

            const char = board[i][j];

            if(!node.children.has(char)) return;

            const nextNode = node.children.get(char);

            board[i][j] = "X";

            if(nextNode.isEnd) {
                res.push(words[nextNode.index]);
                nextNode.isEnd = false;
            }

            dfs(i, j + 1, nextNode) 
            dfs(i, j - 1, nextNode) 
            dfs(i + 1, j, nextNode) 
            dfs(i - 1, j, nextNode)

            board[i][j] = char;
        }

        for(let i = 0; i < board.length; i++) {
            for(let j = 0; j < board[0].length; j++) {
                dfs(i, j, trie.root);
            }
        }

        return res;
    }
}

class TrieNode {
    constructor(index = -1) {
        this.isEnd = false;
        this.index = index;
        this.children = new Map();
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word, index) {
        let node = this.root;

        for(const char of word) {
            if(!node.children.has(char)) {
                node.children.set(char, new TrieNode());
            }
            node = node.children.get(char);
        }
        node.isEnd = true;
        node.index = index;
    }
}
