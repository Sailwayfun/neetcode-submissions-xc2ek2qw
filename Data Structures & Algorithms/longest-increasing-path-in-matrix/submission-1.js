class Solution {
    /**
     * @param {number[][]} matrix
     * @return {number}
     */
    longestIncreasingPath(matrix) {
        if(!matrix || matrix.length === 0 || matrix[0].length === 0) return 0;
        const rows = matrix.length;
        const cols = matrix[0].length;
        const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];

        const inDegree = Array(rows * cols).fill(0);

        for(let i = 0; i < rows; i++) {
            for(let j = 0; j < cols; j++) {
                for(const [dr, dc] of directions) {
                    const nextI = dr + i;
                    const nextJ = dc + j;
                    if(nextI >= 0 && nextI < rows && nextJ >= 0 && nextJ < cols) {
                        const nextIdx = nextI * cols + nextJ;
                        if(matrix[nextI][nextJ] > matrix[i][j]) {
                            inDegree[nextIdx]++;
                        }
                    }
                }
            }
        }

        let queue = [];
        for(let i = 0; i < inDegree.length; i++) {
            if(inDegree[i] === 0) {
                queue.push(i);
            }
        }

        let maxLength = 0;

        while(queue.length > 0) {
            const levelSize = queue.length;
            maxLength++;

            const nextQueue = [];
            for(let k = 0; k < levelSize; k++) {
                const currIdx = queue[k];
                const i = Math.floor(currIdx / cols);
                const j = currIdx % cols;

                for(const [dr, dc] of directions) {
                    const nextI = i + dr;
                    const nextJ = j + dc;
                    if(nextI >= 0 && nextI < rows && nextJ >= 0 && nextJ < cols) {
                        const nextIdx = nextI * cols + nextJ;
                        if(matrix[nextI][nextJ] > matrix[i][j]) {
                            inDegree[nextIdx]--;
                            
                            if(inDegree[nextIdx] === 0) {
                                nextQueue.push(nextIdx);
                            }
                        }
                    }
                }
            }

            queue = nextQueue;
        }

        return maxLength;
    }
}
