"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const login = require('./login');
const login_1 = __importDefault(require("./login"));
const register_1 = __importDefault(require("./register"));
const get_users_1 = __importDefault(require("./get_users"));
// const register = require('./register');
// const getUsers = require('./get_users');
// module.exports = {
//   login,
//   register,
//   getUsers
// };
exports.default = {
    login: login_1.default,
    register: register_1.default,
    getUsers: get_users_1.default
};
