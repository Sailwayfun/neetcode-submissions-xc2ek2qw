class WordDictionary {
    constructor() {
        this.root = new WordNode();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        let curr = this.root;

        for(const c of word) {
            if(!curr.children.get(c)) {
                curr.children.set(c, new WordNode());
            }

            curr = curr.children.get(c);
        }

        curr.isWordEnd = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        function dfs(index, curr) {
            for(let i = index; i < word.length; i++) {
                const char = word[i];

                if(char === ".") {
                    for(const childNode of curr.children.values()) {
                        if(dfs(i + 1, childNode)) return true;
                    }
                    return false;
                } else {
                    if(!curr.children.has(char)) return false;

                    curr = curr.children.get(char);
                }
            }

            return curr.isWordEnd === true;
        }

        return dfs(0, this.root);
    }
}

class WordNode {
    constructor() {
        this.children = new Map();
        this.isWordEnd = false;
    }
}
