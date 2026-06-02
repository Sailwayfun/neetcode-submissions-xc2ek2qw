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

        const queue = [{word: beginWord, level: 1}];

        const charCodeA = "a".charCodeAt(0);

        while(queue.length > 0) {
            const levelSize = queue.length;
            
            for(let i = 0; i < levelSize; i++) {
                const { word, level } = queue.shift();

                for(let j = 0; j < word.length; j++) {
                    const originalChar = word[j];

                    for(let k = charCodeA; k < charCodeA + 26; k++) {
                        const c = String.fromCharCode(k);

                        if(c === originalChar) continue;

                        const newWord = word.slice(0, j) + c + word.slice(j + 1);

                        if(newWord === endWord) return level + 1;
                        if(wordSet.has(newWord)) {
                            wordSet.delete(newWord);
                            queue.push({word: newWord, level: level + 1});
                        }
                    }
                }
            }
        }

        return 0;
    }
}
