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

        const visited = new Set([beginWord]);
        const queue = [beginWord];
        let res = 1;

        while(queue.length > 0) {
            const levelSize = queue.length;

            for(let i = 0; i < levelSize; i++) {
                const word = queue.shift();
                if(word === endWord) return res;

                for(let j = 0; j < word.length; j++) {
                    const pattern = word.slice(0, j) + "*" + word.slice(j + 1);

                    for(const neighbor of adjList.get(pattern)) {
                        if(!visited.has(neighbor)) {
                            visited.add(neighbor);
                            queue.push(neighbor);
                        }
                    }
                }
            }

            res++;
        }

        return 0;
    }
}
