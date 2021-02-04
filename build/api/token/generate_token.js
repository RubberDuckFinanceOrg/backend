"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const jwtSecret = process.env.SECRET;
function generateToken(user) {
    const payload = {
        userId: user.id,
        userEmail: user.email
    };
    const options = {
        expiresIn: '8h'
    };
    if (jwtSecret) {
        return jsonwebtoken_1.default.sign(payload, jwtSecret, options);
    }
}
module.exports = generateToken;
