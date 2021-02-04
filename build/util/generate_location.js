"use strict";
function generateLocationObject(key, id) {
    const keyValue = key;
    const idValue = id;
    const location = {};
    location[keyValue] = idValue;
    return location;
}
module.exports = generateLocationObject;
