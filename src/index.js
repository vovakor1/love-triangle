/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    let count = 0;
    preferences.unshift(0);

    preferences.forEach((a, i, array) => {
        let b = array[a];
        let c = array[b];
        if (c === i && a !== b && b !== c) {
            count++;
        }
    });

    return count / 3;
};
