// You should implement your task here.

module.exports = function towelSort(matrix) {
    let finArr = [];
    if (!matrix) {
    } else {
        for (let i = 0; i < matrix.length; i++) {
            if (i % 2 === 0) {
                finArr = finArr.concat(matrix[i]);
            } else {
                finArr = finArr.concat(matrix[i].reverse());
            }
        }
    }
    return finArr;
};
