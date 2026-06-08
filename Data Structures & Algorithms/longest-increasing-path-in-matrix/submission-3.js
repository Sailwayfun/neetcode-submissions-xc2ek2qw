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

        const inDegree = new Int32Array(rows * cols);

        for(let i = 0; i < rows; i++) {
            for(let j = 0; j < cols; j++) {
                const val = matrix[i][j];
                
                for(const [dr, dc] of directions) {
                    const nextI = dr + i;
                    const nextJ = dc + j;
                    if(nextI >= 0 && nextI < rows && nextJ >= 0 && nextJ < cols) {
                        const nextIdx = nextI * cols + nextJ;
                        if(matrix[nextI][nextJ] > val) {
                            inDegree[nextIdx]++;
                        }
                    }
                }
            }
        }

        let queueI = new Int32Array(rows * cols);
        let queueJ = new Int32Array(rows * cols);
        let qLength = 0;
        
        for(let i = 0; i < rows; i++) {
            for(let j = 0; j < cols; j++) {
                if(inDegree[i * cols + j] === 0) {
                    queueI[qLength] = i;
                    queueJ[qLength] = j;
                    qLength++;
                }
            }
        }

        let maxLength = 0;

        while(qLength > 0) {
            maxLength++;

            const nextQueueI = new Int32Array(rows * cols);
            const nextQueueJ = new Int32Array(rows * cols);
            let nextQLength = 0;
            
            for(let k = 0; k < qLength; k++) {
                const i = queueI[k];
                const j = queueJ[k];
                const val = matrix[i][j];

                for(const [dr, dc] of directions) {
                    const nextI = i + dr;
                    const nextJ = j + dc;
                    if(nextI >= 0 && nextI < rows && nextJ >= 0 && nextJ < cols) {
                        const nextIdx = nextI * cols + nextJ;
                        if(matrix[nextI][nextJ] > val) {
                            inDegree[nextIdx]--;
                            
                            if(inDegree[nextIdx] === 0) {
                                nextQueueI[nextQLength] = nextI;
                                nextQueueJ[nextQLength] = nextJ;
                                nextQLength++;
                            }
                        }
                    }
                }
            }

            queueI = nextQueueI;
            queueJ = nextQueueJ;
            qLength = nextQLength;
        }

        return maxLength;
    }
}
