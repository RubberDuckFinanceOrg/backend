"use strict";
function generateSeeds(arr, dbKey) {
    let insertValue = [];
    for (let index in arr) {
        let pair = {};
        pair[dbKey] = arr[index];
        let value = Object.assign({ id: index }, pair);
        insertValue.push(value);
    }
    return insertValue;
}
module.exports = generateSeeds;
