class Solution {
    /**
     * @param {string} beginWord
     * @param {string} endWord
     * @param {string[]} wordList
     * @return {number}
     */
    ladderLength(beginWord, endWord, wordList) {
        const wordSet = new Set(wordList);

        if(!wordSet.has(endWord)) return 0;

        const adjList = new Map();
        wordSet.add(beginWord);

        for(const word of wordSet) {
            for(let j = 0; j < word.length; j++) {
                const pattern = word.slice(0, j) + "*" + word.slice(j + 1);
                
                if(!adjList.has(pattern)) {
                    adjList.set(pattern, []);
                }

                adjList.get(pattern).push(word);
            }
        }

        let beginSet = new Set([beginWord]);
        let endSet = new Set([endWord]);
        let res = 1;
        
        wordSet.delete(beginWord);
        wordSet.delete(endWord);

        while(beginSet.size > 0 && endSet.size > 0) {
            if(beginSet.size > endSet.size) {
                const temp = endSet;
                endSet = beginSet;
                beginSet = temp;
            }

            const nextSet = new Set();

            for(const word of beginSet) {
                for(let j = 0; j < word.length; j++) {
                    const pattern = word.slice(0, j) + "*" + word.slice(j + 1);

                    for(const neighbor of adjList.get(pattern) ?? []) {
                        if(endSet.has(neighbor)) {
                            return res + 1;
                        }

                        if(wordSet.has(neighbor)) {
                            nextSet.add(neighbor);
                            wordSet.delete(neighbor);
                        }
                    }
                }
            }

            beginSet = nextSet;
            res++;
        }

        return 0;
    }
}
