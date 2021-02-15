"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const create_expense_1 = __importDefault(require("./create_expense"));
const delete_expense_1 = __importDefault(require("./delete_expense"));
const edit_expense_1 = __importDefault(require("./edit_expense"));
const get_expense_1 = __importDefault(require("./get_expense"));
const get_expenses_1 = __importDefault(require("./get_expenses"));
exports.default = {
    createExpense: create_expense_1.default,
    deleteExpense: delete_expense_1.default,
    editExpense: edit_expense_1.default,
    getExpenses: get_expenses_1.default,
    getExpense: get_expense_1.default
};
