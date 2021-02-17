"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const create_income_1 = __importDefault(require("./create_income"));
const delete_income_1 = __importDefault(require("./delete_income"));
const edit_income_1 = __importDefault(require("./edit_income"));
const get_income_1 = __importDefault(require("./get_income"));
const get_incomes_1 = __importDefault(require("./get_incomes"));
exports.default = {
    createIncome: create_income_1.default,
    deleteIncome: delete_income_1.default,
    editIncome: edit_income_1.default,
    getIncome: get_income_1.default,
    getIncomes: get_incomes_1.default
};
