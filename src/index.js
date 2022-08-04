
// You should implement your task here.

module.exports = function towelSort (matrix) {
let arr = [];
    if (matrix == undefined || matrix == [] || matrix == null ){
        return [];
    }
    matrix.map(function (item, i) {
        arr = i % 2 == 0?arr.concat(item):arr.concat(item.reverse());
});
    return arr;
}
