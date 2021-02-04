"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const banned_words_1 = __importDefault(require("./banned_words"));
function formatWordsToArray(str) {
    let formattedWordArray = [];
    let word = '';
    for (let i in str) {
        if (str[i] !== '\n') {
            word = word + str[i];
        }
        else {
            formattedWordArray.push(word);
            word = '';
        }
    }
    return formattedWordArray;
}
function checkAgainstBanned(input) {
    const bannedList = formatWordsToArray(banned_words_1.default);
    if (bannedList.includes(input)) {
        return true;
    }
    else {
        return false;
    }
}
module.exports = checkAgainstBanned;
