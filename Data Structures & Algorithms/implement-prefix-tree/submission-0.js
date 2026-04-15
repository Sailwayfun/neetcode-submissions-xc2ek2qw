class PrefixTree {
    constructor() {
        this.root = new TrieNode();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let curr = this.root;

        for(const char of word) {
          if(!curr.children.has(char)) {
            curr.children.set(char, new TrieNode());
          }

          curr = curr.children.get(char);
        }
        curr.isEnd = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let curr = this.root;

        for(let i = 0; i < word.length; i++) {
            const char = word[i];
            
            if(!curr.children.has(char)) return false;

            curr = curr.children.get(char);
        }

        return curr.isEnd === true;
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let curr = this.root;

        for(let i = 0; i < prefix.length; i++) {
            const char = prefix[i];

            if(!curr.children.has(char)) return false;

            curr = curr.children.get(char);
        }

        return true;
    }
}

class TrieNode {
    constructor() {
        this.children = new Map();
        this.isEnd = false;
    }
}
